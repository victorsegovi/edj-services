import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/HeroSection";

export default function Procura() {
  return (
    <>
      <Header />
      
      <Hero 
        title={"PROCURA"} 
        text={"Gestión de compra y suministro de materiales y equipos clave para la continuidad operativa industrial."}
      />
      
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