import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/HeroSection";

export default function About() {
  return (
    <>
      <Header />
      
      <Hero 
        title={"SOBRE NOSOTROS"} 
        text={"Somos una empresa orientada a la gestión integral de procura y servicios especializados, con registro vigente y solvencia técnica para participar en procesos de contratación."}
      />
      
      {/* SECCIÓN: MISIÓN */}
      <div className="flex flex-col md:flex-row min-h-screen md:h-screen">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 gap-6 bg-white text-[#08163B] order-2 md:order-1 text-center md:text-left">
          <div className="max-w-md">
            <h2 className="font-bold text-4xl sm:text-5xl mb-4 tracking-wide uppercase">MISIÓN</h2>
            <p className="italic text-base sm:text-lg leading-relaxed text-[#455067]">
              Somos una organización dedicada a la gestión integral de procura,
              construcción y servicios especializados, diseñada para fortalecer
              la cadena de valor de la industria petrolera e industrial.
              Facilitamos la continuidad operativa a través de la adquisición,
              importación y suministro de bienes críticos, combinando logística
              eficiente con servicios de ingeniería y maquinaria de alto
              desempeño.
            </p>
          </div>
        </div>
        <div 
          className="w-full h-screen md:h-full md:w-1/2 bg-no-repeat bg-cover bg-center order-1 md:order-2" 
          style={{ backgroundImage: "url(/stock-image-1.jpg)" }}
        />
      </div>

      {/* SECCIÓN: VISIÓN */}
      <div className="flex flex-col md:flex-row min-h-screen md:h-screen">
        <div 
          className="w-full h-screen md:h-full md:w-1/2 bg-no-repeat bg-cover bg-center" 
          style={{ backgroundImage: "url(/stock-image-2.jpg)" }}
        />
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 gap-6 bg-white text-[#08163B] text-center md:text-left">
          <div className="max-w-md">
            <h2 className="font-bold text-4xl sm:text-5xl mb-4 tracking-wide uppercase">VISIÓN</h2>
            <p className="italic text-base sm:text-lg leading-relaxed text-[#455067]">
              Consolidarnos como empresa líder en Venezuela para la procura y
              servicios industriales, conectando mercados globales con
              necesidades operativas locales, garantizando la soberanía
              logística y técnica de la industria petrolera.
            </p>
          </div>
        </div>
      </div>

      {/* SECCIÓN: VALORES */}
      <div className="flex flex-col md:flex-row min-h-screen md:h-screen">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 gap-8 bg-white text-[#08163B] order-2 md:order-1 text-center md:text-left">
          <div className="max-w-md flex flex-col items-center md:items-start gap-6">
            <h2 className="font-bold text-4xl sm:text-5xl tracking-wide uppercase">VALORES</h2>
            <p className="italic text-base sm:text-lg leading-relaxed text-[#455067]">
              Conectamos mercados globales con las necesidades operativas locales de la industria energética venezolana.
            </p>
            <Link 
              href="/contacto" 
              className="font-bold text-white bg-[#08163B] px-8 py-4 hover:bg-[#122557] transition-all hover:scale-105 active:scale-95 inline-block"
            >
              Contacta Con Nosotros
            </Link>
          </div>
        </div>
        <div 
          className="w-full h-screen md:h-full md:w-1/2 bg-no-repeat bg-cover bg-center order-1 md:order-2" 
          style={{ backgroundImage: "url(/stock-image-3.jpg)" }}
        />
      </div>

      <Footer />
    </>
  );
}