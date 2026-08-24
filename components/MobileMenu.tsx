"use client";

import "../app/globals.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileFooter from "./MobileFooter";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { sendGAEvent } from "@next/third-parties/google";

interface Profile {
  id: string;
  name: string;
  description: string;
  imgSrc: string;
  motto: string;
}

const navItems = [
  { href: "/", label: "Home", itemName: "home" },
  { href: "/about", label: "About", itemName: "about" },
  { href: "/designProjects", label: "Design Projects", itemName: "designProjects" },
  { href: "/programmingProjects", label: "Programming Projects", itemName: "programmingProjects" },
  { href: "/exhibitionWorks", label: "Exhibition Works", itemName: "exhibitionWorks" },
  { href: "/3dWorks", label: "3D Works", itemName: "3dWorks" },
];

export default function MobileMenu({ profile }: { profile: Profile[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const person = profile[0];
  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 flex w-full items-center gap-3 bg-red-50/0 py-4 pl-6 shadow-lg backdrop-blur-sm lg:hidden">
        <div className="absolute right-0 top-1/2 z-100 -translate-y-1/2 pr-4">
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)} className="inline-flex items-center justify-center rounded-inner border border-white/40 bg-white/10 p-2 text-white transition-all hover:bg-white/20 active:scale-95">
            {open ? <IconX className="text-2xl" /> : <IconMenu2 className="text-2xl" />}
          </button>
        </div>
        <div className="group relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-x-red-200 border-y-red-100 bg-white shadow-lg shadow-red-200 ring-2 ring-red-100">
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-700 group-hover:opacity-0"><Image src={person.imgSrc} alt={`${person.name} 的頭像`} priority width={80} height={80} className="object-cover" /></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-700 group-hover:opacity-100"><Image src="/avatar4.jpg" alt={`${person.name} 的互動頭像`} priority width={80} height={80} className="object-cover" /></div>
        </div>
        <div className="ml-3 flex flex-col text-white"><p className="font-medium">{person.name}</p><p className="text-sm text-white/80">{person.description}</p></div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/5 lg:hidden">
          <button type="button" aria-label="Close menu" onClick={closeMenu} className="absolute inset-0 cursor-default backdrop-blur-sm" />
          <aside id="mobile-navigation" aria-label="主要導覽" className="slide-in-right absolute right-0 top-0 h-full w-[320px] max-w-[80vw] shadow-2xl">
            <div className="relative h-full w-full bg-white/10 backdrop-blur-2xl fade-in">
              <button type="button" aria-label="Close menu" onClick={closeMenu} className="absolute right-0 top-4 z-10 mr-4 inline-flex items-center justify-center rounded-inner border border-white/40 bg-white/10 p-2 text-white transition hover:bg-white/20 active:scale-95"><IconX className="text-2xl" /></button>
              <div className="custom-scrollbar absolute flex h-full w-full flex-col overflow-y-auto px-4 pb-4 pt-24">
                <div className="flex min-h-full flex-col">
                  <nav className="flex flex-col gap-4 text-center font-medium text-white">
                    {navItems.map((item) => {
                      const isActive = pathname === item.href;
                      return <Link key={item.href} href={item.href} transitionTypes={["page-navigation"]} aria-current={isActive ? "page" : undefined} onClick={() => { closeMenu(); sendGAEvent("event", "menu_click", { item_name: item.itemName, menu_type: "mobile_burger" }); }} className={`w-full rounded-inner border py-2 text-shadow-md text-shadow-secondary/20 transition duration-300 ${isActive ? "border-white/70 bg-white/35 shadow-xs shadow-red-100" : "border-white/50 bg-red-50/30 hover:bg-white/20"}`}>{item.label}</Link>;
                    })}
                  </nav>
                  <div className="mt-auto"><MobileFooter /></div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}