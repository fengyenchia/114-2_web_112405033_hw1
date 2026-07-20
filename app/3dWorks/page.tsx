export const dynamic = 'force-dynamic';

import { db } from "@/lib/db";
import ThreeDWorksClient from "./ThreeDWorksClient";

import Image from "next/image"

import HomeButton from '@/components/homeButton';
import FadeIn from "@/components/fadeIn";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3d Works",
  alternates: {
    canonical: "/3dWorks",
  },
};


const printingImages = ["/3d/2.jpg", "/3d/3.jpg", "/3d/1.jpg"];

export default async function Three_D_Works() {
  const videoWorks = await db.threeDWorks.findMany({
    orderBy: {
      year: "desc",
    },
  });
  return (
    <div className="custom-scrollbar w-full h-full p-4 md:p-8 lg:rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">
      
      {/* 標題 */}
      <div className="flex flex-col gap-3 lg:gap-6 text-secondary w-full">
        <FadeIn>
          <div className="flex justify-between">
            <div className="title">3D Works</div>
            <HomeButton text="Home" href="/" />
          </div>
        </FadeIn>
        <hr className="border-primary/20" />

        {/* 1. 3D 影片作品列表 */}
        <ThreeDWorksClient threeDWorks={videoWorks}/>

        {/* 2. 3D 列印模型區 */}
        <hr className="border-primary/20" />
        <FadeIn>
          <div className="flex justify-between">
            <div className="subtitle pb-0!">3D Printing Models</div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-row gap-3 w-full">
            {printingImages.map((imgSrc, idx) => (
              <div key={idx} className="relative aspect-3/4 w-1/3 overflow-hidden rounded-inner shadow-md shadow-red-200/50">
                <Image 
                  src={imgSrc} 
                  alt="3d model" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                  loading="eager" 
                  className="object-cover hover:scale-105 transition-all duration-600" 
                />
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </div>
  );
}