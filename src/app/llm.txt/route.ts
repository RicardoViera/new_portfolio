export const runtime = "nodejs";

type Project = {
  title: string;
  oneLiner: string;
  bullets: string[];
  links: { live?: string; github?: string };
  tags: string[];
};

const profile = {
  name: "Ricardo Viera",
  headline: "Full Stack Software Engineer",
  location: "United States",
  summary:
    "I build responsive, production-ready web applications using React/Next.js, Node, and relational databases. I care about clean UX, reliable systems, and shipping.",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "Postgres",
    "SQL",
    "Prisma",
    "Git",
    "CI/CD",
  ],
  links: {
    github: "https://github.com/RicardoViera",
    linkedin: "https://www.linkedin.com/in/ricardo-viera/",
  },
  projects: [
    {
      title: "Career Conversation",
      oneLiner:
        "An interactive Q&A agent that answers questions about my background using my resume/LinkedIn info.",
      bullets: [
        "RAG-style: loads my background docs and answers in my voice",
        "Runs as a public Hugging Face Space demo",
      ],
      links: {
        live: "https://huggingface.co/spaces/ricardo-viera/career_conversation",
        github: "",
      },
      tags: ["LLM", "RAG", "Gradio", "OpenAI"],
    },
    {
      title: "AI Product Copilot",
      oneLiner:
        "Chat-based assistant for product documentation with uploads + retrieval.",
      bullets: [
        "Full-stack Next.js app with a chat UX",
        "Doc ingestion + retrieval for Q&A over product docs",
      ],
      links: {
        github: "https://github.com/RicardoViera/ai-product-copilot",
        live: "", // optional
      },
      tags: ["Next.js", "TypeScript", "Postgres", "Prisma"],
    },
  ] satisfies Project[],
};

function toLLMText() {
  const lines: string[] = [];

  lines.push(`${profile.name}`);
  lines.push(`${profile.headline}`);
  lines.push("");

  lines.push("SUMMARY:");
  lines.push(profile.summary);
  lines.push("");

  lines.push("LINKS:");
  lines.push(`- GitHub: ${profile.links.github}`);
  lines.push(`- LinkedIn: ${profile.links.linkedin}`);
  lines.push("");

  lines.push("SKILLS:");
  for (const s of profile.skills) lines.push(`- ${s}`);
  lines.push("");

  lines.push("PROJECTS:");
  for (const p of profile.projects) {
    lines.push(`- ${p.title}: ${p.oneLiner}`);
    for (const b of p.bullets) lines.push(`  - ${b}`);
    if (p.links.live) lines.push(`  - Live: ${p.links.live}`);
    if (p.links.github) lines.push(`  - GitHub: ${p.links.github}`);
    if (p.tags?.length) lines.push(`  - Tags: ${p.tags.join(", ")}`);
    lines.push("");
  }

  lines.push(`LAST_UPDATED: ${new Date().toISOString()}`);

  return lines.join("\n").trim() + "\n";
}

export async function GET() {
  return new Response(toLLMText(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      // optional caching; safe to keep short while iterating
      "Cache-Control": "public, max-age=60",
    },
  });
}
