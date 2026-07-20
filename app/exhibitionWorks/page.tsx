"use client"
import Image from "next/image"
import ScrollVelocity from '@/components/ScrollVelocity';
import HomeButton from "@/components/homeButton";
import FadeIn from "@/components/fadeIn";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exhibition Works",
  alternates: {
    canonical: "/exhibitionWorks",
  },
};

// 1. 定義單個作品項目的型別架構
interface WorkItem {
  type: 'video' | 'image';
  src: string;
  alt: string;
  aspect: string;
  scale?: string;  // 針對圖片的細部縮放微調
  preload?: string;
}

// 2. 定義大區塊的型別架構
interface SectionData {
  title: string;
  subtitle: string;
  gridClass: string | null;
  items: WorkItem[];
}

// 3. 統一管理所有作品資料與文字描述
const EXHIBITION_SECTIONS: SectionData[] = [
  {
    title: "NCCU──Undefined一切尚在編譯中",
    subtitle: "展覽主視覺",
    gridClass: null,
    items: [
      { type: 'video', src: '/exhibition/nccu.mp4', alt: '區塊鏈應用 展覽主視覺', aspect: 'aspect-video md:aspect-3/1', preload: 'none' }
    ]
  },
  {
    title: "Through the Window",
    subtitle: "Through this window, I can see...",
    gridClass: "grid grid-cols-3 md:grid-cols-5 gap-3",
    items: [
      { type: 'video', src: '/exhibition/1.mp4', alt: 'Through the Window', aspect: 'aspect-3/4' },
      { type: 'video', src: '/exhibition/2.mp4', alt: 'Through the Window', aspect: 'aspect-3/4' },
      { type: 'video', src: '/exhibition/3.mp4', alt: 'Through the Window', aspect: 'aspect-3/4' },
      { type: 'video', src: '/exhibition/4.mp4', alt: 'Through the Window', aspect: 'aspect-3/4' },
      { type: 'video', src: '/exhibition/5.mp4', alt: 'Through the Window', aspect: 'aspect-3/4' },
    ]
  },
  {
    title: "Endless",
    subtitle: "幾何邊界被層層切分，無盡的空間隨之顯現",
    gridClass: "flex gap-3",
    items: [
      { type: 'image', src: '/exhibition/endless (1).png', alt: 'Endless', aspect: 'aspect-5/4' },
      { type: 'image', src: '/exhibition/endless (2).png', alt: 'Endless', aspect: 'aspect-5/4' },
      { type: 'image', src: '/exhibition/endless (3).png', alt: 'Endless', aspect: 'aspect-4/5' },
    ]
  },
  {
    title: "Flowing",
    subtitle: "This is a painting that resembles an oil painting",
    gridClass: "flex gap-3",
    items: [
      { type: 'image', src: '/exhibition/flowing (1).png', alt: 'Flowing', aspect: 'aspect-5/3', scale: 'scale-115' },
      { type: 'image', src: '/exhibition/flowing (3).png', alt: 'Flowing', aspect: 'aspect-5/3', scale: 'scale-120' },
      { type: 'image', src: '/exhibition/flowing (2).png', alt: 'Flowing', aspect: 'aspect-5/3', scale: 'scale-110' },
    ]
  }
];

export default function Exibition_Works() {
  return (
    <div className="custom-scrollbar w-full h-full p-4 md:p-8 lg:rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">
      
      <div className="flex flex-col gap-3 lg:gap-6 text-secondary w-full">
        <FadeIn>
          <div className="flex justify-between items-center">
            <div className="title text-xl font-bold tracking-wide">Exhibition Works</div>
            <HomeButton text="Home" href="/" />
          </div>
        </FadeIn>
        <hr className="border-primary/20" />

        {/* 內容主網格迭代 */}
        <div className="grid grid-cols-1 gap-8 w-full">
          {EXHIBITION_SECTIONS.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-4 w-full">
              
              {/* 說明文字 */}
              <FadeIn>
                <div className="flex flex-col lg:flex-row lg:justify-start lg:items-center lg:gap-4 text-primary pb-1">
                  <p className="font-bold pb-0! lg:text-lg lg:border-r border-primary/80 pr-4">{section.title}</p>
                  <p className="text-xs lg:text-sm">{section.subtitle}</p>
                </div>
              </FadeIn>

              {/* video, image */}
              <FadeIn>
                <div className={`${section.gridClass || 'grid grid-cols-1'} w-full`}>
                  {section.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className={`group relative ${item.aspect} w-full overflow-hidden rounded-inner`}
                    >
                      {item.type === 'video' ? (
                        <video 
                          src={item.src} 
                          controls={item.preload === 'none'} 
                          preload={item.preload || 'auto'} 
                          className="absolute inset-0 w-full h-full object-cover scale-101" 
                          autoPlay 
                          loop 
                          muted 
                          playsInline 
                        />
                      ) : (
                        <Image 
                          src={item.src} 
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                          alt={item.alt} 
                          fill 
                          loading="eager" 
                          className={`object-cover ${item.scale || ''}`} 
                        />
                      )}
                      
                      {/* Hover 遮罩 */}
                      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                        <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">
                          {item.alt}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

            </div>
          ))}
          
          {/* Scroll Text */}
          <div className="overflow-hidden pt-4">
            <ScrollVelocity
              texts={['Built with', 'p5.js']}
              velocity={50}
              numCopies={50}
              className="custom-scroll-text text-white/40 text-sm lg:text-xl"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
