"use client"

import type { ComponentType } from "react";
import LogoLoop from '@/components/LogoLoop';
import SkillCard from '@/components/skillCard';
import HomeButton from '@/components/homeButton';
import FadeIn from "@/components/fadeIn";
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
    <div className="custom-scrollbar w-full h-full p-4 md:p-8 lg:rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      <div className="flex flex-col gap-3 lg:gap-6 text-secondary w-full">
        {/* About */}
        <FadeIn>
          <div className="flex justify-between">
            <div className="title">About</div>
            <HomeButton text="Home" href="/" />
          </div>
        </FadeIn>
        <hr className="border-primary/20" />
        <FadeIn>
          <div className="bg-red-50/30 rounded-inner py-2 px-4 lg:px-4 text-primary text-sm lg:text-base leading-relaxed">
            <p>我是個熱衷於嘗試新事物且喜歡挑戰的人，對我來說，設計的靈感來自生活，我時常將設計與科技結合，透過程式、互動技術或是其他數位工具，讓創意與美的展現有更多可能。我也擅長以簡潔的線條、擬人的物件，搭配可愛的色彩來呈現作品，藉此傳達出活潑卻也讓人眼前一亮的感覺。</p>
        </div>
        </FadeIn>

        {/* Education & Experience  */}
        <div className="flex flex-col gap-4 w-full">
          {/* Education */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 border border-primary/50 rounded-inner px-4 py-2 w-full">
            <FadeIn>
              <div className="flex flex-row md:flex-col gap-2 md:gap-0 items-baseline md:items-left text-primary text-md md:w-24 shrink-0 pb-2 md:pb-0 border-b border-primary/50 md:border-0">
                <p className="font-bold my-0 lg:my-2">Education</p>
                <p className="text-xs my-0 text-accent">in NCCU</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="text-primary text-sm md:text-md md:border-s border-primary/50 grow md:ps-4 md:space-y-4">
                <div className="group">
                  <div className="md:ps-2 py-1 lg:py-2 rounded-inner group-hover:bg-white/20 group-hover:translate-x-1 transition-all duration-500">
                    <p className="font-bold">國立政治大學</p>
                    <p className="text-xs md:text-sm text-primary">廣告學系 | 2023 - Now</p>
                  </div>
                </div>
                <div className="group">
                  <div className="md:ps-2 py-1 lg:py-2 rounded-inner group-hover:bg-white/20 group-hover:translate-x-1 transition-all duration-500">
                    <p className="font-bold">國立政治大學</p>
                    <p className="text-xs md:text-sm text-primary">數位內容與科技學士學位學程 | 2024 - Now</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Experience */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 border border-primary/50 rounded-inner px-4 py-2 w-full">
            <FadeIn>
              <div className="flex flex-row md:flex-col gap-2 md:gap-0 items-baseline md:items-left text-primary text-md md:w-24 shrink-0 pb-2 md:pb-0 border-b border-primary/50 md:border-0">
                <p className="font-bold my-0 lg:my-2">Experience</p>
                <p className="text-xs my-0 text-accent">in NCCU</p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="text-primary text-sm md:text-md md:border-s border-primary/50 grow md:ps-4 md:space-y-4">
                <div className="group">
                  <div className="md:ps-2 py-1 lg:py-2 rounded-inner group-hover:bg-white/20 group-hover:translate-x-1 transition-all duration-500">
                    <p className="font-bold">抓馬戲劇社 美宣</p>
                    <p className="text-xs md:text-sm text-primary">2025/02 - Now</p>
                  </div>
                </div>
                <div className="group">
                  <div className="md:ps-2 py-1 lg:py-2 rounded-inner group-hover:bg-white/20 group-hover:translate-x-1 transition-all duration-500">
                    <p className="font-bold">區塊鏈應用課程 展覽主視覺</p>
                    <p className="text-xs md:text-sm text-primary">2025/09 - 2025/12</p>
                  </div>
                </div>
                <div className="group">
                  <div className="md:ps-2 py-1 lg:py-2 rounded-inner group-hover:bg-white/20 group-hover:translate-x-1 transition-all duration-500">
                    <p className="font-bold">傳播學院數位平台年度大展 展覽組長</p>
                    <p className="text-xs md:text-sm text-primary">2025/09 - 2025/12</p>
                  </div>
                </div>
                <div className="group">
                  <div className="md:ps-2 py-1 lg:py-2 rounded-inner group-hover:bg-white/20 group-hover:translate-x-1 transition-all duration-500">
                    <p className="font-bold">傳播學院數位平台 教學組長</p>
                    <p className="text-xs md:text-sm text-primary">2025/02 - 2025/12</p>
                  </div>
                </div>
                <div className="group">
                  <div className="md:ps-2 py-1 lg:py-2 rounded-inner group-hover:bg-white/20 group-hover:translate-x-1 transition-all duration-500">
                    <p className="font-bold">包種茶節 視覺設計組</p>
                    <p className="text-xs md:text-sm text-primary">2023/09 - 2023/12</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Tag */}
          <div className="border-y border-primary/50">
          <FadeIn>
          <div className="flex flex-row justify-center items-center gap-8 lg:gap-6 md:gap-8 p-4 lg:p-8 w-full text-center font-bold text-sm lg:text-lg opacity-80">
            <p className="hidden md:block">互動設計</p>
            <p className="md:hidden">互動<br />設計</p>
            <span className="">x</span>
            <p className="hidden md:block">數位藝術</p>
            <p className="md:hidden">數位<br />藝術</p>
            <span className="">x</span>
            <p className="hidden md:block">網頁設計</p>
            <p className="md:hidden">網頁<br />設計</p>
            </div>
            </FadeIn>
          </div>




        <div className="bg-red-50/30 rounded-inner p-4 w-full">
          <div className="subtitle">Skill</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {/* skill 1 */}
            <SkillCard 
              category="Design & Creative"
              tags={['Illustrator', 'Photoshop', 'Lightroom', 'Figma', 'Blender']}
            />
            {/* skill 2 */}
            <SkillCard
              category="Coding & Interaction"
              tags={['HTML', 'CSS', 'Javascript', 'Tailwind CSS', "react.js", 'Next.js', 'p5.js', 'python', 'c++', 'c#']}
            />
          </div>
        </div>


        {/* Logo Loop */}
        <div className="mt-auto pt-5 flex justify-center w-full overflow-hidden">
          <div className="w-full max-w-2xl overflow-hidden">
            <div className="h-10 text-primary">
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
    </div>
  );
}