"use client";

import ProgrammingCard from "@/components/programmingCard";

interface ProgrammingProject {
  id: string;
  title: string;
  year: string;
  description: string;
  imgSrc: string;
  website1_url: string;
  website2_url: string;
  website2_url_word: string;
}

export default function ProgrammingProjectClient({ programmingProject }: { programmingProject: ProgrammingProject [] }) {
  return (
    <div className="grid grid-cols-1 gap-6 w-full">
        {programmingProject.map((item) => (
          <ProgrammingCard 
            key={item.id} // React 循環需要唯一的 key
            imgSrc={item.imgSrc}
            title={item.title}
            year={item.year}
            description={item.description}
            website1_url={item.website1_url}
            website2_url={item.website2_url}
            website2_url_word={item.website2_url_word}
          />
        ))}
    </div>
  );
}