import Link from "next/link";
import Hero from "./components/HeroSection";
import Slideshow from "./components/SlideShow";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactSection from "./components/Contact";

export default function Home() {
  const servicesCards = [
    {
      id: 1,
      title: "Alquiler de Maquinaria",
      text: "Excavadoras / Jumbos. Retroexcavadoras. Camiones Volteo. Personal operario altamente calificado incluido.",
    },
    {
      id: 2,
      title: "Área de Procura",
      text: "Gestión completa del ciclo de compras: desde fabricantes internacionales hasta entrega en sitio (Just in Time). Suministro de materiales de construcción y repuestos industriales para la industria petrolera.Gestión logística de equipos especializados según requerimientos del cliente. Importación y nacionalización de bienes críticos.",
    },
    {
      id: 3,
      title: "Construcción y Obras Civiles",
      text: "Mantenimiento preventivo y correctivo de sistemas de servicios públicos (drenajes, canalizaciones). Movimiento de tierras, excavaciones de gran escala y conformación de taludes. Acondicionamiento de vías agrícolas y pavimentación de estacionamientos. Obras civiles en instalaciones de superficie petroleras.",
    },
  ];

  const brandsCards = [
    {
      id: 1,
      title: "DEFI Offshore Composites",
      text: "Es un proveedor especializado en soluciones de protección estructural y catódica para la industria offshore y petrolera, con amplia experiencia en ambientes de alta corrosión y servicio severo.",
      bottomImageUrl: "/brand-2.png",
    },
    {
      id: 2,
      title: "Hyundai Electric Industrial Engines",
      text: "Hyundai Electric es una de las marcas líderes mundiales en fabricación de motores eléctricos industriales para baja, media y alta tensión, con presencia en los principales mercados energéticos del mundo.",
      bottomImageUrl: "/brand-1.png",
    },
    {
      id: 3,
      title: "Worldwide Employee Housing Solutions",
      text: "Proveedor especializado en soluciones habitacionales para la industria del petróleo y el gas. Sus instalaciones están diseñadas para alojar a trabajadores, durante períodos prolongados, con todas las comodidades necesarias para la vida diaria en campo.",
      bottomImageUrl: "/brand-3.png",
    },
    {
      id: 4,
      title: "Scaffold Monkey Field Services",
      text: "Empresa familiar especializada en el diseño, montaje, modificación y desmontaje de sistemas de andamiaje industrial para la industria energética, petrolera y de construcción. Su rol es crítico para garantizar acceso seguro a zonas de trabajo en altura o de difícil acceso en proyectos EPC, paradas de planta y mantenimiento mayor.",
      bottomImageUrl: "/brand-4.png",
    },
    {
      id: 5,
      title: "Rotating Equipment Specialists LLC",
      text: "Es una empresa especializada en soluciones integrales para equipos rotativos en la industria del petróleo y gas, con experiencia en compresión de gas natural, turbinas y generadores industriales.",
      bottomImageUrl: "/brand-5.png",
    },
    {
      id: 6,
      title: "Eléctrico",
      text: "Es un proveedor de material eléctrico industrial especializado en soluciones para ambientes clasificados y de alta exigencia en la industria petrolera e industrial venezolana.",
      bottomImageUrl: "/brand-6.png",
    },
    {
      id: 7,
      title: "Akzo Nobel",
      text: "Es una multinacional neerlandesa líder mundial en pinturas y recubrimientos de alto rendimiento, con sede en Ámsterdam y presencia en más de 150 países. Desde 1792 suministra soluciones sostenibles para los sectores automotriz, marino, aeroespacial y de construcción.",
      bottomImageUrl: "/brand-7.png",
    },
    {
      id: 8,
      title: "Holloway Houston Inc.",
      text: "Holloway Houston es el proveedor líder de productos y servicios de elevación de alta calidad para los sectores energético y de la construcción a nivel mundial. Con certificación ISO 9001 y más de 200 profesionales dedicados, ofrece soluciones integrales de elevación industrial.",
      bottomImageUrl: "/brand-8.png",
    },
    {
      id: 9,
      title: "Gouda Shinagawa Refra Group",
      text: "Gouda Shinagawa Refra Group es un proveedor internacional especializado en materiales refractarios para la industria petrolera, petroquímica y de alta temperatura, con soluciones diseñadas para ambientes de servicio severo.",
      bottomImageUrl: "/brand-9.png",
    },
    {
      id: 10,
      title: "Lasco Chemical",
      text: "Proveedor especializado en químicos industriales para el tratamiento de fluidos, control de corrosión y optimización de procesos en la industria petrolera e industrial.",
      bottomImageUrl: "/brand-10.png",
    },
  ];

  return (
    <>
      <Header />

      <Hero
        title={"EDJ & SERVICES"}
        text={
          "Conectamos mercados globales con las necesidades operativas locales de la industria energética venezolana."
        }
      />

      <div className="flex flex-col md:flex-row min-h-screen md:h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-16 bg-white text-[#08163B] text-center md:text-left">
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-4xl sm:text-5xl mb-4 tracking-wide uppercase">
              Procura
            </h2>
            <p className="italic text-base sm:text-lg leading-relaxed text-[#455067]">
              Gestión completa del ciclo de compras: desde fabricantes
              internacionales hasta entrega en sitio (Just in Time). Suministro
              de materiales de construcción y repuestos industriales para la
              industria petrolera. Gestión logística de equipos especializados
              según requerimientos del cliente. Importación y nacionalización de
              bienes críticos.
            </p>
            <Link
              href={"/procura"}
              className="bg-[#08163b] text-white px-8 py-4 w-[280px] text-center font-bold hover:scale-105 cursor-pointer transition-all self-center"
            >
              Ver Más Sobre Procura
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-16 text-white text-center bg-center bg-no-repeat bg-cover md:text-left" style={{backgroundImage:"url(/stock-image-1.jpg)"}}>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-4xl sm:text-5xl mb-4 tracking-wide uppercase">
              Servicios
            </h2>
            <p className="italic text-base sm:text-lg leading-relaxed">
            Desde la gestión de compra hasta la entrega en sitio; cubrimos cada eslabón de la cadena operativa. Integramos soluciones técnicas especializadas en equipos electromecánicos e instrumentación con servicios críticos de soporte, garantizando la continuidad, seguridad y bienestar necesarios para optimizar el rendimiento de sus proyectos en campo.
            </p>
            <Link
              href={"/servicios"}
              className="text-[#08163b] bg-white px-8 py-4 w-[280px] text-center font-bold hover:scale-105 cursor-pointer transition-all self-center"
            >
              Ver Más Sobre Servicios
            </Link>
          </div>
        </div>
      </div>

      {/* SECCIÓN RESPONSIVA: ¿QUIÉNES SOMOS? */}
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat text-white flex flex-col md:flex-row justify-center p-8 sm:p-12 md:p-20 items-center gap-12 relative"
        style={{ backgroundImage: "url(/about-section.jpg)" }}
      >
        {/* Capa de superposición sutil para mejorar la lectura del texto en pantallas móviles */}
        <div className="absolute inset-0 bg-black/30 md:bg-transparent pointer-events-none" />

        <div className="w-full md:w-1/2 text-left z-10">
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-tight">
            ¿QUIÉNES
            <br className="hidden md:inline" /> SOMOS?
          </h2>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6 text-left z-10">
          <p className="text-base sm:text-lg leading-relaxed font-normal">
            EDJ&SERVICES, C.A. es una empresa orientada a la gestión integral de
            procura y servicios especializados, con registro vigente y solvencia
            técnica para participar en procesos de contratación. Contamos con
            capacidad para ejecutar proyectos de construcción, mantenimiento de
            infraestructura y suministro de bienes críticos para la industria
            petrolera e industrial de Venezuela.
          </p>
          <Link
            href="/sobre-nosotros"
            className="bg-white font-bold text-[#08163B] py-4 px-8 w-full sm:w-[240px] text-center hover:bg-gray-100 hover:scale-105 transition-all"
          >
            Sobre Nosotros
          </Link>
        </div>
      </div>

      <Slideshow cards={brandsCards} title={"MARCAS QUE REPRESENTAMOS"} />

      <ContactSection />

      <Footer />
    </>
  );
}
