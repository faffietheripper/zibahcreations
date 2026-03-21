import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
  ],

  authors: [{ name: "Zibah Creations" }],
  creator: "Zibah Creations",
  publisher: "Zibah Creations",

  metadataBase: new URL("https://zibahcreations.com"), // 🔁 update when you get custom domain

  openGraph: {
    title: "Zibah Creations | Handmade Macramé Bags",
    description:
      "Unique handcrafted macramé bags inspired by African culture and made in Zimbabwe.",
    url: "https://zibahcreations.com",
    siteName: "Zibah Creations",
    images: [
      {
        url: "/zibahlogo.JPG", // replace later with hero product image
        width: 1200,
        height: 630,
        alt: "Zibah Creations Macrame Bags",
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

  alternates: {
    canonical: "https://zibahcreations.vercel.app",
  },
};

// ✅ ensures fresh Sanity data (no redeploy needed)
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#F7F3EE] text-[#1A1A1A]">
        {/* NAV */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-grow">{children}</main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
