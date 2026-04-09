"use client"

import Image from "next/image"
import Link from "next/link";

import TrueFocus from '@/components/TrueFocus';

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


    </div>
  );
}
