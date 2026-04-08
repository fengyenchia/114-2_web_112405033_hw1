"use client"
import Image from "next/image"
import Link from "next/link";

export default function DesignProject() {
  return (
    <div className="custom-scrollbar w-full h-full p-8 rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      <div className="flex flex-col gap-6 text-gray-600 w-full">
        {/* DesignProject */}
        <div className="font-bold text-2xl">Design Project</div>
        <hr className="border-gray-500/20" />

        {/* 卡片 */}
        <div className="grid grid-cols-2 gap-6 w-full">
          {/* card 1 */}
          <div className="flex flex-col gap-8 border border-gray-500/10 rounded-md p-4 w-full shadow-lg hover:scale-101 transition-all duration-500">
            <div className="group relative aspect-5/3 w-full overflow-hidden bg-gray-900 rounded-sm border border-white/70">
              <Image
                src="/bg.png"
                alt="bg"
                fill
                loading="eager"
                className="object-cover mask-b-from-40% mask-b-to-100% transition-all duration-800 ease-in-out group-hover:scale-110"
              />
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
          {/* card 2 */}
          <div className="flex flex-col gap-8 border border-gray-500/10 rounded-md p-4 w-full shadow-lg hover:scale-101 transition-all duration-500">
            <div className="group relative aspect-5/3 w-full overflow-hidden bg-gray-900 rounded-sm border border-white/70">
              <Image
                src="/bg.png"
                alt="bg"
                fill
                loading="eager"
                className="object-cover mask-b-from-40% mask-b-to-100% transition-all duration-800 ease-in-out group-hover:scale-110"
              />
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
          {/* card 3 */}
          <div className="flex flex-col gap-8 border border-gray-500/10 rounded-md p-4 w-full shadow-lg hover:scale-101 transition-all duration-500">
            <div className="group relative aspect-5/3 w-full overflow-hidden bg-gray-900 rounded-sm border border-white/70">
              <Image
                src="/bg.png"
                alt="bg"
                fill
                loading="eager"
                className="object-cover mask-b-from-40% mask-b-to-100% transition-all duration-800 ease-in-out group-hover:scale-110"
              />
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
          {/* card 4 */}
          <div className="flex flex-col gap-8 border border-gray-500/10 rounded-md p-4 w-full shadow-lg hover:scale-101 transition-all duration-500">
            <div className="group relative aspect-5/3 w-full overflow-hidden bg-gray-900 rounded-sm border border-white/70">
              <Image
                src="/bg.png"
                alt="bg"
                fill
                loading="eager"
                className="object-cover mask-b-from-40% mask-b-to-100% transition-all duration-800 ease-in-out group-hover:scale-110"
              />
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
          {/* card 5 */}
          <div className="flex flex-col gap-8 border border-gray-500/10 rounded-md p-4 w-full shadow-lg hover:scale-101 transition-all duration-500">
            <div className="group relative aspect-5/3 w-full overflow-hidden bg-gray-900 rounded-sm border border-white/70">
              <Image
                src="/bg.png"
                alt="bg"
                fill
                loading="eager"
                className="object-cover mask-b-from-40% mask-b-to-100% transition-all duration-800 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="">
              <div>
                <p className="text-gray-600 font-bold text-lg">Resume Arena 作品</p>
                <p className="text-gray-500">個人創作</p>
              </div>
              <div className="text-gray-400 mt-2 text-sm">
                <p className="inline-block bg-red-50/80 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">VJ</p>
              </div>
              <Link href="https://fengyenchia.github.io/my-page/arts/resolume_arena_work/resolume_arena.html" target="/blank">
                <div className="w-full font-medium text-center mt-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-md transition-colors duration-200">
                  查看專案
                </div>
              </Link>
            </div>
          </div>
          {/* card 6 */}
          <div className="flex flex-col gap-8 border border-gray-500/10 rounded-md p-4 w-full shadow-lg hover:scale-101 transition-all duration-500">
            <div className="group relative aspect-5/3 w-full overflow-hidden bg-gray-900 rounded-sm border border-white/70">
              <Image
                src="/bg.png"
                alt="bg"
                fill
                loading="eager"
                className="object-cover mask-b-from-40% mask-b-to-100% transition-all duration-800 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="">
              <div>
                <p className="text-gray-600 font-bold text-lg">Figma 作品</p>
                <p className="text-gray-500">個人線上名片</p>
              </div>
              <div className="text-gray-400 mt-2 text-sm">
                <p className="inline-block bg-red-50/80 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">Resume</p>
              </div>
              <Link href="https://www.figma.com/proto/MJ8HnHLQ8dUah2NoTTYiv5?node-id=1-2" target="/blank">
                <div className="w-full font-medium text-center mt-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-md transition-colors duration-200">
                  查看專案
                </div>
              </Link>
            </div>
          </div>
        </div>


        {/* 角色 */}
        <div className="flex-col w-full h-full">
          <p className="text-gray-600 text-lg font-bold mb-3">角色</p>
          <div className="flex gap-6">
            <div className="bg-white w-[80px] h-[80px] rounded-full border-4 border-x-red-200 border-y-red-100 shadow-md shadow-red-200 overflow-hidden flex justify-center items-center hover:rotate-360 transition-all duration-800">
              <Image src="/avatar.png" alt="avatar" loading="eager" width={80} height={80} />
            </div>
            <div className="bg-white w-[80px] h-[80px] rounded-full border-4 border-x-gray-400 border-y-gray-100 shadow-md shadow-red-200 overflow-hidden flex justify-center items-center hover:rotate-360 transition-all duration-800">
              <Image src="/avatar2.png" alt="avatar" loading="eager" width={80} height={80} />
            </div>
            <div className="bg-white w-[80px] h-[80px] rounded-full border-4 border-x-purple-300 border-y-purple-100 shadow-md shadow-red-200 overflow-hidden flex justify-center items-center hover:rotate-360 transition-all duration-800">
              <Image src="/avatar3.png" alt="avatar" loading="eager" width={80} height={80} />
            </div>
          </div>
        </div>

        {/* 插圖 */}
        <div className="flex-col w-full h-full mb-4">
          <p className="text-gray-600 text-lg font-bold mb-3">插圖</p>
          <div className="relative aspect-5/1 w-full overflow-hidden rounded-lg shadow-md shadow-red-200/50">
            <Image
              src="/bg.png"
              alt="bg"
              fill
              loading="eager"
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}