"use client"
import React, { useState } from 'react';
import Link from 'next/link';

// Se asume que los datos de las tarjetas ahora tienen un campo opcional 'bottomImageUrl'

export default function CardSlideshow({ cards, title, isServices }) {
  const [currentIndex, setCurrentIndex] = useState(1);

  if (!cards || cards.length === 0) {
    return (
      <div className="text-center p-8 text-gray-500">
        No hay tarjetas para mostrar.
      </div>
    );
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-[#fafafa] text-[#08163B] flex flex-col items-center justify-center py-16 px-4 select-none overflow-hidden relative">
      
      <h2 className="text-5xl md:text-7xl font-black tracking-wide uppercase mb-16 text-center">
        {title}
      </h2>
      
      <div className="relative w-full max-w-6xl flex items-center justify-center">
        
        {/* Botón Izquierdo */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:left-2 z-30 bg-white text-[#08163B] p-3 rounded-full shadow-md border border-gray-100 hover:scale-110 active:scale-95 transition-all"
          aria-label="Tarjeta anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>

        {/* Ventana de visualización */}
        <div className="w-full overflow-hidden py-10 px-4">
          
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{
              '--slider-index': currentIndex,
              transform: `translateX(calc(-100% * var(--slider-index)))`
            }}
            data-desktop-track
          >
            {cards.map((card, index) => {
              const isActive = index === currentIndex;

              return (
                <div 
                  key={card.id || index}
                  className="w-full md:w-1/3 flex-shrink-0 px-4 transition-all duration-500 ease-out"
                >
                  <div 
                    className={`bg-white shadow-xl rounded-sm p-6 md:p-8 flex flex-col border border-gray-50 transition-all duration-500 text-left h-full
                      ${isActive 
                        ? 'scale-105 md:scale-110 min-h-[420px] md:min-h-[460px] border-t-4 border-t-[#08163B] z-10 opacity-100 shadow-2xl' 
                        : 'scale-95 md:scale-95 min-h-[360px] md:min-h-[390px] opacity-40 md:opacity-60'
                      }
                    `}
                  >
                    {card.imageUrl && (
                      <div className="w-full h-40 overflow-hidden mb-4 rounded-sm">
                        <img src={card.imageUrl} alt={card.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    
                    <div className="flex flex-col gap-4 flex-1 justify-start">
                      <h3 className="text-xl font-bold text-[#08163B]">{card.title}</h3>
                      <p className="text-[#455067] text-sm leading-relaxed whitespace-pre-line">{card.text}</p>
                    </div>

                    {/* IMAGEN OPCIONAL AL FINAL DE LA TARJETA */}
                    {card.bottomImageUrl && (
                      <div className="w-full max-h-40 overflow-hidden mt-6 rounded-sm self-center flex justify-center">
                        <img 
                          src={card.bottomImageUrl} 
                          alt={`Imagen final para ${card.title}`} 
                          className="h-full object-cover"
                        />
                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Botón Derecho */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:right-2 z-30 bg-white text-[#08163B] p-3 rounded-full shadow-md border border-gray-100 hover:scale-110 active:scale-95 transition-all"
          aria-label="Siguiente tarjeta"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>

      </div>

      {isServices && (
        <Link href="/servicios" className="mt-12 bg-[#08163B] text-white font-semibold px-12 py-3 hover:bg-[#122557] hover:scale-105 transition-all z-10">
          Ver Más
        </Link>
      )}

      {/* Inyección segura de estilos responsivos en CSS puro */}
      <style jsx global>{`
        @media (min-width: 768px) {
          [data-desktop-track] {
            transform: translateX(calc(-33.333% * var(--slider-index) + 33.333%)) !important;
          }
        }
      `}</style>

    </div>
  );
}