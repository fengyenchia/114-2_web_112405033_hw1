"use client";

import "../app/globals.css";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import MobileFooter from "./MobileFooter";

import { IoClose, IoMenu } from "react-icons/io5";

interface Profile {
  id: string;
  name: string;
  description: string;
  imgSrc: string;
  motto: string;
}

export default function MobileMenu({ profile }: { profile: Profile []}) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="lg:hidden sticky top-0 flex items-center gap-3 bg-red-50/0 backdrop-blur-sm py-4 pl-6 w-full shadow-lg">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 z-100 pr-4">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((x) => !x)}
            className="inline-flex items-center justify-center rounded-inner border border-white/40 bg-white/10 p-2 text-white transition-all hover:bg-white/20 active:scale-95"
          >
            {open ? <IoClose className="text-2xl" /> : <IoMenu className="text-2xl" />}
          </button>
        </div>
       
        {/* avatar */}
        <div className="group relative bg-white w-10 h-10 rounded-full border-2 border-x-red-200 border-y-red-100 ring-2 ring-red-100 shadow-lg shadow-red-200 overflow-hidden">
            {/* 預設 */}
            <div className="absolute inset-0 flex justify-center items-center transition-opacity duration-700 group-hover:opacity-0">
                <Image src={profile[0].imgSrc} alt="avatar" loading="eager" width={80} height={80} className="object-cover" />
            </div>
            {/* Hover */}
            <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <Image src="/avatar4.jpg" alt="avatar" loading="eager" width={80} height={80} className="object-cover" />
            </div>
        </div>


        <div className="flex flex-col text-white ml-3">
          <div className="font-medium">{profile[0].name}</div>
          <div className="text-sm text-white/80">{profile[0].description}</div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/5">
          <div
            className="absolute inset-0 backdrop-blur-sm">
          </div>

          <div className="slide-in-right w-full h-full" onClick={closeMenu}>
            <div className="absolute right-0 top-0 h-full w-[320px] max-w-[80vw] backdrop-blur-2xl shadow-2xl fade-in">
              <div className="relative h-full w-full ">
                <button onClick={closeMenu}
                  className="absolute my-4 mr-4 right-0 top-4 z-10 inline-flex items-center justify-center rounded-inner border border-white/40 bg-white/10 p-2 text-white transition hover:bg-white/20 active:scale-95">
                  <IoClose className="text-2xl" />
                </button>

                {/* page button */}
                <div className="custom-scrollbar absolute h-full w-full overflow-y-auto py-6 px-4 mt-20">
                  <div className="h-auto gap-36 flex flex-col">
                    <div className="text-center text-white font-medium flex flex-col gap-4">
                      <Link href="/" onClick={closeMenu}>
                        <div className="bg-red-50/30 text-shadow-md text-shadow-secondary/20 border border-white/50 py-2 rounded-inner shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300">Home</div>
                      </Link>
                      <Link href="/about" onClick={closeMenu}>
                        <div className="bg-red-50/30 text-shadow-md text-shadow-secondary/20 border border-white/50 py-2 rounded-inner shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300">About</div>
                      </Link>
                      <Link href="/designProject" onClick={closeMenu}>
                        <div className="bg-red-50/30 text-shadow-md text-shadow-secondary/20 border border-white/50 py-2 rounded-inner shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300">Design Project</div>
                      </Link>
                      <Link href="/programmingProject" onClick={closeMenu}>
                        <div className="bg-red-50/30 text-shadow-md text-shadow-secondary/20 border border-white/50 py-2 rounded-inner shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300">Programming Project</div>
                      </Link>
                      <Link href="/exhibitionWorks" onClick={closeMenu}>
                        <div className="bg-red-50/30 text-shadow-md text-shadow-secondary/20 border border-white/50 py-2 rounded-inner shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300">Exhibition Works</div>
                      </Link>
                      <Link href="/3dWorks" onClick={closeMenu}>
                        <div className="bg-red-50/30 text-shadow-md text-shadow-secondary/20 border border-white/50 py-2 rounded-inner shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300">3D Works</div>
                      </Link>
                    </div>
                    {/* Mobile Footer */}
                    <div>
                      <MobileFooter />
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

