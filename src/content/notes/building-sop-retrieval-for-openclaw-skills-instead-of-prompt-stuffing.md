---
title: "Building SOP Retrieval for OpenClaw Skills Instead of Prompt-Stuffing"
summary: "A design note on separating OpenClaw skill workflow from SOP retrieval, search quality, and business policy ownership."
topic: "Enterprise AI"
topicSlug: "enterprise-ai"
date: "2026-06-16"
tags:
  - "Enterprise AI"
  - "OpenClaw"
  - "Knowledge Retrieval"
  - "SOPs"
---

## Context

Today I explored a design problem that frequently appears when building enterprise AI systems: how to handle a large collection of customer service SOPs within an OpenClaw skill.

My initial assumption was that the skill definition itself should contain enough information for the agent to determine which SOP to apply. The more I thought about it, however, the more it felt like I was trying to turn `SKILL.md` into a miniature knowledge base.

That assumption became questionable once I considered scale. A handful of SOPs can fit comfortably into a skill. Hundreds or thousands cannot.

## What Triggered the Investigation

The trigger was a practical question:

> If a customer service skill contains a large number of SOPs, how does the agent consistently find the correct one?

I was particularly interested in avoiding brittle prompt engineering and reducing the amount of business logic hidden inside instructions.

## Evolution of My Thinking

My original mental model looked like this:

```text
SKILL.md
   ↓
Agent decides SOP
   ↓
Customer response
```

The problem is that SOP selection becomes an emergent behavior of the model rather than an explicit system capability.

Through the investigation, I arrived at a different architecture:

```text
Customer Request
        ↓
OpenClaw Skill
        ↓
search_sop Tool
        ↓
SOP Repository
        ↓
Relevant SOPs
        ↓
Agent Validation
        ↓
Response or Escalation
```

In this model, the skill no longer owns SOP knowledge.

Instead:

- The skill owns workflow.
- The retrieval tool owns search quality.
- The SOP repository owns business policy.

This separation of concerns felt significantly cleaner.

## Technical Design

The key idea is introducing a dedicated OpenClaw custom tool:

```text
search_sop
```

Rather than asking the model to reason over hundreds of SOPs, the skill forces the following process:

1. Extract structured case attributes.
2. Call `search_sop`.
3. Retrieve candidate SOPs.
4. Validate applicability rules.
5. Apply or escalate.

A sample search request might look like:

```json
{
  "issue_type": "payment",
  "intent": "refund",
  "product": "crypto_wallet",
  "region": "global",
  "query": "Failed USDT deposit"
}
```

The search layer can evolve over time:

```text
Metadata Filters
        ↓
Keyword Search
        ↓
Vector Search
        ↓
Reranking
```

This creates a gradual migration path from a simple file-based implementation to a full enterprise knowledge retrieval system.

## Trade-offs

### Option 1: SOPs Embedded in Skill

Pros:

- Simple implementation
- No external tooling

Cons:

- Doesn't scale
- Difficult to maintain
- High prompt complexity
- Hard to audit

### Option 2: Dedicated Retrieval Tool

Pros:

- Scales to large SOP collections
- Easier ownership and versioning
- Better observability
- Clear separation of responsibilities

Cons:

- Additional infrastructure
- Search quality becomes a system concern
- Requires metadata discipline

For enterprise deployments, the second approach is significantly more sustainable.

## Key Insight

The biggest realization was that SOP selection should not be treated as a prompting problem.

It should be treated as a retrieval problem.

Once I reframed the challenge that way, the architecture became much clearer. The skill's responsibility is not to know every SOP. Its responsibility is to enforce the process that guarantees the correct SOP is retrieved before any decision is made.

## Lessons Learned

- `SKILL.md` should contain workflow, not large knowledge bases.
- SOP retrieval deserves its own dedicated tool.
- Metadata filtering is often more important than vector search.
- Applicability rules are as important as retrieval quality.
- Separating workflow, retrieval, and policy ownership simplifies long-term maintenance.

## Open Questions

1. How should SOP versioning and deprecation be handled across multiple skills?
2. Should retrieval confidence thresholds be enforced by the tool or by the skill?
3. How should conflicting SOPs be resolved automatically?
4. What metrics best measure SOP retrieval quality in production?
5. At what scale does vector search become necessary versus metadata filtering alone?
