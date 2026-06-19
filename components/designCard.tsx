"use client"
import Image from "next/image"
import Link from "next/link";

interface DesignCardProps {
  src: string;
  title: string;
  category: string;
  tags: string[];
  href: string;
}

export default function DesignCard({ src, title, category, tags, href }: DesignCardProps) {
  return (
    <Link href={href} target="_blank" className="block">
      <div className="flex flex-col gap-4 lg:gap-8 border border-gray-500/10 rounded-md p-4 w-full shadow-lg hover:scale-101 transition-all duration-500">
        
        {/* 圖片區塊 */}
        <div className="group relative aspect-5/3 w-full overflow-hidden bg-black/70 hover:bg-black/80 transition-all duration-800 rounded-sm border border-white/70">
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
            className="object-cover transition-all duration-800 ease-in-out group-hover:scale-110 group-hover:brightness-75"
          />
        </div>

        <div>
          <div>
            <p className="text-gray-600 font-bold text-lg">{title}</p>
            <p className="text-gray-500">{category}</p>
          </div>

          <div className="text-gray-400 mt-2 text-sm">
            {tags.map((tag, index) => (
              <p 
                key={index} 
                className="inline-block bg-red-50/80 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2"
              >
                {tag}
              </p>
            ))}
          </div>

            <div className="lg:hidden w-full font-medium text-center mt-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-md transition-colors duration-200">
              查看專案
            </div>
        </div>

      </div>  
    </Link>
  );
}