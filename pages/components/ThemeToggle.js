import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="px-4 py-2 rounded-full bg-gray-800 dark:bg-gray-800 text-white dark:text-white shadow-md"
      >
        {theme === "light" ? "🌙 " : "☀️"}
      </button>
    </div>
  );
}
