import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: {
    default: "Lyzerslab",
    template: "%s",
  },
  description:
    "Discover a powerhouse of digital solutions at Lyzerslab. From full-stack and app development to top-tier domain hosting, WP customization, and impeccable UI/UX design, we're your one-stop destination for innovative and tailored online experiences. Together We Make Difference",
  keywords:
    "Lyzerslab digital agency, digital agency in Bangladesh, digital agency in Dhaka, digital solutions, full-stack development company, app development, domain hosting, Wordpress, UI/UX design, SAAS product",
  author: "Ziaul Kabir",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  ogTitle: "Lyzerslab - Your End to End Digital Solutions",
  ogType: "website",
  ogUrl: "https://lyzerslab.com",
  ogImage: "https://lyzerslab.com/lyzerslab-digital-agency.webp",
  ogDescription: "Discover a powerhouse of digital solutions at Lyzerslab.",
};

export const getPageMetadata = (pageName) => {
  return {
    ...metadata,
    title: {
      default: `Lyzerslab: ${pageName}`,
      template: `%s | ${pageName}`,
    },
    pageName: pageName,
  };
};

export default function RootLayout({
  children,
  pageName,
}: {
  children: React.ReactNode;
  pageName: string;
}) {
  const pageMetadata = getPageMetadata(pageName);

  return (
    <html lang="en">
      <head>
        <title>{pageMetadata.title.default}</title>
        <meta name="description" content={pageMetadata.description} />
        <meta name="keywords" content={pageMetadata.keywords} />
        <meta name="author" content={pageMetadata.author} />
        <meta name="robots" content={pageMetadata.robots} />
        <meta name="viewport" content={pageMetadata.viewport} />
        <meta property="og:title" content={pageMetadata.ogTitle} />
        <meta property="og:type" content={pageMetadata.ogType} />
        <meta property="og:url" content={pageMetadata.ogUrl} />
        <meta property="og:image" content={pageMetadata.ogImage} />
        <meta property="og:description" content={pageMetadata.ogDescription} />
      </head>
      <body className={`inter.className bg-[#0F172A]`}>{children}</body>
    </html>
  );
}
