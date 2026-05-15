"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Braces, Atom, ChevronDown } from "lucide-react";
import { getLessonsBySection, type Lesson } from "@/lib/lessons-data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function LessonList({
  lessons,
  isOpen,
  section,
}: {
  lessons: Lesson[];
  isOpen: boolean;
  section: "javascript" | "react";
}) {
  const pathname = usePathname();
  const colorClass = section === "javascript" ? "text-js" : "text-react";
  const activeBgClass =
    section === "javascript" ? "bg-js/10" : "bg-react/10";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <div className="pl-4 space-y-1 flex flex-col mt-2">
            {lessons.map((lesson, index) => {
              const isActive = pathname === `/lesson/${lesson.id}`;
              return (
                <Link
                  key={lesson.id}
                  href={`/lesson/${lesson.id}`}
                  className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                    isActive
                      ? `${activeBgClass} ${colorClass}`
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <span className="font-mono text-xs mr-2 opacity-50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {lesson.title}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const [jsOpen, setJsOpen] = useState(
    pathname.includes("javascript") || pathname.includes("js-")
  );
  const [reactOpen, setReactOpen] = useState(
    pathname.includes("react") || pathname.includes("react-")
  );

  const jsLessons = getLessonsBySection("javascript");
  const reactLessons = getLessonsBySection("react");

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-sidebar border-r border-sidebar-border">
      <div className="p-4 border-b border-sidebar-border">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-js to-react flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="font-bold text-lg text-sidebar-foreground">
            CodeLearn
          </span>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        <Link
          href="/"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
            pathname === "/"
              ? "bg-sidebar-accent text-sidebar-accent-foreground"
              : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="font-medium">Home</span>
        </Link>

        <div className="pt-4">
          <button
            onClick={() => setJsOpen(!jsOpen)}
            className={`w-full flex items-center cursor-pointer justify-between px-3 py-2 rounded-lg transition-colors ${
              pathname.includes("javascript") || pathname.includes("js-")
                ? "bg-js/10 text-js"
                : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <Braces className="w-5 h-5" />
              <span className="font-medium">JavaScript</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                jsOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <LessonList lessons={jsLessons} isOpen={jsOpen} section="javascript" />
        </div>

        <div className="pt-2 flex flex-col gap-1.5">
          <button
            onClick={() => setReactOpen(!reactOpen)}
            className={`w-full flex items-center cursor-pointer justify-between px-3 py-2 rounded-lg transition-colors ${
              pathname.includes("react")
                ? "bg-react/10 text-react"
                : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <Atom className="w-5 h-5" />
              <span className="font-medium">React</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                reactOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <LessonList lessons={reactLessons} isOpen={reactOpen} section="react" />
        </div>
      </nav>
    </aside>
  );
}
