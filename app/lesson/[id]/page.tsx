"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { ChevronLeft, ChevronRight, Braces, Atom } from "lucide-react";
import {
  getLessonById,
  getNextLesson,
  getPreviousLesson,
  getLessonProgress,
} from "@/lib/lessons-data";
import { CodeBlock } from "@/components/code-block";
import { DataTable } from "@/components/data-table";
import { ProgressBar } from "@/components/progress-bar";

export default function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const lesson = getLessonById(id);

  if (!lesson) {
    notFound();
  }

  const nextLesson = getNextLesson(id);
  const prevLesson = getPreviousLesson(id);
  const progress = getLessonProgress(id);

  const isJS = lesson.section === "javascript";
  const Icon = isJS ? Braces : Atom;
  const iconColor = isJS ? "text-js" : "text-react";
  const sectionName = isJS ? "JavaScript" : "React";
  const buttonBg = isJS
    ? "bg-js hover:bg-js-light"
    : "bg-react hover:bg-react-light";
  const borderColor = isJS ? "border-js/30" : "border-react/30";

function TheoryText({ text }: { text: string }) {
  const parts = text.split(/(\*\*\*.*?\*\*\*|\*\*.*?\*\*)/g);
  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith("***") && part.endsWith("***")) {
          return <h3 className="text-xl font-bold text-foreground" key={i}>{part.slice(3, -3)}</h3>;
        }
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
      })}
    </span>
  );
}

  return (
    <div className="min-h-screen pb-32 md:pb-8">
      {/* Lesson Header */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="sticky top-0 md:top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border px-4 md:px-8 py-4"
      >
        <div className="max-w-3xl">
          {progress && (
            <ProgressBar
              current={progress.current}
              total={progress.total}
              section={lesson.section}
            />
          )}
        </div>
      </motion.section>

      {/* Lesson Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="px-4 md:px-8 pt-6"
      >
        <div className="max-w-3xl">
          {/* Title */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Icon className={`w-4 h-4 ${iconColor}`} />
            <span>{sectionName}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {lesson.title}
          </h1>

          {/* Theory */}
          <div className="space-y-4">
            {lesson.theoryBlocks.map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="text-foreground/90 leading-relaxed whitespace-pre-line"
              >
                <TheoryText text={block} />
              </motion.div>
            ))}
          </div>

          {/* Tables */}
          {lesson.tables && lesson.tables.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              {lesson.tables.map((table, i) => (
                <DataTable key={i} table={table} />
              ))}
            </motion.div>
          )}

          {/* Code Examples */}
          {lesson.codeExamples.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 space-y-6"
            >
              <h2 className="text-xl font-semibold text-foreground">
                Code Examples
              </h2>
              {lesson.codeExamples.map((example, i) => (
                <CodeBlock key={i} code={example.code} label={example.label} />
              ))}
            </motion.div>
          )}

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              {prevLesson ? (
                <Link
                  href={`/lesson/${prevLesson.id}`}
                  className={`flex-1 flex items-center gap-3 px-5 py-4 rounded-xl border ${borderColor} hover:bg-muted/30 transition-colors`}
                >
                  <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">
                      Previous
                    </div>
                    <div className="font-medium text-foreground">
                      {prevLesson.title}
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              {nextLesson ? (
                <Link
                  href={`/lesson/${nextLesson.id}`}
                  className={`flex-1 flex items-center justify-between gap-3 px-5 py-4 rounded-xl ${buttonBg} text-white transition-colors`}
                >
                  <div className="text-left">
                    <div className="text-xs opacity-80">Next</div>
                    <div className="font-medium">{nextLesson.title}</div>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </Link>
              ) : (
                <Link
                  href={`/section/${lesson.section}`}
                  className={`flex-1 flex items-center justify-center gap-2 px-5 py-4 rounded-xl ${buttonBg} text-white transition-colors`}
                >
                  <span className="font-medium">Complete!</span>
                </Link>
              )}
            </div>
          </motion.nav>
        </div>
      </motion.article>
    </div>
  );
}
