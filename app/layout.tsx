import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const siteUrl = "https://www.zibahcreations.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Zibah Creations | Handmade Macramé Bags in Zimbabwe",
    template: "%s | Zibah Creations",
  },

  description:
    "Discover handcrafted macramé bags made in Zimbabwe. Zibah Creations blends African craftsmanship, culture, and modern design to create unique, made-to-order woven bags.",

  keywords: [
    "macrame bags Zimbabwe",
    "handmade bags Zimbabwe",
    "African handcrafted bags",
    "woven bags Africa",
    "artisan bags Zimbabwe",
    "Zibah Creations",
    "macrame handbags",
    "custom handmade bags",
    "Macrame bags in Zimbabwe",
  ],

  authors: [{ name: "Zibah Creations" }],
  creator: "Zibah Creations",
  publisher: "Zibah Creations",

  metadataBase: new URL(siteUrl),

  openGraph: {
    title: "Zibah Creations | Handmade Macramé Bags",
    description:
      "Unique handcrafted macramé bags inspired by African culture and made in Zimbabwe.",
    url: siteUrl,
    siteName: "Zibah Creations",
    images: [
      {
        url: "/zibahlogo.JPG",
        width: 1200,
        height: 630,
        alt: "Zibah Creations handmade macramé bags",
      },
    ],
    locale: "en_ZW",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zibah Creations | Handmade Macramé Bags",
    description:
      "Handcrafted macramé bags made with culture, care, and craftsmanship.",
    images: ["/zibahlogo.JPG"],
  },

  robots: {
    index: true,
    follow: true,
  },

  other: {
    "geo.region": "ZW",
    "geo.placename": "Zimbabwe",
  },
};

// ✅ ensures fresh Sanity data without needing a redeploy
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zibah Creations",
    alternateName: "Zibah",
    url: siteUrl,
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#F7F3EE] text-[#1A1A1A]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <Navbar />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}