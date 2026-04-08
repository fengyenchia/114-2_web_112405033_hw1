"use client"
import Image from "next/image"
import Link from "next/link";

export default function Exibition_Works() {

  return (
    <div className="custom-scrollbar w-full h-full p-8 rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      <div className="flex flex-col gap-6 text-gray-600 w-full">
        {/* Exibition Works */}
        <div className="font-bold text-2xl">Exibition Works</div>
        <hr className="border-gray-500/20" />

        {/* 圖片 */}
        <div className="grid grid-cols-1 gap-6 w-full">
          {/* row 1 */}
          <div className="flex gap-3 w-full">
            {/* picture 1 */}
            <div className="group relative aspect-4/1 w-full flex-2 overflow-hidden rounded-sm">
              <Image
                src="/bg.png"
                alt="bg"
                fill
                loading="eager"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 
                opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                  123321
                </p>
              </div>

            </div>
            {/* picture 2 */}
            <div className="group relative aspect-4/1 w-full flex-1 overflow-hidden rounded-sm">
              <Image
                src="/bg.png"
                alt="bg"
                fill
                loading="eager"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 
                opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                  123321
                </p>
              </div>
            </div>
          </div>
          {/* row 2 */}
          <div className="flex gap-3 w-full">
            {/* picture 1 */}
            <div className="group relative aspect-4/1 w-full flex-1 overflow-hidden rounded-sm">
              <Image
                src="/bg.png"
                alt="bg"
                fill
                loading="eager"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 
                opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                  123321
                </p>
              </div>
            </div>
            {/* picture 2 */}
            <div className="group relative aspect-4/1 w-full flex-3 overflow-hidden rounded-sm">
              <Image
                src="/bg.png"
                alt="bg"
                fill
                loading="eager"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 
                opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                  123321
                </p>
              </div>
            </div>
          </div>
          {/* row 3 */}
          <div className="flex gap-3 w-full">
            {/* picture 1 */}
            <div className="group relative aspect-4/1 w-full flex-1 overflow-hidden rounded-sm">
              <Image
                src="/bg.png"
                alt="bg"
                fill
                loading="eager"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 
                opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                  123321
                </p>
              </div>
            </div>
            {/* picture 2 */}
            <div className="group relative aspect-4/1 w-full flex-3 overflow-hidden rounded-sm">
              <Image
                src="/bg.png"
                alt="bg"
                fill
                loading="eager"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 
                opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                  123321
                </p>
              </div>
            </div>
            {/* picture 3 */}
            <div className="group relative aspect-4/1 w-full flex-3 overflow-hidden rounded-sm">
              <Image
                src="/bg.png"
                alt="bg"
                fill
                loading="eager"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900 
                opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                <p className="absolute inset-0 z-1 flex items-end justify-center pb-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                  123321
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
