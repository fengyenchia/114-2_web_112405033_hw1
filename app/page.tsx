"use client"

import Image from "next/image"
import Link from "next/link";

import TrueFocus from '@/components/TrueFocus';
// import ScrollVelocity from '@/components/ScrollVelocity';

export default function Home() {

  return (
    <div className="w-full h-full p-8 rounded-xl">

      <div className="flex flex-col justify-center items-center gap-12 w-full h-full text-center text-gray-500">
        <div className="font-bold text-4xl">
          <TrueFocus
            sentence="Yen-Chia, Feng"
            manualMode={false}
            blurAmount={8}
            borderColor="#ffc9c9"
            animationDuration={1.0}
            pauseBetweenAnimations={1.5}
          />
        </div>
        <div className=" font-bold text-4xl">Portfolio</div>
        <div className="text-center text-gray-500 pb-2 text-lg">[ 對我來說，將設計與程式結合，做出有趣的互動作品，是一件很好玩的事 ]</div>
      </div>

      {/* <div className="font-medium text-lg text-white">
        <ScrollVelocity
          texts={['Daily Life is the wellspring of my design inspiration', '對我來說，設計的靈感來自生活，我熱衷於將設計與科技結合，透過程式、互動技術或是其他數位工具，讓創意與美的展現有更多可能。']} 
          velocity={80}
          className="custom-scroll-text"
          damping={50}
          stiffness={400}
        />
      </div> */}


    </div>
  );
}
