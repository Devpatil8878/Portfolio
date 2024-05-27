

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// const belanosima = Belanosima({weight: "600", display: 'swap', variable: '--font-belanosima', subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Dev...",
  description: "Generated with khoon paseena",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" >
      <body >
          {children}
      </body>
    </html>
  );
}
