import "../styles/globals.css";
import Header from "../pages/components/Header";
import ThemeToggle from "../pages/components/ThemeToggle";
import CommentPopup from "../pages/components/CommentPopup"; // ✅ Import komponen popup
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <Component {...pageProps} />
      <ThemeToggle />
      <CommentPopup /> {/* ✅ Tambahkan di sini agar muncul di semua halaman */}
    </ThemeProvider>
  );
}

export default MyApp;
