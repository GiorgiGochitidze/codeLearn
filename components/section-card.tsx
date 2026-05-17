"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Braces, Atom } from "lucide-react";

interface SectionCardProps {
  section: "javascript" | "react";
  title: string;
  description: string;
  lessonCount: number;
}

export function SectionCard({
  section,
  title,
  description,
  lessonCount,
}: SectionCardProps) {
  const isJS = section === "javascript";
  const Icon = isJS ? Braces : Atom;
  const gradientClass = isJS
    ? "from-js/20 to-js/5"
    : "from-react/20 to-react/5";
  const borderClass = isJS ? "border-js/30" : "border-react/30";
  const iconBgClass = isJS ? "bg-js/20" : "bg-react/20";
  const iconColorClass = isJS ? "text-js" : "text-react";
  const buttonBgClass = isJS
    ? "bg-js hover:bg-js-light"
    : "bg-react hover:bg-react-light";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradientClass} border ${borderClass} p-6 md:p-8`}
    >
      <div className="flex flex-col gap-4">
        <div
          className={`w-14 h-14 rounded-xl ${iconBgClass} flex items-center justify-center`}
        >
          <Icon className={`w-7 h-7 ${iconColorClass}`} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-muted-foreground">
            {lessonCount} lessons
          </span>
          <Link
            href={`/section/${section}`}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg ${buttonBgClass} text-white font-medium transition-all duration-300`}
          >
            Start Learning
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
