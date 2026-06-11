"use client"
import React, { useState } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('Enviando...');

  try {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('¡Mensaje enviado con éxito!');
      setFormData({ nombre: '', email: '', mensaje: '' });
    } else {
      setStatus('Error al enviar el mensaje.');
    }
  } catch (error) {
    setStatus('Error al conectar con el servidor.');
  }
};

  return (
    <section className="w-full flex flex-col md:flex-row min-h-[600px] bg-white select-none">
      
      {/* COLUMNA IZQUIERDA: INFORMACIÓN DE CONTACTO */}
      {/* Usamos un degradado lineal nativo en CSS para crear las líneas diagonales de tu maqueta sin cargar imágenes pesadas */}
      <div 
        className="w-full md:w-1/2 bg-[#08163B] text-white p-8 sm:p-12 md:p-20 flex flex-col justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(./about-section.jpg)`,
        }}
      >
        <div className="relative z-10 max-w-md mx-auto md:mx-0">
          {/* Título */}
          <h2 className="text-4xl md:text-5xl font-black tracking-wide uppercase mb-12 text-left">
            CONTÁCTANOS
          </h2>

          {/* Bloques de información */}
          <div className="flex flex-col gap-8 text-left text-sm md:text-base">
            
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <a href="mailto:info@edjgroup.net" className="hover:underline break-all transition-all">
                info@edjgroup.net
              </a>
            </div>

            {/* Teléfono */}
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <a href="tel:+584144901700" className="hover:underline transition-all">
                +58 414-490-1700
              </a>
            </div>

            {/* Dirección */}
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <p className="leading-relaxed">
                Calle Vargas y Pérez Almarza | Edif. Ariston Piso 7, <br />
                Of. 25-6 | Maracay, Aragua, Venezuela
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* COLUMNA DERECHA: FORMULARIO DE ENVÍO */}
      <div className="w-full md:w-1/2 bg-white text-[#08163B] p-8 sm:p-12 md:p-20 flex flex-col justify-center">
        <div className="w-full max-w-md mx-auto md:mx-0">
          
          {/* Título Formulario */}
          <h2 className="text-3xl md:text-4xl font-black tracking-wide uppercase mb-8 text-left">
            ENVÍANOS UN CORREO
          </h2>

          {/* Formulario HTML5 interactivo */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
            
            {/* Input Nombre */}
            <div>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-400 rounded-sm focus:outline-none focus:border-[#08163B] text-gray-800 placeholder-gray-400 bg-transparent transition-colors"
              />
            </div>

            {/* Input Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-400 rounded-sm focus:outline-none focus:border-[#08163B] text-gray-800 placeholder-gray-400 bg-transparent transition-colors"
              />
            </div>

            {/* Textarea Mensaje */}
            <div>
              <textarea
                name="mensaje"
                placeholder="Mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-400 rounded-sm focus:outline-none focus:border-[#08163B] text-gray-800 placeholder-gray-400 bg-transparent resize-none transition-colors"
              />
            </div>

            {/* Botón de envío */}
            <div className="mt-3">
              <button
                type="submit"
                className="bg-[#08163B] text-white font-semibold px-10 py-3 hover:bg-[#122557] transition-all hover:scale-105 cursor-pointer active:scale-95"
              >
                Enviar Mensaje
              </button>
            </div>

          </form>

        </div>
      </div>

    </section>
  );
}