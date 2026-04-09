"use client"
import Image from "next/image"
import Link from "next/link";

import GridPractice from "../../components/GridPractice"

export default function Grid() {

  return (
    <div className="custom-scrollbar w-full h-full p-8 rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      <div className="flex flex-col gap-6 text-gray-600 w-full">
        {/* Programming Project */}
        <div className="flex justify-between">
          <div className="inline-block font-bold text-2xl">Grid</div>
          <Link href="../">
            <div className="hidden lg:inline-block text-md text-white/50 border border-white/50 rounded-lg py-1 px-2 shadow-md hover:bg-white/50 hover:translate-y-0.5 hover:text-gray-500 hover:border-gray-400 transition-all duration-500">
              Home
            </div>
          </Link>
        </div>
        <hr className="border-gray-500/20" />

        {/* grid */}
        <div className="grid grid-cols-3 gap-4">
          <GridPractice />
          <GridPractice />
          <GridPractice />
          <GridPractice />
          <GridPractice />
          <GridPractice />
        </div>




      </div>
    </div >
  );
}
