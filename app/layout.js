import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "HDz",
  description: "HDz Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/skipper.png" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body>
        <div className="flex flex-col justify-start items-center">
          <div className="fixed bg-[url('/texture.png')] opacity-[.025] w-screen h-screen pointer-events-none -z-10"></div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
