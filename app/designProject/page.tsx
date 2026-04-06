"use client"
import Image from "next/image"
import Link from "next/link";

export default function DesignProject() {
  return (
    <div className="custom-scrollbar w-full h-full p-8 rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      <div className="flex flex-col gap-6 text-gray-600 w-full">
        {/* About */}
        <div className="font-bold text-2xl">Design Project</div>
        <hr className="border-gray-500/20" />

        {/* 卡片 */}
        <div className="grid grid-cols-2 gap-6 w-full">
          {/* card 1 */}
          <div className="flex flex-col gap-8 border border-gray-500/10 rounded-md p-4 w-full shadow-lg">
            <div className="rounded-sm overflow-hidden border border-white/50 bg-center">
              <Image src="/bg-2.png" alt="bg" loading="eager" width={500} height={0} />
            </div>
            <div className="">
              <div>
                <p className="text-gray-600 font-bold text-lg">Design & Creative</p>
                <p className="text-gray-500">Design & Creative</p>
              </div>
              <div className="text-gray-500 mt-3">
                <p className="inline-block bg-red-50/50 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">Html</p>
                <p className="inline-block bg-red-50/50 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">Css</p>
              </div>
              <Link href="/designProject">
                <div className="w-full font-medium text-center mt-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-md transition-colors duration-200">
                  查看專案
                </div>
              </Link>
            </div>
          </div>
          {/* card 1 */}
          <div className="flex flex-col gap-8 border border-gray-500/10 rounded-md p-4 w-full shadow-lg">
            <div className="rounded-sm overflow-hidden border border-white/50 bg-center">
              <Image src="/bg-2.png" alt="bg" loading="eager" width={500} height={0} />
            </div>
            <div className="">
              <div>
                <p className="text-gray-600 font-bold text-lg">Design & Creative</p>
                <p className="text-gray-500">Design & Creative</p>
              </div>
              <div className="text-gray-500 mt-3">
                <p className="inline-block bg-red-50/50 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">Html</p>
                <p className="inline-block bg-red-50/50 border-0 border-red-50/50 rounded-full shadow-md shadow-red-100/50 px-2 mb-4 mr-2">Css</p>
              </div>
              <Link href="/designProject">
                <div className="w-full font-medium text-center mt-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-md transition-colors duration-200">
                  查看專案
                </div>
              </Link>
            </div>
          </div>
         
          
          
        </div>




      </div>
    </div >
  );
}