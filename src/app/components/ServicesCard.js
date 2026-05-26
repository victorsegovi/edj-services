"use client"
import React, { useState } from 'react';

export default function InteractiveCard({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto p-4 select-none">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-white rounded-sm border border-gray-100 p-8 shadow-md relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer flex flex-col justify-between
          ${isOpen 
            ? 'shadow-2xl translate-y-[-4px] border-t-4 border-t-[#08163B]' 
            : 'hover:shadow-xl hover:translate-y-[-2px]'
          }
        `}
      >
        {/* Los Círculos Decorativos de tu Maqueta */}
        <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none overflow-hidden">
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#1e3a6a] rounded-full opacity-90"></div>
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#08163B] rounded-full"></div>
        </div>

        {/* Bloque del Título */}
        <div className="py-8 text-center flex flex-col items-center justify-center min-h-[220px]">
          <h3 className="text-2xl font-bold text-[#08163B] px-4">
            {title}
          </h3>
          
          {/* Indicador visual */}
          <div className="mt-4 text-xs font-semibold text-gray-400 tracking-wider uppercase flex items-center gap-1">
            <span>{isOpen ? "Cerrar detalles" : "Click para ver detalles"}</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#08163B]' : ''}`}
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </div>

        {/* Contenedor de Información Desplegable Dinámica */}
        <div 
          className="transition-all duration-500 ease-in-out overflow-hidden"
          style={{ 
            maxHeight: isOpen ? '350px' : '0px', // Aumentado ligeramente por si hay textos largos
            opacity: isOpen ? 1 : 0
          }}
        >
          <div className="w-full h-[1px] bg-gray-100 my-4" />
          
          {/* RENDERIZADO DEL TEXTO DINÁMICO */}
          <div className="text-[#455067] text-sm leading-relaxed p-2 text-left space-y-3 whitespace-pre-line">
            <p className="font-semibold text-[#08163B]">Descripción del servicio</p>
            <p>
              {text || "Información técnica detallada en desarrollo para este componente específico."}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}