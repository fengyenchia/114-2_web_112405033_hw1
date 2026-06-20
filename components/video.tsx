"use client"
import { useState } from 'react';
// import Image from "next/image";
import { ImEnlarge2 } from "react-icons/im";
import { RiCloseLargeFill } from "react-icons/ri";
import FadeIn from "@/components/fadeIn";

interface VideoCardProps {
  src: string;
  year: string;
  title: string;
  aspect?: string; // 支援 aspect-video 或 aspect-square
  scaleClass?: string; // 支援 lg:scale-60 或 scale-90
  enlargeScale?: string; // 放大圖示的級距 (如 scale-10 或 scale-6)
}

export default function Video({ 
  src, year, title, 
  aspect = "aspect-video", 
  scaleClass = "scale-90",
  enlargeScale = "scale-10"
}: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. 彈出燈箱 (Modal) */}
      {isOpen && (
        <div
          className="absolute inset-0 z-50 h-full w-full bg-black/60 rounded-inner backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <video
              src={src}
              autoPlay
              loop
              playsInline
              className={`absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 openLayer rounded-inner ${scaleClass}`}
            />
            <div 
              className="absolute top-[5%] right-[5%] text-md text-gray-200 hover:text-accent transition-all duration-400 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <RiCloseLargeFill />
            </div>
          </div>
        </div>
      )}

      {/* 2. 影片卡片本體 */}
      <FadeIn>
        <div className="flex flex-col md:flex-row gap-3 w-full">
          {/* 文字說明 */}
          <div className="content-end md:w-[40%]">
            <p className="text-primary text-sm">{year}</p>
            <p className="subtitle pb-0!">{title}</p>
          </div>
          {/* 影片預覽區域 */}
          <div 
            className={`relative w-full overflow-hidden rounded-inner shadow-md shadow-red-200/50 cursor-pointer ${aspect}`} 
            onClick={() => setIsOpen(true)}
          >
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className={`absolute inset-0 hover:bg-white/30 opacity-0 hover:opacity-100 hover:scale-150 transition-all duration-500 h-full w-full flex justify-center items-center ${aspect}`}>
              <ImEnlarge2 className={`text-white ${enlargeScale}`} />
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
}