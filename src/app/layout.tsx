import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontendmentor solutions",
  description: "Combination of solutions for frontendmentor challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
