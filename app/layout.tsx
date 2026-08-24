import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Menu from "../components/Menu"
import MobileMenu from "../components/MobileMenu";
import { ViewTransition } from "react";

import { db } from "@/lib/db";
import { GoogleAnalytics } from "@next/third-parties/google";

const notoSansTC = localFont({
  src: "../public/fonts/NotoSansTC-VF.ttf",
  variable: "--font-noto-sans-tc",
  weight: "100 900",
  display: "swap",
});

export const revalidate = 3600;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fengyenchia.com"),
  title: "Yen-Chia's Portfolio",
  description: "Yen-Chia's 的數位名片",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "馮妍嘉(Feng Yen-Chia) 的作品集",
    description: "這是我的個人作品集，歡迎瀏覽我的作品！",
    images: "/og-image.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // 從資料庫撈取第一筆 Profile 資料（個人網站通常只有一筆資料）
  const profile = await db.profile.findMany();

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="zh-Hant"
      className={`${notoSansTC.variable} min-h-dvh lg:overflow-hidden antialiased bg-[url('/bg-3.png')] lg:bg-[url('/bg-2.png')] bg-center bg-cover bg-no-repeat`}
    >
      <body className="flex min-h-dvh flex-col overflow-x-hidden lg:overflow-hidden">
        {/* view transitions 動畫 */}
          <div className="flex flex-1 min-h-0 flex-col lg:flex-row">
          
          {/* 左邊 */}
          <MobileMenu profile={profile} />
          <Menu profile={profile} />

          {/* 右邊 */}
          <div className="flex flex-1 min-h-0 justify-center lg:py-8 px-0 lg:px-0 lg:pr-8 w-full">
            <div className="flex w-full min-h-0 justify-center bg-red-50/0 backdrop-blur-2xl lg:p-4 lg:rounded-2xl shadow-lg overflow-y-auto">
              <ViewTransition
                name="page-content"
                update={{ default: "none", "page-navigation": "page-navigation" }}
              >
                {children}
              </ViewTransition>
            </div>
          </div>

          {/* footer(手機、平板) */}
          {/* <MobileFooter /> */}
          </div>

      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
