import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reanna Chambers",
  description: "Portfolio website for Reanna Chambers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="noise-overlay">
      <body>{children}</body>
      </div>
    </html>
  );
}
