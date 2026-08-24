"use client"
import Image from "next/image"

interface DesignCardProps {
  title: string;
  imgSrc: string;
  description: string;
  tag: string[];
  url: string;
}

export default function DesignCard({ imgSrc, title, description, tag, url }: DesignCardProps) {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 border border-primary/10 rounded-inner p-4 w-full shadow-lg hover:scale-101 transition-all duration-500">
        
        {/* 圖片區塊 */}
        <div className="group relative aspect-5/3 w-full overflow-hidden bg-black/70 hover:bg-black/80 transition-all duration-800 rounded-inner border border-white/70">
          <Image
            src={imgSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
            className="object-cover transition-all duration-800 ease-in-out group-hover:scale-110 group-hover:brightness-75"
          />
        </div>

        <div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center w-full">
                <p className="subtitle py-0!">{title}</p>
                <div className="text-accent text-sm flex gap-2">
                  {tag.map((tag, index) => (
                    <p 
                      key={index} 
                      className="inline-block bg-red-50/80 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
              <p className="text-primary text-sm pb-4">{description}</p>
            </div>
          </div>


          <div className="w-full font-medium text-center py-2 bg-gray-100 hover:bg-gray-200 text-primary rounded-inner transition-all duration-600">
            <a href={url} target="_blank" rel="noreferrer noopener" className="block">
            查看專案
            </a>
          </div>
        </div>

      </div>  
  );
}
