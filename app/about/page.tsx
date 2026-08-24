export const revalidate = 3600;

import { db } from "@/lib/db";
import AboutClient from "./_components/AboutClient";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  alternates: {
    canonical: "/about",
  },
};

export default async function About() {
  const aboutContent = await db.about_Content.findMany();
  const aboutEducation = await db.about_Education.findMany({
    orderBy: {
      year: 'asc'
    }
  });
  const aboutExperience = await db.about_Experience.findMany({
    orderBy: {
      year: 'asc'
    }
  });
  const aboutSkill = await db.about_Skill.findMany();

  return (
    <div className="custom-scrollbar w-full h-full p-4 md:p-8 lg:rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      <AboutClient aboutContent={aboutContent} aboutEducation={aboutEducation} aboutExperience={aboutExperience} aboutSkill={aboutSkill} />
    </div>
  );
}