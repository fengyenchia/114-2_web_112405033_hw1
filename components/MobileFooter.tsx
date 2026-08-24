"use client";
import { sendGAEvent } from "@next/third-parties/google";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export default function MobileFooter() {
  return (
    <div className="lg:hidden flex items-center justify-around gap-3 text-[20px] text-white py-4">
      <a
        href="https://www.instagram.com/yenchia._.0504/"
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex h-10 w-10 items-center justify-center text-white/90 transition hover:text-red-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        onClick={() =>
          sendGAEvent("event", "social_click", {
            platform: "instagram",
            device_view: "mobile_burger",
          })
        }
        aria-label="Instagram"
      >
        <IconBrandInstagram size={24} stroke={1.8} />
      </a>
      <a
        href="mailto:yanjia20050504@gmail.com"
        className="inline-flex h-10 w-10 items-center justify-center text-white/90 transition hover:text-red-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        onClick={() =>
          sendGAEvent("event", "social_click", {
            platform: "email",
            device_view: "mobile_burger",
          })
        }
        aria-label="Email"
      >
        <IconMail size={24} stroke={1.8} />
      </a>
      <a
        href="https://www.linkedin.com/in/fengyenchia/"
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex h-10 w-10 items-center justify-center text-white/90 transition hover:text-red-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        onClick={() =>
          sendGAEvent("event", "social_click", {
            platform: "linkedIn",
            device_view: "mobile_burger",
          })
        }
        aria-label="LinkedIn"
      >
        <IconBrandLinkedin size={24} stroke={1.8} />
      </a>
      <a
        href="https://github.com/fengyenchia"
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex h-10 w-10 items-center justify-center text-white/90 transition hover:text-red-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        onClick={() =>
          sendGAEvent("event", "social_click", {
            platform: "gitHub",
            menu_type: "mobile_burger",
          })
        }
        aria-label="GitHub"
      >
        <IconBrandGithub size={24} stroke={1.8} />
      </a>
    </div>
  );
}
