import { Geist, Geist_Mono } from "next/font/google";

import "./reset.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Simple Shop",
  description: "Af Lærke, Klara og Helene",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
