"use client"
import Image from "next/image"

interface DesignCardProps {
  imgSrc: string;
  title: string;
  year: string;
  description: string;
  website1_url: string;
  website2_url: string;
  website2_url_word: string;
}

export default function ProgrammingCard({ imgSrc, title, year, description, website1_url, website2_url, website2_url_word }: DesignCardProps) {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 border border-primary/10 rounded-inner p-4 w-full shadow-lg hover:scale-101 transition-all duration-500">
      <div className="group relative aspect-2/1 md:aspect-3/1 w-full overflow-hidden bg-black/60 hover:bg-black/80 transition-all duration-800 rounded-inner">
        <Image
          src={imgSrc}
          alt="bg"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="eager"
          className="object-cover transition-all duration-800 ease-in-out group-hover:scale-110 group-hover:brightness-75"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center w-full">
          <p className="subtitle pb-0!">{title}</p>
          <p className="inline-block text-accent text-sm bg-red-50/80 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2">{year}</p>
        </div>
        <div className="text-primary my-2 text-sm">
          <p className="">{description}</p>
        </div>
        <div className="flex justify-around gap-4 lg:gap-6">
          <a href={website1_url} target="_blank" rel="noreferrer noopener" className="block w-full">
            <div className="w-full font-medium text-center mt-3 py-2 px-auto bg-gray-100 hover:bg-gray-200 text-primary rounded-inner transition-all duration-600">
              查看網站
            </div>
          </a>
          <a href={website2_url} target="_blank" rel="noreferrer noopener" className="block w-full">
            <div className="w-full font-medium text-center mt-3 py-2 px-auto bg-red-100 hover:bg-red-200 text-primary rounded-inner transition-all duration-600">
              {website2_url_word}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
