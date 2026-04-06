"use client"
import Image from "next/image"
import Link from "next/link";

export default function DesignProject() {
  return (
    <div className="custom-scrollbar w-full h-full p-8 rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      <div className="flex flex-col gap-6 text-gray-600 w-full">
        {/* About */}
        <div className="font-bold text-2xl">Design Project</div>
        <hr className="border-gray-500/20" />

        {/* 卡片 */}
        <div className="grid grid-cols-2 gap-6 w-full">
          {/* card 1 */}
          <div className="flex flex-col gap-8 border border-gray-500/10 rounded-md p-4 w-full shadow-lg">
            <div className="rounded-sm overflow-hidden border border-white/50 bg-center">
              <Image src="/bg-2.png" alt="bg" loading="eager" width={500} height={0} />
            </div>
            <div className="">
              <div>
                <p className="text-gray-600 font-bold text-lg">角色設計</p>
                <p className="text-gray-500">創意與設計</p>
              </div>
              <div className="text-gray-400 mt-2 text-sm">
                <p className="inline-block bg-red-50/80 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">手工書</p>
                <p className="inline-block bg-red-50/80 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">Illustrator</p>
              </div>
              <Link href="https://fengyenchia.github.io/my-page/arts/character/character.html" target="/blank">
                <div className="w-full font-medium text-center mt-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-md transition-colors duration-200">
                  查看專案
                </div>
              </Link>
            </div>
          </div>
          {/* card 1 */}
          <div className="flex flex-col gap-8 border border-gray-500/10 rounded-md p-4 w-full shadow-lg">
            <div className="rounded-sm overflow-hidden border border-white/50 bg-center">
              <Image src="/bg-2.png" alt="bg" loading="eager" width={500} height={0} />
            </div>
            <div className="">
              <div>
                <p className="text-gray-600 font-bold text-lg">遊戲化專題</p>
                <p className="text-gray-500">美學概論</p>
              </div>
              <div className="text-gray-400 mt-2 text-sm">
                <p className="inline-block bg-red-50/80 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">gather town</p>
                <p className="inline-block bg-red-50/80 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">八角理論</p>
                <p className="inline-block bg-red-50/80 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">化學</p>
              </div>
              <Link href="https://www.notion.so/21416d8cb3a8807aa89ac427c4bb30f7" target="/blank">
                <div className="w-full font-medium text-center mt-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-md transition-colors duration-200">
                  查看專案
                </div>
              </Link>
            </div>
          </div>
          {/* card 1 */}
          <div className="flex flex-col gap-8 border border-gray-500/10 rounded-md p-4 w-full shadow-lg">
            <div className="rounded-sm overflow-hidden border border-white/50 bg-center">
              <Image src="/bg-2.png" alt="bg" loading="eager" width={500} height={0} />
            </div>
            <div className="">
              <div>
                <p className="text-gray-600 font-bold text-lg">漫畫</p>
                <p className="text-gray-500">圖像與文創</p>
              </div>
              <div className="text-gray-400 mt-2 text-sm">
                <p className="inline-block bg-red-50/80 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">Illustrator</p>
              </div>
              <Link href="https://fengyenchia.github.io/my-page/arts/comic/comic.html" target="/blank">
                <div className="w-full font-medium text-center mt-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-md transition-colors duration-200">
                  查看專案
                </div>
              </Link>
            </div>
          </div>
          {/* card 1 */}
          <div className="flex flex-col gap-8 border border-gray-500/10 rounded-md p-4 w-full shadow-lg">
            <div className="rounded-sm overflow-hidden border border-white/50 bg-center">
              <Image src="/bg-2.png" alt="bg" loading="eager" width={500} height={0} />
            </div>
            <div className="">
              <div>
                <p className="text-gray-600 font-bold text-lg">海報設計</p>
                <p className="text-gray-500">創意與設計</p>
              </div>
              <div className="text-gray-400 mt-2 text-sm">
                <p className="inline-block bg-red-50/80 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">Photoshop</p>
                <p className="inline-block bg-red-50/80 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">Illustrator</p>
              </div>
              <Link href="https://fengyenchia.github.io/my-page/arts/post/post.html" target="/blank">
                <div className="w-full font-medium text-center mt-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-md transition-colors duration-200">
                  查看專案
                </div>
              </Link>
            </div>
          </div>
        </div>


        <div>
          一些插畫
        </div>


      </div>
    </div >
  );
}