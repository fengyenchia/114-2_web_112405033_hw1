"use client";

import DesignCard from "@/app/designProjects/_components/designCard";

interface DesignProjects {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  tags: string[];
  url: string;
}

export default function DesignProjectClient({ designProject }: { designProject: DesignProjects [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {designProject.map((item) => (
            <DesignCard 
            key={item.id} // React 循環需要唯一的 key
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
            tag={item.tags}
            url={item.url}
            />
        ))}
    </div>
  );
}