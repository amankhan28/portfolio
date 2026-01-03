"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Shield, Palette, Settings, Server } from "lucide-react";

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "Java", "Python"],
    icon: Code2,
  },
  {
    category: "Frontend",
    skills: ["React", "Redux", "HTML", "CSS", "Next.js"],
    icon: Palette,
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Django", "REST APIs", "Microservices"],
    icon: Server,
  },
  {
    category: "Testing",
    skills: ["Jest", "Playwright"],
    icon: Shield,
  },
  {
    category: "DevOps & CI/CD",
    skills: ["Docker", "Kubernetes", "Helm", "GitLab CI/CD", "Git"],
    icon: Settings,
  },
  {
    category: "Databases",
    skills: ["MongoDB"],
    icon: Database,
  },
  {
    category: "Other Tools",
    skills: ["Ghost CMS", "Git", "REST APIs", "Microservices"],
    icon: Cloud,
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-8 md:py-12 bg-white dark:bg-gray-900 scroll-mt-20 relative overflow-hidden w-full max-w-full">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-full overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 px-4">
            Technologies and tools I work with
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Card content */}
                <div className="relative h-full bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-colors duration-300 shadow-sm hover:shadow-md">
                  {/* Subtle gradient background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Content wrapper */}
                  <div className="relative z-10">
                    {/* Icon and title */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="inline-block flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 flex items-center justify-center shadow-md">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                        {category.category}
                      </h3>
                    </div>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: index * 0.1 + skillIndex * 0.03,
                            duration: 0.3,
                            ease: "easeOut"
                          }}
                          className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold border border-gray-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

