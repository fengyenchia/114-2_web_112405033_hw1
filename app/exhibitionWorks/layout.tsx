import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Exhibition Works",
  alternates: {
    canonical: "/exhibitionWorks",
  },
};

export default function ExhibitionWorksLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}