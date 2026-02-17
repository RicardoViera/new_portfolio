import type { Metadata } from "next";
import "./globals.css";
import PortfolioChatDock from "./components/PortfolioChatDock";

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
      <body>
        {children}
        <PortfolioChatDock></PortfolioChatDock>
      </body>
    </html>
  );
}
