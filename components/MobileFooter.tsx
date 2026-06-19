"use client"
import Link from "next/link";

import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMail } from "react-icons/io5";

export default function MobileFooter() {
  return (
    <div className="lg:hidden flex items-center justify-around gap-3 text-[20px] text-white py-4 backdrop-blur-sm rounded-b-lg">
        <Link
            href="https://www.instagram.com/yenchia._.0504/"
            target="_blank"
            className="border-2 border-white/80 rounded-full p-1.5 transition hover:bg-white hover:text-red-200"
            aria-label="Instagram"
        >
            <IoLogoInstagram />
        </Link>
        <Link
            href="mailto:yanjia20050504@gmail.com"
            className="border-2 border-white/80 rounded-full p-1.5 transition hover:bg-white hover:text-red-200"
            aria-label="Email"
        >
            <IoMail />
        </Link>
        <Link
            href="https://www.linkedin.com/in/fengyenchia/"
            target="_blank"
            className="border-2 border-white/80 rounded-full p-1.5 transition hover:bg-white hover:text-red-200"
            aria-label="LinkedIn"
        >
            <IoLogoLinkedin />
        </Link>
        <Link
            href="https://github.com/fengyenchia"
            target="_blank"
            className="border-2 border-white/80 rounded-full p-1.5 transition hover:bg-white hover:text-red-200"
            aria-label="GitHub"
        >
            <IoLogoGithub />
        </Link>
    </div>
  );
}