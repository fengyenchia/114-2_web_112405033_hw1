"use client"
// import Image from "next/image"
import Link from "next/link";

import ProgrammingCard from "@/components/programmingCard";

const programmingData = [
  {
    "src": "/pragramming/website.png",
    "title": "personal website",
    "year": "2026",
    "description": "用 Next.js 框架開發的個人網站，並搭配 React, Tailwind CSS 來製作。",
    "href_1": "https://114-2-web-112405033-hw1.vercel.app/",
    "href_2": "https://github.com/fengyenchia/114-2_web_112405033_hw1",
    "href_2_word": "Github"
  },
  {
    "src": "/pragramming/p5jsWebsite.png",
    "title": "side project - p5.js 作品管理網頁",
    "year": "2026",
    "description": "編寫 p5.js 程式可以在線上編輯器或是本機執行，不過線上版的有檔案儲存大小限制，且不支持熱鍵使用；而本機執行則面臨重複複製套件、浪費電腦空間的痛點。為了解決此問題，我開發了一個 p5.js 專案管理工具。利用 Node.js 建立自動化腳本，每次只需在終端機輸入一行命令即可產生新專案。這個工具的重點是共用核心套件，讓不同專案間不需要重複存放相同的 library 檔案，不僅節省空間，更能透過統一的介面有效管理與展示多個作品。",
    "href_1": "https://fengyenchia.github.io/p5-project-archive/",
    "href_2": "https://github.com/fengyenchia/p5-project-archive",
    "href_2_word": "Github"
  },
  {
    "src": "/pragramming/p5js.png",
    "title": "P5.js 生成式藝術",
    "year": "2025",
    "description": "使用 p5.js 創作的作品",
    "href_1": "https://openprocessing.org/user/522490#sketches",
    "href_2": "https://www.editart.xyz/user/tz2RZFK3wYNAmrypca9JexAkUgNnEzYhBkX2",
    "href_2_word": "EditArt"
  },
  {
    "src": "/pragramming/js.png",
    "title": "Javascript 遊戲專題",
    "year": "2025",
    "description": "我在這個專題中，負責技術（javascript、p5.js）的部分",
    "href_1": "https://fengyenchia.github.io/js_final_project/public/00/",
    "href_2": "https://github.com/fengyenchia/js_final_project",
    "href_2_word": "Github"
  }
];


export default function Programming_Project() {

  return (
    <div className="custom-scrollbar w-full h-full p-4 md:p-8 lg:rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      <div className="flex flex-col gap-3 lg:gap-6 text-gray-600 w-full">
        {/* Programming Project */}
        <div className="flex justify-between">
          <div className="title">Programming Project</div>
          <Link href="../">
            <div className="hidden lg:inline-block text-md text-white/50 border border-white/50 rounded-lg py-1 px-2 shadow-md hover:bg-white/50 hover:translate-y-0.5 hover:text-gray-500 hover:border-gray-400 transition-all duration-500">
              Home
            </div>
          </Link>
        </div>
        <hr className="border-gray-500/20" />

        {/* all cards */}
        <div className="grid grid-cols-1 gap-6 w-full">
          {programmingData.map((item, index) => (
            <ProgrammingCard 
              key={index} // React 循環需要唯一的 key
              src={item.src}
              title={item.title}
              year={item.year}
              description={item.description}
              href_1={item.href_1}
              href_2={item.href_2}
              href_2_word={item.href_2_word}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
