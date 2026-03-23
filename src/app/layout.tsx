import type { Metadata } from "next";
import { Patrick_Hand, Quicksand } from "next/font/google";
import "./globals.css";
import BackgroundDoodles from "@/components/BackgroundDoodles";

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Enzo's Art Studio",
  description: "Welcome to Enzo's digital sketchbook — a gallery of his favorite masterpieces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${patrickHand.variable} ${quicksand.variable} font-body bg-paper text-graphite antialiased`}
      >
        <BackgroundDoodles />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
