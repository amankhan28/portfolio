export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "GraphQL"],
    },
    {
      category: "DevOps",
      skills: ["Docker", "CI/CD", "Git", "Vercel", "AWS"],
    },
    {
      category: "UI Engineering",
      skills: ["Framer Motion", "Responsive Design", "Accessibility", "Performance Optimization"],
    },
    {
      category: "Security",
      skills: ["OAuth", "JWT", "Security Best Practices"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: "Cloud",
      skills: ["AWS", "Vercel", "CloudFront"],
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {category.category}
              </h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

