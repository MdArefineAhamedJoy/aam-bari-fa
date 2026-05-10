import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "আমবাড়ি (AamBari) - রাজশাহীর টাটকা ও মিষ্টি আম",
  description: "সরাসরি বাগান থেকে সংগৃহীত প্রিমিয়াম কোয়ালিটির বিষমুক্ত আম কিনুন আমবাড়ি থেকে। সারা বাংলাদেশে দ্রুত হোম ডেলিভারি।",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} font-bengali h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-[#fffdf5]">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
