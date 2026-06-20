"use client";

import TextType from "@/components/TextType";
import TrueFocus from "@/components/TrueFocus";

interface Profile {
  id: string;
  name: string;
  description: string;
  imgSrc: string;
  motto: string;
}

export default function HomeClient({ profile }: { profile: Profile[] }) {
  return (
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
                text={[profile[0].motto]}
                typingSpeed={80}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                deletingSpeed={50}
                cursorBlinkDuration={0.5}
            />
        </div>
    </div>
  );
}