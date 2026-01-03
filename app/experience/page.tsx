export default function Experience() {
  const experiences = [
    {
      company: "Innovaccer",
      role: "SDE-3",
      period: "Jan 2022 - Present",
      description: "Leading frontend development initiatives and building scalable web applications.",
    },
    {
      company: "Collegedunia",
      role: "Software Engineer",
      period: "Mar 2021 - Jan 2022",
      description: "Developed and maintained the main platform using React and Next.js.",
    },
    {
      company: "Newgen",
      role: "Senior Software Engineer",
      period: "Jun 2017 - Mar 2021",
      description: "Built enterprise-level applications and workflow engines.",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Experience
        </h1>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-600 pl-6 py-4 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {exp.role}
              </h2>
              <h3 className="text-xl text-blue-600 dark:text-blue-400 mb-2">
                {exp.company}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {exp.period}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

