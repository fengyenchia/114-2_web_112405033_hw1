"use client"
import Link from "next/link";

type ButtonProps = {
  text: string;
  href: string;
};

export default function HomeButton({ text, href }: ButtonProps) {
  return (
    <Link href={href}>
        <div className="hidden lg:inline-block text-md text-white/50 border border-white/50 rounded-inner py-1 px-2 shadow-md hover:bg-white/50 hover:translate-y-0.5 hover:text-primary hover:border-accent transition-all duration-500">
            {text}
        </div>
    </Link>
  );
}