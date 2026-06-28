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

/* ============================================
   CHATBOT
   ============================================ */

/* ---- Chatbot Knowledge Base ---- */
const chatResponses = {
  // Baños
  'baño': 'Los sanitarios públicos del Centro de Trasbordo Constitución se encuentran ubicados en el **subsuelo del hall principal** (cerca del acceso a los andenes ferroviarios de la calle Lima) y también en el vestíbulo de conexión con el **Subte Línea C**. \n\n⚠️ **Importante**: El acceso es exclusivo para pasajeros y requiere validar tu tarjeta SUBE en los molinetes. Cuentan con personal de limpieza permanente, accesibilidad para personas con movilidad reducida y cambiadores para bebés.',
  'sanitario': 'Los sanitarios públicos del Centro de Trasbordo Constitución se encuentran ubicados en el **subsuelo del hall principal** (cerca del acceso a los andenes ferroviarios de la calle Lima) y también en el vestíbulo de conexión con el **Subte Línea C**. \n\n⚠️ **Importante**: El acceso es exclusivo para pasajeros y requiere validar tu tarjeta SUBE en los molinetes. Cuentan con personal de limpieza permanente, accesibilidad para personas con movilidad reducida y cambiadores para bebés.',

  // SUBE
  'sube': 'Podés cargar tu tarjeta SUBE en:\n\n📍 Terminales automáticas en los accesos principales\n📍 Kioscos del Hall Central\n💰 Carga mínima: $500 — Máxima: $20.000\n🕐 Horario: 05:00 a 23:30 hs',
  'tarjeta': 'Podés cargar tu tarjeta SUBE en:\n\n📍 Terminales automáticas en los accesos principales\n📍 Kioscos del Hall Central\n💰 Carga mínima: $500 — Máxima: $20.000\n🕐 Horario: 05:00 a 23:30 hs',
  'cargar': 'Podés cargar tu tarjeta SUBE en:\n\n📍 Terminales automáticas en los accesos principales\n📍 Kioscos del Hall Central\n💰 Carga mínima: $500 — Máxima: $20.000\n🕐 Horario: 05:00 a 23:30 hs',

  // WiFi
  'wifi': '¡Sí! La terminal cuenta con Wi-Fi gratuito 📶\n\n🌐 Red: **TripGo-WiFi**\n📧 Ingresá tu email para conectarte\n📍 Disponible en todas las áreas de espera',
  'internet': '¡Sí! La terminal cuenta con Wi-Fi gratuito 📶\n\n🌐 Red: **TripGo-WiFi**\n📧 Ingresá tu email para conectarte\n📍 Disponible en todas las áreas de espera',

  // Comida
  'comida': 'En la estación Constitución y sus alrededores tenés variadas opciones de comida:\n\n🍔 **Patio de comidas principal (Entrepiso/Planta Alta)**: Locales de comida rápida como Mostaza y Burger King, además de pizzerías y locales de empanadas.\n☕ **Cafeterías**: Encontrás un Café Martínez en la planta baja del hall central y puestos de café al paso (como Starbucks) cerca de los ingresos al subte.\n🥐 **Al paso**: Kioscos 24hs y panaderías exprés distribuidas en los túneles y andenes.',
  'comer': 'En la estación Constitución y sus alrededores tenés variadas opciones de comida:\n\n🍔 **Patio de comidas principal (Entrepiso/Planta Alta)**: Locales de comida rápida como Mostaza y Burger King, además de pizzerías y locales de empanadas.\n☕ **Cafeterías**: Encontrás un Café Martínez en la planta baja del hall central y puestos de café al paso (como Starbucks) cerca de los ingresos al subte.\n🥐 **Al paso**: Kioscos 24hs y panaderías exprés distribuidas en los túneles y andenes.',
  'café': 'Encontrás una sucursal de **Café Martínez** en la planta baja del hall central de trenes de la estación, además de un local de **Starbucks** y puestos express de cafetería al paso cerca de la entrada al Subte Línea C.',
  'gastronomia': 'En la estación Constitución y sus alrededores tenés variadas opciones de comida:\n\n🍔 **Patio de comidas principal (Entrepiso/Planta Alta)**: Locales de comida rápida como Mostaza y Burger King, además de pizzerías y locales de empanadas.\n☕ **Cafeterías**: Encontrás un Café Martínez en la planta baja del hall central y puestos de café al paso (como Starbucks) cerca de los ingresos al subte.\n🥐 **Al paso**: Kioscos 24hs y panaderías exprés distribuidas en los túneles y andenes.',

  // Horarios
  'horario': '⏰ Horarios principales:\n\n🚇 Subte Línea C: 05:00 — 23:30 hs\n🚌 Colectivos: según línea (consultar en Viajes)\n✈️ Shuttle Ezeiza: cada 30 min\nℹ️ Información: 06:00 — 22:00 hs\n🍔 Gastronomía: 06:00 — 23:00 hs',
  'hora': '⏰ Horarios principales:\n\n🚇 Subte Línea C: 05:00 — 23:30 hs\n🚌 Colectivos: según línea (consultar en Viajes)\n✈️ Shuttle Ezeiza: cada 30 min\nℹ️ Información: 06:00 — 22:00 hs',
  'subte': '🚇 Subte Línea C (Constitución — Retiro)\n\n⏰ Horario: 05:00 — 23:30 hs\n⏱️ Frecuencia: cada 3-5 minutos\n💰 Tarifa: $650 con SUBE\n📍 Acceso: Sector C de la terminal',

  // Ezeiza / Aeropuerto
  'ezeiza': '✈️ Shuttle al Aeropuerto Ezeiza:\n\n📍 Sale desde: Plataforma 12, Sector C\n⏱️ Frecuencia: cada 30 minutos\n⏰ Duración: ~55 minutos\n💰 Tarifa: $4.500',
  'aeropuerto': '✈️ Shuttle al Aeropuerto Ezeiza:\n\n📍 Sale desde: Plataforma 12, Sector C\n⏱️ Frecuencia: cada 30 minutos\n⏰ Duración: ~55 minutos\n💰 Tarifa: $4.500',
  'vuelo': '✈️ Shuttle al Aeropuerto Ezeiza:\n\n📍 Sale desde: Plataforma 12, Sector C\n⏱️ Frecuencia: cada 30 minutos\n⏰ Duración: ~55 minutos\n💰 Tarifa: $4.500',

  // Estacionamiento
  'estacionar': '🅿️ **Estacionamientos en Constitución**:\n\nDebido al flujo vehicular, hay varias opciones privadas vigiladas abiertas las 24 horas en las cercanías:\n\n🚗 **Garage Lima 1875**: A pocos metros del acceso lateral de la terminal.\n🚗 **Garaje Sol del Sud**: Ubicado en Pavón 1324.\n🚗 **San José Parking**: En San José 1556.\n\n⚠️ **Reglas en vía pública**: Está permitido estacionar en calles de ambos lados (salvo indicación contraria) y en avenidas solo de 21:00 a 07:00 hs. Nunca obstruyas rampas ni ochavas.',
  'estacionamiento': '🅿️ **Estacionamientos en Constitución**:\n\nDebido al flujo vehicular, hay varias opciones privadas vigiladas abiertas las 24 horas en las cercanías:\n\n🚗 **Garage Lima 1875**: A pocos metros del acceso lateral de la terminal.\n🚗 **Garaje Sol del Sud**: Ubicado en Pavón 1324.\n🚗 **San José Parking**: En San José 1556.\n\n⚠️ **Reglas en vía pública**: Está permitido estacionar en calles de ambos lados (salvo indicación contraria) y en avenidas solo de 21:00 a 07:00 hs. Nunca obstruyas rampas ni ochavas.',
  'auto': '🅿️ **Estacionamientos en Constitución**:\n\nDebido al flujo vehicular, hay varias opciones privadas vigiladas abiertas las 24 horas en las cercanías:\n\n🚗 **Garage Lima 1875**: A pocos metros del acceso lateral de la terminal.\n🚗 **Garaje Sol del Sud**: Ubicado en Pavón 1324.\n🚗 **San José Parking**: En San José 1556.\n\n⚠️ **Reglas en vía pública**: Está permitido estacionar en calles de ambos lados (salvo indicación contraria) y en avenidas solo de 21:00 a 07:00 hs. Nunca obstruyas rampas ni ochavas.',

  // Seguridad
  'seguridad': '🛡️ La terminal cuenta con:\n\n👮 Personal de seguridad uniformado 24hs\n📹 Sistema CCTV en todas las zonas\n🆘 Botones antipánico\n📍 Oficina de seguridad: Sector B, Planta Baja',
  'perdido': '📦 Objetos perdidos:\n\nDirigite a la Oficina de Seguridad en el Sector B, Planta Baja. Están disponibles las 24 horas.',
  'robo': '🚨 En caso de emergencia:\n\n📍 Acercate a la Oficina de Seguridad (Sector B)\n🆘 Usá los botones antipánico distribuidos en la terminal\n📞 Llamá al 911',

  // Accesibilidad
  'accesib': '♿ **Accesibilidad en el Centro de Trasbordo**:\n\nEl complejo está diseñado para garantizar accesibilidad universal:\n\n🛗 **Ascensores y Escaleras Mecánicas**: Conectan la superficie con el vestíbulo de la Línea C de Subte y el hall ferroviario.\n🔲 **Rampas de acceso**: Disponibles en la entrada principal de calle Brasil.\n🔵 **Pisos podotáctiles**: Baldosas amarillas con textura que guían a personas con discapacidad visual en andenes y pasillos.\n💳 **Pase Libre (SUBE)**: Las personas con Certificado Único de Discapacidad (CUD) viajan gratis vinculándolo a su SUBE (deben apoyar la tarjeta en molinetes especiales "Gates" automáticos).',
  'discapacidad': '♿ **Accesibilidad en el Centro de Trasbordo**:\n\nEl complejo está diseñado para garantizar accesibilidad universal:\n\n🛗 **Ascensores y Escaleras Mecánicas**: Conectan la superficie con el vestíbulo de la Línea C de Subte y el hall ferroviario.\n🔲 **Rampas de acceso**: Disponibles en la entrada principal de calle Brasil.\n🔵 **Pisos podotáctiles**: Baldosas amarillas con textura que guían a personas con discapacidad visual en andenes y pasillos.\n💳 **Pase Libre (SUBE)**: Las personas con Certificado Único de Discapacidad (CUD) viajan gratis vinculándolo a su SUBE (deben apoyar la tarjeta en molinetes especiales "Gates" automáticos).',
  'rampa': '♿ El ingreso cuenta con rampas accesibles por calle Brasil. Además, los molinetes cuentan con puertas de vidrio automatizadas tipo "Gates" para facilitar el paso de sillas de ruedas o cochecitos.',
  'ascensor': '🛗 Los ascensores comunican la superficie (Plaza Constitución) con el vestíbulo y las plataformas de la Línea C de Subte. Podés verificar el estado de funcionamiento de los ascensores llamando gratis al **0800-333-6682** (Atención al Usuario de Subte).',

  // Cajeros
  'cajero': '🏧 Cajeros automáticos:\n\n📍 Hall Central — Junto a Oficina de Información\n💳 3 cajeros Red Link\n💳 2 cajeros Red Banelco\n🕐 Disponibles 24 horas',
  'plata': '🏧 Cajeros automáticos:\n\n📍 Hall Central — Junto a Oficina de Información\n💳 Red Link y Red Banelco\n🕐 Disponibles 24 horas',

  // General
  'hola': '¡Hola! 👋 Soy el asistente virtual de TripGo Metro. Puedo ayudarte con información sobre:\n\n🚻 Baños\n💳 Carga SUBE\n📶 WiFi\n🍔 Gastronomía\n🕐 Horarios\n✈️ Aeropuerto\n🅿️ Estacionamiento\n♿ Accesibilidad\n\n¿Qué necesitás saber?',
  'gracias': '¡De nada! 😊 Si tenés otra consulta, no dudes en preguntar. ¡Buen viaje! 🚇',
  'chau': '¡Hasta luego! 👋 Esperamos que tu experiencia en TripGo Metro sea excelente. ¡Buen viaje!',
  'ayuda': 'Puedo ayudarte con:\n\n🚻 Ubicación de baños\n💳 Carga de tarjeta SUBE\n📶 Conexión WiFi\n🍔 Opciones gastronómicas\n🕐 Horarios de servicios\n✈️ Shuttle al aeropuerto\n🅿️ Estacionamiento\n♿ Accesibilidad\n🛡️ Seguridad\n\nEscribí tu consulta y te respondo al toque 😄',
  'mapa': '🗺️ Podés ver el mapa interactivo de la terminal más arriba en esta misma página. Hacé clic en cualquier zona para ver información detallada.',
  'colectivo': '🚌 Los colectivos salen desde las Dársenas 1-11:\n\n• Dársenas 1-4: Sector A (Líneas 9, 39, 60)\n• Dársenas 5-8: Sector B (Líneas interurbanas)\n• Dársenas 9-11: Larga distancia\n\nConsultá la página de Viajes para rutas específicas.',
  'linea': '🚌 Líneas de transporte disponibles:\n\n🚌 Línea 9 — Dársena 3\n🚌 Línea 39 — Dársena 5\n🚌 Línea 60 — Dársena 8\n🚇 Subte Línea C — Sector C\n✈️ Shuttle Ezeiza — Plataforma 12'
};

