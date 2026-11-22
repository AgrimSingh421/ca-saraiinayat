import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import WelcomeKit from "@/components/WelcomeKit";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Central Academy | Sarai Inayat, Prayagraj",
  description:
    "Discover Central Academy, Sarai Inayat, Prayagraj. Explore our school, academics, campus life and admissions.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <WelcomeKit />
        {children}
        <Footer />
      </body>
    </html>
  );
}
