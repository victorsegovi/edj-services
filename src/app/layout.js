import localFont from "next/font/local";
import "./globals.css";

// Configuración de la fuente local Open Sauce usando tus archivos .ttf.
// Corrección de ruta relativa: Subimos dos niveles desde src/app/ para llegar a public/fonts/
const openSauce = localFont({
  src: [
    {
      path: "../../public/fonts/OpenSauceSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/OpenSauceSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/OpenSauceSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/OpenSauceSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/OpenSauceSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/OpenSauceSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/OpenSauceSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-open-sauce",
  display: "swap",
});

export const metadata = {
  title: "EDJ & SERVICES",
  description: "Conectamos mercados globales con las necesidades operativas locales de la industria energética venezolana.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${openSauce.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#fafafa]">
        {children}
      </body>
    </html>
  );
}