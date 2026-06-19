"use client"
import Image from "next/image"
import Link from "next/link";

interface DesignCardProps {
  src: string;
  title: string;
  year: string;
  description: string;
  href_1: string;
  href_2: string;
  href_2_word: string;

}

export default function ProgrammingCard({ src, title, year, description, href_1, href_2, href_2_word }: DesignCardProps) {
  return (
    <div className="flex flex-col gap-8 border border-gray-500/10 rounded-md p-4 w-full shadow-lg hover:scale-101 transition-all duration-500">
      <div className="group relative aspect-2/1 md:aspect-3/1 w-full overflow-hidden bg-black/60 hover:bg-black/80 transition-all duration-800 rounded-lg border border-white/70">
        <Image
          src={src}
          alt="bg"
          fill
          loading="eager"
          className="object-cover transition-all duration-800 ease-in-out group-hover:scale-110 group-hover:brightness-75"
        />
      </div>
      <div className="">
        <div>
          <p className="text-gray-600 font-bold text-lg">{title}</p>
          <p className="mt-1 text-gray-400 text-xs">{year}</p>
        </div>
        <div className="text-gray-500 mt-2 text-sm">
          <p className="mb-2">{description}</p>
        </div>
        <div className="flex justify-around gap-6">
          <Link href={href_1} target="_blank" className="block w-full">
            <div className="w-full font-medium text-center mt-3 py-2 px-auto bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-md transition-colors duration-200">
              查看網站
            </div>
          </Link>
          <Link href={href_2} target="_blank" className="block w-full">
            <div className="w-full font-medium text-center mt-3 py-2 px-auto bg-red-100 hover:bg-red-200 text-gray-500 rounded-md transition-colors duration-200">
              {href_2_word}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}