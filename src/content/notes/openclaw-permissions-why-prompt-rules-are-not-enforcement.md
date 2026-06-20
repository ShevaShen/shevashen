---
title: "OpenClaw Permissions: Why Prompt Rules Are Not Enforcement"
summary: "An investigation into why prompts guide behavior but runtime approval systems are needed for real enforcement."
topic: "Enterprise AI"
topicSlug: "enterprise-ai"
date: "2026-05-21"
tags:
  - "Enterprise AI"
  - "Permissions"
  - "Governance"
  - "OpenClaw"
---

## Background

Today I investigated a recurring issue in my OpenClaw deployment: the agent occasionally ignored instructions that seemed clearly defined in `AGENTS.md`, `MEMORY.md`, or embedded skill definitions. A common example was a rule such as:

> Do not execute actions before asking for user confirmation.

Despite multiple layers of instruction, the agent would sometimes proceed in ways that violated the intended workflow.

This research was triggered by a realization that simply adding more instructions was not making the behavior consistently reliable.

## My Original Assumption

My initial assumption was that I had not structured the instructions correctly. I considered:

- Improving `AGENTS.md`
- Adding stronger wording to `MEMORY.md`
- Embedding guardrails inside skills
- Repeating the same requirement in multiple places

The underlying belief was that enough prompt engineering would eventually make the behavior deterministic.

## Investigation

As I dug deeper, I started separating two concepts:

```text
Behavior Guidance
vs
Behavior Enforcement
```

Prompts, memories, and skills all belong to the first category.

They influence the model.

They do not constrain the runtime.

This led me to examine OpenClaw's execution model and approval mechanisms. OpenClaw already provides execution approval controls for shell commands through its Exec Approvals system. However, I was looking for something more granular: approval policies that change depending on the task being performed.

For example:

```text
Research Task
 ├─ Read files
 ├─ Search code
 └─ No confirmation needed

Code Task
 ├─ Edit files
 ├─ Run tests
 └─ Ask once for plan approval

Release Task
 ├─ Deploy
 ├─ Push commits
 └─ Always require approval
```

## What I Learned

I initially explored the idea of "profiles" and assumed OpenClaw might support multiple execution profiles within a single workspace.

After reviewing the official multi-agent documentation, I discovered that OpenClaw's agent model is built around:

```text
Agent
 ├─ Workspace
 ├─ Memory
 ├─ Identity
 └─ Configuration
```

The official multi-agent system is effectively:

```text
Multiple Agents
=
Multiple Workspaces
```

It is not designed as:

```text
Single Workspace
+
Multiple Permission Profiles
```

This distinction was important because my use case requires:

- One workspace
- One memory context
- One agent identity
- Different approval behavior based on task type

OpenClaw does not currently provide a first-class configuration model for this pattern.

## Revised Architecture

The solution I arrived at is runtime policy injection.

```text
User Request
      │
      ▼
Task Classification
      │
      ▼
Policy Selection
      │
      ▼
OpenClaw Execution
```

Example:

```text
Research
  ask = off

Coding
  ask = on-miss

Release
  ask = always
```

Instead of relying on prompts to remember the rules, the runtime determines the approval policy before execution begins.

This transforms confirmation requirements from a language-model behavior problem into a platform architecture problem.

## Trade-offs

### Prompt-Based Controls

Pros:

- Easy to implement
- No code changes

Cons:

- Non-deterministic
- Can be forgotten
- Difficult to audit

### Runtime Policy Middleware

Pros:

- Deterministic
- Centralized governance
- Easier compliance and auditing

Cons:

- Requires platform engineering work
- Must classify tasks correctly

## Lessons Learned

- Prompt engineering is not a substitute for runtime controls.
- OpenClaw's multi-agent architecture is primarily a workspace isolation mechanism, not a permission-profile system.
- Approval policies should be enforced by infrastructure whenever possible.
- Task-aware policy injection appears to be a cleaner solution than introducing additional agents or workspaces.

## Open Questions

1. Should task classification be rule-based or LLM-based?
2. Where is the best integration point in OpenClaw's lifecycle for dynamic policy injection?
3. Can approval policies be generalized across shell commands, tools, MCP servers, and custom enterprise skills?
4. Would a centralized policy engine become a reusable enterprise feature for all OpenClaw deployments?
