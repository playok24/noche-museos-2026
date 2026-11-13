# 🌙 Noche de los Museos 2026 — Punilla y Villa Carlos Paz

Guía web de la **Noche de los Museos 2026** (Córdoba, Argentina) para las localidades de:

- 🪕 Cosquín
- 🏔️ La Cumbre
- 🎡 La Falda
- 🌿 Los Cocos
- 🚂 Valle Hermoso
- 🌊 Villa Carlos Paz

**📅 Viernes 13 de noviembre de 2026 · 20 a 01 h**

## ✨ Funcionalidades

- Filtros por localidad y buscador por nombre o dirección.
- Ficha de cada museo con dirección, descripción, programación de la noche y redes sociales.
- Botón **«Cómo llegar»** en cada museo que abre Google Maps con la dirección oficial.
- Mapa interactivo (Leaflet + OpenStreetMap) con marcadores por localidad.
- Diseño nocturno responsive, sin dependencias de build ni APIs con clave.

## 🗂️ Estructura

```
index.html   → página principal
styles.css   → estilos
data.js      → datos de los museos (direcciones, coords, programación)
app.js       → lógica de filtros, búsqueda y mapa
```

## 🚀 Cómo verlo

Es un sitio estático: se puede abrir `index.html` directamente en el navegador o publicar con **GitHub Pages** (Settings → Pages → rama `main`).

## 📚 Fuente de la información

Toda la información fue obtenida del [sitio oficial de la Noche de los Museos — UNC](https://nochedelosmuseos.unc.edu.ar/museos-del-interior-provincial/).

> Las ubicaciones de los marcadores del mapa son referenciales; para la navegación exacta se usa el enlace a Google Maps con la dirección oficial de cada museo.
