"use client"
import Image from "next/image"
import Link from "next/link";

import { ImEnlarge2 } from "react-icons/im";
import { RiCloseLargeFill } from "react-icons/ri";


import { useState } from 'react';

export default function Three_D_Works() {
  const [showVideo_1, setShowVideo_1] = useState(false);
  const [showVideo_2, setShowVideo_2] = useState(false);
  const [showVideo_3, setShowVideo_3] = useState(false);
  return (
    <div className="custom-scrollbar w-full h-full p-4 md:p-8 rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      {/* open video_1 */}
      {showVideo_1 && (
        <div
          className="absolute inset-0 z-1 h-full w-full bg-black/60 rounded-lg"
          onClick={() => setShowVideo_1(false)}>
          {/* 防止點擊影片時也關閉 */}
          <div onClick={(e) => e.stopPropagation()}>
            <video
              src="/video/1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 openLayer scale-90 rounded-lg"
            />
            {/* close */}
            <div className="absolute top-[5%] right-[5%] text-md text-gray-200 hover:text-gray-400 transition-all duration-400"
              onClick={() => setShowVideo_1(false)}><RiCloseLargeFill /></div>
          </div>
        </div>
      )}
      {/* open video_2 */}
      {showVideo_2 && (
        <div
          className="absolute inset-0 z-1 h-full w-full bg-black/60 rounded-lg"
          onClick={() => setShowVideo_2(false)}>
          {/* 防止點擊影片時也關閉 */}
          <div onClick={(e) => e.stopPropagation()}>
            <video
              src="/video/2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 openLayer scale-90 rounded-lg"
            />
            {/* close */}
            <div className="absolute top-[5%] right-[5%] text-md text-gray-200 hover:text-gray-400 transition-all duration-400"
              onClick={() => setShowVideo_2(false)}><RiCloseLargeFill /></div>
          </div>
        </div>
      )}
      {/* open video_3 */}
      {showVideo_3 && (
        <div
          className="absolute inset-0 z-1 h-full w-full bg-black/60 rounded-lg"
          onClick={() => setShowVideo_3(false)}>
          {/* 防止點擊影片時也關閉 */}
          <div onClick={(e) => e.stopPropagation()}>
            <video
              src="/video/3.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 openLayer scale-90 lg:scale-60 rounded-lg"
            />
            {/* close */}
            <div className="absolute top-[5%] right-[5%] text-md text-gray-200 hover:text-gray-400 transition-all duration-400"
              onClick={() => setShowVideo_3(false)}><RiCloseLargeFill /></div>
          </div>
        </div>
      )}




      <div className="flex flex-col gap-6 text-gray-600 w-full">
        {/* Three_D_Works */}
        <div className="flex justify-between">
          <div className="inline-block font-bold text-2xl">3D Works</div>
          <Link href="../">
            <div className="hidden lg:inline-block text-md text-white/50 border border-white/50 rounded-lg py-1 px-2 shadow-md hover:bg-white/50 hover:translate-y-0.5 hover:text-gray-500 hover:border-gray-400 transition-all duration-500">
              Home
            </div>
          </Link>
        </div>
        <hr className="border-gray-500/20" />

        {/* 圖片 */}
        <div className="flex flex-col gap-6 w-full">
          {/* video 1 */}
          <div className="flex flex-col md:flex-row gap-3 w-full">
            {/* text */}
            <div className="content-end md:w-[40%]">
              <p className="text-gray-500 text-sm">2026</p>
              <p className="font-bold text-md md:text-lg text-gray-600">Procedural LOGO Sequence Animation</p>
            </div>
            {/* video */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md shadow-red-200/50 cursor-pointer" onClick={() => setShowVideo_1(true)}>
              <video
                src="/video/1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 hover:bg-white/30 opacity-0 hover:opacity-100 hover:scale-150 transition-all duration-500 aspect-video h-full w-full"><ImEnlarge2 className="w-full h-full scale-10" /></div>
            </div>
          </div>
          {/* video 2 */}
          <div className="flex flex-col md:flex-row gap-3 w-full">
            {/* text */}
            <div className="content-end md:w-[40%]">
              <p className="text-gray-500 text-sm">2026</p>
              <p className="font-bold text-md md:text-lg text-gray-600">NCCU LOGO Animation</p>
            </div>
            {/* video */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md shadow-red-200/50 cursor-pointer" onClick={() => setShowVideo_2(true)}>
              <video
                src="/video/2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 hover:bg-white/30 opacity-0 hover:opacity-100 hover:scale-150 transition-all duration-500 aspect-video h-full w-full"><ImEnlarge2 className="w-full h-full scale-10" /></div>
            </div>
          </div>
          {/* video 3 */}
          <div className="flex flex-col md:flex-row gap-3 w-full">
            {/* text */}
            <div className="content-end md:w-[40%]">
              <p className="text-gray-500 text-sm">2025</p>
              <p className="font-bold text-md md:text-lg text-gray-600">Alarm Clock Animation</p>
            </div>
            {/* video */}
            <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-md shadow-red-200/50 cursor-pointer" onClick={() => setShowVideo_3(true)}>
              <video
                src="/video/3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 hover:bg-white/30 opacity-0 hover:opacity-100 hover:scale-150 transition-all duration-500 aspect-square h-full w-full"><ImEnlarge2 className="w-full h-full scale-6" /></div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
