"use client"

import Image from "next/image"
import Link from "next/link";

import type { ComponentType } from "react";
import LogoLoop from '@/components/LogoLoop';
import { SiInstagram, SiGmail, SiGithub, SiFacebook, SiLinktree, SiBlender } from 'react-icons/si';
import { IoLogoLinkedin, IoCode, IoGlobe } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const socialLogos = [
  { node: <SiInstagram />, title: "Instagram", href: "https://www.instagram.com/yenchia._.0504" },
  { node: <SiGmail />, title: "Email", href: "mailto:yanjia20050504@gmail.com" },
  { node: <IoLogoLinkedin />, title: "LinkedIn", href: "https://www.linkedin.com/in/fengyenchia" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com/fengyenchia" },
  { node: <FaXTwitter />, title: "X", href: "https://x.com/fengyenchia" },
  { node: <SiFacebook />, title: "facebook", href: "https://www.facebook.com/fengyenchia0504/" },
  { node: <IoCode />, title: "openproccessing", href: "https://openprocessing.org/user/522490/" },
  { node: <IoGlobe />, title: "my website", href: "http://fengyenchia.github.io/my-page/" },
  { node: <SiBlender />, title: "my 3d website", href: "https://112405033.weebly.com/" },
  { node: <SiLinktree />, title: "linkTree", href: "https://linktr.ee/yenchia" },
];

type LogoLoopPropsLocal = {
  logos: typeof socialLogos;
  [key: string]: unknown;
};

const TypedLogoLoop: ComponentType<LogoLoopPropsLocal> = LogoLoop as ComponentType<LogoLoopPropsLocal>;

export default function About() {
  return (
    <div className="custom-scrollbar w-full h-full p-4 md:p-8 rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      <div className="flex flex-col gap-6 text-gray-600 w-full">
        {/* About */}
        <div className="flex justify-between">
          <div className="inline-block font-bold text-2xl">About</div>
          <Link href="../">
            <div className="hidden lg:inline-block text-md text-white/50 border border-white/50 rounded-lg py-1 px-2 shadow-md hover:bg-white/50 hover:translate-y-0.5 hover:text-gray-500 hover:border-gray-400 transition-all duration-500">
              Home
            </div>
          </Link>
        </div>
        <hr className="border-gray-500/20" />
        <div className="text-gray-500 py-0 lg:py-2 text-md leading-relaxed">
          我是個熱衷於嘗試新事物且喜歡挑戰的人，對我來說，設計的靈感來自生活，我時常將設計與科技結合，透過程式、互動技術或是其他數位工具，讓創意與美的展現有更多可能。我也擅長以簡潔的線條、擬人的物件，搭配可愛的色彩來呈現作品，藉此傳達出活潑卻也讓人眼前一亮的感覺。
        </div>

        {/* Education & Experience  */}
        <div className="flex flex-col gap-4 w-full">
          {/* Education */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 border border-gray-500/50 rounded-md px-4 py-2 w-full">
            <div className="flex flex-row md:flex-col gap-2 md:gap-0 items-baseline md:items-left  text-gray-500 text-md md:w-24 shrink-0 pb-2 md:pb-0 border-b border-gray-500/50 md:border-0">
              <p className="font-bold my-2">Education</p>
              <p className="text-xs my-2 text-gray-400">in NCCU</p>
            </div>
            <div className="text-gray-500 text-md md:border-s border-gray-500/50 grow md:ps-4 md:space-y-4">
              <div className="group">
                <div className="md:ps-2 py-2 rounded-md group-hover:bg-white/20 group-hover:translate-x-1 transition-all duration-500">
                  <p className="font-bold">國立政治大學</p>
                  <p className="text-xs md:text-sm text-gray-500">廣告學系 | 2023 - Now</p>
                </div>
              </div>
              <div className="group">
                <div className="md:ps-2 py-2 rounded-md group-hover:bg-white/20 group-hover:translate-x-1 transition-all duration-500">
                  <p className="font-bold">國立政治大學</p>
                  <p className="text-xs md:text-sm text-gray-500">數位內容與科技學士學位學程 | 2023 - Now</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 border border-gray-500/50 rounded-md px-4 py-2 w-full">
            <div className="flex flex-row md:flex-col gap-2 md:gap-0 items-baseline md:items-left text-gray-500 text-md md:w-24 shrink-0 pb-2 md:pb-0 border-b border-gray-500/50 md:border-0">
              <p className="font-bold my-2">Experience</p>
              <p className="text-xs my-2 text-gray-400">in NCCU</p>
            </div>
            <div className="text-gray-500 text-md md:border-s border-gray-500/50 grow md:ps-4 md:space-y-4">
              <div className="group">
                <div className="md:ps-2 py-2 rounded-md group-hover:bg-white/20 group-hover:translate-x-1 transition-all duration-500">
                  <p className="font-bold">抓馬戲劇社 美宣</p>
                  <p className="text-xs md:text-sm text-gray-500">2025/02 - Now</p>
                </div>
              </div>
              <div className="group">
                <div className="md:ps-2 py-2 rounded-md group-hover:bg-white/20 group-hover:translate-x-1 transition-all duration-500">
                  <p className="font-bold">區塊鏈應用課程 展覽主視覺</p>
                  <p className="text-xs md:text-sm text-gray-500">2025/09 - 2025/12</p>
                </div>
              </div>
              <div className="group">
                <div className="md:ps-2 py-2 rounded-md group-hover:bg-white/20 group-hover:translate-x-1 transition-all duration-500">
                  <p className="font-bold">傳播學院數位平台年度大展 展覽組長</p>
                  <p className="text-xs md:text-sm text-gray-500">2025/09 - 2025/12</p>
                </div>
              </div>
              <div className="group">
                <div className="md:ps-2 py-2 rounded-md group-hover:bg-white/20 group-hover:translate-x-1 transition-all duration-500">
                  <p className="font-bold">傳播學院數位平台 教學組長</p>
                  <p className="text-xs md:text-sm text-gray-500">2025/02 - 2025/12</p>
                </div>
              </div>
              <div className="group">
                <div className="md:ps-2 py-2 rounded-md group-hover:bg-white/20 group-hover:translate-x-1 transition-all duration-500">
                  <p className="font-bold">包種茶節 視覺設計組</p>
                  <p className="text-xs md:text-sm text-gray-500">2023/09 - 2023/12</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Tag */}
        <div className="flex flex-row justify-center items-center gap-6 md:gap-8 p-8 w-full text-center font-bold text-lg border-y border-gray-500/50 my-4 opacity-80">
          <p className="hidden md:block">互動設計</p>
          <p className="md:hidden">互動<br />設計</p>
          <span className="">x</span>
          <p className="hidden md:block">數位藝術</p>
          <p className="md:hidden">數位<br />藝術</p>
          <span className="">x</span>
          <p className="hidden md:block">網頁設計</p>
          <p className="md:hidden">網頁<br />設計</p>
        </div>




        <div className="bg-red-50/30 rounded-md p-4 w-full">
          <div className="pb-3 text-gray-600 font-bold text-lg">Skill</div>
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {/* skill 1 */}
            <div className="flex flex-col gap-3 md:gap-8 border border-gray-500/50 rounded-md p-4 w-full">
              <div className="text-gray-600 text-md border-b pb-2 md:pb-4 border-gray-500/50">
                Design & Creative
              </div>
              <div className="text-gray-500">
                <p className="inline-block bg-red-50/50 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">Illustrator</p>
                <p className="inline-block bg-red-50/50 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">Photoshop</p>
                <p className="inline-block bg-red-50/50 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">Lightroom</p>
                <p className="inline-block bg-red-50/50 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">Figma</p>
                <p className="inline-block bg-red-50/50 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">Blender</p>
              </div>
            </div>
            {/* skill 2 */}
            <div className="flex flex-col gap-3 md:gap-8 border border-gray-500/50 rounded-md p-4 w-full">
              <div className="text-gray-600 text-md border-b pb-2 md:pb-4 border-gray-500/50">
                Coding & Interaction
              </div>
              <div className="text-gray-500">
                <p className="inline-block bg-red-50/50 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">Html</p>
                <p className="inline-block bg-red-50/50 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">Css</p>
                <p className="inline-block bg-red-50/50 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">Javascript</p>
                <p className="inline-block bg-red-50/50 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">p5.js</p>
                <p className="inline-block bg-red-50/50 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">python</p>
                <p className="inline-block bg-red-50/50 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">c++</p>
                <p className="inline-block bg-red-50/50 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">c#</p>
              </div>
            </div>

          </div>
        </div>


        {/* Logo Loop */}
        <div className="mt-auto pt-5 flex justify-center w-full overflow-hidden">
          <div className="w-full max-w-xl overflow-hidden">
            <div className="h-10 text-gray-500">
              <TypedLogoLoop
                logos={socialLogos}
                speed={100}
                direction="right"
                logoHeight={30}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff00"
              />
            </div>
          </div>
        </div>

      </div>
    </div >
  );
}