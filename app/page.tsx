"use client"

import TrueFocus from '@/components/TrueFocus';
import TextType from '@/components/TextType';

export default function Home() {

  return (
    <div className="w-full h-full px-4 py-8 md:p-8 lg:rounded-xl">

      <div className="flex flex-col justify-center items-center gap-8 md:gap-12 w-full h-full text-center text-gray-500">
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
        <div className="text-center text-gray-500 pb-2 text-md md:text-lg">
          <TextType 
            text={["對我來說,將設計與程式結合，做出有趣的互動作品,是一件很好玩的事"]}
            typingSpeed={80}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
        </div>
      </div>


    </div>
  );
}
