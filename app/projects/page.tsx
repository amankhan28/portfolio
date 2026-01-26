export default function Projects() {
  const projects = [
    {
      name: "Sara AI Scheduler",
      description: "AI-powered scheduling system built with Next.js and machine learning.",
      tech: ["Next.js", "TypeScript", "AI/ML"],
    },
    {
      name: "Zollege Platform",
      description: "Educational platform for students and institutions.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      name: "iForms Banking Workflow Engine",
      description: "Enterprise workflow engine for banking operations.",
      tech: ["React", "Java", "PostgreSQL"],
    },
    {
      name: "CARHP",
      description: "Healthcare platform for patient management.",
      tech: ["Next.js", "TypeScript", "GraphQL"],
    },
    {
      name: "Collegedunia",
      description: "College search and comparison platform.",
      tech: ["React", "Next.js", "Elasticsearch"],
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
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

