import Link from "next/link"
export default function Hero({title, text}){
    return(
        <section className="bg-center bg-cover bg-no-repeat w-full h-[80vh] flex flex-col gap-10 p-20 justify-center items-center text-white" style={{backgroundImage: "url(./hero-section.jpg)"}}>
            <h1 className="font-bold text-6xl">{title}</h1>
            <p className="text-xl font-light text-center">{text}</p>
            <Link href="/contacto" className="hover:scale-105 hover:bg-white hover:text-[#08163b] transition-all font-bold px-8 py-4 text-white bg-[#08163b]">Contacta Con Nosotros</Link>
        </section>
    )
}