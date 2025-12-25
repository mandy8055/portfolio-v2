"use client";

import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { SimpleIcon } from "@/components/ui/simple-icon";

export function SocialSidebar() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex">
      <div className="flex flex-col items-center gap-6">
        {personalInfo.social.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-theme-primary transition-all hover:-translate-y-1 hover:scale-110 transform duration-200"
            aria-label={social.name}
          >
            <SimpleIcon icon={social.icon} className="size-6" />
          </Link>
        ))}
        {/* Vertical line */}
        <div className="w-0.5 h-28 bg-linear-to-b from-foreground/40 to-transparent" />
      </div>
    </div>
  );
}
