"use client"
import Image from "next/image"
import Link from "next/link";

import Menu from "../../components/Menu"

export default function Grid() {
  const projectData = {
    "1": {
      "name": "1",
      "imageUrl": "/bg.png",
    },
    "2": {
      "name": "2",
      "imageUrl": "/bg.png",
    },
    "3": {
      "name": "3",
      "imageUrl": "/avatar.png",
    },
    "4": {
      "name": "大兔",
      "imageUrl": "/avatar2.png",
    },
  };

  return (
    <div className="custom-scrollbar w-full h-full p-8 rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      <div className="flex flex-col gap-6 text-gray-600 w-full">
        {/* Programming Project */}
        <div className="flex justify-between">
          <div className="inline-block font-bold text-2xl">Grid</div>
          <Link href="../">
            <div className="inline-block text-md text-white/50 border border-white/50 rounded-lg py-1 px-2 shadow-md hover:bg-white/50 hover:translate-y-0.5 hover:text-gray-500 hover:border-gray-400 transition-all duration-500">
              Home
            </div>
          </Link>
        </div>
        <hr className="border-gray-500/20" />

        {/* grid */}
        <div className="grid grid-cols-3 gap-4">
          {/* <Menu /> */}
          <div className={`relative h-20 bg-white/20 rounded-lg overflow-hidden font-bold text-white/80 flex justify-center items-center bg-center bg-contain`} style={{ backgroundImage: `url(${projectData["1"]["imageUrl"]})` }}>
            <div className="absolute bottom-0 bg-white/20 rounded-b-lg w-full text-center backdrop-blur-lg">
              {projectData["1"]["name"]}
            </div>
          </div>
        </div>




      </div>
    </div >
  );
}
