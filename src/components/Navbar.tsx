"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#fbfbe2]/80 backdrop-blur-md shadow-[0_8px_32px_0_rgba(27,29,14,0.04)]">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 md:py-6 max-w-screen-2xl mx-auto">
          <div className="text-xl md:text-2xl font-serif font-bold text-[#2e0052] tracking-tighter">
            Astronext
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-12 items-center">
            <Link className="text-[#2e0052] font-bold border-b border-[#2e0052]/20 pb-1 font-['Manrope'] text-xs tracking-[0.1em] uppercase" href="#">
              Horoscopes
            </Link>
            <Link className="text-[#2e0052]/60 font-medium hover:text-[#4b0082] transition-colors duration-300 font-['Manrope'] text-xs tracking-[0.1em] uppercase" href="#">
              Birth Chart
            </Link>
            <Link className="text-[#2e0052]/60 font-medium hover:text-[#4b0082] transition-colors duration-300 font-['Manrope'] text-xs tracking-[0.1em] uppercase" href="#">
              Readings
            </Link>
            <Link className="text-[#2e0052]/60 font-medium hover:text-[#4b0082] transition-colors duration-300 font-['Manrope'] text-xs tracking-[0.1em] uppercase" href="#">
              Journal
            </Link>
          </div>
          
          {/* Right side Actions */}
          <div className="flex items-center gap-4">
            <Link href="#booking-calendar" className="hidden sm:inline-block bg-primary text-on-primary px-6 py-2.5 rounded-md text-xs font-bold tracking-widest uppercase active:scale-95 transition-transform duration-200">
              Consult the Stars
            </Link>
            {/* Hamburger Button */}
            <button 
              className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-black/5 transition"
              onClick={() => setIsOpen(true)}
            >
              <span className="material-symbols-outlined text-[#2e0052]">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden animate-in fade-in" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[80vw] max-w-sm bg-surface z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex justify-end">
          <button 
            className="p-2 rounded-full hover:bg-black/5 transition flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined text-[#2e0052]">close</span>
          </button>
        </div>
        <div className="flex flex-col px-8 space-y-8 mt-4">
          <Link onClick={() => setIsOpen(false)} className="text-2xl font-serif text-[#2e0052]" href="#">
            Horoscopes
          </Link>
          <Link onClick={() => setIsOpen(false)} className="text-2xl font-serif text-[#2e0052]" href="#">
            Birth Chart
          </Link>
          <Link onClick={() => setIsOpen(false)} className="text-2xl font-serif text-[#2e0052]" href="#">
            Readings
          </Link>
          <Link onClick={() => setIsOpen(false)} className="text-2xl font-serif text-[#2e0052]" href="#">
            Journal
          </Link>
          <div className="pt-8 border-t border-[#2e0052]/10 mt-8">
            <Link onClick={() => setIsOpen(false)} href="#booking-calendar" className="block text-center w-full bg-primary text-on-primary px-6 py-4 rounded-xl text-sm font-bold tracking-widest uppercase active:scale-95 transition-transform duration-200">
              Consult the Stars
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
