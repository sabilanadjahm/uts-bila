import { useState } from "react";

export default function CommentForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message || rating === 0) {
      alert("Semua kolom wajib diisi!");
      return;
    }

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message, rating }),
      });

      const text = await res.text();
      if (!res.ok) {
        console.error("Respon error:", text);
        throw new Error("Gagal menyimpan komentar");
      }

      let result;
      try {
        result = JSON.parse(text);
      } catch {
        console.error("Bukan JSON:", text);
        throw new Error("Respon server bukan JSON");
      }

      alert("Komentar berhasil dikirim!");
      setName("");
      setMessage("");
      setRating(0);
    } catch (error) {
      console.error("Error:", error.message);
      alert("Terjadi kesalahan: " + error.message);
    }
  };

  const renderStars = () => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        onClick={() => setRating(i + 1)}
        className={`cursor-pointer text-2xl ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <form
      onSubmit={handleCommentSubmit}
      className="bg-white dark:bg-gray-700 p-4 rounded shadow-md space-y-4"
    >
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Komentar"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <div className="flex items-center space-x-2">
        <span className="text-sm font-semibold">Rating:</span>
        {renderStars()}
      </div>
      <button
        type="submit"
        className="bg-yellow-400 text-black px-4 py-2 rounded font-bold hover:scale-105 transition"
      >
        Kirim Komentar
      </button>
    </form>
  );
}
