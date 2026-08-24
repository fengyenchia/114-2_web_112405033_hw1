"use client";

import { useEffect, useRef, useState } from "react";
import { IconArrowsMaximize, IconX } from "@tabler/icons-react";
import FadeIn from "@/components/fadeIn";

interface VideoCardProps {
  videoUrl: string;
  year: string;
  title: string;
  aspect?: string;
  scaleClass?: string;
  enlargeScale?: string;
  poster?: string;
}

export default function Video({ videoUrl, year, title, aspect = "aspect-video", scaleClass = "scale-90", enlargeScale = "scale-10", poster = "/og-image.png" }: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center rounded-inner bg-black/60 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${title} 影片預覽`} onMouseDown={() => setIsOpen(false)}>
          <div className="relative max-h-full max-w-full" onMouseDown={(event) => event.stopPropagation()}>
            <video src={videoUrl} poster={poster} title={title} aria-label={title} autoPlay loop controls playsInline className={`max-h-[80vh] max-w-full rounded-inner ${scaleClass}`} />
            <button ref={closeButtonRef} type="button" aria-label={`關閉 ${title} 影片`} onClick={() => setIsOpen(false)} className="absolute right-3 top-3 inline-flex items-center justify-center rounded-inner bg-black/45 p-2 text-white transition hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><IconX size={20} /></button>
          </div>
        </div>
      )}

      <FadeIn>
        <div className="flex w-full flex-col gap-3 md:flex-row">
          <div className="content-end md:w-[40%]"><p className="text-sm text-primary">{year}</p><p className="subtitle pb-0!">{title}</p></div>
          <button type="button" aria-label={`開啟 ${title} 影片`} aria-haspopup="dialog" onClick={() => setIsOpen(true)} className={`group relative w-full overflow-hidden rounded-inner text-left shadow-md shadow-red-200/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary ${aspect}`}>
            <video src={videoUrl} poster={poster} title={title} aria-label={title} autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" />
            <span className={`absolute inset-0 flex h-full w-full items-center justify-center opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:bg-white/30 group-hover:opacity-100 ${aspect}`}><IconArrowsMaximize className={`text-white ${enlargeScale}`} aria-hidden="true" /></span>
          </button>
        </div>
      </FadeIn>
    </>
  );
}