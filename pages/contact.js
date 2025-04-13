import { useRef } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import CommentForm from "./components/CommentForm";
import CommentPopup from "./components/CommentPopup";

export default function Contact() {
  const popupRef = useRef(null);

  const handleCommentSubmit = async (data) => {
    try {
      const res = await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Gagal menyimpan komentar");

      alert("Komentar berhasil dikirim!");

      if (popupRef.current) {
        popupRef.current.refreshComments();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat mengirim komentar.");
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    },
  };

  return (
    <>
      <Head>
        <title>Contact | My Portfolio</title>
      </Head>
      <main className="relative flex flex-col items-center justify-start min-h-screen pt-28 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white px-6 transition-colors duration-300">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-8"
        >
          📞 Get in <span className="text-yellow-500">Touch</span>
        </motion.h1>

        {/* Info Kontak */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl w-full max-w-lg shadow-lg border border-gray-200 dark:border-gray-700 space-y-4 text-lg font-medium"
        >
          <motion.div variants={item}>
            📧 Email:{" "}
            <a
              href="mailto:nieabili@gmail.com"
              className="text-blue-600 dark:text-yellow-400 underline"
            >
              nieabili@gmail.com
            </a>
          </motion.div>
          <motion.div variants={item}>
            📱 Phone: +62 895 1488 4143
          </motion.div>
          <motion.div variants={item}>
            📍 Location: Sumedang, Indonesia
          </motion.div>

          <motion.a
            variants={item}
            href="mailto:nieabili@gmail.com?subject=Halo%20dari%20Website&body=Halo,%20saya%20tertarik%20dengan%20portfolio%20Anda!"
            className="mt-6 block bg-yellow-400 text-black px-6 py-3 rounded text-lg font-bold text-center hover:scale-105 transition"
          >
            Kirim Email Sekarang
          </motion.a>
        </motion.div>

        {/* Komentar & Rating */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-12 w-full max-w-lg"
        >
          <motion.h2 variants={item} className="text-2xl font-semibold mb-4">
            💬 Tinggalkan Komentar & Rating
          </motion.h2>
          <motion.div variants={item}>
            <CommentForm onSubmit={handleCommentSubmit} />
          </motion.div>
        </motion.div>

        <CommentPopup ref={popupRef} />
      </main>
    </>
  );
}
