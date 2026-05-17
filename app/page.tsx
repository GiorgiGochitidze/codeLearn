"use client";

import { motion } from "framer-motion";
import { SectionCard } from "@/components/section-card";
import { getLessonsBySection } from "@/lib/lessons-data";
import { Sparkles } from "lucide-react";

export default function HomePage() {
  const jsLessons = getLessonsBySection("javascript");
  const reactLessons = getLessonsBySection("react");

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden pt-8 pb-12 md:pt-16 md:pb-20"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-js/5 via-transparent to-react/5 pointer-events-none" />
        
        <div className="relative px-4 md:px-8 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm text-muted-foreground mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Free interactive lessons</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-foreground text-balance"
          >
            Learn{" "}
            <span className="text-js">JavaScript</span>
            {" "}&{" "}
            <span className="text-react">React</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            Master the fundamentals of web development with clear explanations, 
            real code examples, and a beginner-friendly approach.
          </motion.p>
        </div>
      </motion.section>

      {/* Section Cards */}
      <section className="px-4 md:px-8 max-w-4xl mx-auto mt-5">
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          <SectionCard
            section="javascript"
            title="JavaScript"
            description="Start with the language of the web. Learn variables, operators, conditions, and loops."
            lessonCount={jsLessons.length}
          />
          <SectionCard
            section="react"
            title="React"
            description="Build modern user interfaces with reusable components and efficient updates."
            lessonCount={reactLessons.length}
          />
        </div>
      </section>

      {/* Feature Grid */}
      <section className="mt-16 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-center mb-8 text-foreground">
          Why learn with us?
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Clear Explanations",
              description: "No jargon. Just simple, friendly language anyone can understand.",
            },
            {
              title: "Real Code Examples",
              description: "Every concept comes with practical code you can learn from.",
            },
            {
              title: "Mobile Friendly",
              description: "Learn anywhere, anytime. Our lessons work great on any device.",
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="p-5 rounded-xl bg-card border border-border"
            >
              <h3 className="font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
