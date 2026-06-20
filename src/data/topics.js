export const topics = [
  {
    title: "Agent Systems",
    slug: "agent-systems",
    description:
      "Notes on agent loops, memory, tool use, orchestration, session behavior, and OpenClaw architecture.",
    notes: [
      {
        title: "OpenClaw Concurrency Is Not Isolation",
        slug: "openclaw-concurrency-is-not-isolation",
        summary:
          "My investigation into why concurrent OpenClaw sessions can still compete for shared runtime resources.",
        tags: ["Agent Systems", "OpenClaw", "Concurrency", "Enterprise AI"],
        date: "2026-06-20",
        readingTime: "3 min read",
      },
      {
        title:
          "Agent Loops vs Agent Teams: Understanding Where Intelligence Actually Lives",
        slug: "agent-loops-vs-agent-teams-understanding-where-intelligence-actually-lives",
        summary:
          "A practical distinction between agent loops, agent teams, execution style, topology, and where orchestration should own control flow.",
        tags: ["Agent Systems", "Architecture", "Orchestration", "OpenClaw"],
        date: "2026-05-08",
        readingTime: "3 min read",
      },
      {
        title: "Investigating Honcho Memory Architecture for OpenClaw",
        slug: "investigating-honcho-memory-architecture-for-openclaw",
        summary:
          "Notes on Honcho representations, observe_me, memory quality, and how long-term memory should be applied in OpenClaw.",
        tags: ["Agent Memory", "Honcho", "OpenClaw", "Representations"],
        date: "2026-04-30",
        readingTime: "2 min read",
      },
    ],
  },
  {
    title: "Enterprise AI",
    slug: "enterprise-ai",
    description:
      "Practical notes on AI platform architecture, governance, knowledge retrieval, runtime capabilities, and enterprise adoption constraints.",
    notes: [
      {
        title:
          "Skill-Defined Tools vs Runtime-Provided Tools in Enterprise Agent Platforms",
        slug: "skill-defined-tools-vs-runtime-provided-tools-in-enterprise-agent-platforms",
        summary:
          "A platform architecture note on why skills can describe tool usage, but runtimes must own executable capabilities.",
        tags: ["Enterprise AI", "AI Platforms", "Tools", "OpenClaw"],
        date: "2026-06-20",
        readingTime: "3 min read",
      },
      {
        title:
          "Building SOP Retrieval for OpenClaw Skills Instead of Prompt-Stuffing",
        slug: "building-sop-retrieval-for-openclaw-skills-instead-of-prompt-stuffing",
        summary:
          "A design note on separating OpenClaw skill workflow from SOP retrieval, search quality, and business policy ownership.",
        tags: ["Enterprise AI", "OpenClaw", "Knowledge Retrieval", "SOPs"],
        date: "2026-06-16",
        readingTime: "4 min read",
      },
      {
        title: "OpenClaw Permissions: Why Prompt Rules Are Not Enforcement",
        slug: "openclaw-permissions-why-prompt-rules-are-not-enforcement",
        summary:
          "An investigation into why prompts guide behavior but runtime approval systems are needed for real enforcement.",
        tags: ["Enterprise AI", "Permissions", "Governance", "OpenClaw"],
        date: "2026-05-21",
        readingTime: "4 min read",
      },
    ],
  },
  {
    title: "Engineering Leadership",
    slug: "engineering-leadership",
    description:
      "Reflections on AI adoption, organizational design, harness engineering, technical leadership, and how engineering work changes around AI.",
    notes: [
      {
        title: "Becoming AI-Native: Rethinking How Organizations Work",
        slug: "becoming-ai-native-rethinking-how-organizations-work",
        summary:
          "A reflection on why AI adoption is less about tool access and more about organizational design, harness engineering, governance, and leadership judgment.",
        tags: [
          "AI Leadership",
          "AI Adoption",
          "Harness Engineering",
          "Organizational Design",
        ],
        date: "2026-04-19",
        readingTime: "4 min read",
      },
    ],
  },
];

export const allNotes = topics.flatMap((topic) =>
  topic.notes.map((note) => ({
    ...note,
    topic: topic.title,
    topicSlug: topic.slug,
    href: `/topics/${topic.slug}/${note.slug}/`,
  })),
);

export const latestNotes = [...allNotes]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 6);
