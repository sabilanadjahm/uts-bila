import { motion } from "framer-motion";

const bounceVariant = {
  hidden: { opacity: 0, y: -30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-20 transition-colors duration-300">
      
      {/* Foto Profil */}
      <motion.div
        custom={0}
        variants={bounceVariant}
        initial="hidden"
        animate="visible"
        className="relative w-36 h-36 rounded-full border-4 border-blue-400 overflow-hidden shadow-md mb-4 hover:rotate-3 hover:scale-105 transition-transform duration-300"
      >
        <img
          src="/images/profile.jpg"
          alt="Profile Picture"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Judul */}
      <motion.h1
        custom={1}
        variants={bounceVariant}
        initial="hidden"
        animate="visible"
        className="text-3xl font-bold text-blue-600 dark:text-yellow-400 mt-2 text-center"
      >
        Perkenalkan, Saya Sabila Nadjah Ma'ripah <span className="inline-block animate-wiggle">👋</span>
      </motion.h1>

      {/* Penjelasan */}
      <motion.div
        custom={2}
        variants={bounceVariant}
        initial="hidden"
        animate="visible"
        className="mt-6 w-full max-w-md bg-gray-50 dark:bg-gray-800 rounded-xl shadow p-6 space-y-3"
      >
        <h2 className="text-xl font-semibold text-blue-600 dark:text-yellow-400 text-center">
          Tentang Saya
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-200 text-justify">
          Saya adalah seorang developer yang memiliki ketertarikan dalam membangun website
          dan aplikasi yang tidak hanya berfungsi dengan baik, tetapi juga memiliki desain
          yang menarik. Saya senang mempelajari hal-hal baru dan terus berusaha berkembang
          dalam dunia teknologi.
        </p>
      </motion.div>

      {/* Biodata */}
      <motion.div
        custom={3}
        variants={bounceVariant}
        initial="hidden"
        animate="visible"
        className="mt-6 w-full max-w-md bg-gray-50 dark:bg-gray-800 rounded-xl shadow p-6 space-y-3"
      >
        <h2 className="text-xl font-semibold text-blue-600 dark:text-yellow-400 text-center">
          Sedikit Tentang Aku
        </h2>
        <ul className="text-sm sm:text-base space-y-2 text-gray-800 dark:text-gray-200 text-left">
          <li><strong>Nama:</strong> Sabila Nadjah Ma'ripah</li>
          <li><strong>Lahir:</strong> Sumedang, 06 September 2004</li>
          <li><strong>Tinggal:</strong> Sumedang, Jawa Barat</li>
          <li><strong>Kuliah:</strong> D3 Komputerisasi Akuntansi - Universitas Ma'soem</li>
          <li><strong>Email:</strong> nieabili@gmail.com</li>
        </ul>
      </motion.div>
    </main>
  );
}
