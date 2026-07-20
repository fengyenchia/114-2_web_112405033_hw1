import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

import { db } from "@/lib/db";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const profile = await db.profile.findMany();

  return (
    <div className="w-full h-full px-4 py-8 md:p-8 lg:rounded-xl">
      <HomeClient profile={profile} />
    </div>
  );
}
