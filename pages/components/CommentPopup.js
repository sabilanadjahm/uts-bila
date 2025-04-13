import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import Link from "next/link";

// Pakai forwardRef
const CommentPopup = forwardRef((props, ref) => {
  const [comments, setComments] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [average, setAverage] = useState(0);

  // Fetch komentar dari API
  const refreshComments = async () => {
    try {
      const res = await fetch("/api/comments");
      const data = await res.json();
      setComments(data);
      if (data.length > 0) {
        const total = data.reduce((acc, cur) => acc + Number(cur.rating), 0);
        setAverage((total / data.length).toFixed(1));
      } else {
        setAverage(0);
      }
    } catch (err) {
      console.error("Gagal memuat komentar:", err);
    }
  };

  // Expose fungsi refresh ke luar
  useImperativeHandle(ref, () => ({
    refreshComments,
  }));

  useEffect(() => {
    refreshComments();
  }, []);

  const formatDate = (iso) => {
    const date = new Date(iso);
    return date.toLocaleString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <>
      {/* Tombol tetap di pojok kanan bawah */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowPopup(!showPopup)}
          className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition flex items-center gap-2"
        >
          💬 Feedback
        </button>
      </div>

      {/* Popup muncul di atas tombol */}
      {showPopup && (
        <div className="fixed bottom-20 right-4 z-50 w-80 max-h-96 overflow-y-auto bg-white dark:bg-gray-800 text-black dark:text-white rounded shadow-lg p-4">
          <h4 className="font-bold text-center text-lg mb-2">⭐ Komentar & Rating</h4>

          {comments.length > 0 ? (
            <>
              <div className="text-center mb-4">
                <p className="text-2xl font-bold">
                  ⭐ {average} <span className="text-base">/ 5</span>
                </p>
                <p className="text-sm text-gray-600">{comments.length} ulasan</p>
              </div>

              {comments.map((comment, idx) => (
                <div key={idx} className="mb-4 border-t pt-2">
                  <p className="font-semibold">
                    {comment.name} <span className="text-yellow-500">⭐ {comment.rating}</span>
                  </p>
                  <p>{comment.message}</p>
                  <p className="text-xs text-gray-500">{formatDate(comment.date)}</p>
                </div>
              ))}
            </>
          ) : (
            <p className="text-sm text-center">Belum ada komentar.</p>
          )}

          <div className="text-center mt-3">
            <Link href="/contact" className="text-blue-500 text-sm underline">
              Tinggalkan Komentar
            </Link>
          </div>
        </div>
      )}
    </>
  );
});

// WAJIB untuk pakai forwardRef
CommentPopup.displayName = "CommentPopup";

export default CommentPopup;
