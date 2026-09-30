import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ритм игры — независимый гид",
  description: "Демо-концепция независимого рейтинга игровых платформ.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
