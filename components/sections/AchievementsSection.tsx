"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const achievements = [
  {
    title: "MVP Award",
    description: "Recognized for outstanding contributions and innovation.",
    year: "Aug 2023, May 2024",
  },
  {
    title: "SPOT Award",
    description: "Recognized for going above and beyond in project delivery.",
    year: "Apr 2024",
  },
  {
    title: "Excellence Award",
    description: "Acknowledged for technical excellence and best practices.",
    year: "Jan–Mar 2018",
  },
  {
    title: "Pat-On-The-Back Award",
    description: "Recognized for exceptional performance and contributions.",
    year: "Dec 2017, Mar 2019",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-8 md:py-12 bg-white dark:bg-gray-900 scroll-mt-20 w-full max-w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 px-4">
            Recognition for my contributions and excellence
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h3>
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

