import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import ThemeToggle from "../pages/components/ThemeToggle"; // optional

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Halo! Ada yang ingin kamu tanyakan?" },
  ]);
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");

    // Periksa jika input berhubungan dengan tema
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("tema gelap")) {
      setDarkMode(true);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Tema diganti ke gelap 🌙" },
      ]);
      return;
    } else if (lowerInput.includes("tema terang")) {
      setDarkMode(false);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Tema diganti ke terang ☀️" },
      ]);
      return;
    }

    const reply = await getBotReply(input);
    setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
  };

  const getBotReply = async (msg) => {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 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",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: msg }],
        }),
      });

      if (!response.ok) {
        return "Hmm, ada yang salah 😔 (API error)";
      }

      const data = await response.json();
      return data.choices?.[0]?.message?.content?.trim() || "Maaf aku bingung jawabnya 😅";
    } catch (err) {
      return "Oops, error saat menghubungi AI 😢";
    }
  };

  return (
    <>
      <Head>
        <title>Home | My Portfolio</title>
      </Head>

      {/* Tombol Chatbot */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-lg"
        >
          💬 Chatbot
        </button>
      </div>

      {/* Popup Chatbot */}
      {showChat && (
        <div className="fixed top-20 left-4 w-72 bg-white dark:bg-gray-800 text-black dark:text-black p-4 rounded shadow-xl z-50">
          <h3 className="font-bold mb-2">Tanya Aku!</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            Ketik <span className="font-semibold">"ganti tema gelap"</span> atau <span className="font-semibold">"ganti tema terang"</span> ✨
          </p>
          <div className="h-40 overflow-y-auto text-sm mb-2 bg-gray-100 dark:bg-gray-700 p-2 rounded">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-1 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                <span className={msg.sender === "user" ? "text-blue-600" : "text-green-500"}>
                  {msg.sender === "user" ? "Kamu" : "Bot"}: {msg.text}
                </span>
              </div>
            ))}
          </div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="w-full p-1 border rounded mb-1"
            placeholder="Tulis pesan..."
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-2 py-1 rounded w-full"
          >
            Kirim
          </button>
        </div>
      )}

      {/* Konten Utama */}
      <main className="relative flex flex-col items-center justify-center min-h-screen 
                      bg-white text-black 
                      dark:bg-gray-900 dark:text-white 
                      text-center px-4 transition-colors duration-300 ease-in-out">
        <h5 className="text-3xl font-extrabold drop-shadow-lg animate-pulse">
          Welcome to My Portfolio
        </h5>
        <p className="text-xl mt-6 max-w-2xl">
          I create amazing digital experiences with modern web technologies.
        </p>
        <Link
          href="/portfolio"
          className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-bold hover:scale-105 transition"
        >
          View My Work
        </Link>
      </main>
    </>
  );
}
