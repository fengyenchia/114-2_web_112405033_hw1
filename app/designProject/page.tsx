export const dynamic = 'force-dynamic';

import { db } from "@/lib/db";
import DesignProjectClient from "./DesignProjectClient";

import Image from "next/image"

import HomeButton from "@/components/homeButton";
import FadeIn from "@/components/fadeIn";


export default async function DesignProject() {
  const designProject = await db.designProject.findMany();
  return (
    <div className="custom-scrollbar w-full h-full p-4 md:p-8 lg:rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      <div className="flex flex-col gap-3 lg:gap-6 text-secondary w-full">
        {/* DesignProject */}
        <FadeIn>
          <div className="flex justify-between">
            <div className="title">Design Project</div>
            <HomeButton text="Home" href="/" />
          </div>
        </FadeIn>
        <hr className="border-primary/20" />

        {/* all card */}
        <FadeIn>
          <DesignProjectClient designProject={designProject} />
        </FadeIn>


        {/* 角色 */}
        <div className="flex-col w-full h-full">
          <FadeIn>
            <p className="text-secondary text-lg font-bold mb-3">角色</p>
          </FadeIn>

          <FadeIn>
            <div className="flex gap-4 md:gap-6">
              <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-x-red-200 border-y-red-100 shadow-md shadow-red-200 overflow-hidden flex justify-center items-center hover:rotate-360 transition-all duration-800 shrink-0">
                <Image src="/avatar.png" alt="avatar" loading="eager" width={80} height={80} className="w-full h-full object-cover" />
              </div>    

              <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-x-gray-400 border-y-gray-100 shadow-md shadow-red-200 overflow-hidden flex justify-center items-center hover:rotate-360 transition-all duration-800 shrink-0">
                <Image src="/avatar2.png" alt="avatar" loading="eager" width={80} height={80} className="w-full h-full object-cover" />
              </div>

              <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-x-purple-300 border-y-purple-100 shadow-md shadow-red-200 overflow-hidden flex justify-center items-center hover:rotate-360 transition-all duration-800 shrink-0">
                <Image src="/avatar3.png" alt="avatar" loading="eager" width={80} height={80} className="w-full h-full object-cover" />
              </div>
            </div>
          </FadeIn>

        </div>

        {/* 插圖 */}
        <div className="flex-col w-full h-full mb-4">
          <FadeIn>
            <p className="text-secondary text-lg font-bold mb-3">插圖</p>
          </FadeIn>
          <FadeIn>
            <div className="relative aspect-2/1 w-full overflow-hidden rounded-inner shadow-md shadow-red-200/50">
              <Image
                src="/design/banner.png"
                alt="bg"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="eager"
                className="object-cover hover:scale-105 transition-all duration-600"
              />
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  );
}