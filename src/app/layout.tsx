import Footer from "@/components/Footer";
import ReactQueryProvider from "@/reactQuery/Provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MainNav from "../components/nav/MainNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/variable/woff2/SUIT-Variable.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full max-w-[1920px]`}
      >
        <ReactQueryProvider>
          <MainNav />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
