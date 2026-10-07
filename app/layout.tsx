import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dreamy Sweets by Blondee | Custom Macarons in San Antonio",
  description: "Handcrafted custom French macarons for birthdays, celebrations, fandoms and one-of-a-kind ideas in San Antonio, Texas.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
