"use client";

import { useState } from "react";
import Container from "./Container";

const HF_URL = "https://huggingface.co/spaces/ricardo-viera/career_conversation";

export default function AskRicardoSection() {
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <section id="ask-ricardo" className="border-t border-neutral-300/70 py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Ask Ricardo (AI)
            </h2>
            <p className="mt-4 text-neutral-700">
              An interactive AI trained on my resume and portfolio. Ask about my
              projects, technical decisions, or experience. Feel free to leave contact details and I will reach out.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setShowEmbed(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-lg"
              >
                {showEmbed ? "Demo loaded" : "Open demo"}
              </button>

              <a
                href="https://huggingface.co/spaces/ricardo-viera/career_conversation"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border bg-white/60 px-5 py-3 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                Open in new tab
              </a>
            </div>

            <p className="mt-3 text-sm text-neutral-500">
              Note: HuggingFace demos may take a few seconds to wake if idle.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-300/70 bg-white/70 p-4 shadow-sm">
            {showEmbed ? (
              <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
                <iframe
                  title="Ask Ricardo (AI)"
                  src="https://ricardo-viera-career-conversation.hf.space"
                  className="h-[560px] w-full"
                  loading="lazy"
                  allow="clipboard-write; fullscreen"
                />
              </div>
            ) : (
              <div className="flex h-[560px] items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-white/60 p-6 text-center">
                <div>
                  <p className="text-sm font-medium text-neutral-800">
                    Preview
                  </p>
                  <p className="mt-2 text-sm text-neutral-600">
                    Click <span className="font-medium">Open demo</span> to load
                    the embedded chat here.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
