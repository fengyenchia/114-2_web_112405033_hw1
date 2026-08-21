"use client";
import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";

type ButtonProps = {
  text: string;
  href: string;
};

export default function HomeButton({ text, href }: ButtonProps) {
  return (
    <Link href={href} transitionTypes={["page-navigation"]}>
      <button
        className="hidden lg:inline-block text-md text-white/50 border border-white/50 rounded-inner py-1 px-2 shadow-md hover:bg-white/50 hover:translate-y-0.5 hover:text-primary hover:border-accent transition-all duration-500"
        onClick={() =>
          sendGAEvent("event", "menu_click", {
            item_name: text,
            menu_type: "desktop_sidebar",
          })
        }
      >
        {text}
      </button>
    </Link>
  );
}
