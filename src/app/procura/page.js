"use client"
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/HeroSection";
import React, { useState } from 'react';
import InteractiveCard from "../components/ServicesCard";

export default function Procura() {
  const cards = [
    { 
      id: 1, 
      title: "Accesorios (Fittings)", 
      text: "Suministro de accesorios para tuberías industriales utilizados en sistemas de proceso, transporte de fluidos y construcción de plantas en la industria petrolera e industrial." 
    },
    { 
      id: 2, 
      title: "Válvulas Industriales", 
      text: "Distribución de válvulas para control, aislamiento y alivio de fluidos en sistemas de proceso de la industria petrolera, petroquímica y de gas natural." 
    },
    { 
      id: 3, 
      title: "Equipos Eléctricos", 
      text: "Suministro de equipos eléctricos industriales para baja, media y alta tensión, certificados para operar en ambientes clasificados y de alta exigencia en la industria petrolera." 
    },
    { 
      id: 4, 
      title: "Recubrimientos de Pinturas", 
      text: "Sistemas de recubrimiento para protección de estructuras, tuberías y equipos en ambientes industriales de alta exigencia, incluyendo aplicaciones offshore y onshore" 
    },
    { 
      id: 5, 
      title: "Izaje y Riggings", 
      text: "Suministro de equipos y accesorios de izaje certificados para operaciones industriales de alta exigencia en plantas, plataformas y campos petroleros." 
    },
    { 
      id: 6, 
      title: "Químicos Industriales", 
      text: "Suministro de químicos especializados para tratamiento de fluidos, control de corrosión y optimización de procesos en la industria petrolera e industrial." 
    },
    {
      id: 7,
      title: "Soluciones Habitacionales",
      text: "Módulos habitacionales y de trabajo diseñados para operaciones industriales remotas, con estándares de confort, seguridad y resistencia para entornos exigentes."
    },
    {
      id: 8,
      title: "Rejillas (Grating)",
      text: "Suministro de rejillas industriales en fibra de vidrio (FRP) y acero para plataformas, pasarelas y estructuras en ambientes industriales y offshore."
    },
    {
      id: 9,
      title: "Ánodos",
      text: "Tecnología avanzada sin necesidad de soldar de protección catódica mediante ánodos de sacrificio para estructuras metálicas sumergidas y enterradas en la industria petrolera y offshore, con alta eficiencia en ambientes de alta corrosión y servicio severo."
    },
    {
        id: 10,
        title: "Motores Eléctricos",
        text: "Suministro de motores eléctricos industriales de baja, media y alta tensión para aplicaciones de alta exigencia en la industria petrolera, petroquímica e industrial."
      },
      {
        id: 11,
        title: "Refractarios",
        text: "Suministro de materiales refractarios de tecnología avanzada para la industria energética y petrolera, diseñados para resistir temperaturas extremas, combustión y ambientes altamente abrasivos y corrosivos."
      },
  ];
  
  const [limiteVisible, setLimiteVisible] = useState(6);

  const mostrarMas = () => setLimiteVisible(cards.length);
  const mostrarMenos = () => setLimiteVisible(6);

  const tarjetasVisibles = cards.slice(0, limiteVisible);

  return (
    <>
      <Header />
      
      <Hero 
        title={"PROCURA"} 
        text={"Gestión de compra y suministro de materiales y equipos clave para la continuidad operativa industrial."}
      />

<section className="w-full bg-[#fafafa] py-20 px-6 select-none overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">

        {/* Grilla Responsiva */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tarjetasVisibles.map((item) => (
            <div key={item.id} className="animate-fade-in">
              {/* PASAMOS AMBOS PARÁMETROS DE FORMA DINÁMICA */}
              <InteractiveCard title={item.title} text={item.text} />
            </div>
          ))}
        </div>

        {/* Botón de Control */}
        <div className="mt-16 flex justify-center">
          {limiteVisible < cards.length ? (
            <button 
              onClick={mostrarMas}
              className="bg-[#08163B] text-white font-semibold px-12 py-3.5 hover:bg-[#122557] transition-all flex items-center gap-2 hover:scale-105"
            >
              <span>Ver Todos los Servicios ({cards.length})</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
          ) : (
            <button 
              onClick={mostrarMenos}
              className="bg-white text-[#08163B] border border-gray-200 font-semibold px-12 py-3.5 hover:bg-gray-50 transition-all rounded-sm shadow-sm flex items-center gap-2 hover:scale-105"
            >
              <span>Mostrar Menos</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </button>
          )}
        </div>

      </div>
    </section>
      
      {/* SECCIÓN: ADQUISICIÓN */}
      <div className="flex flex-col md:flex-row min-h-screen md:h-screen">
        <div
          className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 gap-4 text-white bg-no-repeat bg-cover bg-center relative order-2 md:order-1 text-center"
          style={{ backgroundImage: "url(/stock-image-4.jpg)" }}
        >
          {/* Capa oscura para garantizar el contraste del texto */}
          <div className="absolute inset-0 bg-black/40 z-0" />
          
          <div className="max-w-md relative z-10">
            <h2 className="font-bold text-4xl sm:text-5xl mb-4 tracking-wide uppercase">ADQUISICIÓN</h2>
            <p className="italic text-base sm:text-lg leading-relaxed opacity-90">
              Identificación y selección de proveedores internacionales
              certificados que cumplan con los estándares técnicos y normativos
              requeridos por cada proyecto.
            </p>
          </div>
        </div>
        <div 
          className="w-full h-screen md:h-full md:w-1/2 bg-no-repeat bg-cover bg-center order-1 md:order-2" 
          style={{ backgroundImage: "url(/bnw-image-1.jpg)" }}
        />
      </div>

      {/* SECCIÓN: IMPORTACIÓN */}
      <div className="flex flex-col md:flex-row min-h-screen md:h-screen">
        <div 
          className="w-full h-screen md:h-full md:w-1/2 bg-no-repeat bg-cover bg-center" 
          style={{ backgroundImage: "url(/bnw-image-2.jpg)" }}
        />
        <div
          className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 gap-4 text-white bg-no-repeat bg-cover bg-center relative text-center"
          style={{ backgroundImage: "url(/stock-image-5.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/40 z-0" />
          
          <div className="max-w-md relative z-10">
            <h2 className="font-bold text-4xl sm:text-5xl mb-4 tracking-wide uppercase">IMPORTACIÓN</h2>
            <p className="italic text-base sm:text-lg leading-relaxed opacity-90">
              Consolidarnos como empresa líder en Venezuela para la procura y
              servicios industriales, conectando mercados globales con necesidades
              operativas locales, garantizando la soberanía logística y técnica de
              la industria petrolera.
            </p>
          </div>
        </div>
      </div>

      {/* SECCIÓN: SUMINISTRO */}
      <div className="flex flex-col md:flex-row min-h-screen md:h-screen">
        <div
          className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 gap-4 text-white bg-no-repeat bg-cover bg-center relative order-2 md:order-1 text-center"
          style={{ backgroundImage: "url(/stock-image-6.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/40 z-0" />
          
          <div className="max-w-md relative z-10 flex flex-col items-center gap-6">
            <h2 className="font-bold text-4xl sm:text-5xl tracking-wide uppercase">SUMINISTRO</h2>
            <p className="italic text-base sm:text-lg leading-relaxed opacity-90">
              Entrega de materiales y equipos en sitio de manera oportuna, bajo el modelo
              Just in Time, garantizando la continuidad operativa sin interrupciones.
            </p>
            <Link 
              href="/contacto" 
              className="font-bold bg-white text-[#08163B] px-8 py-4 hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 inline-block mt-2"
            >
              Contacta Con Nosotros
            </Link>
          </div>
        </div>
        <div 
          className="w-full h-screen md:h-full md:w-1/2 bg-no-repeat bg-cover bg-center order-1 md:order-2" 
          style={{ backgroundImage: "url(/bnw-image-3.jpg)" }}
        />
      </div>

      <Footer />
    </>
  );
}