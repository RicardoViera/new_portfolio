import { Mail, Github, Linkedin } from "lucide-react";

const projects = [
  {
    title: "AI Product Copilot",
    description:
      "Chat-based product documentation assistant with file uploads and retrieval, built as a full-stack app.",
    tags: ["Next.js", "TypeScript", "Postgres", "Prisma"],
    links: {
      github: "https://github.com/RicardoViera/ai-product-copilot",
      live: "",
    },
  },
  {
    title: "Career Conversation",
    description:
      "An interactive Q&A agent that answers questions about my background using my resume/LinkedIn info.",
    tags: ["LLM", "Python", "Gradio", "OpenAI", "MongoDB Atlas"],
    links: {
      github: "",
      live: "https://huggingface.co/spaces/ricardo-viera/career_conversation",
    },
  },
  {
    title: "Deep Research",
    description: `Deep research utilizes different agents in order to automate the research process.
      The agents are in charge of recording user input, come up with clarifying questions, 
      perform the research and finally show the results to the user, in markdown format. 
      The user then has the option to email the research document to their personal email. 
      The process is orchestrated by an async generator and tracked by traces.`,
    tags: ["LLM", "Python", "Gradio", "OpenAI"],
    links: {
      github: "",
      live: "https://huggingface.co/spaces/ricardo-viera/deep_research",
    },
  },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-5xl px-6">{children}</div>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border px-3 py-1 text-sm text-neutral-700">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-dvh text-neutral-900">
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-neutral-300/70 shadow-sm">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="font-semibold tracking-tight">
              Ricardo Viera
            </a>
            <nav className="flex items-center gap-6 text-sm">
              <a className="hover:underline" href="#projects">
                Projects
              </a>
              <a className="hover:underline" href="#skills">
                Skills
              </a>
              <a className="hover:underline" href="#contact">
                Contact
              </a>
              <a
                className="rounded-lg border px-3 py-2 hover:bg-neutral-50"
                href="https://github.com/RicardoViera"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </nav>
          </div>
        </Container>
      </header>

      <main className="min-h-dvh bg-gradient-to-b from-white via-neutral-50 to-white">
        <section className="relative py-24">
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute left-1/2 top-12 h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 opacity-20 blur-3xl" />

            <div className="absolute left-[38%] top-36 h-[300px] w-[620px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-200 via-indigo-200 to-fuchsia-200 opacity-15 blur-3xl" />
          </div>
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Full Stack Software Engineer
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-neutral-700">
                I build responsive, production-ready web applications using
                React/Next.js, Node, and relational databases — with a focus on
                clean UX and solid system design.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-lg"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border bg-white/60 px-5 py-3 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                >
                  Contact
                </a>
                <a
                  href="https://www.linkedin.com/in/ricardo-viera/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border bg-white/60 px-5 py-3 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                >
                  LinkedIn
                </a>
              </div>

              {/* <div className="mt-10 flex flex-wrap gap-2">
                <Pill>React</Pill>
                <Pill>Next.js</Pill>
                <Pill>TypeScript</Pill>
                <Pill>Node.js</Pill>
                <Pill>SQL</Pill>
              </div> */}
            </div>
          </Container>
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
                  className="group rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="text-lg font-semibold transition group-hover:text-indigo-600">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3 text-sm">
                    {p.links.github && (
                      <a
                        className="rounded-lg border px-3 py-2 hover:bg-neutral-50"
                        href={p.links.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                    {p.links.live && (
                      <a
                        className="rounded-lg bg-neutral-900 px-3 py-2 text-white hover:bg-neutral-800"
                        href={p.links.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
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
                  <Pill>React, Next.js</Pill>
                  <Pill>TypeScript, JavaScript</Pill>
                  <Pill>Tailwind, CSS/SCSS</Pill>
                  <Pill>Angular</Pill>
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
                  <Pill>Git, CI/CD basics</Pill>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="contact" className="border-t border-neutral-300/70 py-20">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-2 text-neutral-700">
              Want to chat? Email me or reach out on LinkedIn.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-md transition hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-lg"
                href="mailto:ricardoviera01@gmail.com"
              >
                <Mail className="h-5 w-5" />
              </a>
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

      <footer className="mt-24 border-b border-transparent bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.08),transparent)] py-8">
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
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
