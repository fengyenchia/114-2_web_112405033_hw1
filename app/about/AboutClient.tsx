"use client";

interface About_Content {
  id: string;
  description: string;
}

interface About_Education {
  id: string;
  school: string;
  department: string;
  year: string;
}

interface About_Experience {
  id: string;
  role: string;
  description: string;
  year: string;
}

interface About_Skill {
  id: string;
  category: string;
  tags: string[];
}

import type { ComponentType } from "react";
import LogoLoop from '@/components/LogoLoop';
import SkillCard from '@/components/skillCard';
import HomeButton from '@/components/homeButton';
import FadeIn from "@/components/fadeIn";
import { SiInstagram, SiGmail, SiGithub, SiFacebook, SiLinktree, SiBlender } from 'react-icons/si';
import { IoLogoLinkedin, IoCode, IoGlobe } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const socialLogos = [
  { node: <SiInstagram />, title: "Instagram", href: "https://www.instagram.com/yenchia._.0504" },
  { node: <SiGmail />, title: "Email", href: "mailto:yanjia20050504@gmail.com" },
  { node: <IoLogoLinkedin />, title: "LinkedIn", href: "https://www.linkedin.com/in/fengyenchia" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com/fengyenchia" },
  { node: <FaXTwitter />, title: "X", href: "https://x.com/fengyenchia" },
  { node: <SiFacebook />, title: "facebook", href: "https://www.facebook.com/fengyenchia0504/" },
  { node: <IoCode />, title: "openproccessing", href: "https://openprocessing.org/user/522490/" },
  { node: <IoGlobe />, title: "my website", href: "http://fengyenchia.github.io/my-page/" },
  { node: <SiBlender />, title: "my 3d website", href: "https://112405033.weebly.com/" },
  { node: <SiLinktree />, title: "linkTree", href: "https://linktr.ee/yenchia" },
];

type LogoLoopPropsLocal = {
  logos: typeof socialLogos;
  [key: string]: unknown;
};

const TypedLogoLoop: ComponentType<LogoLoopPropsLocal> = LogoLoop as ComponentType<LogoLoopPropsLocal>;

export default function AboutClient({ aboutContent, aboutEducation, aboutExperience, aboutSkill }: { aboutContent: About_Content[]; aboutEducation: About_Education[]; aboutExperience: About_Experience[]; aboutSkill: About_Skill[] }) {
  return (
    <div className="flex flex-col gap-3 lg:gap-6 text-secondary w-full">
            {/* About */}
            <FadeIn>
              <div className="flex justify-between">
                <div className="title">About</div>
                <HomeButton text="Home" href="/" />
              </div>
            </FadeIn>
            <hr className="border-primary/20" />
            <FadeIn>
              <div className="bg-red-50/30 rounded-inner py-2 px-4 lg:px-4 text-primary text-sm lg:text-base leading-relaxed">
                <p className="whitespace-pre-line">{aboutContent[0].description}</p>
              </div>
            </FadeIn>
    
            {/* Education & Experience  */}
            <div className="flex flex-col gap-4 w-full">
              {/* Education */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-8 border border-primary/50 rounded-inner px-4 py-2 w-full">
                <FadeIn>
                  <div className="flex flex-row md:flex-col gap-2 md:gap-0 items-baseline md:items-left text-primary text-md md:w-24 shrink-0 pb-2 md:pb-0 border-b border-primary/50 md:border-0">
                    <p className="font-bold my-0 lg:my-2">Education</p>
                  </div>
                </FadeIn>

                <FadeIn className="grow w-full">
                  <div className="text-primary text-sm md:text-md md:border-s border-primary/50 grow md:ps-4 space-y-2 md:space-y-4 w-full flex flex-col">
                    {aboutEducation.map((edu) => (
                      <div className="w-full" key={edu.id}>
                        <div className="flex flex-col w-full md:ps-2 py-1 lg:py-2 rounded-inner hover:bg-white/20 hover:translate-x-1 hover:pr-2 transition-all duration-500">
                          <div className="flex justify-between w-full">
                            <p className="font-bold">{edu.school}</p>
                            <p className="text-xs md:text-sm text-primary/80">
                              {edu.year}
                            </p>
                          </div>
                          <p className="text-xs md:text-sm text-primary/90">
                            {edu.department}
                          </p>

                        </div>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>
    
              {/* Experience */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-8 border border-primary/50 rounded-inner px-4 py-2 w-full">
                <FadeIn>
                  <div className="flex flex-row md:flex-col gap-2 md:gap-0 items-baseline md:items-left text-primary text-md md:w-24 shrink-0 pb-2 md:pb-0 border-b border-primary/50 md:border-0">
                    <p className="font-bold my-0 lg:my-2">Experience</p>
                  </div>
                </FadeIn>
                <FadeIn>
                  <div className="text-primary text-sm md:text-md md:border-s border-primary/50 grow md:ps-4 space-y-4 flex flex-col w-full">
                    {aboutExperience.map((exp) => (
                      <div className="group w-full" key={exp.id}>
                        <div className="flex flex-col gap-1 md:ps-2 py-1 lg:py-2 rounded-inner group-hover:bg-white/20 group-hover:translate-x-1 group-hover:pr-2 transition-all duration-500 w-full">
                          
                          <div className="flex justify-between items-baseline w-full gap-4">
                            <p className="font-bold text-left">{exp.role}</p>
                            <p className="text-end text-xs md:text-sm text-primary/80 shrink-0">
                              {exp.year}
                            </p>
                          </div>
                          
                          <p className="text-xs md:text-sm text-primary/90 text-left pr-2 md:pr-4 whitespace-pre-line">
                            {exp.description}
                          </p>
                          
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

            </div>
    
            {/* Tag */}
              <div className="border-y border-primary/50">
              <FadeIn>
              <div className="flex flex-row justify-center items-center gap-8 lg:gap-6 md:gap-8 p-4 lg:p-8 w-full text-center font-bold text-sm lg:text-lg opacity-80">
                <p className="hidden md:block">互動設計</p>
                <p className="md:hidden">互動<br />設計</p>
                <span className="">x</span>
                <p className="hidden md:block">數位藝術</p>
                <p className="md:hidden">數位<br />藝術</p>
                <span className="">x</span>
                <p className="hidden md:block">網頁設計</p>
                <p className="md:hidden">網頁<br />設計</p>
                </div>
                </FadeIn>
              </div>
    
    
    
    
            <div className="bg-red-50/30 rounded-inner p-4 w-full">
              <div className="subtitle">Skill</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {/* skill */}
                {aboutSkill.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    category={skill.category}
                    tags={skill.tags}
                  />
                ))}
              </div>
            </div>
    
    
            {/* Logo Loop */}
            <div className="mt-auto pt-5 flex justify-center w-full overflow-hidden">
              <div className="w-full max-w-2xl overflow-hidden">
                <div className="h-10 text-primary">
                  <TypedLogoLoop
                    logos={socialLogos}
                    speed={100}
                    direction="right"
                    logoHeight={30}
                    gap={40}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff00"
                  />
                </div>
              </div>
            </div>
    
          </div>
  );
}