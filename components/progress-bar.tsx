"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
  section: "javascript" | "react";
}

export function ProgressBar({ current, total, section }: ProgressBarProps) {
  const progress = (current / total) * 100;
  const colorClass = section === "javascript" ? "bg-js" : "bg-react";

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${colorClass}`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      <span className="text-sm text-muted-foreground whitespace-nowrap">
        Lesson {current} of {total}
      </span>
    </div>
  );
}
