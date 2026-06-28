/* ============================================
   TripGo Metro — Consulta de Viajes
   Datos simulados y lógica de búsqueda
   ============================================ */

/* ---- Base de datos simulada de rutas ---- */
const routes = [
  // Línea C (Subte)
  {
    origin: 'constitucion',
    destination: 'retiro',
    transport: 'Subte Línea C',
    transportType: 'subte',
    platform: 'Andén 1 — Subterráneo',
    duration: '18 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  },
  {
    origin: 'constitucion',
    destination: 'san-juan',
    transport: 'Subte Línea C',
    transportType: 'subte',
    platform: 'Andén 1 — Subterráneo',
    duration: '3 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  },
  {
    origin: 'constitucion',
    destination: 'independencia',
    transport: 'Subte Línea C',
    transportType: 'subte',
    platform: 'Andén 1 — Subterráneo',
    duration: '5 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  },
  {
    origin: 'constitucion',
    destination: 'moreno',
    transport: 'Subte Línea C',
    transportType: 'subte',
    platform: 'Andén 1 — Subterráneo',
    duration: '7 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  },
  {
    origin: 'constitucion',
    destination: 'avenida-de-mayo',
    transport: 'Subte Línea C',
    transportType: 'subte',
    platform: 'Andén 1 — Subterráneo',
    duration: '9 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  },
  {
    origin: 'constitucion',
    destination: 'diagonal-norte',
    transport: 'Subte Línea C',
    transportType: 'subte',
    platform: 'Andén 1 — Subterráneo',
    duration: '12 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  },
  {
    origin: 'constitucion',
    destination: 'lavalle',
    transport: 'Subte Línea C',
    transportType: 'subte',
    platform: 'Andén 1 — Subterráneo',
    duration: '15 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  },
  {
    origin: 'constitucion',
    destination: 'plaza-de-mayo',
    transport: 'Subte Línea C',
    transportType: 'subte',
    platform: 'Andén 1 — Subterráneo',
    duration: '10 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  },
  // Colectivos
  {
    origin: 'constitucion',
    destination: 'palermo',
    transport: 'Colectivo Línea 39',
    transportType: 'colectivo',
    platform: 'Dársena 5 — Sector A',
    duration: '35 min',
    cost: '$650',
    frequency: 'Cada 8-12 min',
    icon: '🚌'
  },
  {
    origin: 'constitucion',
    destination: 'la-boca',
    transport: 'Colectivo Línea 9',
    transportType: 'colectivo',
    platform: 'Dársena 3 — Sector A',
    duration: '20 min',
    cost: '$650',
    frequency: 'Cada 10-15 min',
    icon: '🚌'
  },
  {
    origin: 'constitucion',
    destination: 'flores',
    transport: 'Colectivo Línea 60',
    transportType: 'colectivo',
    platform: 'Dársena 8 — Sector B',
    duration: '40 min',
    cost: '$650',
    frequency: 'Cada 8-10 min',
    icon: '🚌'
  },
  {
    origin: 'constitucion',
    destination: 'belgrano',
    transport: 'Colectivo Línea 60',
    transportType: 'colectivo',
    platform: 'Dársena 8 — Sector B',
    duration: '55 min',
    cost: '$650',
    frequency: 'Cada 8-10 min',
    icon: '🚌'
  },
  {
    origin: 'constitucion',
    destination: 'once',
    transport: 'Subte Línea C + Línea B',
    transportType: 'combinacion',
    platform: 'Andén 1 — Subterráneo (Combinación en Diagonal Norte)',
    duration: '22 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  },
  {
    origin: 'constitucion',
    destination: 'obelisco',
    transport: 'Subte Línea C',
    transportType: 'subte',
    platform: 'Andén 1 — Subterráneo',
    duration: '13 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  },
  // Ezeiza
  {
    origin: 'constitucion',
    destination: 'ezeiza',
    transport: 'Shuttle Aeropuerto Ezeiza',
    transportType: 'shuttle',
    platform: 'Plataforma 12 — Sector C',
    duration: '55 min',
    cost: '$4.500',
    frequency: 'Cada 30 min',
    icon: '✈️'
  },
  // Rutas inversas comunes
  {
    origin: 'retiro',
    destination: 'constitucion',
    transport: 'Subte Línea C',
    transportType: 'subte',
    platform: 'Andén 2 — Retiro Subterráneo',
    duration: '18 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  },
  {
    origin: 'plaza-de-mayo',
    destination: 'constitucion',
    transport: 'Subte Línea C',
    transportType: 'subte',
    platform: 'Andén 2 — Plaza de Mayo',
    duration: '10 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  },
  {
    origin: 'once',
    destination: 'constitucion',
    transport: 'Subte Línea B + Línea C',
    transportType: 'combinacion',
    platform: 'Andén Línea B Once (Combinación en Diagonal Norte)',
    duration: '22 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  },
  // Intermedias
  {
    origin: 'san-juan',
    destination: 'retiro',
    transport: 'Subte Línea C',
    transportType: 'subte',
    platform: 'Andén 1 — San Juan',
    duration: '15 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  },
  {
    origin: 'independencia',
    destination: 'retiro',
    transport: 'Subte Línea C',
    transportType: 'subte',
    platform: 'Andén 1 — Independencia',
    duration: '13 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  },
  {
    origin: 'lavalle',
    destination: 'constitucion',
    transport: 'Subte Línea C',
    transportType: 'subte',
    platform: 'Andén 2 — Lavalle',
    duration: '15 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  },
  {
    origin: 'diagonal-norte',
    destination: 'constitucion',
    transport: 'Subte Línea C',
    transportType: 'subte',
    platform: 'Andén 2 — Diagonal Norte',
    duration: '12 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  },
  {
    origin: 'moreno',
    destination: 'retiro',
    transport: 'Subte Línea C',
    transportType: 'subte',
    platform: 'Andén 1 — Moreno',
    duration: '11 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  },
  {
    origin: 'avenida-de-mayo',
    destination: 'constitucion',
    transport: 'Subte Línea C',
    transportType: 'subte',
    platform: 'Andén 2 — Av. de Mayo',
    duration: '9 min',
    cost: '$650',
    frequency: 'Cada 3-5 min',
    icon: '🚇'
  }
];

/* ---- Nombre legible de las estaciones ---- */
const stationNames = {
  'constitucion': 'Constitución',
  'retiro': 'Retiro',
  'once': 'Once',
  'plaza-de-mayo': 'Plaza de Mayo',
  'san-juan': 'San Juan',
  'independencia': 'Independencia',
  'moreno': 'Moreno',
  'avenida-de-mayo': 'Avenida de Mayo',
  'diagonal-norte': 'Diagonal Norte',
  'lavalle': 'Lavalle',
  'obelisco': 'Obelisco',
  'ezeiza': 'Aeropuerto Ezeiza',
  'la-boca': 'La Boca',
  'flores': 'Flores',
  'palermo': 'Palermo',
  'belgrano': 'Belgrano'
};

/* ---- Search Function ---- */
function searchRoute() {
  const origin = document.getElementById('origin').value;
  const destination = document.getElementById('destination').value;
  const container = document.getElementById('result-container');

  // Validations
  if (!origin || !destination) {
    container.innerHTML = `
      <div class="result-card" style="border-color: var(--color-warning);">
        <div class="result-header">
          <div class="result-icon" style="background: var(--color-warning);">⚠️</div>
          <h3>Seleccioná origen y destino</h3>
        </div>
        <p style="color: var(--color-text-muted);">Por favor, elegí tanto el punto de origen como el destino para realizar la consulta.</p>
      </div>
    `;
    return;
  }

  if (origin === destination) {
    container.innerHTML = `
      <div class="result-card" style="border-color: var(--color-warning);">
        <div class="result-header">
          <div class="result-icon" style="background: var(--color-warning);">⚠️</div>
          <h3>Origen y destino iguales</h3>
        </div>
        <p style="color: var(--color-text-muted);">El origen y el destino no pueden ser el mismo lugar. Por favor, seleccioná un destino diferente.</p>
      </div>
    `;
    return;
  }

  // Search for route
  const route = routes.find(r => r.origin === origin && r.destination === destination);

  if (route) {
    showResult(route, origin, destination);
  } else {
    // Generate a generic result for routes not in the database
    showGenericResult(origin, destination);
  }
}

/* ---- Show Result ---- */
function showResult(route, origin, destination) {
  const container = document.getElementById('result-container');

  container.innerHTML = `
    <div class="result-card">
      <div class="result-header">
        <div class="result-icon">${route.icon}</div>
        <div>
          <h3>${route.transport}</h3>
          <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">${stationNames[origin]} → ${stationNames[destination]}</p>
        </div>
      </div>
      <div class="result-details">
        <div class="result-item">
          <span class="item-label">Transporte</span>
          <span class="item-value">${route.transport}</span>
        </div>
        <div class="result-item">
          <span class="item-label">Plataforma / Andén</span>
          <span class="item-value">${route.platform}</span>
        </div>
        <div class="result-item">
          <span class="item-label">Tiempo estimado</span>
          <span class="item-value highlight">${route.duration}</span>
        </div>
        <div class="result-item">
          <span class="item-label">Costo estimado</span>
          <span class="item-value highlight">${route.cost}</span>
        </div>
        <div class="result-item">
          <span class="item-label">Frecuencia</span>
          <span class="item-value">${route.frequency}</span>
        </div>
        <div class="result-item">
          <span class="item-label">Tipo</span>
          <span class="item-value">
            <span class="table-badge success" style="font-size: 0.8rem;">${route.transportType.toUpperCase()}</span>
          </span>
        </div>
      </div>
    </div>
  `;

  // Scroll to result
  container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ---- Show Generic Result ---- */
function showGenericResult(origin, destination) {
  const container = document.getElementById('result-container');

  // Generate plausible data
  const duration = Math.floor(Math.random() * 40) + 15;
  const transports = [
    { name: 'Colectivo Línea 9', platform: 'Dársena 3 — Sector A', icon: '🚌', type: 'colectivo' },
    { name: 'Colectivo Línea 39', platform: 'Dársena 5 — Sector A', icon: '🚌', type: 'colectivo' },
    { name: 'Colectivo Línea 60', platform: 'Dársena 8 — Sector B', icon: '🚌', type: 'colectivo' },
    { name: 'Subte Línea C + Colectivo', platform: 'Andén 1 + trasbordo', icon: '🚇', type: 'combinacion' }
  ];
  const transport = transports[Math.floor(Math.random() * transports.length)];

  container.innerHTML = `
    <div class="result-card">
      <div class="result-header">
        <div class="result-icon">${transport.icon}</div>
        <div>
          <h3>${transport.name}</h3>
          <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">${stationNames[origin]} → ${stationNames[destination]}</p>
        </div>
      </div>
      <div class="result-details">
        <div class="result-item">
          <span class="item-label">Transporte recomendado</span>
          <span class="item-value">${transport.name}</span>
        </div>
        <div class="result-item">
          <span class="item-label">Plataforma / Sector</span>
          <span class="item-value">${transport.platform}</span>
        </div>
        <div class="result-item">
          <span class="item-label">Tiempo estimado</span>
          <span class="item-value highlight">${duration} min</span>
        </div>
        <div class="result-item">
          <span class="item-label">Costo estimado</span>
          <span class="item-value highlight">$650</span>
        </div>
        <div class="result-item">
          <span class="item-label">Frecuencia</span>
          <span class="item-value">Cada 10-15 min</span>
        </div>
        <div class="result-item">
          <span class="item-label">Tipo</span>
          <span class="item-value">
            <span class="table-badge success" style="font-size: 0.8rem;">${transport.type.toUpperCase()}</span>
          </span>
        </div>
      </div>
    </div>
  `;

  container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ---- Quick Search from popular routes ---- */
function quickSearch(origin, destination) {
  document.getElementById('origin').value = origin;
  document.getElementById('destination').value = destination;
  searchRoute();
  document.getElementById('search-form').scrollIntoView({ behavior: 'smooth' });
}
