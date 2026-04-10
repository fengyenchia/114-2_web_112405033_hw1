import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Link from "next/link";

import Menu from "../components/Menu"
import MobileMenu from "../components/MobileMenu";

import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMail } from "react-icons/io5";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yen-Chia's Portfolio",
  description: "Yen-Chia's 的數位名片",
  icons: {
    icon: "/avatar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} min-h-dvh lg:overflow-hidden antialiased bg-[url('/bg-3.png')] lg:bg-[url('/bg-2.png')] bg-center bg-cover bg-no-repeat`}
    >
      <body className="flex min-h-dvh flex-col overflow-x-hidden lg:overflow-hidden">
        <div className="flex flex-1 min-h-0 flex-col lg:flex-row">
          
          {/* 左邊 */}
          <MobileMenu />
          <Menu />

          {/* 右邊 */}
          <div className="flex flex-1 min-h-0 justify-center py-8 px-3 lg:px-0 lg:pr-8 w-full">
            <div className="flex w-full min-h-0 justify-center bg-red-50/0 backdrop-blur-2xl p-4 rounded-2xl shadow-lg overflow-y-auto">

              {children}

            </div>
          </div>

          {/* footer(手機、平板) */}
          <div className="lg:hidden flex items-center justify-around gap-3 text-[20px] text-white py-4 backdrop-blur-sm rounded-b-lg">
            <Link
              href="https://www.instagram.com/yenchia._.0504/"
              target="_blank"
              className="border-2 border-white/80 rounded-full p-1.5 transition hover:bg-white hover:text-red-200"
              aria-label="Instagram"
            >
              <IoLogoInstagram />
            </Link>
            <Link
              href="mailto:yanjia20050504@gmail.com"
              className="border-2 border-white/80 rounded-full p-1.5 transition hover:bg-white hover:text-red-200"
              aria-label="Email"
            >
              <IoMail />
            </Link>
            <Link
              href="https://www.linkedin.com/in/fengyenchia/"
              target="_blank"
              className="border-2 border-white/80 rounded-full p-1.5 transition hover:bg-white hover:text-red-200"
              aria-label="LinkedIn"
            >
              <IoLogoLinkedin />
            </Link>
            <Link
              href="https://github.com/fengyenchia"
              target="_blank"
              className="border-2 border-white/80 rounded-full p-1.5 transition hover:bg-white hover:text-red-200"
              aria-label="GitHub"
            >
              <IoLogoGithub />
            </Link>
          </div>
        </div>

      </body>
    </html>
  );
}
