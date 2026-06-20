---
title: "OpenClaw Concurrency Is Not Isolation"
summary: "My investigation into why concurrent OpenClaw sessions can still compete for shared runtime resources."
topic: "Agent Systems"
topicSlug: "agent-systems"
date: "2026-06-20"
tags:
  - "Agent Systems"
  - "OpenClaw"
  - "Concurrency"
  - "Enterprise AI"
---

Over the past few weeks, I've been building an enterprise AI solution on top of OpenClaw. One issue kept surfacing during testing: a single complicated case review could make the entire system feel sluggish, even though OpenClaw supports four concurrent active sessions by default.

My initial assumption was straightforward:

```text
maxConcurrent = 4

Therefore:

Session A
Session B
Session C
Session D

should all run independently.
```

From a high-level concurrency perspective, this seemed reasonable. If each case was mapped to its own session key, then each case should have its own execution lane. However, what I observed in practice did not match that mental model.

## What Triggered the Investigation

The trigger was a case review skill I was building.

The workflow wasn't trivial:

```text
Fetch case data
    ↓
Call multiple backend APIs
    ↓
Retrieve SOPs
    ↓
Compare findings
    ↓
Build evidence
    ↓
Reason over results
    ↓
Generate recommendations
```

While one case review was running, other sessions—often simple requests—became noticeably slower. At first, I suspected session serialization issues or misconfigured session keys.

## What I Learned

After digging into OpenClaw's session and queue architecture, I realized I was mixing two different concepts:

```text
Concurrency
≠
Isolation
```

OpenClaw guarantees:

```text
Multiple active sessions
```

It does not guarantee:

```text
Equal CPU allocation
Equal event-loop time
Equal runtime resources
```

The mental model that finally clicked for me was:

```text
            Session A
         (Heavy Case Review)
                   │
                   ▼
        Shared Runtime Resources
     (CPU / Event Loop / Provider)

      ┌────────┬────────┬────────┐
      ▼        ▼        ▼
 Session B  Session C  Session D
```

Even when all four sessions are active, one expensive workload can become a "noisy neighbor" and consume a disproportionate amount of shared resources.

The session keys were doing exactly what they were supposed to do—isolating transcripts and execution ordering. The bottleneck was happening at the runtime level, not the session level.

## Trade-offs

My original design favored a single end-to-end agent execution:

```text
Case Review
  ↓
Complete Analysis
  ↓
Final Recommendation
```

This minimizes orchestration complexity and keeps implementation simple.

The downside is that a single run becomes resource-intensive and difficult to interrupt.

An alternative is to decompose the workflow:

```text
Step 1: Fetch Data
Step 2: Build Evidence
Step 3: Compare SOP
Step 4: Generate Recommendation
```

This introduces more state management and orchestration logic but reduces contention and improves responsiveness across the system.

## Lessons Learned

- Session isolation and runtime isolation are different problems.
- Different session keys prevent transcript contention but do not prevent resource contention.
- OpenClaw's concurrency limits control admission, not fairness.
- Long-running agent workflows can behave like noisy neighbors inside a shared runtime.
- Enterprise AI workloads should be designed with bounded execution units whenever possible.

## Open Questions

- How much of the observed contention is CPU-bound versus provider-bound?
- What telemetry should be exposed to visualize runtime fairness across sessions?
- Would dedicated worker pools provide a better trade-off than resumable workflows?
- How should enterprise AI platforms classify and schedule latency-sensitive versus compute-heavy agent tasks?

These questions feel increasingly important as agentic systems move from personal assistants to shared enterprise infrastructure.
