"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, Braces, Atom } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isJS = pathname.includes("javascript") || pathname.includes("js-");
  const isReact = pathname.includes("react");

  let title = "CodeLearn";
  let Icon = null;
  let iconColor = "text-primary";

  if (pathname.includes("javascript")) {
    title = "JavaScript";
    Icon = Braces;
    iconColor = "text-js";
  } else if (pathname.includes("react")) {
    title = "React";
    Icon = Atom;
    iconColor = "text-react";
  } else if (pathname.includes("lesson/js-")) {
    title = "JavaScript";
    Icon = Braces;
    iconColor = "text-js";
  } else if (pathname.includes("lesson/react-")) {
    title = "React";
    Icon = Atom;
    iconColor = "text-react";
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border md:hidden"
    >
      <div className="flex items-center h-14 px-4">
        {!isHomePage && (
          <Link
            href={
              pathname.includes("lesson")
                ? `/section/${isJS ? "javascript" : "react"}`
                : "/"
            }
            className="p-2 -ml-2 mr-2 rounded-lg hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
        )}

        <div className="flex items-center gap-2">
          {Icon && <Icon className={`w-5 h-5 ${iconColor}`} />}
          <h1 className="font-bold text-lg">{title}</h1>
        </div>
      </div>
    </motion.header>
  );
}
