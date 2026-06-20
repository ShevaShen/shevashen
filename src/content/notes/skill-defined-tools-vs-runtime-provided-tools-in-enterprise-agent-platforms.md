---
title: "Skill-Defined Tools vs Runtime-Provided Tools in Enterprise Agent Platforms"
summary: "A platform architecture note on why skills can describe tool usage, but runtimes must own executable capabilities."
topic: "Enterprise AI"
topicSlug: "enterprise-ai"
date: "2026-06-20"
tags:
  - "Enterprise AI"
  - "AI Platforms"
  - "Tools"
  - "OpenClaw"
---

## When I Realized My SOP Search Architecture Had a Hidden Dependency

Today I dug into a deceptively simple question while thinking about enterprise AI platform design:

> Can a skill define its own tool?

My original assumption was that a team could package everything required for a use case inside a skill. For example, a customer support team might build a skill containing workflow instructions and a custom `search_sop` capability, then deploy that skill into an existing OpenClaw environment.

The question was triggered by a practical constraint in the enterprise platform I'm helping design. Infrastructure teams own the OpenClaw deployment, while product teams only have permission to create and update skills. They cannot modify the runtime itself.

At first glance, it seemed reasonable that a skill could define a tool contract and provide the implementation. After all, a skill is already a reusable unit of behavior.

After digging deeper, I realized I was mixing two different concerns.

```text
Skill Layer
├── Workflow
├── Policies
├── Instructions
└── Tool Usage

Runtime Layer
├── Tool Registration
├── Tool Execution
├── Permissions
└── External Integrations
```

The critical insight is that skills can describe **how** a tool should be used, but they cannot create new executable capabilities unless the runtime already exposes them.

In other words:

```text
Skill:
"Call search_sop() before answering."

OpenClaw Runtime:
Must already know what search_sop() is.
```

This led me to a more important enterprise architecture discussion.

My initial design was:

```text
Customer Support Skill
└── search_sop()
```

But that creates an infrastructure bottleneck because every new team-specific tool requires runtime registration and operational ownership.

A more scalable pattern is:

```text
Infra-Owned Tool

search_knowledge_base(
  namespace,
  query,
  filters
)
```

Then each team can build skills on top of it:

```text
Customer Support Skill
└── search_knowledge_base(
       namespace="support_sop"
   )

Risk Operations Skill
└── search_knowledge_base(
       namespace="risk_sop"
   )
```

This shifts customization from infrastructure code to configuration and governance.

The trade-off is interesting:

| Approach                    | Pros                  | Cons                                                |
| --------------------------- | --------------------- | --------------------------------------------------- |
| Team-specific tools         | Highly tailored       | Requires infra involvement for every new capability |
| Generic retrieval tool      | Scalable and reusable | Less specialized behavior                           |
| Fully self-contained skills | Maximum team autonomy | Not possible without runtime extensibility          |

The biggest takeaway is that skills are not deployment units for executable logic. They are orchestration units.

For enterprise AI platforms, the boundary between skill authors and platform operators becomes one of the most important architectural decisions. The more restricted the runtime, the more valuable generic platform capabilities become.

## Lessons Learned

- Skills consume tools; they do not create executable tools.
- Tool registration is fundamentally a runtime responsibility.
- Enterprise platforms should prefer generic capabilities over team-specific tools.
- Retrieval infrastructure is often more important than prompt design.
- Governance boundaries strongly influence agent architecture.

## Open Questions

- Should enterprise AI platforms expose a self-service tool marketplace for teams?
- Can MCP become a portable distribution mechanism for team-owned tools?
- What is the right balance between platform governance and team autonomy?
- How should permissions be enforced when a generic retrieval tool serves multiple business domains?
