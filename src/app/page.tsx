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
    links: { github: "", live: "https://huggingface.co/spaces/ricardo-viera/career_conversation" },
  },
  {
    title: "Career Conversation",
    description:
      "An interactive Q&A agent that answers questions about my background using my resume/LinkedIn info.",
    tags: ["LLM", "Python", "Gradio", "OpenAI", "MongoDB Atlas"],
    links: { github: "", live: "https://huggingface.co/spaces/ricardo-viera/career_conversation" },
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
    <div className="min-h-dvh bg-white text-neutral-900">
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
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

      <main>
        <section className="py-20">
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
                  className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
                >
                  Contact
                </a>
                <a
                  href="https://www.linkedin.com/in/ricardo-viera/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
                >
                  LinkedIn
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                <Pill>React</Pill>
                <Pill>Next.js</Pill>
                <Pill>TypeScript</Pill>
                <Pill>Node.js</Pill>
                <Pill>SQL</Pill>
              </div>
            </div>
          </Container>
        </section>

        <section id="projects" className="border-t py-16">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            <p className="mt-2 text-neutral-700">
              A few things I’ve built recently.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="rounded-2xl border p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{p.title}</h3>
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

        <section id="skills" className="border-t py-16">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border p-6">
                <h3 className="font-semibold">Frontend</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  <li>React, Next.js</li>
                  <li>TypeScript, JavaScript</li>
                  <li>Tailwind, CSS/SCSS</li>
                  <li>Angular</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-6">
                <h3 className="font-semibold">Backend</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  <li>Node.js, Express</li>
                  <li>Elixir, Phoenix</li>
                  <li>REST APIs</li>
                  <li>Cron jobs</li>
                  <li>Python</li>
                  <li>Java/Spring</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-6">
                <h3 className="font-semibold">Data & Tools</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  <li>Postgres, SQL</li>
                  <li>Prisma</li>
                  <li>Git, CI/CD basics</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section id="contact" className="border-t py-16">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-2 text-neutral-700">
              Want to chat? Email me or reach out on LinkedIn.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
                href="mailto:ricardoviera01@gmail.com"
              >
                Email
              </a>
              <a
                className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
                href="https://github.com/RicardoViera"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t py-10">
        <Container>
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Ricardo Viera. Built with Next.js.
          </p>
        </Container>
      </footer>
    </div>
  );
}
