"use client";

import "../app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import { sendGAEvent } from "@next/third-parties/google";

interface Profile {
  id: string;
  name: string;
  description: string;
  imgSrc: string;
  motto: string;
}

const navItems = [
  { href: "/about", label: "About", itemName: "about" },
  { href: "/designProjects", label: "Design Projects", itemName: "designProjects" },
  { href: "/programmingProjects", label: "Programming Projects", itemName: "programmingProjects" },
  { href: "/exhibitionWorks", label: "Exhibition Works", itemName: "exhibitionWorks" },
  { href: "/3dWorks", label: "3D Works", itemName: "3dWorks" },
];

export default function Menu({ profile }: { profile: Profile[] }) {
  const pathname = usePathname();
  const person = profile[0];

  return (
    <aside className="hidden p-8 lg:block">
      <div className="custom-scrollbar h-full w-xs overflow-y-auto rounded-outer bg-red-50/0 p-8 shadow-lg backdrop-blur-2xl">
        <div className="flex w-full items-center justify-center">
          <div className="group relative h-20 w-20 overflow-hidden rounded-full border-4 border-x-red-200 border-y-red-100 bg-white shadow-lg shadow-red-200 ring-4 ring-red-100">
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-700 group-hover:opacity-0">
              <Image src={person.imgSrc} alt={`${person.name} 的頭像`} priority width={80} height={80} className="object-cover" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              <Image src="/avatar4.jpg" alt={`${person.name} 的互動頭像`} priority width={80} height={80} className="object-cover" />
            </div>
          </div>
        </div>

        <p className="mt-5 text-center font-medium text-white">{person.name}</p>
        <p className="pb-2 text-center text-white">{person.description}</p>

        <div className="flex w-full justify-evenly py-3 text-white">
          <a href="https://www.instagram.com/yenchia._.0504" target="_blank" rel="noreferrer noopener" aria-label="Instagram" onClick={() => sendGAEvent("event", "social_click", { platform: "instagram", menu_type: "desktop_sidebar" })} className="inline-flex h-10 w-10 items-center justify-center transition hover:scale-110 hover:text-red-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><IconBrandInstagram size={24} stroke={1.8} /></a>
          <a href="mailto:yanjia20050504@gmail.com" aria-label="Email" onClick={() => sendGAEvent("event", "social_click", { platform: "email", menu_type: "desktop_sidebar" })} className="inline-flex h-10 w-10 items-center justify-center transition hover:scale-110 hover:text-red-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><IconMail size={24} stroke={1.8} /></a>
          <a href="https://www.linkedin.com/in/fengyenchia" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" onClick={() => sendGAEvent("event", "social_click", { platform: "linkedin", menu_type: "desktop_sidebar" })} className="inline-flex h-10 w-10 items-center justify-center transition hover:scale-110 hover:text-red-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><IconBrandLinkedin size={24} stroke={1.8} /></a>
          <a href="https://github.com/fengyenchia" target="_blank" rel="noreferrer noopener" aria-label="GitHub" onClick={() => sendGAEvent("event", "social_click", { platform: "github", menu_type: "desktop_sidebar" })} className="inline-flex h-10 w-10 items-center justify-center transition hover:scale-110 hover:text-red-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><IconBrandGithub size={24} stroke={1.8} /></a>
        </div>

        <nav aria-label="主要導覽" className="flex flex-col gap-2 pt-2 text-center font-medium text-white">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} transitionTypes={["page-navigation"]} aria-current={isActive ? "page" : undefined} onClick={() => sendGAEvent("event", "menu_click", { item_name: item.itemName, menu_type: "desktop_sidebar" })} className={`w-full rounded-inner border px-4 py-3 text-shadow-md text-shadow-secondary/20 transition duration-300 ${isActive ? "border-white/70 bg-white/30 shadow-xs shadow-red-100" : "border-white/50 bg-red-50/10 hover:bg-white/20"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}