"use client"
import Image from "next/image"

import { ImEnlarge2 } from "react-icons/im";
import { RiCloseLargeFill } from "react-icons/ri";

import HomeButton from '@/components/homeButton';
import FadeIn from "@/components/fadeIn";


import { useState } from 'react';

export default function Three_D_Works() {
  const [showVideo_1, setShowVideo_1] = useState(false);
  const [showVideo_2, setShowVideo_2] = useState(false);
  const [showVideo_3, setShowVideo_3] = useState(false);
  const [showVideo_4, setShowVideo_4] = useState(false);
  const [showVideo_5, setShowVideo_5] = useState(false);
  return (
    <div className="custom-scrollbar w-full h-full p-4 md:p-8 lg:rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      {/* open video_1 */}
      {showVideo_1 && (
        <div
          className="absolute inset-0 z-1 h-full w-full bg-black/60 rounded-inner"
          onClick={() => setShowVideo_1(false)}>
          {/* 防止點擊影片時也關閉 */}
          <div onClick={(e) => e.stopPropagation()}>
            <video
              src="/video/1.mp4"
              autoPlay
              loop
              playsInline
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 openLayer scale-90 rounded-inner"
            />
            {/* close */}
            <div className="absolute top-[5%] right-[5%] text-md text-gray-200 hover:text-accent transition-all duration-400"
              onClick={() => setShowVideo_1(false)}><RiCloseLargeFill /></div>
          </div>
        </div>
      )}
      {/* open video_2 */}
      {showVideo_2 && (
        <div
          className="absolute inset-0 z-1 h-full w-full bg-black/60 rounded-inner"
          onClick={() => setShowVideo_2(false)}>
          {/* 防止點擊影片時也關閉 */}
          <div onClick={(e) => e.stopPropagation()}>
            <video
              src="/video/2.mp4"
              autoPlay
              loop
              playsInline
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 openLayer scale-90 rounded-inner"
            />
            {/* close */}
            <div className="absolute top-[5%] right-[5%] text-md text-gray-200 hover:text-accent transition-all duration-400"
              onClick={() => setShowVideo_2(false)}><RiCloseLargeFill /></div>
          </div>
        </div>
      )}
      {/* open video_3 */}
      {showVideo_3 && (
        <div
          className="absolute inset-0 z-1 h-full w-full bg-black/60 rounded-inner"
          onClick={() => setShowVideo_3(false)}>
          {/* 防止點擊影片時也關閉 */}
          <div onClick={(e) => e.stopPropagation()}>
            <video
              src="/video/3.mp4"
              autoPlay
              loop
              playsInline
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 openLayer scale-90 lg:scale-60 rounded-inner"
            />
            {/* close */}
            <div className="absolute top-[5%] right-[5%] text-md text-gray-200 hover:text-accent transition-all duration-400"
              onClick={() => setShowVideo_3(false)}><RiCloseLargeFill /></div>
          </div>
        </div>
      )}
      {/* open video_5 */}
      {showVideo_5 && (
        <div
          className="absolute inset-0 z-1 h-full w-full bg-black/60 rounded-inner"
          onClick={() => setShowVideo_5(false)}>
          {/* 防止點擊影片時也關閉 */}
          <div onClick={(e) => e.stopPropagation()}>
            <video
              src="/video/5.mp4"
              autoPlay
              loop
              playsInline
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 openLayer scale-90 lg:scale-60 rounded-inner"
            />
            {/* close */}
            <div className="absolute top-[5%] right-[5%] text-md text-gray-200 hover:text-accent transition-all duration-400"
              onClick={() => setShowVideo_5(false)}><RiCloseLargeFill /></div>
          </div>
        </div>
      )}
      {/* open video_4 */}
      {showVideo_4 && (
        <div
          className="absolute inset-0 z-1 h-full w-full bg-black/60 rounded-inner"
          onClick={() => setShowVideo_4(false)}>
          {/* 防止點擊影片時也關閉 */}
          <div onClick={(e) => e.stopPropagation()}>
            <video
              src="/video/4.mp4"
              autoPlay
              loop
              playsInline
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 openLayer scale-90 rounded-inner"
            />
            {/* close */}
            <div className="absolute top-[5%] right-[5%] text-md text-gray-200 hover:text-accent transition-all duration-400"
              onClick={() => setShowVideo_4(false)}><RiCloseLargeFill /></div>
          </div>
        </div>
      )}




      <div className="flex flex-col gap-3 lg:gap-6 text-secondary w-full">
        {/* Three_D_Works */}
        <FadeIn>
          <div className="flex justify-between">
            <div className="title">3D Works</div>
            <HomeButton text="Home" href="/" />
          </div>
        </FadeIn>
        <hr className="border-primary/20" />

        {/* 圖片 */}
        <div className="flex flex-col gap-6 w-full">
          {/* video 1 */}
          <FadeIn>
            <div className="flex flex-col md:flex-row gap-3 w-full">
              {/* text */}
              <div className="content-end md:w-[40%]">
                <p className="text-primary text-sm">2026</p>
                <p className="subtitle pb-0!">Procedural LOGO Sequence Animation</p>
              </div>
              {/* video */}
              <div className="relative aspect-video w-full overflow-hidden rounded-inner shadow-md shadow-red-200/50 cursor-pointer" onClick={() => setShowVideo_1(true)}>
                <video
                  src="/video/1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 hover:bg-white/30 opacity-0 hover:opacity-100 hover:scale-150 transition-all duration-500 aspect-video h-full w-full"><ImEnlarge2 className="w-full h-full scale-10" /></div>
              </div>
            </div>
          </FadeIn>
          {/* video 2 */}
          <FadeIn>
            <div className="flex flex-col md:flex-row gap-3 w-full">
              {/* text */}
              <div className="content-end md:w-[40%]">
                <p className="text-primary text-sm">2026</p>
                <p className="subtitle pb-0!">NCCU LOGO Animation</p>
              </div>
              {/* video */}
              <div className="relative aspect-video w-full overflow-hidden rounded-inner shadow-md shadow-red-200/50 cursor-pointer" onClick={() => setShowVideo_2(true)}>
                <video
                  src="/video/2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 hover:bg-white/30 opacity-0 hover:opacity-100 hover:scale-150 transition-all duration-500 aspect-video h-full w-full"><ImEnlarge2 className="w-full h-full scale-10" /></div>
              </div>
            </div>
          </FadeIn>
          {/* video 4 */}
          <FadeIn>
            <div className="flex flex-col md:flex-row gap-3 w-full">
              {/* text */}
              <div className="content-end md:w-[40%]">
                <p className="text-primary text-sm">2026</p>
                <p className="subtitle pb-0!">Procedural LOGO Sequence Animation</p>
              </div>
              {/* video */}
              <div className="relative aspect-video w-full overflow-hidden rounded-inner shadow-md shadow-red-200/50 cursor-pointer" onClick={() => setShowVideo_4(true)}>
                <video
                  src="/video/4.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 hover:bg-white/30 opacity-0 hover:opacity-100 hover:scale-150 transition-all duration-500 aspect-video h-full w-full"><ImEnlarge2 className="w-full h-full scale-10" /></div>
              </div>
            </div>
          </FadeIn>
          {/* video 5 */}
          <FadeIn>
            <div className="flex flex-col md:flex-row gap-3 w-full">
              {/* text */}
              <div className="content-end md:w-[40%]">
                <p className="text-primary text-sm">2026</p>
                <p className="subtitle pb-0!">Procedural Countdown Clock Animation</p>
              </div>
              {/* video */}
              <div className="relative aspect-video w-full overflow-hidden rounded-inner shadow-md shadow-red-200/50 cursor-pointer" onClick={() => setShowVideo_5(true)}>
                <video
                  src="/video/5.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 hover:bg-white/30 opacity-0 hover:opacity-100 hover:scale-150 transition-all duration-500 aspect-video h-full w-full"><ImEnlarge2 className="w-full h-full scale-10" /></div>
              </div>
            </div>
          </FadeIn>
          {/* video 3 */}
          <FadeIn>
            <div className="flex flex-col md:flex-row gap-3 w-full">
              {/* text */}
              <div className="content-end md:w-[40%]">
                <p className="text-primary text-sm">2025</p>
                <p className="subtitle pb-0!">Alarm Clock Animation</p>
              </div>
              {/* video */}
              <div className="relative aspect-square w-full overflow-hidden rounded-inner shadow-md shadow-red-200/50 cursor-pointer" onClick={() => setShowVideo_3(true)}>
                <video
                  src="/video/3.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 hover:bg-white/30 opacity-0 hover:opacity-100 hover:scale-150 transition-all duration-500 aspect-square h-full w-full"><ImEnlarge2 className="w-full h-full scale-6" /></div>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* 3D Printing Models */}
        <hr className="border-primary/20" />
        <FadeIn>
          <div className="flex justify-between">
            <div className="subtitle pb-0!">3D Printing Models</div>
          </div>
        </FadeIn>

        {/* pictures */}
        <FadeIn>
          <div className="flex flex-row gap-3 w-full">
            <div className="relative aspect-3/4 w-1/3 overflow-hidden rounded-inner shadow-md shadow-red-200/50">
              <Image
                src="/3d/2.jpg"
                alt="bg"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="eager"
                className="object-cover"
                />
            </div>
            <div className="relative aspect-3/4 w-1/3 overflow-hidden rounded-inner shadow-md shadow-red-200/50">
              <Image
                src="/3d/3.jpg"
                alt="bg"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="eager"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-3/4 w-1/3 overflow-hidden rounded-inner shadow-md shadow-red-200/50">
              <Image
                src="/3d/1.jpg"
                alt="bg"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="eager"
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>


      </div>
    </div>
  );
}
