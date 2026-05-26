"use client"
import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'fade'
  delay = 0,        // Retardo en milisegundos
  duration = 800,   // Duración en milisegundos
  distance = 40     // Distancia de desplazamiento en píxeles
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: Descomentar si quieres que la animación se repita cada vez que sale y entra
          // observer.unobserve(entry.target); 
        }
      },
      { 
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
        rootMargin: '0px 0px -50px 0px' // Margen inferior para que no se active justo en el borde de la pantalla
      }
    );

    const currentTarget = domRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, []);

  // Definir la transformación inicial basada en la dirección
  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return `translateY(${distance}px)`;
        case 'down': return `translateY(-${distance}px)`;
        case 'left': return `translateX(${distance}px)`;
        case 'right': return `translateX(-${distance}px)`;
        case 'fade': default: return 'none';
      }
    }
    return 'translate(0)';
  };

  return (
    <div
      ref={domRef}
      className="transition-all ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity' // Optimización para aceleración por hardware
      }}
    >
      {children}
    </div>
  );
}