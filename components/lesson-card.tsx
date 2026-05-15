"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Lesson } from "@/lib/lessons-data";
import { ChevronRight } from "lucide-react";

interface LessonCardProps {
  lesson: Lesson;
  index: number;
}

export function LessonCard({ lesson, index }: LessonCardProps) {
  const isJS = lesson.section === "javascript";
  const borderColor = isJS ? "border-js/30" : "border-react/30";
  const hoverBorderColor = isJS ? "hover:border-js" : "hover:border-react";
  const numberColor = isJS ? "text-js" : "text-react";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={`/lesson/${lesson.id}`}
        className={`group block p-5 rounded-xl bg-card border ${borderColor} ${hoverBorderColor} transition-all duration-300 hover:bg-muted/30`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center ${numberColor} font-bold text-lg`}
          >
            {index + 1}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {lesson.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
              {lesson.theoryBlocks[0]?.substring(0, 100)}...
            </p>
          </div>
          <ChevronRight className="flex-shrink-0 w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
        </div>
      </Link>
    </motion.div>
  );
}
