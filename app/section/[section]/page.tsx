"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { use } from "react";
import { Braces, Atom } from "lucide-react";
import { getLessonsBySection } from "@/lib/lessons-data";
import { LessonCard } from "@/components/lesson-card";

export default function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = use(params);

  if (section !== "javascript" && section !== "react") {
    notFound();
  }

  const lessons = getLessonsBySection(section);
  const isJS = section === "javascript";
  const Icon = isJS ? Braces : Atom;
  const iconColor = isJS ? "text-js" : "text-react";
  const title = isJS ? "JavaScript" : "React";
  const description = isJS
    ? "Start with the language of the web. Learn variables, operators, conditions, and loops - the building blocks of every program."
    : "Build modern user interfaces with reusable components. Learn what React is, how components work, and why they matter.";

  return (
    <div className="min-h-screen pb-24 md:pb-8">
      {/* Section Header */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative pt-6 pb-8 md:pt-12 md:pb-12 px-4 md:px-8"
      >
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`w-12 h-12 rounded-xl ${
                isJS ? "bg-js/20" : "bg-react/20"
              } flex items-center justify-center`}
            >
              <Icon className={`w-6 h-6 ${iconColor}`} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{title}</h1>
              <p className="text-sm text-muted-foreground">
                {lessons.length} lessons
              </p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </motion.section>

      {/* Lessons List */}
      <section className="px-4 md:px-8">
        <div className="max-w-3xl space-y-3">
          {lessons.map((lesson, index) => (
            <LessonCard key={lesson.id} lesson={lesson} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
