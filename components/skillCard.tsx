"use client"

import FadeIn from "./fadeIn";

interface SkillCardProps {
  category: string;
  tags: string[];
}

export default function SkillCard({ category, tags }: SkillCardProps) {
  return (
    // 確保動畫外殼有撐滿高度
    <FadeIn className="h-full">
      <div className="flex flex-col gap-4 md:gap-6 border border-primary/50 rounded-inner p-4 w-full h-full">
        <div className="text-secondary font-bold text-sm lg:text-md border-b pb-2 md:pb-4 border-primary/50">
          {category}
        </div>
        <div className="text-primary">
          {tags.map((tag, index) => (
            <p 
              key={index} 
              className="inline-block bg-red-50/50 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-2 lg:mb-4 mr-2"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}