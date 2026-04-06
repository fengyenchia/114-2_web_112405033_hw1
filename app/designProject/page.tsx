"use client"
import Image from "next/image"


export default function DesignProject() {
  return (
    <div className="custom-scrollbar w-full h-full p-8 rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      <div className="flex flex-col gap-6 text-gray-600 w-full">
        {/* About */}
        <div className="font-bold text-2xl">Design Project</div>
        <hr className="border-gray-500/20" />
        <div className="text-gray-500 py-2 text-md leading-relaxed">
          我是個熱衷於嘗試新事物且喜歡挑戰的人，對我來說，設計的靈感來自生活，我時常將設計與科技結合，透過程式、互動技術或是其他數位工具，讓創意與美的展現有更多可能。我也擅長以簡潔的線條、擬人的物件，搭配可愛的色彩來呈現作品，藉此傳達出活潑卻也讓人眼前一亮的感覺。
        </div>

        {/* Education & Experience  */}
        <div className="flex flex-col gap-4 w-full">

          {/* Education */}
          <div className="flex gap-8 border border-gray-500/50 rounded-md p-4 w-full">
            <div className="text-gray-500 text-md w-24 shrink-0">
              <p className="font-bold">Education</p>
              <p className="text-xs text-gray-400">in NCCU</p>
            </div>
            <div className="text-gray-500 text-md border-s border-gray-500/50 ps-6 grow space-y-4">
              <div>
                <p className="font-bold">國立政治大學</p>
                <p className="text-sm text-gray-500">廣告學系 | 2023 - Now</p>
              </div>
              <div>
                <p className="font-bold">國立政治大學</p>
                <p className="text-sm text-gray-500">數位內容與科技學士學位學程 | 2023 - Now</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="flex gap-8 border border-gray-500/50 rounded-md p-4 w-full">
            <div className="text-gray-500 text-md w-24 shrink-0">
              <p className="font-bold">Experience</p>
              <p className="text-xs text-gray-400">in NCCU</p>
            </div>
            <div className="text-gray-500 text-md border-s border-gray-500/50 ps-6 grow space-y-4">
              <div>
                <p className="font-bold">抓馬戲劇社 美宣</p>
                <p className="text-sm text-gray-500">2025/02 - Now</p>
              </div>
              <div>
                <p className="font-bold">區塊鏈應用課程 展覽主視覺</p>
                <p className="text-sm text-gray-500">2025/09 - 2025/12</p>
              </div>
              <div>
                <p className="font-bold">傳播學院數位平台年度大展 展覽組長</p>
                <p className="text-sm text-gray-500">2025/09 - 2025/12</p>
              </div>
              <div>
                <p className="font-bold">傳播學院數位平台 教學組長</p>
                <p className="text-sm text-gray-500">2025/02 - 2025/12</p>
              </div>
              <div>
                <p className="font-bold">包種茶節 視覺設計組</p>
                <p className="text-sm text-gray-500">2023/09 - 2023/12</p>
              </div>
            </div>
          </div>

        </div>

        {/* Tag */}
        <div className="flex flex-row justify-center gap-8 p-8 w-full text-center font-bold text-lg border-y border-gray-500/50 my-4 opacity-80">
          <p>互動設計</p>
          <span className="">x</span>
          <p>數位藝術</p>
          <span className="">x</span>
          <p>網頁設計</p>
        </div>




        <div className="bg-red-50/30 rounded-md p-4 w-full">
          <div className="pb-3 text-gray-600 font-bold text-lg">Skill</div>
          <div className="flex flex-row gap-4 w-full">
            {/* skill 1 */}
            <div className="flex flex-col gap-8 border border-gray-500/50 rounded-md p-4 w-full">
              <div className="text-gray-600 text-md border-b pb-4 border-gray-500/50">
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
            <div className="flex flex-col gap-8 border border-gray-500/50 rounded-md p-4 w-full">
              <div className="text-gray-600 text-md border-b pb-4 border-gray-500/50">
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


      

      </div>
    </div>
  );
}