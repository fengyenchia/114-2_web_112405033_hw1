export const revalidate = 3600;

import { db } from "@/lib/db";
import ProgrammingProjectClient from "./_components/ProgrammingProjectClient";

import HomeButton from "@/components/homeButton";
import FadeIn from "@/components/fadeIn";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programming Projects",
  alternates: {
    canonical: "/programmingProjects",
  },
};

export default async function Programming_Project() {
  let programmingProject;

  try {
    programmingProject = await db.programmingProjects.findMany({
      orderBy: { year: "desc" },
    });
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "P2022") {
      programmingProject = await db.programmingProjects.findMany({
        select: {
          id: true,
          title: true,
          year: true,
          description: true,
          imgSrc: true,
          website1_url: true,
          website2_url: true,
          website2_url_word: true,
        },
        orderBy: { year: "desc" },
      });
    } else {
      throw error;
    }
  }

  return (
    <div className="custom-scrollbar w-full h-full p-4 md:p-8 lg:rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      <div className="flex flex-col gap-3 lg:gap-6 text-secondary w-full">
        {/* Programming Projects */}
        <FadeIn>
          <div className="flex justify-between">
            <div className="title">Programming Projects</div>
            <HomeButton text="Home" href="/" />
          </div>
        </FadeIn>
        <hr className="border-primary/20" />

        {/* all cards */}
        <FadeIn>
          <ProgrammingProjectClient programmingProject={programmingProject} />
        </FadeIn>
      </div>

    </div>
  );
}
