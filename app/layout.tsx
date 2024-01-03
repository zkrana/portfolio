import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lyzerslab",
  description:
    "Discover a powerhouse of digital solutions at Lyzerslab. From full-stack and app development to top-tier domain hosting, WP customization, and impeccable UI/UX design, we're your one-stop destination for innovative and tailored online experiences. Together We Make Difference",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`inter.className bg-[#0F172A]`}>{children}</body>
    </html>
  );
}
