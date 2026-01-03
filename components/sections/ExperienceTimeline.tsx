"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  startYear: string;
  endYear: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: "Innovaccer",
    role: "SDE-3",
    startYear: "Jan 2022",
    endYear: "Present",
    description: [
      "Built a UI interface for an LLM-powered Smart Assist using RAG pipelines and vector-DB-based knowledge retrieval, enabling faster clinical support responses and real-time assistance",
      "Engineered an ambient documentation workflow on the frontend that consumes streaming transcription data and auto-populates structured ticket fields",
      "Led cross-functional integration of a centralized Appointment Scheduler module used across four internal teams, reducing scheduling-related incidents by 25%",
      "Integrated backend-driven UI configuration through a GUI Console, reducing frontend code changes by 45% and cutting regression testing effort by two days per release",
      "Collaborated closely with design teams to convert complex Figma flows into pixel-perfect React implementations across multiple modules",
    ],
  },
  {
    company: "Collegedunia",
    role: "Software Engineer",
    startYear: "Mar 2021",
    endYear: "Jan 2022",
    description: [
      "Built high-impact SEO-optimized pages using Next.js, improving PageSpeed score from 44 → 92 and reducing load time from 5.1s → 1.6s",
      "Increased CARHP user engagement by integrating an interactive car review section, resulting in a 17% increase in session duration and 22% increase in user interactions",
      "Architected and delivered Zollege, a centralized college information platform with 5,000+ listings, leading a team of 5 engineers",
      "Developed responsive pages for 3dot14's ad-tech platform with content served from Ghost CMS, improving average mobile load performance by 35%",
    ],
  },
  {
    company: "Newgen Software",
    role: "Senior Software Engineer",
    startYear: "Jun 2017",
    endYear: "Mar 2021",
    description: [
      "Migrated frontend modules from JSF to React, improving deployment velocity by 30% and enabling scalable, modern UI foundations",
      "Optimized performance of a core BPM tool, reducing latency by 55% and improving enterprise client satisfaction",
      "Led the development of iForms—a configurable UI builder used by 12 enterprise clients to create over 500 complex forms",
      "Designed a dynamic theme designer enabling end-to-end branding configuration, reducing frontend redesign effort by 40%",
      "Managed a 7-engineer team delivering 20+ features with a 98% on-time delivery rate",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-8 md:py-12 bg-white dark:bg-gray-900 scroll-mt-20 w-full max-w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 px-4">
            My professional journey and key achievements
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto w-full overflow-x-hidden">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 transform md:-translate-x-1/2"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-center ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
          className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-2 sm:border-4 border-white dark:border-gray-900 shadow-lg"
        >
          <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-ping opacity-20"></div>
        </motion.div>
      </div>

      {/* Content card */}
      <div
        className={`w-full max-w-full md:w-[45%] ml-0 sm:ml-0 md:ml-0 pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-0 md:pr-0 ${
          isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300"
        >
          {/* Year badge */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 sm:px-3 py-1 rounded-full">
              {experience.startYear} - {experience.endYear}
            </span>
          </div>

          {/* Role */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
            {experience.role}
          </h3>

          {/* Company */}
          <h4 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
            {experience.company}
          </h4>

          {/* Description */}
          <ul className="space-y-1.5 sm:space-y-2">
            {experience.description.map((item, idx) => (
              <li
                key={idx}
                className="text-sm sm:text-base text-gray-600 dark:text-gray-300 flex items-start gap-2"
              >
                <span className="text-blue-600 dark:text-blue-400 mt-1.5 flex-shrink-0">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

