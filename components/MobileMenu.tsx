"use client";

import "../app/globals.css";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { IoClose, IoMenu } from "react-icons/io5";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="lg:hidden sticky top-0 z-10 flex items-center gap-3 bg-red-50/0 backdrop-blur-sm py-6 pl-6 rounded-b-lg w-full shadow-lg">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 z-100 pr-4">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((x) => !x)}
            className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 p-2 text-white transition-all hover:bg-white/20 active:scale-95"
          >
            {open ? <IoClose className="text-2xl" /> : <IoMenu className="text-2xl" />}
          </button>
        </div>

        <div className="bg-white w-[56px] h-[56px] rounded-full border-4 border-x-red-200 border-y-red-100 ring-4 ring-red-100 shadow-lg shadow-red-200 overflow-hidden flex justify-center items-center">
          <Image src="/avatar.png" alt="avatar" loading="eager" width={56} height={56} />
        </div>

        <div className="flex flex-col gap-1 text-white ml-3">
          <div className="font-medium">馮 妍 嘉</div>
          <div className="text-sm text-white/80">NCCU AD x DCT</div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 backdrop-blur-sm">
          </div>

          <div className="slide-in-right w-full h-full" onClick={closeMenu}>
            <div className="absolute right-0 top-0 h-full w-[320px] max-w-[80vw] backdrop-blur-2xl shadow-2xl fade-in">
              <div className="relative h-full w-full ">
                <button onClick={closeMenu}
                  className="absolute my-4 mr-4 right-0 top-4 z-10 inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 p-2 text-white transition hover:bg-white/20 active:scale-95">
                  <IoClose className="text-2xl" />
                </button>

                {/* page button */}
                <div className="custom-scrollbar absolute h-full w-full overflow-y-auto py-6 px-4 mt-20">
                  <div className="flex flex-col gap-5">
                    <div className="text-center text-white font-medium flex flex-col gap-4">
                      <Link href="/" onClick={closeMenu}>
                        <div className="bg-red-50/30 text-shadow-md text-shadow-gray-600/20 border border-white/50 py-[8px] rounded-md shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300">Home</div>
                      </Link>
                      <Link href="/about" onClick={closeMenu}>
                        <div className="bg-red-50/30 text-shadow-md text-shadow-gray-600/20 border border-white/50 py-[8px] rounded-md shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300">About</div>
                      </Link>
                      <Link href="/designProject" onClick={closeMenu}>
                        <div className="bg-red-50/30 text-shadow-md text-shadow-gray-600/20 border border-white/50 py-[8px] rounded-md shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300">Design Project</div>
                      </Link>
                      <Link href="/programmingProject" onClick={closeMenu}>
                        <div className="bg-red-50/30 text-shadow-md text-shadow-gray-600/20 border border-white/50 py-[8px] rounded-md shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300">Programming Project</div>
                      </Link>
                      <Link href="/exhibitionWorks" onClick={closeMenu}>
                        <div className="bg-red-50/30 text-shadow-md text-shadow-gray-600/20 border border-white/50 py-[8px] rounded-md shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300">Exhibition Works</div>
                      </Link>
                      <Link href="/3dWorks" onClick={closeMenu}>
                        <div className="bg-red-50/30 text-shadow-md text-shadow-gray-600/20 border border-white/50 py-[8px] rounded-md shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300">3D Works</div>
                      </Link>
                      {/* <Link href="/grid" onClick={closeMenu}>
                        <div className="bg-red-50/30 text-shadow-md text-shadow-gray-600/20 border border-white/50 py-[8px] rounded-md shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300">Grid</div>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      )
      }
    </>
  );
}

