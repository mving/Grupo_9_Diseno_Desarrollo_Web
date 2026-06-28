/* ============================================
   TripGo Metro — Servicios de la Terminal
   Mapa interactivo + Chatbot FAQ
   ============================================ */

/* ---- Zone Info Data ---- */
const zoneData = {
  andenes: {
    title: '🚌 Plataformas y Andenes',
    description: 'Zona de embarque y desembarque de pasajeros. Cuenta con 12 dársenas numeradas para colectivos y una conexión directa al acceso del Subte Línea C.',
    details: [
      'Dársenas 1-4: Sector A — Líneas urbanas (9, 39, 60)',
      'Dársenas 5-8: Sector B — Líneas interurbanas',
      'Dársenas 9-11: Sector B — Larga distancia',
      'Plataforma 12: Sector C — Shuttle Ezeiza',
      'Señalización digital con próximas salidas'
    ],
    hours: 'Operativo 24 horas'
  },
  acceso: {
    title: '🚪 Acceso Principal',
    description: 'Entrada principal del Centro de Transporte Constitución. Acceso por calle Brasil, con puertas automáticas y rampa de accesibilidad.',
    details: [
      'Puertas automáticas de vidrio',
      'Rampa de accesibilidad lateral',
      'Guardia de seguridad permanente',
      'Molinetes con SUBE integrados'
    ],
    hours: '05:00 — 00:00 hs'
  },
  'acceso-lat': {
    title: '🚪 Acceso Lateral',
    description: 'Accesos secundarios de la terminal para mayor fluidez de circulación de pasajeros.',
    details: [
      'Acceso rápido a plataformas',
      'Sin molinetes (salida libre)',
      'Señalización a servicios'
    ],
    hours: '05:00 — 23:00 hs'
  },
  hall: {
    title: '🏛️ Hall Central',
    description: 'Espacio principal de la terminal donde confluyen los pasajeros. Punto de referencia central para orientarse dentro del centro de transporte.',
    details: [
      'Pantallas informativas con horarios',
      'Señalización a todos los sectores',
      'Punto de encuentro designado',
      'Piso podotáctil para personas con discapacidad visual'
    ],
    hours: '24 horas'
  },
  info: {
    title: 'ℹ️ Oficina de Información',
    description: 'Centro de atención al público con personal capacitado para resolver consultas sobre recorridos, horarios, combinaciones y servicios de la terminal.',
    details: [
      'Atención en español e inglés',
      'Mapas y folletería gratuita',
      'Asistencia para personas con discapacidad',
      'Carga de SUBE disponible'
    ],
    hours: '06:00 — 22:00 hs'
  },
  banos: {
    title: '🚻 Baños',
    description: 'Sanitarios públicos con limpieza permanente, accesibilidad completa para personas con movilidad reducida y cambiadores para bebés.',
    details: [
      'Sector A: Planta Baja (junto a Hall Central)',
      'Sector C: Nivel 1 (junto a Área de Espera)',
      'Sanitarios accesibles en ambas ubicaciones',
      'Cambiadores para bebés'
    ],
    hours: '05:00 — 00:00 hs'
  },
  gastronomia: {
    title: '🍔 Patio de Comidas',
    description: 'Zona gastronómica con variedad de opciones: cafeterías, comida rápida, kioscos y opciones saludables para viajeros.',
    details: [
      'Café Martínez — Cafetería premium',
      'Mostaza — Comida rápida',
      'Subway — Sándwiches',
      'Kiosco 24hs — Snacks y bebidas',
      'Opciones veganas y celíacas disponibles'
    ],
    hours: '06:00 — 23:00 hs'
  },
  espera: {
    title: '🪑 Área de Espera',
    description: 'Zona de descanso equipada con asientos cómodos, conexión Wi-Fi gratuita, cargadores USB y pantallas con información de salidas.',
    details: [
      'Asientos acolchados con apoyabrazos',
      'Wi-Fi gratuito: Red "TripGo-WiFi"',
      'Cargadores USB en cada bloque de asientos',
      'Pantallas con horarios en tiempo real',
      'Temperatura climatizada'
    ],
    hours: '24 horas'
  },
  cajeros: {
    title: '🏧 Cajeros Automáticos',
    description: 'Red de cajeros automáticos de las redes Link y Banelco para extracciones, depósitos y consultas de saldo.',
    details: [
      '3 cajeros Red Link',
      '2 cajeros Red Banelco',
      'Disponibles 24 horas',
      'Cámaras de seguridad en la zona'
    ],
    hours: '24 horas'
  },
  sube: {
    title: '💳 Carga SUBE',
    description: 'Puntos de carga de tarjeta SUBE automáticos para que puedas recargar tu tarjeta antes de subir al transporte.',
    details: [
      'Terminales automáticas (acepta efectivo y débito)',
      'Carga mínima: $500',
      'Carga máxima: $20.000',
      'También disponible en kioscos del Hall'
    ],
    hours: '05:00 — 23:30 hs'
  },
  subte: {
    title: '🚇 Acceso Subte Línea C',
    description: 'Conexión directa con la estación Constitución de la Línea C de subterráneos. Une Constitución con Retiro pasando por 9 estaciones.',
    details: [
      'Dirección Norte: hacia Retiro',
      'Estaciones: San Juan, Independencia, Moreno, Av. de Mayo, Diagonal Norte, Lavalle, San Martín, Retiro',
      'Frecuencia: cada 3-5 minutos',
      'Tarifa: $650 con SUBE'
    ],
    hours: '05:00 — 23:30 hs'
  },
  estacionamiento: {
    title: '🅿️ Estacionamiento',
    description: 'Estacionamiento cubierto en el subsuelo de la terminal con vigilancia permanente y acceso vehicular por calle Lima.',
    details: [
      'Capacidad: 350 vehículos',
      'Vigilancia CCTV 24 horas',
      'Tarifa: $1.200/hora',
      'Estadía máxima: 24 horas',
      'Acceso por calle Lima 1200'
    ],
    hours: '24 horas'
  },
  seguridad: {
    title: '🛡️ Centro de Seguridad',
    description: 'Oficina de seguridad con monitoreo CCTV de toda la terminal y personal de seguridad las 24 horas.',
    details: [
      'Monitoreo CCTV en tiempo real',
      'Personal de seguridad uniformado',
      'Botón antipánico en todas las zonas',
      'Objetos perdidos: consultar aquí'
    ],
    hours: '24 horas'
  }
};

/* ---- Show Zone Info ---- */
function showZoneInfo(zoneId) {
  const data = zoneData[zoneId];
  if (!data) return;

  const panel = document.getElementById('zone-info');
  const content = document.getElementById('zone-info-content');

  content.innerHTML = `
    <h3 style="margin-bottom: 0.75rem; font-size: 1.3rem;">${data.title}</h3>
    <p style="margin-bottom: 1rem; font-size: 0.95rem;">${data.description}</p>
    <ul style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
      ${data.details.map(d => `
        <li style="display: flex; align-items: start; gap: 0.5rem;">
          <span style="color: var(--color-primary); flex-shrink: 0;">▸</span>
          <span style="font-size: 0.9rem; color: var(--color-text-muted);">${d}</span>
        </li>
      `).join('')}
    </ul>
    <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--color-primary); font-family: var(--font-mono);">
      🕐 ${data.hours}
    </div>
  `;

  panel.style.display = 'block';
  panel.style.animation = 'fadeInUp 0.3s ease';
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* Note: Chatbot FAQ code has been modularized and moved to chatbot.js so it can be loaded across all pages. */
