import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/sitemap";
import WagmiProviderWrapper from "@/components/connectWallet";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trust Vote",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <WagmiProviderWrapper>
          <Navigation />
          {children}
        </WagmiProviderWrapper>
        <Footer />
      </body>
    </html>
  );
}
