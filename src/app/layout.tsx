import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis, useLenis } from 'lenis/react'

const inter = Inter({ subsets: ["latin"] });
// const belanosima = Belanosima({weight: "600", display: 'swap', variable: '--font-belanosima', subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Dev patil",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
