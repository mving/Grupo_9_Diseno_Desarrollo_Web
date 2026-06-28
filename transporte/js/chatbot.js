/* ============================================
   TripGo Metro — Chatbot Inteligente FAQ
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
  if (!container) return;
  const msg = document.createElement('div');
  msg.className = `chat-message ${sender}`;

  // Convert markdown-like bold to HTML
  const formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  msg.innerHTML = formatted;

  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}
