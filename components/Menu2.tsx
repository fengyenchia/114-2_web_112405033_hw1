"use client"

import "../app/globals.css";
import Image from "next/image"
import Link from "next/link";

// ICON
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";

export default function Menu2() {

    return (
        <div className="p-8">
            <div className="custom-scrollbar bg-red-50/0 backdrop-blur-2xl p-8 w-[360px] h-full rounded-2xl shadow-lg overflow-y-auto">
                <div className="flex justify-center items-center w-full">
                    <div className="bg-white w-[80px] h-[80px] rounded-full border-4 border-x-red-200 border-y-red-100 ring-4 ring-red-100 shadow-lg shadow-red-200 overflow-hidden flex justify-center items-center">
                        <Image src="/avatar.png" alt="avatar" loading="eager" width={80} height={80} />
                    </div>
                </div>

                <div className="text-center font-medium text-white mt-5">馮 妍 嘉</div>
                <div className="text-center text-white pb-2">NCCU AD x DCT</div>


                <div className="flex gap-2">

                    <div className="flex w-full justify-evenly text-[20px] text-white py-3">
                        <Link href="https://www.instagram.com/yenchia._.0504/" target="/blank"><div className="border-2 border-white rounded-full p-1.5 hover:bg-white hover:text-red-200 transition duration-300">
                            <IoLogoInstagram />
                        </div></Link>
                        <Link href="https://www.instagram.com/yenchia._.0504/" target="/blank"><div className="border-2 border-white rounded-full p-1.5 hover:bg-white hover:text-red-200 transition duration-300">
                            <IoMail />
                        </div></Link>
                        <Link href="https://www.instagram.com/yenchia._.0504/" target="/blank"><div className="border-2 border-white rounded-full p-1.5 hover:bg-white hover:text-red-200 transition duration-300">
                            <IoLogoLinkedin />
                        </div></Link>
                        <Link href="https://www.instagram.com/yenchia._.0504/" target="/blank"><div className="border-2 border-white rounded-full p-1.5 hover:bg-white hover:text-red-200 transition duration-300">
                            <IoLogoGithub />
                        </div></Link>
                    </div>
                </div>

                <div className="text-center text-white font-medium pt-2 flex flex-col gap-2">
                    <Link href="/about" className="">
                        <div className="bg-red-50/10 text-shadow-md text-shadow-gray-600/20 border border-white/50 p-[16px] rounded-md shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300">About</div>
                    </Link>
                    <Link href="/designProject">
                        <div className="bg-red-50/10 text-shadow-md text-shadow-gray-600/20 border border-white/50 p-[16px] mt-2 rounded-md shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300">Design Project</div>
                    </Link>
                    <Link href="/programmingProject">
                        <div className="bg-red-50/10 text-shadow-md text-shadow-gray-600/20 border border-white/50 p-[16px] mt-2 rounded-md shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300">Programming Project</div>
                    </Link>
                    <Link href="/exhibitionWorks">
                        <div className="bg-red-50/10 text-shadow-md text-shadow-gray-600/20 border border-white/50 p-[16px] mt-2 rounded-md shadow-xs shadow-red-100 hover:bg-white/10">Exhibition Works</div>
                    </Link>
                    <Link href="/3dWorks">
                        <div className="bg-red-50/10 text-shadow-md text-shadow-gray-600/20 border border-white/50 p-[16px] mt-2 rounded-md shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300">3D Works</div>
                    </Link>
                    <Link href="/grid">
                        <div className="bg-red-50/10 text-shadow-md text-shadow-gray-600/20 border border-white/50 p-[16px] mt-2 rounded-md shadow-xs shadow-red-100 hover:bg-white/20 transition duration-300">Grid</div>
                    </Link>
                </div>

            </div>
        </div>
    );
}