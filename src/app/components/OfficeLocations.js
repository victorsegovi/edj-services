// import React from 'react';
// import { MapPin, Building2 } from 'lucide-react';

// const locations = [
//   {
//     city: "Caracas",
//     address: "Torre Empresarial Edificio El Segundo Oficina C2 Piso Mezanina Calle Paris Las Mercedes Caracas Venezuela, Piso 5, Oficina 502",
//     type: "Sede Principal"
//   },
//   {
//     city: "Maracaibo",
//     address: "Edificio General de Seguros Av 4 (Bella Vista) con calle 67 (Cecilio Acosta) Piso 4, oficina 47, Parroquia Olegario Villalobos,Maracaibo Edo Zulia Venezuela",
//     type: "Sede Regional Maracaibo"
//   },
//   {
//     city: "Barcelona",
//     address: "Margen derecha de la autopista Barcelona-Caracas, sector Los Mesones, galpón nro 4, Barcelona municipio Bolívar del estado Anzoátegui",
//     type: "Sede Regional Barcelona"
//   },
//   {
//     city: "Maracay",
//     address: "Calle Vargas y Pérez Almarza, Edificio Ariston Piso 7, oficina 25-6 sector Centro Maracay y Aragua, zona postal 2104",
//     type: "Sede Regional Maracay"
//   }
// ];

// const OfficeLocations = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Presencia Nacional</h2>
//           <p className="text-lg text-gray-600">Estamos ubicados estratégicamente para gestionar sus requerimientos con eficiencia.</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
//           {locations.map((loc, index) => (
//             <div 
//               key={index} 
//               className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 w-full max-w-md"
//             >
//               <div className="flex items-center mb-4 text-blue-700">
//                 <Building2 className="w-8 h-8 mr-3" />
//                 <h3 className="text-xl font-semibold text-gray-800">{loc.city}</h3>
//               </div>
              
//               <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
//                 {loc.type}
//               </span>

//               <div className="space-y-3 text-gray-600">
//                 <p className="flex items-start">
//                   <MapPin className="w-5 h-5 mr-2 mt-0.5 text-gray-400 shrink-0" />
//                   {loc.address}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OfficeLocations;

import React from 'react';
import { MapPin, Building2, Globe } from 'lucide-react';

const locations = [
  {
    city: "Caracas",
    address: "Torre Empresarial Edificio El Segundo Oficina C2 Piso Mezanina Calle Paris Las Mercedes Caracas Venezuela, Piso 5, Oficina 502",
    type: "Sede Principal"
  },
  {
    city: "Maracaibo",
    address: "Edificio General de Seguros Av 4 (Bella Vista) con calle 67 (Cecilio Acosta) Piso 4, oficina 47, Parroquia Olegario Villalobos,Maracaibo Edo Zulia Venezuela",
    type: "Sede Regional Maracaibo"
  },
  {
    city: "Barcelona",
    address: "Margen derecha de la autopista Barcelona-Caracas, sector Los Mesones, galpón nro 4, Barcelona municipio Bolívar del estado Anzoátegui",
    type: "Sede Regional Barcelona"
  },
  {
    city: "Maracay",
    address: "Calle Vargas y Pérez Almarza, Edificio Ariston Piso 7, oficina 25-6 sector Centro Maracay y Aragua, zona postal 2104",
    type: "Sede Regional Maracay"
  },
  {
    city: "Houston, Texas, USA",
    address: "Hub estratégico para la procura de equipos y materiales de la industria petrolera norteamericana. Facilitamos la importación de tecnología, maquinaria e insumos críticos hacia Venezuela.",
    type: "Sede Internacional",
    isInternational: true
  },
  {
        city: "Guangzhou, China",
    address: "Centro de manufactura y suministro de equipos industriales, componentes mecánicos, eléctricos y materiales a precios competitivos. Nuestras alianzas en Guangzhou nos permiten acceder a proveedores certificados para la industria de hidrocarburos.",
    type: "Sede Internacional",
    isInternational: true
  }
];


const OfficeLocations = () => {
  // 2. Filtramos los grupos
  const nacionales = locations.filter(loc => !loc.isInternational);
  const internacionales = locations.filter(loc => loc.isInternational);

  const renderGrid = (items, title, icon) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center justify-center">
        {icon} <span className="ml-2">{title}</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {items.map((loc, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4 text-blue-700">
              <Building2 className="w-8 h-8 mr-3" />
              <h4 className="text-xl font-semibold text-gray-800">{loc.city}</h4>
            </div>
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
              {loc.type}
            </span>
            <p className="flex items-start text-gray-600">
              <MapPin className="w-5 h-5 mr-2 mt-0.5 text-gray-400 shrink-0" />
              {loc.address}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Presencia Global</h2>
        </div>

        {renderGrid(nacionales, "Sedes Nacionales", <Building2 />)}
        {renderGrid(internacionales, "Sedes Internacionales", <Globe />)}
        
      </div>
    </section>
  );
};

export default OfficeLocations;