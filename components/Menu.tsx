"use client";

import "../app/globals.css";
import Image from "next/image";
import Link from "next/link";

// ICON
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";

import { sendGAEvent } from "@next/third-parties/google";

interface Profile {
  id: string;
  name: string;
  description: string;
  imgSrc: string;
  motto: string;
}

export default function Menu({ profile }: { profile: Profile[] }) {
  return (
    <div className="hidden lg:block p-8">
      <div className="custom-scrollbar bg-red-50/0 backdrop-blur-2xl p-8 w-xs h-full rounded-outer shadow-lg overflow-y-auto">
        {/* avatar */}
        <div className="flex justify-center items-center w-full">
          {/* 外層容器 */}
          <div className="group relative bg-white w-20 h-20 rounded-full border-4 border-x-red-200 border-y-red-100 ring-4 ring-red-100 shadow-lg shadow-red-200 overflow-hidden">
            {/* 預設 */}
            <div className="absolute inset-0 flex justify-center items-center transition-opacity duration-700 group-hover:opacity-0">
              <Image
                src={profile[0].imgSrc}
                alt="avatar"
                loading="eager"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            {/* Hover */}
            <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              <Image
                src="/avatar4.jpg"
                alt="avatar"
                loading="eager"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center font-medium text-white mt-5">
          {profile[0].name}
        </div>
        <div className="text-center text-white pb-2">
          {profile[0].description}
        </div>

        <div className="flex gap-2">
          <div className="flex w-full justify-evenly text-[20px] text-white py-3">
            <a
              href="https://www.instagram.com/yenchia._.0504"
              target="_blank"
              rel="noreferrer noopener"
              onClick={() =>
                sendGAEvent("event", "social_click", {
                  platform: "instagram",
                  menu_type: "desktop_sidebar",
                })
              }
            >
              <div className="border-2 border-white rounded-full p-1.5 hover:bg-white hover:text-red-200 transition duration-300">
                <IoLogoInstagram />
              </div>
            </a>

            <a 
                href="mailto:yanjia20050504@gmail.com"
                onClick={() =>
                  sendGAEvent("event", "social_click", {
                    platform: "email",
                    menu_type: "desktop_sidebar",
                  })
                }
            >
              <div className="border-2 border-white rounded-full p-1.5 hover:bg-white hover:text-red-200 transition duration-300">
                <IoMail />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/fengyenchia"
              target="_blank"
              rel="noreferrer noopener"
              onClick={() =>
                sendGAEvent("event", "social_click", {
                  platform: "linkedin",
                  menu_type: "desktop_sidebar",
                })
              }
            >
              <div className="border-2 border-white rounded-full p-1.5 hover:bg-white hover:text-red-200 transition duration-300">
                <IoLogoLinkedin />
              </div>
            </a>
            <a
              href="https://github.com/fengyenchia"
              target="_blank"
              rel="noreferrer noopener"
                onClick={() =>
                  sendGAEvent("event", "social_click", {
                    platform: "github",
                    menu_type: "desktop_sidebar",
                  })
                }
            >
              <div className="border-2 border-white rounded-full p-1.5 hover:bg-white hover:text-red-200 transition duration-300">
                <IoLogoGithub />
              </div>
            </a>
          </div>
        </div>

        <div className="w-full text-center text-white font-medium pt-2 flex flex-col gap-2">
          <Link href="/about" transitionTypes={["page-navigation"]}>
            <button
              className="w-full bg-red-50/10 text-shadow-md text-shadow-secondary/20 border border-white/50 px-4 py-3 rounded-inner shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300"
              onClick={() =>
                sendGAEvent("event", "menu_click", {
                  item_name: "about",
                  menu_type: "desktop_sidebar",
                })
              }
            >
              About
            </button>
          </Link>
          <Link href="/designProject" transitionTypes={["page-navigation"]}>
            <button
              className="w-full bg-red-50/10 text-shadow-md text-shadow-secondary/20 border border-white/50 px-4 py-3 mt-2 rounded-inner shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300"
              onClick={() =>
                sendGAEvent("event", "menu_click", {
                  item_name: "designProject",
                  menu_type: "desktop_sidebar",
                })
              }
            >
              Design Project
            </button>
          </Link>
          <Link
            href="/programmingProject"
            transitionTypes={["page-navigation"]}
          >
            <button
              className="w-full bg-red-50/10 text-shadow-md text-shadow-secondary/20 border border-white/50 px-4 py-3 mt-2 rounded-inner shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300"
              onClick={() =>
                sendGAEvent("event", "menu_click", {
                  item_name: "programmingProject",
                  menu_type: "desktop_sidebar",
                })
              }
            >
              Programming Project
            </button>
          </Link>
          <Link href="/exhibitionWorks" transitionTypes={["page-navigation"]}>
            <button
              className="w-full bg-red-50/10 text-shadow-md text-shadow-secondary/20 border border-white/50 px-4 py-3 mt-2 rounded-inner shadow-xs shadow-red-100 hover:bg-white/10 transition duration-300"
              onClick={() =>
                sendGAEvent("event", "menu_click", {
                  item_name: "exhibitionWorks",
                  menu_type: "desktop_sidebar",
                })
              }
            >
              Exhibition Works
            </button>
          </Link>
          <Link href="/3dWorks" transitionTypes={["page-navigation"]}>
            <button
              className="w-full bg-red-50/10 text-shadow-md text-shadow-secondary/20 border border-white/50 px-4 py-3 mt-2 rounded-inner shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300"
              onClick={() =>
                sendGAEvent("event", "menu_click", {
                  item_name: "3dWorks",
                  menu_type: "desktop_sidebar",
                })
              }
            >
              3D Works
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
