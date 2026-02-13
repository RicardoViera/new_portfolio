import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ricardo Viera | Full Stack Software Engineer",
  description:
    "Full stack software engineer building performant web apps with React/Next.js, Node, and cloud infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
