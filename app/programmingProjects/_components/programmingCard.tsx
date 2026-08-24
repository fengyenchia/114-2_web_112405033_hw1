"use client";

import Image from "next/image";

interface ProgrammingCardProps {
  imgSrc: string;
  title: string;
  year: string;
  description: string;
  website1_url: string;
  website1_url_word?: string;
  website2_url: string;
  website2_url_word?: string;
}

export default function ProgrammingCard({ imgSrc, title, year, description, website1_url, website1_url_word = "查看網站", website2_url, website2_url_word = "Github" }: ProgrammingCardProps) {
  return (
    <article className="group flex w-full flex-col gap-5 rounded-inner bg-white/18 p-4 shadow-lg shadow-primary/8 transition-transform duration-500 hover:-translate-y-0.5 md:p-6">
      <div className="relative aspect-2/1 w-full overflow-hidden rounded-nested bg-black/60 md:aspect-3/1">
        <Image src={imgSrc} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-start justify-between gap-x-5 gap-y-2">
          <h2 className="subtitle pb-0!">{title}</h2>
          <p className="rounded-full bg-white/32 px-3 py-1.5 text-xs font-medium tracking-wide text-secondary">{year}</p>
        </div>
        <p className="text-sm leading-relaxed text-primary">{description}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={website1_url} target="_blank" rel="noreferrer noopener" className="inline-flex w-full items-center justify-center rounded-inner bg-white/30 px-4 py-3 text-sm font-semibold tracking-wide text-secondary transition-colors hover:bg-white/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">{website1_url_word}</a>
          <a href={website2_url} target="_blank" rel="noreferrer noopener" className="inline-flex w-full items-center justify-center rounded-inner bg-primary/12 px-4 py-3 text-sm font-semibold tracking-wide text-secondary transition-colors hover:bg-primary/20 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">{website2_url_word}</a>
        </div>
      </div>
    </article>
  );
}