"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar, GraduationCap, FileEdit, Car, Globe } from "lucide-react";

const projects = [
  {
    name: "Real-time Appointment Scheduler",
    description: "Designed and developed an AI-powered scheduling assistant that automated form entry and ticket generation, reducing manual support effort by ~180 hours/month.",
    tech: ["React", "Node.js", "Playwright"],
    icon: Calendar,
    url: null,
  },
  {
    name: "Zollege",
    description: "Architected and delivered a centralized college information platform with over 5,000 listings, leading a team of 5 engineers through agile sprints.",
    tech: ["React", "Node.js", "MongoDB"],
    icon: GraduationCap,
    url: "https://zollege.in/",
  },
  {
    name: "iForms Form Builder",
    description: "Led development of a configurable web-based form builder used across 12 enterprise clients to create 500+ complex UI forms.",
    tech: ["React", "Java", "JSF"],
    icon: FileEdit,
    url: null,
  },
  {
    name: "CARHP",
    description: "Expanded user engagement by integrating a dynamic car review section, resulting in a 17% increase in session duration.",
    tech: ["React", "Next.js", "Ghost CMS"],
    icon: Car,
    url: "https://www.carhp.com/",
  },
  {
    name: "Collegedunia",
    description: "Optimized performance across high-traffic pages, increasing PageSpeed score from 44 to 92 and reducing load time from 5.1s to 1.6s.",
    tech: ["React", "Next.js", "Elasticsearch"],
    icon: GraduationCap,
    url: "https://collegedunia.com/",
  },
  {
    name: "3dot14",
    description: "Developed responsive pages for 3dot14's ad-tech platform using Ghost CMS, improving average mobile load performance by 35%.",
    tech: ["React", "Ghost CMS", "Responsive Design"],
    icon: Globe,
    url: "https://3dot14.co/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-8 md:py-12 bg-white dark:bg-gray-900 scroll-mt-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Some of my notable projects and contributions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const CardWrapper = project.url ? motion.a : motion.div;
            const IconComponent = project.icon;
            const wrapperProps = project.url
              ? {
                  href: project.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <CardWrapper
                key={index}
                {...wrapperProps}
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
                className="group relative cursor-pointer"
              >
                {/* Card content */}
                <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-colors duration-300 shadow-sm hover:shadow-md">
                  {/* Subtle gradient background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Content wrapper */}
                  <div className="relative z-10">
                    {/* Icon and title */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="inline-block mb-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 flex items-center justify-center shadow-md">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                          {project.name}
                        </h3>
                      </div>
                      {project.url && (
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                        </div>
                      )}
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: index * 0.1 + techIndex * 0.03,
                            duration: 0.3,
                            ease: "easeOut"
                          }}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-semibold border border-gray-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

