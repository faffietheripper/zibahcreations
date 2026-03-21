"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-[#F7F3EE] text-black sticky top-0 z-50 relative">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO + NAME */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/zibahlogo.JPG"
            alt="Zibah Creations"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-serif text-xl">Zibah Creations</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-xl">
          ☰
        </button>
      </div>

      {/* MOBILE MENU (overlay, not pushing content) */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#F7F3EE] border-t md:hidden flex flex-col px-6 py-6 space-y-4 text-sm z-50">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/products" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
