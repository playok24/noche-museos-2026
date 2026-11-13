// Datos de la Noche de los Museos 2026 - Córdoba
// Fuente: https://nochedelosmuseos.unc.edu.ar/museos-del-interior-provincial/

const LOCALIDADES = [
  { id: "cosquin", nombre: "Cosquín", emoji: "🪕" },
  { id: "la-cumbre", nombre: "La Cumbre", emoji: "🏔️" },
  { id: "la-falda", nombre: "La Falda", emoji: "🎡" },
  { id: "los-cocos", nombre: "Los Cocos", emoji: "🌿" },
  { id: "valle-hermoso", nombre: "Valle Hermoso", emoji: "🚂" },
  { id: "villa-carlos-paz", nombre: "Villa Carlos Paz", emoji: "🌊" },
];

const MUSEOS = [
  {
    nombre: "Museo del Artesano",
    localidad: "cosquin",
    direccion: "Tucumán 540, Cosquín, Córdoba",
    direccionCorta: "Tucumán 540",
    lat: -31.2447,
    lng: -64.4556,
    descripcion:
      "En el corazón de la histórica Plaza Próspero Molina, resguarda el legado de las tradiciones artesanales de Argentina. Cuenta con un acervo de 216 piezas únicas: 165 en exposición y 51 en depósito. Un símbolo de identidad, orgullo y aprendizaje.",
    web: null,
    redes: [
      { tipo: "Sitio oficial", url: "https://nochedelosmuseos.unc.edu.ar/museos/museo-del-artesano/" }
    ],
    programacion: "Actividades y recorridos culturales durante toda la noche.",
  },
  {
    nombre: "Casa Museo Mujica Lainez",
    localidad: "la-cumbre",
    direccion: "Lainez s/n, Cruz Chica, La Cumbre, Córdoba",
    direccionCorta: "Lainez s/n (Cruz Chica)",
    lat: -31.1202,
    lng: -64.4703,
    descripcion:
      "«El Paraíso»: la casa de Manuel Mujica Lainez desde 1969 hasta su muerte en 1984. Aquí se conservan sus colecciones, libros, su máquina de escribir y las huellas de un creador en el lugar de su creación. Casa de estilo español obra del arquitecto León Dourge. Monumento Histórico Nacional desde 2015.",
    web: "http://www.fundacionmujicalainez.org",
    redes: [],
    programacion: "Visitas guiadas al público durante la noche.",
  },
  {
    nombre: "Museo de Arte Luis José Pisano",
    localidad: "la-cumbre",
    direccion: "Aristóbulos s/n, La Cumbre, Córdoba",
    direccionCorta: "Aristóbulos s/n",
    lat: -31.1123,
    lng: -64.4936,
    descripcion:
      "Alberga 200 obras del gran artista plástico italo-argentino Luis José Pisano, integrante del Movimiento de Pintores de La Boca (1935-1965). Sus maestros fueron Spilimbergo y Collivadino. Se exponen dibujos de estudiante, óleos, carbonillas, grafitos, tintas, temperas y material histórico.",
    web: null,
    redes: [
      { tipo: "Facebook", url: "https://www.facebook.com/museopictorico.pisano/" }
    ],
    programacion: "Actividades y recorridos culturales durante toda la noche.",
  },
  {
    nombre: "Museo de Historia y Patrimonio de La Cumbre",
    localidad: "la-cumbre",
    direccion: "Pasaje Tassano 55, La Cumbre, Córdoba",
    direccionCorta: "Pasaje Tassano 55",
    lat: -31.1097,
    lng: -64.4929,
    descripcion:
      "Lleva el nombre del periodista, ciudadano ilustre e historiador Francisco «Pinocho» Capdevila. En la planta baja de la Sala Caraffa se exhibe el primer proyector a carbón, pupitres, obras del pintor Emilio Caraffa y Ruznack, fotografías históricas y elementos comechingones.",
    web: null,
    redes: [],
    programacion: "Noche de los Museos 2026 con actividades especiales.",
  },
  {
    nombre: "Museo Miguel Ocampo",
    localidad: "la-cumbre",
    direccion: "Miguel Ocampo 630, La Cumbre, Córdoba",
    direccionCorta: "Miguel Ocampo 630",
    lat: -31.1092,
    lng: -64.4940,
    telefono: "(03548) 457036 - 15-576256",
    descripcion:
      "Dedicado al pintor y arquitecto Miguel Ocampo (Buenos Aires, 1922), representante de la pintura argentina en la Bienal de Venecia y con más de 50 muestras individuales en el país y el mundo: Roma, París, Nueva York, Río de Janeiro, Washington, entre otras.",
    web: null,
    redes: [
      { tipo: "Instagram", url: "https://www.instagram.com/museomiguelocampo" }
    ],
    programacion: "Noche de los Museos 2026 con actividades especiales.",
  },
  {
    nombre: "Hotel Edén",
    localidad: "la-falda",
    direccion: "Av. Edén 1400, La Falda, Córdoba",
    direccionCorta: "Av. Edén 1400",
    lat: -31.0889,
    lng: -64.4827,
    descripcion:
      "Primer hotel de la ciudad, fundado en 1898 por dueños alemanes. A lo largo de su historia recibió personalidades de renombre y presidentes argentinos, llegando a ser uno de los hoteles más importantes del país. Monumento Histórico Municipal desde 1988.",
    web: "https://edenhotellafalda.com.ar/",
    redes: [
      { tipo: "Facebook", url: "https://www.facebook.com/hoteledenlafalda" },
      { tipo: "Instagram", url: "https://www.instagram.com/edenhotel_lafalda/" }
    ],
    programacion: "Actividades y recorridos culturales durante toda la noche.",
  },
  {
    nombre: "Museo Arqueológico Argentino Ambato",
    localidad: "la-falda",
    direccion: "Cuesta del Lago 1469, La Falda, Córdoba",
    direccionCorta: "Cuesta del Lago 1469",
    lat: -31.0978,
    lng: -64.4972,
    descripcion:
      "Fundado en 1987, custodia la Colección Rosso: más de 300 piezas arqueológicas de culturas como Aguada, Tafí, Ciénaga, Belén y de influencia incaica, entre vasijas, urnas funerarias, pipas y máscaras. La casona de 1930 es Bien de Interés Arquitectónico e Histórico Nacional.",
    web: null,
    redes: [
      { tipo: "Facebook", url: "https://www.facebook.com/amigosmuseoambato" }
    ],
    programacion:
      "19 h: «SIN FIN», muestra anual del Taller de Cerámica con performance, animación y concierto. 20 a 22 h: visitas guiadas con acceso libre y gratuito.",
  },
  {
    nombre: "Museo de la Infancia",
    localidad: "la-falda",
    direccion: "Av. Edén 1400, La Falda, Córdoba",
    direccionCorta: "Av. Edén 1400",
    lat: -31.0889,
    lng: -64.4827,
    descripcion:
      "Un viaje directo a épocas felices: sectores dedicados a Manuel García Ferré y Walt Disney, personajes de la década del 80, figuras icónicas del cine, figuritas, autos de colección, cómics y juegos de época.",
    web: null,
    redes: [
      { tipo: "Facebook", url: "https://web.facebook.com/p/Museo-de-la-Infancia" },
      { tipo: "Instagram", url: "https://www.instagram.com/museodelainfancia" }
    ],
    programacion: "Actividades y recorridos culturales durante toda la noche.",
  },
  {
    nombre: "Museo del Deporte «Pierre de Coubertin»",
    localidad: "la-falda",
    direccion: "Dr. Emilio Meincke 32, La Falda, Córdoba",
    direccionCorta: "Dr. Emilio Meincke 32",
    lat: -31.0956,
    lng: -64.4837,
    descripcion:
      "Importante colección de piezas vinculadas principalmente a los Juegos Olímpicos, con piezas únicas y amplio material gráfico y bibliográfico. Atendido por su propietario, lo que suma al relato un carácter vivencial y de vasto conocimiento.",
    web: null,
    redes: [
      { tipo: "Facebook", url: "https://www.facebook.com/albertoemoro" }
    ],
    programacion: "Actividades y recorridos culturales durante toda la noche.",
  },
  {
    nombre: "Museo La Loma · Centro Cultural Victoria Crenna",
    localidad: "los-cocos",
    direccion: "Av. Cecilia Grierson 1898, Los Cocos, Córdoba",
    direccionCorta: "Av. Cecilia Grierson 1898",
    lat: -31.0560,
    lng: -64.5140,
    descripcion:
      "Construida en 1918 por José Pedro Majorel y su esposa Victoria Crenna, desde 1982 está en comodato municipal. Hoy realiza actividades artísticas, talleres, muestras y eventos culturales, acercando bienes culturales tangibles e intangibles en una experiencia inmersiva.",
    web: null,
    redes: [
      { tipo: "Facebook", url: "https://www.facebook.com/share/1HZRTGwYGU/" },
      { tipo: "Instagram", url: "https://www.instagram.com/loscocos.cultura.ok" }
    ],
    programacion: "Actividades y recorridos culturales durante toda la noche.",
  },
  {
    nombre: "Museo Capitán Juan de Zevallos",
    localidad: "valle-hermoso",
    direccion: "Av. Juan Domingo Perón s/n, Valle Hermoso, Córdoba",
    direccionCorta: "Av. Juan Domingo Perón s/n",
    lat: -31.0372,
    lng: -64.5211,
    descripcion:
      "Ubicado en la vieja estación del ferrocarril de Valle Hermoso, exhibe colecciones de Paleontología, Petrología, Arqueología, Biología, Fotografía y Numismática en salas dedicadas a la historia del pueblo, a Julio Belluscio, a la mineralogía, a las antigüedades y a los pueblos originarios.",
    web: null,
    redes: [],
    programacion: "Actividades y recorridos culturales durante toda la noche.",
  },
  {
    nombre: "Paseo con Ciencia",
    localidad: "valle-hermoso",
    direccion: "Salesianos s/n, Valle Hermoso, Córdoba",
    direccionCorta: "Salesianos s/n",
    lat: -31.0323,
    lng: -64.5270,
    telefono: "03548-592894",
    descripcion:
      "Un predio para recorrer la vegetación del Valle de Punilla, contemplar el cielo de verano y experimentar la física aplicada a la vida real. Cuenta con planetario y observatorio, sala de física e ilusiones ópticas con juegos de espejos y experiencias lúdicas.",
    web: null,
    redes: [
      { tipo: "Facebook", url: "https://m.facebook.com/paseo.conciencia/" },
      { tipo: "Instagram", url: "https://www.instagram.com/paseo.con.ciencia" }
    ],
    programacion: "Actividades y recorridos culturales durante toda la noche.",
  },
  {
    nombre: "Museo Arqueológico Numba Charava",
    localidad: "villa-carlos-paz",
    direccion: "Los Zorzales 240, Villa Carlos Paz, Córdoba",
    direccionCorta: "Los Zorzales 240",
    lat: -31.4029,
    lng: -64.4892,
    descripcion:
      "Custodia, conserva, investiga y difunde materiales líticos, óseos, malacológicos, metálicos y cerámicos que usaron los antiguos habitantes de la región de Punilla Sur durante el período prehispánico. Abierto todos los días del año de 9 a 17 h, con visitas guiadas.",
    web: null,
    redes: [
      { tipo: "Facebook", url: "https://www.facebook.com/share/1P57iXfJrV/" },
      { tipo: "Instagram", url: "https://www.instagram.com/museo_numba_charava" }
    ],
    programacion: "Actividades y recorridos culturales durante toda la noche.",
  },
  {
    nombre: "Museo MET",
    localidad: "villa-carlos-paz",
    direccion: "Tucumán 111, Villa Carlos Paz, Córdoba",
    direccionCorta: "Tucumán 111",
    lat: -31.4201,
    lng: -64.4954,
    descripcion:
      "Museo educativo y cultural con 5 salas didácticas con proyecciones audiovisuales, maquetas, dioramas y domótica. El recorrido simula viajes en el tiempo en cápsulas: Pinturas Rupestres, Historia Universal, Inventos y Descubrimientos, Evolución del Planeta y Cuidemos al Planeta.",
    web: null,
    redes: [
      { tipo: "Facebook", url: "https://www.facebook.com/museomet" },
      { tipo: "Instagram", url: "https://www.instagram.com/museomet" }
    ],
    programacion: "Noche de los Museos 2026 con actividades especiales.",
  },
];
