import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "冯涛 Theo | AI 产品经理作品集",
  description: "AI 产品经理冯涛 Theo 的作品案例展示，聚焦学习能力、AI 落地能力与 Agent 产品实践。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
