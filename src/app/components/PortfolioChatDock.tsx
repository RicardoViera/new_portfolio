"use client";

import { useEffect, useState } from "react";

declare global {
    interface Window {
      portfolioChat?: {
        open: () => void;
        close: () => void;
        toggle: () => void;
      };
    }
  }

export default function PortfolioChatDock() {
  const [open, setOpen] = useState(false);

  // Optional: close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    window.portfolioChat = {
      open: () => setOpen(true),
      close: () => setOpen(false),
      toggle: () => setOpen((v) => !v),
    };

    return () => {
      delete window.portfolioChat;
    };
  }, []);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          zIndex: 9999,
          width: 56,
          height: 56,
          borderRadius: 9999,
          border: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(20,20,20,0.9)",
          color: "white",
          cursor: "pointer",
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        }}
      >
        {open ? "✕" : "💬"}
      </button>

      {/* Dock/panel */}
      <div
        style={{
          position: "fixed",
          right: 20,
          bottom: 90,
          zIndex: 9999,
          width: "min(420px, calc(100vw - 40px))",
          height: open ? "min(640px, calc(100vh - 140px))" : 0,
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(12px)",
          pointerEvents: open ? "auto" : "none",
          transition: "all 180ms ease",
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(10,10,10,0.85)",
          boxShadow: "0 14px 50px rgba(0,0,0,0.45)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Header */}
        <div
          style={{
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 12px",
            borderBottom: "1px solid rgba(255,255,255,0.10)",
            color: "white",
            fontSize: 14,
          }}
        >
          <div style={{ fontWeight: 600 }}>Ask Ricardo AI</div>
          <button
            onClick={() => setOpen(false)}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontSize: 18,
              lineHeight: 1,
            }}
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>

        {/* Iframe */}
        <iframe
          title="Career Conversation"
          src="https://ricardo-viera-career-conversation.hf.space"
          style={{
            width: "100%",
            height: "calc(100% - 44px)",
            border: "none",
            background: "white",
          }}
          // helpful defaults
          allow="clipboard-read; clipboard-write; microphone; camera"
          loading="lazy"
        />
      </div>
    </>
  );
}
