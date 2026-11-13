/* ============ Noche de los Museos 2026 ============ */

const COLORES = {
  "cosquin": "#f5c842",
  "la-cumbre": "#7b5cff",
  "la-falda": "#ff6b9d",
  "los-cocos": "#4ecdc4",
  "valle-hermoso": "#6fcf5f",
  "villa-carlos-paz": "#ff9f43",
};

let localidadActiva = "todas";
let textoBusqueda = "";
let marcadores = [];
let mapa;

/* ---------- Utilidades ---------- */
function linkGoogleMaps(museo) {
  const query = encodeURIComponent(`${museo.nombre}, ${museo.direccion}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

/* ---------- Tabs ---------- */
function crearTabs() {
  const cont = document.getElementById("tabs");
  const tabs = [{ id: "todas", nombre: "Todas", emoji: "✨" }, ...LOCALIDADES];
  cont.innerHTML = tabs
    .map(
      (l) =>
        `<button class="tab${l.id === "todas" ? " activa" : ""}" data-id="${l.id}">${l.emoji} ${l.nombre}</button>`
    )
    .join("");
  cont.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if (!btn) return;
    localidadActiva = btn.dataset.id;
    document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("activa", t === btn));
    renderListado();
    actualizarMapa();
  });
}

/* ---------- Listado de museos ---------- */
function museosFiltrados() {
  const texto = textoBusqueda.trim().toLowerCase();
  return MUSEOS.filter((m) => {
    const okLocalidad = localidadActiva === "todas" || m.localidad === localidadActiva;
    const okTexto =
      !texto ||
      m.nombre.toLowerCase().includes(texto) ||
      m.direccion.toLowerCase().includes(texto) ||
      m.descripcion.toLowerCase().includes(texto);
    return okLocalidad && okTexto;
  });
}

function renderListado() {
  const cont = document.getElementById("listado");
  const museos = museosFiltrados();

  if (museos.length === 0) {
    cont.innerHTML = `<p class="sin-resultados">🌙 No encontramos museos con ese criterio.<br/>Probá con otro nombre o cambiá la localidad.</p>`;
    return;
  }

  const localidadesOrden = localidadActiva === "todas" ? LOCALIDADES.map((l) => l.id) : [localidadActiva];
  let html = "";

  for (const idLocalidad of localidadesOrden) {
    const delGrupo = museos.filter((m) => m.localidad === idLocalidad);
    if (delGrupo.length === 0) continue;
    const infoLoc = LOCALIDADES.find((l) => l.id === idLocalidad);
    if (localidadActiva === "todas") {
      html += `<h2 class="localidad-titulo" id="loc-${idLocalidad}">${infoLoc.emoji} ${infoLoc.nombre}</h2>`;
    }
    html += delGrupo
      .map((m) => {
        const redes = (m.redes || [])
          .map((r) => `<a href="${r.url}" target="_blank" rel="noopener">${r.tipo}</a>`)
          .join("");
        const webLink = m.web ? `<a href="${m.web}" target="_blank" rel="noopener">Sitio web</a>` : "";
        const tel = m.telefono ? `<span class="tel">📞 ${escapeHtml(m.telefono)}</span>` : "";
        return `
        <article class="tarjeta" data-lat="${m.lat}" data-lng="${m.lng}">
          <span class="localidad-chip">${infoLoc.emoji} ${infoLoc.nombre}</span>
          <h3>${escapeHtml(m.nombre)}</h3>
          <p class="direccion">📍 <strong>${escapeHtml(m.direccionCorta)}</strong></p>
          ${tel}
          <p class="descripcion">${escapeHtml(m.descripcion)}</p>
          <p class="programacion"><strong>🌙 Durante la Noche:</strong> ${escapeHtml(m.programacion)}</p>
          <div class="links">
            <a class="como-llegar" href="${linkGoogleMaps(m)}" target="_blank" rel="noopener">🧭 Cómo llegar</a>
            ${webLink}${redes}
          </div>
        </article>`;
      })
      .join("");
  }
  cont.innerHTML = html;
}

/* ---------- Mapa Leaflet ---------- */
function iniciarMapa() {
  mapa = L.map("leaflet").setView([-31.18, -64.49], 10.5);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap",
  }).addTo(mapa);
  actualizarMapa();
}

function popupHtml(m) {
  return `
    <div>
      <div class="popup-nombre">${escapeHtml(m.nombre)}</div>
      <div class="popup-dir">📍 ${escapeHtml(m.direccionCorta)}</div>
      <a class="popup-llegar" href="${linkGoogleMaps(m)}" target="_blank" rel="noopener">🧭 Cómo llegar</a>
    </div>`;
}

function actualizarMapa() {
  marcadores.forEach((mk) => mapa.removeLayer(mk));
  marcadores = [];
  const museos = museosFiltrados();
  const bounds = [];
  for (const m of museos) {
    const mk = L.circleMarker([m.lat, m.lng], {
      radius: 9,
      color: "#0d0b1e",
      weight: 2,
      fillColor: COLORES[m.localidad] || "#f5c842",
      fillOpacity: 0.95,
    }).addTo(mapa);
    mk.bindPopup(popupHtml(m));
    marcadores.push(mk);
    bounds.push([m.lat, m.lng]);
  }
  if (bounds.length > 0) {
    mapa.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
  }
}

/* ---------- Inicio ---------- */
document.getElementById("buscador").addEventListener("input", (e) => {
  textoBusqueda = e.target.value;
  renderListado();
  actualizarMapa();
});

crearTabs();
renderListado();
iniciarMapa();
