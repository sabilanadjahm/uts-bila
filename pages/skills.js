import Head from "next/head";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <>
      <Head>
        <title>Skills | My Portfolio</title>
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white px-6 transition-colors duration-300">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 text-center"
        >
          🚀 My <span className="text-yellow-500">Skills</span>
        </motion.h1>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-yellow-400/40 dark:hover:shadow-yellow-300/30 transition-all duration-300 ease-in-out text-center font-semibold text-lg cursor-pointer border border-gray-300 dark:border-gray-700"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </main>
    </>
  );
}
