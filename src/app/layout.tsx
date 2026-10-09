import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jean le Coyote | The AI-DNA Glitch",
  description:
    "Jean le Coyote: an aristocratic, mysterious and slightly absurd crypto token. Join the hunt.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-royal text-offwhite">
        <AmbientBackground />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
      </body>
    </html>
  );
}
