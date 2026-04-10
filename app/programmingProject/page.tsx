"use client"
import Image from "next/image"
import Link from "next/link";

export default function Programming_Project() {

  return (
    <div className="custom-scrollbar w-full h-full p-4 md:p-8 rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      <div className="flex flex-col gap-6 text-gray-600 w-full">
        {/* Programming Project */}
        <div className="flex justify-between">
          <div className="inline-block font-bold text-2xl">Programming Project</div>
          <Link href="../">
            <div className="hidden lg:inline-block text-md text-white/50 border border-white/50 rounded-lg py-1 px-2 shadow-md hover:bg-white/50 hover:translate-y-0.5 hover:text-gray-500 hover:border-gray-400 transition-all duration-500">
              Home
            </div>
          </Link>
        </div>
        <hr className="border-gray-500/20" />

        {/* 卡片 */}
        <div className="grid grid-cols-1 gap-6 w-full">
          {/* card 1 */}
          <div className="flex flex-col gap-8 border border-gray-500/10 rounded-md p-4 w-full shadow-lg hover:scale-101 transition-all duration-500">
            <div className="group relative aspect-2/1 md:aspect-3/1 w-full overflow-hidden bg-black/60 hover:bg-black/80 transition-all duration-800 rounded-lg border border-white/70">
              <Image
                src="/pragramming/p5jsWebsite.png"
                alt="bg"
                fill
                loading="eager"
                className="object-cover transition-all duration-800 ease-in-out group-hover:scale-110 group-hover:brightness-75"
              />
            </div>
            <div className="">
              <div>
                <p className="text-gray-600 font-bold text-lg">side project - p5.js 作品管理網頁</p>
                <p className="mt-1 text-gray-400 text-xs">2026</p>
              </div>
              <div className="text-gray-500 mt-2 text-sm">
                <p className="mb-2">編寫 p5.js 程式可以在線上編輯器或是本機執行，不過線上版的有檔案儲存大小限制，且不支持熱鍵使用；而本機執行則面臨重複複製套件、浪費電腦空間的痛點。</p>
                <p className="mb-4">為了解決此問題，我開發了一個 p5.js 專案管理工具。利用 Node.js 建立自動化腳本，每次只需在終端機輸入一行命令即可產生新專案。這個工具的重點是共用核心套件，讓不同專案間不需要重複存放相同的 library 檔案，不僅節省空間，更能透過統一的介面有效管理與展示多個作品。</p>
              </div>
              <div className="flex justify-around gap-6">
                <Link href="https://fengyenchia.github.io/p5-project-archive/" target="/blank" className="block w-full">
                  <div className="w-full font-medium text-center mt-3 py-2 px-auto bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-md transition-colors duration-200">
                    查看網站
                  </div>
                </Link>
                <Link href="https://github.com/fengyenchia/p5-project-archive" target="/blank" className="block w-full">
                  <div className="w-full font-medium text-center mt-3 py-2 px-auto bg-red-100 hover:bg-red-200 text-gray-500 rounded-md transition-colors duration-200">
                    Github
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="flex flex-col gap-8 border border-gray-500/10 rounded-md p-4 w-full shadow-lg hover:scale-101 transition-all duration-500">
            <div className="group relative aspect-2/1 md:aspect-3/1 w-full overflow-hidden bg-black/60 hover:bg-black/80 transition-all duration-800 rounded-lg border border-white/70">
              <Image
                src="/pragramming/p5js.png"
                alt="bg"
                fill
                loading="eager"
                className="object-cover transition-all duration-800 ease-in-out group-hover:scale-110 group-hover:brightness-75"
              />
            </div>
            <div className="">
              <div>
                <p className="text-gray-600 font-bold text-lg">P5.js 生成式藝術</p>
                <p className="mt-1 text-gray-400 text-xs">2025</p>
              </div>
              <div className="text-gray-500 mt-2 text-sm">
                <p className="mb-4">使用 p5.js 創作的作品</p>
              </div>
              <div className="flex justify-around gap-6">
                <Link href="https://openprocessing.org/user/522490#sketches" target="/blank" className="block w-full">
                  <div className="w-full font-medium text-center mt-3 py-2 px-auto bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-md transition-colors duration-200">
                    查看網站
                  </div>
                </Link>
                <Link href="https://www.editart.xyz/user/tz2RZFK3wYNAmrypca9JexAkUgNnEzYhBkX2" target="/blank" className="block w-full">
                  <div className="w-full font-medium text-center mt-3 py-2 px-auto bg-red-100 hover:bg-red-200 text-gray-500 rounded-md transition-colors duration-200">
                    EditArt
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="flex flex-col gap-8 border border-gray-500/10 rounded-md p-4 w-full shadow-lg hover:scale-101 transition-all duration-500">
            <div className="group relative aspect-2/1 md:aspect-3/1 w-full overflow-hidden bg-black/60 hover:bg-black/80 transition-all duration-800 rounded-lg border border-white/70">
              <Image
                src="/pragramming/js.png"
                alt="bg"
                fill
                loading="eager"
                className="object-cover transition-all duration-800 ease-in-out group-hover:scale-110 group-hover:brightness-75"
           
              />
            </div>
            <div className="">
              <div>
                <p className="text-gray-600 font-bold text-lg">Javascript 遊戲專題</p>
                <p className="mt-1 text-gray-400 text-xs">2025</p>
              </div>
              <div className="text-gray-500 mt-2 text-sm">
                <p className="mb-4">我在這個專題中，負責技術（javascript、p5.js）的部分</p>
              </div>
              <div className="flex justify-around gap-6">
                <Link href="https://fengyenchia.github.io/js_final_project/public/00/" target="/blank" className="block w-full">
                  <div className="w-full font-medium text-center mt-3 py-2 px-auto bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-md transition-colors duration-200">
                    查看網站
                  </div>
                </Link>
                <Link href="https://github.com/fengyenchia/js_final_project" target="/blank" className="block w-full">
                  <div className="w-full font-medium text-center mt-3 py-2 px-auto bg-red-100 hover:bg-red-200 text-gray-500 rounded-md transition-colors duration-200">
                    Github
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div >
  );
}
