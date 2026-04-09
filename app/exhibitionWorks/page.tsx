"use client"
import Image from "next/image"
import Link from "next/link";

import ScrollVelocity from '@/components/ScrollVelocity';


export default function Exibition_Works() {

  return (
    <div className="custom-scrollbar w-full h-full p-8 rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      <div className="flex flex-col gap-6 text-gray-600 w-full">
        {/* Exibition Works */}
        <div className="flex justify-between">
          <div className="inline-block font-bold text-2xl">Exibition Works</div>
          <Link href="../">
            <div className="hidden lg:inline-block text-md text-white/50 border border-white/50 rounded-lg py-1 px-2 shadow-md hover:bg-white/50 hover:translate-y-0.5 hover:text-gray-500 hover:border-gray-400 transition-all duration-500">
              Home
            </div>
          </Link>
        </div>
        <hr className="border-gray-500/20" />

        {/* 圖片 */}
        <div className="grid grid-cols-1 gap-6 w-full">
          {/* row 1 */}
          <div className="flex gap-3 w-full">
            {/* picture 1 */}
            <div className="group relative aspect-video md:aspect-3/1 w-full overflow-hidden rounded-sm">
              <video controls preload="none" className="absolute inset-0 scale-101 h-full w-full object-cover" autoPlay loop muted playsInline>
                <source src="/exhibition/主視覺影片.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 
                opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">
                  區塊鏈應用 展覽主視覺
                </p>
              </div>

            </div>
          </div>
          {/* row 2 */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 w-full">
            {/* picture 1 */}
            <div className="group relative col-span-3 md:col-span-1 aspect-3/4 w-full flex-1 min-w-0 overflow-hidden rounded-sm">
              <video
                src="/exhibition/1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 
                opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Through the Window
                </p>
              </div>
            </div>
            {/* picture 2 */}
            <div className="group relative aspect-3/4 w-full flex-1 min-w-0 overflow-hidden rounded-sm">
              <video
                src="/exhibition/2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 
                opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Through the Window
                </p>
              </div>
            </div>
            {/*  picture 3 */}
            <div className="group relative aspect-3/4 w-full flex-1 min-w-0 overflow-hidden rounded-sm">
              <video
                src="/exhibition/3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 
                opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Through the Window
                </p>
              </div>
            </div>
            {/* picture 4 */}
            <div className="group relative aspect-3/4 w-full flex-1 min-w-0 overflow-hidden rounded-sm">
              <video
                src="/exhibition/4.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 
                opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Through the Window
                </p>
              </div>
            </div>
            {/* picture 5 */}
            <div className="group relative col-span-3 md:col-span-1 aspect-3/4 w-full flex-1 min-w-0 overflow-hidden rounded-sm">
              <video
                src="/exhibition/5.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 
                opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Through the Window
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <ScrollVelocity
              texts={['Built with', 'p5.js']}
              velocity={50}
              numCopies={20}
              className="custom-scroll-text text-white/20 text-md"
            />
          </div>


          {/* row 3 */}
          <div className="flex gap-3 w-full">
            {/* picture 1 */}
            <div className="group relative aspect-5/4 w-full flex-1 overflow-hidden rounded-sm">
              <Image
                src="/exhibition/無盡 (1).png"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="bg"
                fill
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 
                opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Endless
                </p>
              </div>
            </div>
            {/* picture 2 */}
            <div className="group relative aspect-5/4 w-full flex-1 overflow-hidden rounded-sm">
              <Image
                src="/exhibition/無盡 (4).png"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="bg"
                fill
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 
                opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Endless
                </p>
              </div>
            </div>
            {/* picture 3 */}
            <div className="group relative aspect-4/5 w-full flex-1 overflow-hidden rounded-sm">
              <Image
                src="/exhibition/無盡 (2).png"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="bg"
                fill
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 
                opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Endless
                </p>
              </div>
            </div>
          </div>
          {/* row 4 */}
          <div className="flex gap-3 w-full">
            {/* picture 1 */}
            <div className="group relative aspect-5/2 w-full flex-1 overflow-hidden rounded-sm">
              <Image
                src="/exhibition/flowing (1).png"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="bg"
                fill
                loading="eager"
                className="object-cover scale-115"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 
                opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Flowing
                </p>
              </div>
            </div>
            {/* picture 2 */}
            <div className="group relative aspect-5/2 w-full flex-3 overflow-hidden rounded-sm">
              <Image
                src="/exhibition/flowing (2).png"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="bg"
                fill
                loading="eager"
                className="object-cover scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 
                opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Flowing
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