/* ---- Chatbot Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('chatbot-toggle');
  const window_ = document.getElementById('chatbot-window');
  const closeBtn = document.getElementById('close-chat');

  if (!toggle || !window_) return;

  toggle.addEventListener('click', () => {
    window_.classList.toggle('open');
    if (window_.classList.contains('open')) {
      document.getElementById('chat-input').focus();
    }
  });

  closeBtn.addEventListener('click', () => {
    window_.classList.remove('open');
  });
});

/* ---- Send Message ---- */
function sendMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (!message) return;

  addMessage(message, 'user');
  input.value = '';

  // Process after a small delay for natural feel
  setTimeout(() => {
    const response = findResponse(message);
    addMessage(response, 'bot');
  }, 500);
}

/* ---- Send Suggestion ---- */
function sendSuggestion(text) {
  addMessage(text, 'user');

  setTimeout(() => {
    const response = findResponse(text);
    addMessage(response, 'bot');
  }, 500);
}

/* ---- Find Response ---- */
function findResponse(input) {
  const normalizedInput = input.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[¿?¡!.,]/g, ''); // Remove punctuation

  // Search for matching keywords
  for (const [keyword, response] of Object.entries(chatResponses)) {
    const normalizedKeyword = keyword.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[¿?¡!.,]/g, '');
    if (normalizedInput.includes(normalizedKeyword)) {
      return response;
    }
  }

  // Default response
  return '🤔 No encontré información específica sobre eso. Probá preguntando sobre:\n\n• Baños\n• SUBE\n• WiFi\n• Comida\n• Horarios\n• Aeropuerto\n• Estacionamiento\n• Accesibilidad\n\nO visitá la Oficina de Información en el Hall Central. 😊';
}

/* ---- Add Message to Chat ---- */
function addMessage(text, sender) {
  const container = document.getElementById('chatbot-messages');
  const msg = document.createElement('div');
  msg.className = `chat-message ${sender}`;

  // Convert markdown-like bold to HTML
  const formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  msg.innerHTML = formatted;

  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}
