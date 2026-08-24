"use client";

import FadeIn from "@/components/fadeIn";

interface SkillCardProps {
  category: string;
  tags: string[];
}

export default function SkillCard({ category, tags }: SkillCardProps) {
  return (
    <FadeIn className="h-full">
      <section className="flex h-full flex-col rounded-inner bg-white/16 px-4 py-4 md:px-5 md:py-5">
        <h3 className="border-b border-primary/25 pb-3 text-sm font-bold tracking-wide text-secondary">{category}</h3>
        <ul className="mt-4 flex flex-wrap gap-2 text-sm">
          {tags.map((tag) => (
            <li key={tag} className="inline-flex items-center rounded-full bg-white/40 px-3 py-1.5 leading-none text-secondary shadow-sm shadow-primary/8 transition-all hover:-translate-y-0.5 hover:bg-white/60">
              {tag}
            </li>
          ))}
        </ul>
      </section>
    </FadeIn>
  );
}