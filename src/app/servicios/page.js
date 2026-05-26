"use client"
import React, { useState } from 'react';
import InteractiveCard from "../components/ServicesCard";
import Hero from '../components/HeroSection';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
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
      {
        id: 12,
        title: "Equipos Rotativos",
        text: "Mantenimiento preventivo y correctivo, suministro de repuestos originales y equivalentes, overhaul completo en taller o en campo, diagnóstico en campo para crudo pesado, mantenimiento predictivo en ambientes extremos, repuestos para condiciones abrasivas, optimización de equipos para alta viscosidad, integración de monitoreo IoT en condiciones críticas."
      },
      {
        id: 13,
        title: "Eléctrico, Control e Instrumentación",
        text: "Instrumentación industrial, programación y mantenimiento de PLCs, integración IoT para monitoreo remoto, automatización de procesos industriales, instalación y mantenimiento de sistemas de protección eléctrica, diagnóstico y optimización de sistemas de control."
      },
      {
        id: 14,
        title: "Andamiaje Industrial",
        text: "Diseño, montaje y desmontaje de systemas de andiamaje; andiamaje modular, instalación de plataformas; escaleras; pasarelas y handrails, inspección y tagging; aislamiento térmico, coordinación con soldadores, pipefilters, insuladores y refractory crews."
      },
  ];

  const [limiteVisible, setLimiteVisible] = useState(6);

  const mostrarMas = () => setLimiteVisible(cards.length);
  const mostrarMenos = () => setLimiteVisible(6);

  const tarjetasVisibles = cards.slice(0, limiteVisible);

  return (
    <>
    <Header/>
        <Hero title={"NUESTROS SERVICIOS" } text={"Desde la gestión de compra hasta la entrega en sitio; cubrimos cada eslabón de la cadena operativa."}/>
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
    <Footer isServices={true}/>
    </>
  );
}