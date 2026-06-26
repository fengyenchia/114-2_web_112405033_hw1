export const dynamic = 'force-dynamic';

import { db } from "@/lib/db";
import ProgrammingProjectClient from "./ProgrammingProjectClient";

import HomeButton from "@/components/homeButton";
import FadeIn from "@/components/fadeIn";


export default async function Programming_Project() {
  const programmingProject = await db.programmingProject.findMany({
    orderBy: {
      year: "desc",
    },
  });

  return (
    <div className="custom-scrollbar w-full h-full p-4 md:p-8 lg:rounded-xl bg-white/10 overflow-y-auto overflow-x-hidden flex flex-col gap-10">

      <div className="flex flex-col gap-3 lg:gap-6 text-secondary w-full">
        {/* Programming Project */}
        <FadeIn>
          <div className="flex justify-between">
            <div className="title">Programming Project</div>
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
