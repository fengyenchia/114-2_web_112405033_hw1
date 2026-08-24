"use client";

import Video from "@/components/video";

interface ThreeDWorks {
  id: string;
  title: string;
  year: string;
  videoUrl: string;
  aspect?: string | null;
  scaleClass?: string | null;
  enlargeScale?: string | null;
}

export default function ThreeDWorksClient({ threeDWorks }: { threeDWorks: ThreeDWorks [] }) {
  return (
    <div className="flex flex-col gap-6 w-full">
        {threeDWorks.map((item) => (
        <Video 
            key={item.id}
            title={item.title} 
            year={item.year} 
            videoUrl={item.videoUrl} 
            aspect={item.aspect || undefined}
            scaleClass={item.scaleClass || undefined}
            enlargeScale={item.enlargeScale || undefined}
            />
        ))}
    </div>
  );
}