"use client";
import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import Container from "./components/Container";
import Pill from "./components/Pill";

const projects = [
  {
    title: "Deep Research",
    description: `Deep research utilizes different agents in order to automate the research process.
      The agents are in charge of recording user input, come up with clarifying questions, 
      perform the research and finally show the results to the user, in markdown format. 
      The user then has the option to email the research document to their personal email. 
      The process is orchestrated by an async generator and tracked by traces.`,
    tags: ["LLM", "Python", "Gradio", "OpenAI Agents SDK", "SendGrid"],
    impact:
      "Aims to facilitate keeping web search process by automating and summarizing different sources. Users can keep records of these searches by emailing the results to the email of their choosing",
    links: {
      github: "",
      live: "https://huggingface.co/spaces/ricardo-viera/deep_research",
    },
  },
  {
    title: "Career Conversation",
    description: `An interactive AI trained on my resume and portfolio. Ask about my projects, technical decisions, or experience. 
      This Python project uses the power of GradioUI and OpenAI to seamlessly have a professional career conversation. 
      Questions that the AI cannot answer will get sent as text messages using PushOver and stored in MongoDB Atlas Clusters. 
      Users can also save their contact info so that I might get back to them.`,
    tags: [
      "LLM",
      "Python",
      "Gradio",
      "OpenAI",
      "MongoDB Atlas",
      "Pushover Notifications",
    ],
    impact:
      "Gives recruiters an interactive way to explore my background and technical decisions.",
    links: {
      github: "",
      live: "https://huggingface.co/spaces/ricardo-viera/career_conversation",
    },
  },
  {
    title: "AI Product Copilot",
    description: `An AI-powered SaaS application that allows product teams to upload documentation and chat with their product context using Retrieval-Augmented Generation (RAG).
       Built to demonstrate modern full-stack architecture with streaming AI, vector search, authentication, and server-first design in Next.js App Router.`,
    tags: ["Next.js", "TypeScript", "Postgres", "Prisma"],
    impact: "Sample project to demonstrate AI/Full Stack Development knowledge",
    links: {
      github: "https://github.com/RicardoViera/ai-product-copilot",
      live: "https://ai-product-copilot-xi.vercel.app/",
    },
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText("ricardoviera01@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = "mailto:ricardoviera01@gmail.com";
    }
  }

  return (
    <div className="min-h-dvh text-neutral-900">
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-neutral-300/70 shadow-sm">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="font-semibold tracking-tight">
              Ricardo Viera
            </a>
            <nav className="flex items-center gap-6 text-sm">
              <a
                className="relative transition hover:text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all hover:after:w-full"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="relative transition hover:text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all hover:after:w-full"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="relative transition hover:text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all hover:after:w-full"
                href="#contact"
              >
                Contact
              </a>
              <a
                href="/Ricardo_Resume.pdf"
                target="_blank"
                className="relative transition hover:text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all hover:after:w-full"
              >
                Resume
              </a>
            </nav>
          </div>
        </Container>
      </header>

      <main className="min-h-dvh bg-gradient-to-b from-white via-neutral-50 to-white">
        <section className="relative flex min-h-[calc(100dvh-4rem)] items-center bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.15),transparent_100%)]">
          <Container>
            <div className="max-w-2xl animate-[fadeUp_.6s_ease-out]">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Full Stack Software Developer
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-neutral-700">
                Full-stack developer with 7+ years building and shipping
                production web applications. I've worked across multiple tech
                stacks during my career and utilized them to deliver clean user
                experiences and scalable backend systems. Previously building
                clinician-facing systems used in production healthcare
                environments.
              </p>

              <p className="mt-3 text-sm text-neutral-600">
                End-to-end features • Complex Data Driven Responsive UIs • API
                design • Background jobs • Data migrations
              </p>
              <p className="mt-3 text-sm text-bold-600">
                📍 Miami, FL • Open to full-stack roles (remote/hybrid/on-site)
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-lg"
                >
                  View Projects
                </a>
                <a
                  href="#chat"
                  onClick={(e) => {
                    e.preventDefault();
                    window.portfolioChat?.open();
                  }}
                  className="rounded-xl border border-neutral-900/20 bg-white/70 px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                >
                  💬 Ask Ricardo
                </a>
                <a
                  href="/Ricardo_Resume.pdf"
                  download
                  className="rounded-xl border bg-white/60 px-5 py-3 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </Container>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-neutral-500 animate-bounce">
            <a href="#projects" className="hover:text-neutral-800">
              ↓ Learn More
            </a>
          </div>
        </section>

        <section id="projects" className="border-t border-neutral-300/70 py-20">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            <p className="mt-2 text-neutral-700">
              A few things I’ve built recently.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="group relative rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    <h3 className="text-lg font-semibold transition group-hover:text-indigo-600">
                      {p.links.live ? (
                        <a
                          href={p.links.live}
                          target="_blank"
                          rel="noreferrer"
                          className="relative inline-block after:absolute after:inset-0 after:content-['']"
                          aria-label={`Open live demo for ${p.title}`}
                        >
                          {p.title}
                        </a>
                      ) : (
                        p.title
                      )}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                      {p.description}
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                      <span className="font-semibold">Impact:</span> {p.impact}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Pill key={t}>{t}</Pill>
                      ))}
                    </div>

                    <div className="relative z-10 mt-6 flex gap-3 text-sm">
                      {p.links.github && (
                        <a
                          className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-2 text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-md"
                          href={p.links.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                      )}
                      {p.links.live && (
                        <a
                          className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-2 text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-md"
                          href={p.links.live}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="skills" className="border-t border-neutral-300/70 py-20">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border p-6">
                <h3 className="font-semibold">Frontend</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Pill>React</Pill>
                  <Pill>Angular</Pill>
                  <Pill>Next.js</Pill>
                  <Pill>TypeScript, JavaScript</Pill>
                  <Pill>HTML</Pill>
                  <Pill>Tailwind, CSS/SCSS</Pill>
                </div>
              </div>
              <div className="rounded-2xl border p-6">
                <h3 className="font-semibold">Backend</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Pill>Node.js, Express</Pill>
                  <Pill>Elixir, Phoenix</Pill>
                  <Pill>REST APIs</Pill>
                  <Pill>Cron jobs</Pill>
                  <Pill>Python</Pill>
                  <Pill>Java/Spring</Pill>
                </div>
              </div>
              <div className="rounded-2xl border p-6">
                <h3 className="font-semibold">Data & Tools</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Pill>Postgres, SQL</Pill>
                  <Pill>Prisma</Pill>
                  <Pill>Mongo</Pill>
                  <Pill>Supabase</Pill>
                  <Pill>Git, CI/CD basics</Pill>
                  <Pill>Docker</Pill>
                  <Pill>AWS</Pill>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-sm font-medium text-bold-800">
                Certifications
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.hackerrank.com/certificates/ec54171b1ca3"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:scale-105"
                >
                  <img
                    src="/reactcert.png"
                    alt="HackerRank Problem Solving Certificate"
                    className="h-40 w-auto"
                  />
                </a>

                <a
                  href="https://www.udemy.com/certificate/UC-93f010cb-62b8-4bf5-986b-aa233e7d3498/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:scale-105"
                >
                  <img
                    src="/udemy.jpg"
                    alt="HackerRank Problem Solving Certificate"
                    className="h-40 w-auto"
                  />
                </a>
              </div>
            </div>
          </Container>
        </section>

        <section id="contact" className="border-t border-neutral-300/70 py-8">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-2 text-neutral-700">
              Want to chat? Email me or reach out on LinkedIn.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="relative group">
                <button
                  type="button"
                  aria-label="Copy email"
                  onClick={copy}
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg ${
                    copied
                      ? "bg-emerald-600 hover:bg-emerald-600"
                      : "bg-neutral-900 hover:bg-neutral-800"
                  }`}
                >
                  <Mail className="h-5 w-5" />
                </button>

                <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 translate-y-1 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100 whitespace-nowrap rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs font-medium text-neutral-700 shadow-sm">
                  {copied ? "Copied to clipboard!" : "Copy email"}
                </div>
              </div>
              <a
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-md transition hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-lg"
                href="https://www.linkedin.com/in/ricardo-viera/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-md transition hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-lg"
                href="https://github.com/RicardoViera"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </Container>
        </section>
      </main>

      <footer className="mt-10 border-b border-transparent bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.08),transparent)] py-8">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-semibold tracking-tight">
              © {new Date().getFullYear()} Ricardo Viera{" "}
              <span className="ml-2 text-neutral-500">Built with Next.js</span>
            </p>

            <div className="flex items-center gap-6 text-sm font-medium text-neutral-700">
              <a
                href="#projects"
                className="relative transition hover:text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all hover:after:w-full"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="relative transition hover:text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all hover:after:w-full"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="relative transition hover:text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all hover:after:w-full"
              >
                Contact
              </a>
              <a
                href="/Ricardo_Resume.pdf"
                target="_blank"
                className="relative transition hover:text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all hover:after:w-full"
              >
                Resume
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
