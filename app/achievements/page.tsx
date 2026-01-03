export default function Achievements() {
  const achievements = [
    {
      title: "MVP Award 2024",
      description: "Recognized for outstanding contributions and innovation.",
      year: "2024",
    },
    {
      title: "MVP Award 2023",
      description: "Awarded for exceptional performance and leadership.",
      year: "2023",
    },
    {
      title: "SPOT Award",
      description: "Recognized for going above and beyond in project delivery.",
      year: "2023",
    },
    {
      title: "Excellence Award",
      description: "Acknowledged for technical excellence and best practices.",
      year: "2022",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Achievements
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {achievement.title}
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {achievement.year}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

