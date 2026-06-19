"use client"
import Image from "next/image"
import Link from "next/link";

import DesignCard from "@/components/designCard";

const designData = [
  {
    "src": "/design/character.png",
    "title": "角色設計",
    "category": "創意與設計",
    "tags": ["手工書", "Illustrator"],
    "href": "https://fengyenchia.github.io/my-page/arts/character/character.html"
  },
  {
    "src": "/design/gatherTown.png",
    "title": "遊戲化專題",
    "category": "美學概論",
    "tags": ["八角理論", "化學"],
    "href": "https://www.notion.so/21416d8cb3a8807aa89ac427c4bb30f7"
  },
  {
    "src": "/design/comic.png",
    "title": "漫畫",
    "category": "圖像與文創",
    "tags": ["Illustrator"],
    "href": "https://fengyenchia.github.io/my-page/arts/comic/comic.html"
  },
  {
    "src": "/design/poster.png",
    "title": "海報設計",
    "category": "接案",
    "tags": ["Photoshop", "Illustrator"],
    "href": "https://fengyenchia.github.io/my-page/arts/post/post.html"
  },
  {
    "src": "/design/arena.png",
    "title": "Resume Arena 作品",
    "category": "個人創作",
    "tags": ["VJ"],
    "href": "https://fengyenchia.github.io/my-page/arts/resolume_arena_work/resolume_arena.html"
  },
  {
    "src": "/design/figma.png",
    "title": "Figma 作品",
    "category": "個人線上名片",
    "tags": ["Resume"],
    "href": "https://www.figma.com/proto/MJ8HnHLQ8dUah2NoTTYiv5?node-id=1-2"
  },
  {
    "src": "/design/ar.png",
    "title": "AR 遊戲專題",
    "category": "創意與設計 - 小組專題 金獎",
    "tags": ["AR", "Illustrator"],
    "href": "https://drive.google.com/file/d/1BMg7HhCWwqQwmG8YZTqHS4bn-g0yXduX/view?usp=sharing"
  },
  {
    "src": "/design/figma_2.png",
    "title": "Figma 作品",
    "category": "解謎遊戲 - 完美人設的代價",
    "tags": ["社群媒體焦慮"],
    "href": "https://www.figma.com/proto/bdzyi2jP0SbqMH5EG1bjW8/%E5%B0%88%E9%A1%8C?node-id=434-2320&p=f&viewport=2486%2C385%2C0.31&t=eBxwKEDJ3WgyVrOh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=434%3A2320&page-id=4%3A7",
    "className": "col-span-2",
    "aspect": "aspect-3/1"
  }
]

export default function DesignProject() {
  return (
    <div className="custom-scrollbar w-full h-full p-4 md:p-8 lg:rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      <div className="flex flex-col gap-3 lg:gap-6 text-gray-600 w-full">
        {/* DesignProject */}
        <div className="flex justify-between">
          <div className="title">Design Project</div>
          <Link href="../">
            <div className="hidden lg:inline-block text-md text-white/50 border border-white/50 rounded-lg py-1 px-2 shadow-md hover:bg-white/50 hover:translate-y-0.5 hover:text-gray-500 hover:border-gray-400 transition-all duration-500">
              Home
            </div>
          </Link>
        </div>
        <hr className="border-gray-500/20" />

        {/* all card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {designData.map((item, index) => (
            <DesignCard 
              key={index} // React 循環需要唯一的 key
              src={item.src}
              title={item.title}
              category={item.category}
              tags={item.tags}
              href={item.href}
            />
          ))}
        </div>


        {/* 角色 */}
        <div className="flex-col w-full h-full">
          <p className="text-gray-600 text-lg font-bold mb-3">角色</p>
          <div className="flex gap-6">
            <div className="bg-white w-full md:w-20 h-full md:h-20 rounded-full border-4 border-x-red-200 border-y-red-100 shadow-md shadow-red-200 overflow-hidden flex justify-center items-center hover:rotate-360 transition-all duration-800">
              <Image src="/avatar.png" alt="avatar" loading="eager" width={80} height={80} />
            </div>
            <div className="bg-white w-full md:w-20 h-full md:h-20 rounded-full border-4 border-x-gray-400 border-y-gray-100 shadow-md shadow-red-200 overflow-hidden flex justify-center items-center hover:rotate-360 transition-all duration-800">
              <Image src="/avatar2.png" alt="avatar" loading="eager" width={80} height={80} />
            </div>
            <div className="bg-white w-full md:w-20 h-full md:h-20 rounded-full border-4 border-x-purple-300 border-y-purple-100 shadow-md shadow-red-200 overflow-hidden flex justify-center items-center hover:rotate-360 transition-all duration-800">
              <Image src="/avatar3.png" alt="avatar" loading="eager" width={80} height={80} />
            </div>
          </div>
        </div>

        {/* 插圖 */}
        <div className="flex-col w-full h-full mb-4">
          <p className="text-gray-600 text-lg font-bold mb-3">插圖</p>
          <div className="relative aspect-2/1 w-full overflow-hidden rounded-lg shadow-md shadow-red-200/50">
            <Image
              src="/design/banner.png"
              alt="bg"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}