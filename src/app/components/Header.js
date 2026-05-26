"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 select-none">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center gap-60">
        
        {/* LOGO AREA (EDJ & SERVICES) */}
        <Link href="/" className="flex items-center justify-center">
          <img src='../logo.png'/>
        </Link>

        {/* DESKTOP NAVIGATION (Se oculta en móviles y se muestra desde 'md') */}
        <nav className="hidden md:flex items-center gap-12 font-medium text-lg text-[#08163B]">
          <Link href="/sobre-nosotros" className="hover:opacity-80 transition-opacity relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#08163B] hover:after:w-full after:transition-all after:duration-300">
            Sobre Nosotros
          </Link>
          <Link href="/procura" className="hover:opacity-80 transition-opacity relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#08163B] hover:after:w-full after:transition-all after:duration-300">
            Procura
          </Link>
          <Link href="/servicios" className="hover:opacity-80 transition-opacity relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#08163B] hover:after:w-full after:transition-all after:duration-300">
            Servicios
          </Link>
          <Link href="/contacto" className="hover:opacity-80 transition-opacity relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#08163B] hover:after:w-full after:transition-all after:duration-300">
            Contacto
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON (HAMBURGUESA) */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-[#08163B] p-2 focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="transition-transform duration-300"
          >
            {isMenuOpen ? (
              // Icono X cuando está abierto
              <path d="M18 6 6 18M6 6l12 12"/>
            ) : (
              // Icono menú hamburguesa normal
              <path d="M4 12h16M4 6h16M4 18h16"/>
            )}
          </svg>
        </button>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div 
        className={`md:hidden absolute top-24 left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out z-40 overflow-hidden
          ${isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col p-6 gap-5 font-semibold text-lg text-[#08163B]">
          <Link 
            href="/sobre-nosotros" 
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#D4A373] transition-colors border-b border-gray-50 pb-2"
          >
            Sobre Nosotros
          </Link>
          <Link 
            href="/procura" 
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#D4A373] transition-colors border-b border-gray-50 pb-2"
          >
            Procura
          </Link>
          <Link 
            href="/servicios" 
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#D4A373] transition-colors border-b border-gray-50 pb-2"
          >
            Servicios
          </Link>
          <Link 
            href="/contacto" 
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#D4A373] transition-colors pb-2"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}