import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image"
import Link from "next/link";
// import { TbActivity } from "react-icons/tb";

// ICON
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";





const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yen-Chia's 的個人履歷",
  description: "Yen-Chia's 的個人履歷",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex h-full">
          {/* 左邊 */}
          <div className="p-6 bg-white">

            <div className="bg-red-50 p-4 w-[360px] h-full rounded-2xl overflow-auto">
              <div className="flex justify-center items-center w-full">
                <div className="bg-white w-[80px] h-[80px] rounded-full border-4 border-x-red-200 border-y-red-100 overflow-hidden flex justify-center items-center">
                  <Image src="/avatar.png" alt="avatar" width={80} height={80} />
                </div>
              </div>

              <div className="text-center font-bold text-gray-600">馮妍嘉</div>
              <div className="text-center text-gray-600">NCCU AD | DCT</div>

              <div className="flex gap-2">
                {/* icons, links, images */}
                {/* <div>
                <TbActivity />
              </div> */}
                <div className="flex w-full justify-evenly text-[20px] text-gray-600 py-3">
                  <Link href="https://www.instagram.com/yenchia._.0504/" target="/blank"><div className="border-2 border-gray-600 rounded-full p-1.5 hover:bg-gray-600 hover:text-white">
                    <IoLogoInstagram />
                  </div></Link>
                  <Link href="https://www.instagram.com/yenchia._.0504/" target="/blank"><div className="border-2 border-gray-600 rounded-full p-1.5 hover:bg-gray-600 hover:text-white">
                    <IoMail />
                  </div></Link>
                  <Link href="https://www.instagram.com/yenchia._.0504/" target="/blank"><div className="border-2 border-gray-600 rounded-full p-1.5 hover:bg-gray-600 hover:text-white">
                    <IoLogoLinkedin />
                  </div></Link>
                  <Link href="https://www.instagram.com/yenchia._.0504/" target="/blank"><div className="border-2 border-gray-600 rounded-full p-1.5 hover:bg-gray-600 hover:text-white">
                    <IoLogoGithub />
                  </div></Link>
                </div>
              </div>

              <div className="text-center text-gray-600">
                <Link href="/about" className="">
                  <div className="border border-red-100 p-[16px] rounded-md shadow-lg shadow-red-100 hover:bg-gray-50">About</div>
                </Link>
                <Link href="/hobby">
                  <div className="border border-red-100 p-[16px] mt-2 rounded-md shadow-lg shadow-red-100 hover:bg-gray-50">我的興趣</div>
                </Link>
                <Link href="/hobby">
                  <div className="border border-red-100 p-[16px] mt-2 rounded-md shadow-lg shadow-red-100 hover:bg-gray-50">Design Project</div>
                </Link>
                <Link href="/hobby">
                  <div className="border border-red-100 p-[16px] mt-2 rounded-md shadow-lg shadow-red-100 hover:bg-gray-50">Programming Project</div>
                </Link>
                <Link href="/hobby">
                  <div className="border border-red-100 p-[16px] mt-2 rounded-md shadow-lg shadow-red-100 hover:bg-gray-50">Exhibition works</div>
                </Link>
                <Link href="/hobby">
                  <div className="border border-red-100 p-[16px] mt-2 rounded-md shadow-lg shadow-red-100 hover:bg-gray-50">程式專案</div>
                </Link>
                <Link href="/hobby">
                  <div className="border border-red-100 p-[16px] mt-2 rounded-md shadow-lg shadow-red-100 hover:bg-gray-50">程式專案</div>
                </Link>
                <Link href="/hobby">
                  <div className="border border-red-100 p-[16px] mt-2 rounded-md shadow-lg shadow-red-100 hover:bg-gray-50">程式專案</div>
                </Link>
                <Link href="/hobby">
                  <div className="border border-red-100 p-[16px] mt-2 rounded-md shadow-lg shadow-red-100 hover:bg-gray-50">程式專案</div>
                </Link>
              </div>

            </div>
          </div>

          {/* 右邊 */}
          <div className="p-6 bg-white w-full h-full">
            <div className="bg-red-100 p-4 rounded-2xl w-full h-full overflow-auto">

              {children}

            </div>
          </div>
        </div>

      </body>
    </html>
  );
}
