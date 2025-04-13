'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaPalette } from 'react-icons/fa';

const projects = [
  {
    title: 'Project A',
    description: 'Website untuk Penerimaan Mahasiswa Baru.',
    link: '/projects/project-a',
    animation: { x: -100, opacity: 0 },
  },
  {
    title: 'Project B',
    description: 'Website yang menjelaskan Wisata Bali',
    link: '/projects/project-b',
    animation: { scale: 0.8, opacity: 0 },
  },
  {
    title: 'Project C',
    description: 'Aplikasi Keuangan Sederhana.',
    link: '/projects/project-c',
    animation: { y: 100, opacity: 0 },
  },
];

export default function Portfolio() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto relative">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-2">
            <FaPalette className="text-2xl text-pink-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">My Projects</h1>
          </div>
        </div>

        {/* Central vertical line */}
        <div className="absolute left-1/2 top-28 bottom-0 w-1 bg-pink-400 -translate-x-1/2 z-0" />

        {/* Timeline */}
        <div className="flex flex-col gap-20 relative z-10">
          {projects.map((project, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={project.animation}
                whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative md:w-[48%] px-6 py-8 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md
                  ${isLeft ? 'md:self-start md:ml-0 md:mr-auto' : 'md:self-end md:mr-0 md:ml-auto'}`}
              >
                {/* Dot */}
                <span
                  className={`
                    hidden md:block
                    absolute top-5 w-5 h-5 rounded-full bg-pink-500 border-[5px] border-white dark:border-gray-900 z-10
                    ${isLeft ? '-right-[33px]' : '-left-[33px]'}
                  `}
                />
                {/* Mobile Dot */}
                <span className="md:hidden absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-500 border-4 border-white dark:border-gray-900 rounded-full z-10" />

                {/* Card content */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-pink-600 mt-4 hover:underline"
                >
                  <FaArrowRight className="mr-2" />
                  Lihat Detail
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
