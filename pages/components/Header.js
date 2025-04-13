import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center bg-black/80 dark:bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow-md max-w-max mx-auto text-sm font-medium text-white dark:text-black space-x-6">
        <Link href="/" className="hover:underline underline-offset-4">Home</Link>
        <Link href="/about" className="hover:underline underline-offset-4">About</Link>
        <Link href="/skills" className="hover:underline underline-offset-4">Skills</Link>
        <Link href="/portfolio" className="hover:underline underline-offset-4">Portfolio</Link>
        <Link href="/services" className="hover:underline underline-offset-4">Services</Link>
        <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden absolute top-4 right-4">
        <button
          className="p-2 rounded-full bg-white dark:bg-black text-black dark:text-white shadow-md hover:scale-105 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="absolute top-[70px] right-4 bg-white/90 dark:bg-black/90 backdrop-blur-md text-black dark:text-white rounded-lg shadow-lg py-4 px-6 flex flex-col space-y-4 items-end text-sm font-semibold md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
          <Link href="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
