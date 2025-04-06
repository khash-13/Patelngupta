import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import "./globals.css";

const arimo = Arimo({
  subsets: ["latin", "cyrillic", "greek", "hebrew", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arimo",
});

export const metadata: Metadata = {
  title: "PATEL & GUPTA",
  description:
    'The firm "PATEL & GUPTA, Chartered Accountants" was incorporated in the year 2000 as a partnership firm with four partners. Our vision is to provide quality professional services with greater accuracy and transparency through our multi-location branches spread across states.',
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arimo.className}>
        <Navbar />
        {children}
        <Toaster />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
