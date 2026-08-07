// ════════════════════════════════════════════════════════════════════════════
//  DATOS
//  Revista larga: cada página es distinta. Cada sección tiene un divisor y luego
//  una página por proyecto (con su descripción). item: image | youtube.
// ════════════════════════════════════════════════════════════════════════════

const ytThumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

// Miniatura en alta (1280x720, 16:9 sin bandas negras). No todos los videos
// la tienen: para esos, YouTube devuelve un placeholder de 120x90 (no un 404),
// así que el fallback se detecta por dimensiones. Dos videos del portfolio no
// tienen maxres en YouTube y usan una copia local recortada (sin letterbox).
const YT_LOCAL = {
  '2W9xCTxiQk8': 'fotos/yt-thumbs/2W9xCTxiQk8.jpg',
  '6G79yq3th1g': 'fotos/yt-thumbs/6G79yq3th1g.jpg',
};
const ytThumbHD = (id) => YT_LOCAL[id] || `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

// Si la HD vino como placeholder (o falló), cae a la miniatura estándar.
function fixYtImg(img) {
  const id = img.dataset.yt;
  const check = () => { if (img.naturalWidth && img.naturalWidth < 320) img.src = ytThumb(id); };
  if (img.complete) check(); else img.addEventListener('load', check, { once: true });
  img.addEventListener('error', () => { img.src = ytThumb(id); }, { once: true });
}

const video  = (id, title, meta) => ({ type: 'youtube', id, title, meta });
// `thumb` (máx. 1000px, generada con scripts/make_thumbs.py) es lo que pinta la
// revista y la grilla; `src` (original, ~6MB c/u) queda sólo para el lightbox.
const photos = (dir, files, title, meta = '') =>
  files.map(f => ({ type: 'image', src: `fotos/${dir}/${f}`, thumb: `fotos/${dir}/thumbs/${f}`, title, meta }));

const francoItems = photos('franco-ladran-sancho', [
  '07ae18244794795.699f38d5bba80.webp', '0cc4de244794795.699f38d5b8347.webp',
  // La 4.ª es la celda ancha de la portada: va una horizontal (una vertical
  // quedaba recortada por la mitad de la cara).
  '114850244794795.699f38d5be551.webp', '58738d244794795.699f38d5b5a03.webp',
  '291909244794795.699f38d5b78d7.webp', '2ec37e244794795.699f38d5bc2c1.webp',
  '35f695244794795.699f38d5bd3f5.webp', '4f5e58244794795.699f38d5c08a3.webp',
  '541cb8244794795.699f38d5bfb29.webp', '20b13b244794795.699f38d5ba1e7.webp',
  '5c5f29244794795.699f38d5b6ebe.webp', '66d060244794795.699f38d5bb239.webp',
  '6ab9e8244794795.699f38d5c0076.webp', '716a1d244794795.699f38d5bf43a.webp',
  '757902244794795.699f38d5b5068.webp', '87b003244794795.699f38d5b8e97.webp',
  '89e18a244794795.699f38d5b3b07.webp', '89e6c9244794795.699f38d5bed45.webp',
  '9e49b5244794795.699f38d5bcc90.webp', 'a6dfd8244794795.699f38d5b4a87.webp',
  'cf8cae244794795.699f38d5bdd65.webp', 'cfdeef244794795.699f38d5ba9f8.webp',
  'e022cd244794795.699f38d5b6425.webp', 'eb6ccb244794795.699f38d5b4272.webp',
  'f0a2c1244794795.699f38d5b9922.webp', 'f1061c244794795.699f38d5b352e.webp',
], 'Franco Martínez', 'En vivo · Ladran Sancho');

const tangenteItems = photos('franco-la-tangente', [
  'DSC05202.jpg', 'DSC05217.jpg', 'DSC05221.jpg', 'DSC05228.jpg',
  'DSC05232.jpg', 'DSC05236.jpg', 'DSC05242.jpg', 'DSC05244.jpg',
  'DSC05252.jpg', 'DSC05275.jpg', 'DSC05277.jpg', 'DSC05283.jpg',
  'DSC05285.jpg', 'DSC05291.jpg', 'DSC05294.jpg', 'DSC05305.jpg',
  'DSC05306.jpg', 'DSC05308.jpg', 'DSC05314.jpg', 'DSC05335.jpg',
  'DSC05347.jpg', 'DSC05351.jpg', 'DSC05352.jpg', 'DSC05362.jpg',
  'DSC05363.jpg', 'DSC05364.jpg', 'DSC05365.jpg', 'DSC05368.jpg',
  'DSC05381.jpg', 'DSC05384.jpg', 'DSC05499.jpg', 'DSC05517.jpg',
  'DSC05519.jpg', 'DSC05524.jpg', 'DSC05525.jpg', 'DSC05526.jpg',
  'DSC05543.jpg', 'DSC05554.jpg', 'DSC05581.jpg', 'DSC05595.jpg',
  'DSC05597.jpg', 'DSC05617.jpg', 'DSC05623.jpg', 'DSC05633.jpg',
  'DSC05641.jpg', 'DSC05644.jpg', 'DSC05651.jpg', 'DSC05652.jpg',
  'DSC05662.jpg', 'DSC05677.jpg', 'DSC05680.jpg', 'DSC05705.jpg',
  'DSC05738.jpg', 'DSC05745.jpg', 'DSC05746.jpg', 'DSC05759.jpg',
  'DSC05762.jpg', 'DSC05770.jpg', 'DSC05779.jpg', 'DSC05784.jpg',
  'DSC05786.jpg', 'DSC05787.jpg', 'DSC05796.jpg', 'DSC05812.jpg',
  'DSC05817.jpg', 'DSC05821.jpg', 'DSC05841-2.jpg', 'DSC05844.jpg',
  'DSC05846.jpg', 'DSC05887.jpg', 'DSC05898.jpg', 'DSC05899.jpg',
  'DSC05910.jpg', 'DSC05912.jpg', 'DSC05921.jpg', 'DSC05923.jpg',
  'DSC05931.jpg', 'DSC05950.jpg', 'DSC05953.jpg', 'DSC05961.jpg',
  'DSC05969-2.jpg', 'DSC05971.jpg', 'DSC05973.jpg', 'DSC05975.jpg',
  'DSC05993.jpg', 'DSC06005-2.jpg', 'DSC06010-2.jpg', 'DSC06035.jpg',
  'DSC06040.jpg', 'DSC06046.jpg', 'DSC06060.jpg',
], 'Franco Martínez', 'En vivo · La Tangente');

const luchiItems = photos('luchi-davit', [
  '6adfdf233853197.68b7c3d0b9f95.webp', '8c54bd233853197.68b7c3d0bc356.webp',
  // Misma idea que en Ladrán Sancho: la 4.ª (celda ancha) va horizontal.
  '9ef3d6233853197.68b7c3d0bbdb8.webp', 'e6e85b233853197.68b7c3d0bb692.webp',
  'bc8dee233853197.68b7c3d0bf343.webp', 'bfd6a5233853197.68b7c3d0bebba.webp',
  'c33cbd233853197.68b7c3d0ba764.webp', 'd0f929233853197.68b7c3d0c01c2.webp',
  'dc8b63233853197.68b7c3d0c0939.webp', 'b1b9fc233853197.68b7c3d0bdb96.webp',
  'f3a89c233853197.68b7c3d0c15ad.webp', 'f5b11b233853197.68b7c3d0c1fa2.webp',
  'f5f30f233853197.68b7c3d0c2e8d.webp',
], 'Luchi Davit', 'En vivo · The Monkey\'s');

// Video local del proyecto (mp4 comprimido a web — los originales pesan
// >100MB y GitHub los rechaza). Se muestra en el mural con su poster (cuadro
// extraído con ffmpeg, ya que el primer segundo de varias piezas es una placa)
// y se expande en el lightbox al clickearlo. clipMaker fija carpeta y meta.
const clipMaker = (dir, meta) => (file, title) => ({
  type: 'video',
  src: `fotos/${dir}/${file}`,
  poster: `fotos/${dir}/posters/${file.replace(/\.mp4$/, '.jpg')}`,
  title,
  meta,
});
const clip = clipMaker('hospital-universitario-austral', 'Hospital Universitario Austral');
const clipLT = clipMaker('lopez-taibo', 'López Taibo');
// Cortometrajes con el video alojado en el proyecto (no en YouTube).
const clipBarro = clipMaker('en-el-barro', 'En El Barro');
const clipHormiga = clipMaker('plan-hormiga', 'Plan Hormiga');
// Videos de BAFA (todos en fotos/bafa/). El label de sección va como meta,
// así el caption del lightbox dice "Cliente — Sección".
const clipBAFA = (seccion) => clipMaker('bafa', seccion);

const hospitalItems = [
  video('6G79yq3th1g', 'SaNar: salidas a la naturaleza', 'Hospital Universitario Austral'),
  clip('que-hay-en-mi-mochila-pediatria.mp4', '¿Qué hay en mi mochila? (Pediatría)'),
  clip('que-hay-en-mi-mochila-emergentologia.mp4', '¿Qué hay en mi mochila? (Emergentología)'),
  clip('fe-no-se-dice-terminos-medicos.mp4', 'No se dice… (Términos médicos)'),
  clip('fe-5-razones-para-elegir-kinesiologia.mp4', '5 razones para elegir Kinesiología'),
  clip('veni-a-conocer-hemoterapia.mp4', 'Vení a conocer… (Hemoterapia)'),
  clip('servicios-en-2-min-vertical.mp4', 'Servicios en 2 minutos'),
  clip('sanar-pacientes-ucia-en-naturaleza-vertical.mp4', 'SaNar (versión vertical)'),
];

// Galería López Taibo — videos locales (comprimidos con el script, poster por
// clip). Orden según la numeración de los archivos originales.
const lopezTaiboItems = [
  clipLT('3-lopeztaibo.mp4', 'López Taibo'),
  clipLT('1-oxford-lessin.mp4', 'Oxford Lessin'),
  clipLT('1-lazaro.mp4', 'Lázaro'),
  clipLT('2-salmo.mp4', 'Salmo'),
  clipLT('2-stilo.mp4', 'Stilo'),
  clipLT('3-chelsea-bruno.mp4', 'Chelsea Bruno'),
  clipLT('4-borcego.mp4', 'Borcego'),
  clipLT('4-mocasin-lazaro.mp4', 'Mocasín Lázaro'),
  clipLT('5-romeo.mp4', 'Romeo'),
  clipLT('6-manuel.mp4', 'Manuel'),
  clipLT('7-gael-derby.mp4', 'Gael Derby'),
  clipLT('8-forli.mp4', 'Forli'),
  clipLT('9-saint-pierre.mp4', 'Saint Pierre'),
  clipLT('9-weston.mp4', 'Weston'),
  clipLT('10-forli.mp4', 'Forli II'),
  clipLT('10-morral-juano.mp4', 'Morral Juano'),
  clipLT('11-dos-estilos.mp4', 'Dos Estilos'),
  clipLT('12-torino-napalan.mp4', 'Torino Napalán'),
  clipLT('1-hay-objetos-que-no-pasan.mp4', 'Hay objetos que no pasan…'),
  clipLT('1-no-todo-el-cuero-es-igual.mp4', 'No todo el cuero es igual'),
  clipLT('2-los-legados-invisibles.mp4', 'Los legados invisibles'),
  clipLT('2-como-saber-si-un-zapato-es-bueno.mp4', 'Cómo saber si un zapato es bueno'),
  clipLT('3-tipos-de-zapatos.mp4', 'Tipos de zapatos'),
  clipLT('4-hay-clientes.mp4', 'Hay clientes…'),
  clipLT('4-talles3.mp4', 'Talles'),
  clipLT('5-esto-no-es-moda.mp4', 'Esto no es moda'),
  clipLT('6-el-error-mas-comun.mp4', 'El error más común'),
];

const comandanteItems = photos('el-comandante', [
  '2ee3bc238195039.690ff9183a1a1.webp', '38dae9238195039.690ff91839978.webp',
  '6b54fb238195039.690ff9183aa74.webp', '805c93238195039.690ff9183b0f4.webp',
  '23.jpg', '24.jpg', '25.jpg', '27.jpg', '28.jpg',
], 'El Comandante', 'Cortometraje · Dirección de Arte');

const sections = [
  {
    id: 'videoclips', label: 'Videoclips', nav: 'Videoclips', accent: '#c9a27f',
    desc: 'Dirección, cámara, montaje y color para artistas independientes.',
    works: [
      // `variant` fijada por página: al insertar trabajos nuevos, la rotación
      // automática corría el estilo de todas las cards siguientes.
      { title: 'IMPASSE', meta: 'Franco Martínez · Dirección, Montaje y Color', variant: 'full',
        desc: 'Videoclip para Franco Martínez. Dirección, montaje y color para potenciar la atmósfera y la sensibilidad de la obra musical.',
        items: [video('gun39WJyOvc', 'IMPASSE', 'Franco Martínez')] },
      { title: 'Las Palabras Justas', meta: 'Franco Martínez · Producción, Cámara y Montaje', variant: 'full',
        desc: 'Videoclip para Franco Martínez que acompaña la identidad estética y narrativa de la canción.',
        items: [video('PNRQ6c6GyzQ', 'Las Palabras Justas', 'Franco Martínez')] },
      { title: '1 Momento', meta: 'Luca Laurito · Cámara y Color', variant: 'splitR',
        desc: 'Videoclip para Luca Laurito. Dirección y corrección de color con una búsqueda cinematográfica.',
        cover: 'fotos/tapas/thumbs/1-momento.jpg',
        coverPos: '18% center', // corrida a la derecha: entra el barrendero completo
        items: [video('0897I0LQ-pE', '1 Momento', 'Luca Laurito')] },
      { title: 'DULCE', meta: 'UNYX · Cámara', variant: 'editorial', numMini: true,
        desc: 'Videoclip para UNYX. Cámara y registro siguiendo el ritmo de la pieza musical.',
        cover: 'fotos/tapas/thumbs/dulce.jpg',
        items: [video('ph-mFOwGMzo', 'DULCE', 'UNYX')] },
      { title: 'POCO Set', meta: 'Majo Chicar · Cámara', variant: 'splitL',
        desc: 'Set audiovisual para Majo Chicar. Cámara en vivo capturando la performance.',
        cover: 'fotos/tapas/thumbs/poco-set.jpg',
        coverPos: '42% center', // la cantante está a la izquierda del centro de la foto
        items: [video('2W9xCTxiQk8', 'POCO Set', 'Majo Chicar')] },
      { title: '2 Minutos', meta: 'Ian Cater & Zohar · Cámara', variant: 'full',
        desc: 'Videoclip de Ian Cater & Zohar. Cámara de una pieza con una búsqueda visual dinámica.',
        cover: 'fotos/tapas/thumbs/2-minutos.jpg',
        items: [video('Zm7LLhpThlo', '2 Minutos', 'Ian Cater & Zohar')] },
      { title: 'Sabor a Poco', meta: 'Peka Roux · Arte', variant: 'splitR',
        desc: 'Videoclip de Peka Roux. Dirección de arte y construcción del universo visual de la pieza.',
        items: [video('hl-OzYBNd7c', 'Sabor a Poco', 'Peka Roux')] },
    ],
  },
  {
    id: 'moda', label: 'Moda', nav: 'Moda', accent: '#c98aa6',
    desc: 'Campañas de moda, branding y paid media.',
    works: [
      // BAFA — galería con sub-galerías (menú lateral al abrirla). Para cargar
      // los videos de cada sección:
      //   1) poné los .mp4 en fotos/bafa-<seccion>/ (arte, hoteleria, joyeria, moda)
      //   2) comprimí + poster con el script apuntándolo a esa carpeta
      //   3) listá cada uno acá: clipBAFA('<seccion>')('slug.mp4', 'Título')
      { title: 'BAFA', meta: 'Contenido audiovisual',
        variant: 'full', coverSide: true, cover: 'fotos/bafa/cover.jpg',
        desc: 'Galería de trabajos para BAFA.',
        galleryDesc: 'Producción, cámara y edición de contenido para BAFA Creadores, la sección editorial de Distrito BAFA.',
        link: { href: 'https://www.distritobafa.com.ar/novedades/categories/bafa-creadores',
                label: 'Ver en Distrito BAFA' },
        categories: [
          { label: 'Arte', items: [
            clipBAFA('Arte')('4-zurbaran.mp4', 'Zurbarán'),
            clipBAFA('Arte')('5-zurbaran.mp4', 'Zurbarán II'),
            clipBAFA('Arte')('6-zurbaran.mp4', 'Zurbarán III'),
            clipBAFA('Arte')('15-miranda-bosch.mp4', 'Miranda Bosch'),
            clipBAFA('Arte')('16-miranda-bosch.mp4', 'Miranda Bosch II'),
            clipBAFA('Arte')('17-miranda-bosch.mp4', 'Miranda Bosch III'),
            clipBAFA('Arte')('18-del-infinito.mp4', 'Del Infinito'),
            clipBAFA('Arte')('20-javier-iturrioz.mp4', 'Javier Iturrioz'),
            clipBAFA('Arte')('21-javier-iturrioz.mp4', 'Javier Iturrioz II'),
            clipBAFA('Arte')('21-javier-iturrioz-1.mp4', 'Javier Iturrioz III'),
          ] },
          { label: 'Hotelería', items: [
            clipBAFA('Hotelería')('1-casasur.mp4', 'Casasur'),
            clipBAFA('Hotelería')('2-casasur.mp4', 'Casasur II'),
            clipBAFA('Hotelería')('3-casasur.mp4', 'Casasur III'),
            clipBAFA('Hotelería')('19-mio-buenos-aires.mp4', 'Mío Buenos Aires'),
          ] },
          { label: 'Joyería', items: [
            clipBAFA('Joyería')('10-eltrust.mp4', 'El Trust'),
          ] },
          { label: 'Moda', items: [
            clipBAFA('Moda')('7-evangelina-bomparola.mp4', 'Evangelina Bomparola'),
            clipBAFA('Moda')('8-evangelina-bomparola.mp4', 'Evangelina Bomparola II'),
            clipBAFA('Moda')('9-evangelina-bomparola.mp4', 'Evangelina Bomparola III'),
            clipBAFA('Moda')('11-solange-m.mp4', 'Solange'),
            clipBAFA('Moda')('12-solange-m.mp4', 'Solange II'),
            clipBAFA('Moda')('13-solange-m.mp4', 'Solange III'),
            clipBAFA('Moda')('14-guido.mp4', 'Guido'),
          ] },
        ],
        items: [] },
      { title: 'López Taibo', meta: 'Marca de calzado · Contenido audiovisual',
        desc: 'Producción y edición de contenido audiovisual para branding y paid media. Desarrollo de piezas para redes sociales.',
        variant: 'full', coverSide: true, cover: 'fotos/lopez-taibo/cover.jpg',
        items: lopezTaiboItems },
    ],
  },
  {
    // Sección nueva, todavía sin trabajos cargados: la portada de sección se
    // arma igual (número, título y descripción) y sin miniaturas.
    id: 'tapa-de-disco', label: 'Tapa de Disco', nav: 'Tapas', accent: '#a68ac9',
    desc: 'Arte de tapa para músicos y proyectos discográficos.',
    works: [
      { title: 'Las Palabras Justas', meta: 'Franco Martínez', variant: 'editorial',
        desc: 'Desarrollo de la identidad visual del álbum a partir de una serie fotográfica de retratos y detalles, trabajando una estética de colores intensos y una propuesta tipográfica integrada a la imagen. La propuesta toma como punto de partida la relación entre la mirada y las palabras, en diálogo con el concepto de «Los ojos tienen las palabras justas».',
        items: [] }, // TODO: cargar la tapa cuando llegue la imagen
    ],
  },
  {
    id: 'cobertura-shows', label: 'Cobertura de Shows', nav: 'Cobertura', accent: '#c9b07f',
    desc: 'Registro fotográfico de shows en vivo.',
    works: [
      { title: 'Franco Martínez', meta: 'En vivo · La Tangente',
        desc: 'Cobertura fotográfica del show en La Tangente. Registro visual del concierto, priorizando el movimiento, la luz y la emoción del momento.',
        dividerThumb: 'fotos/coberturas-portada/thumbs/la-tangente.jpg',
        items: tangenteItems },
      { title: 'Franco Martínez', meta: 'En vivo · Ladrán Sancho',
        desc: 'Cobertura fotográfica del show en Ladrán Sancho. Registro de la puesta en escena y la atmósfera del concierto a través de una mirada documental.',
        dividerThumb: 'fotos/coberturas-portada/thumbs/ladran-sancho.jpg',
        items: francoItems },
      { title: 'Luchi Davit', meta: 'En vivo · The Monkey´s',
        desc: 'Cobertura fotográfica del show en The Monkey´s. Registro del vivo, capturando la energía del escenario, la iluminación y la conexión con el público.',
        items: luchiItems },
    ],
  },
  {
    id: 'cortometrajes', label: 'Cortometrajes', nav: 'Cortos', accent: '#8ab0a4',
    desc: 'Ficción y documental: cámara, producción y arte.',
    works: [
      { title: 'En El Barro', meta: 'Ficción · Cámara', variant: 'full',
        desc: 'Cámara para teaser de cortometraje. Tesis universitaria en Facultad de Arquitectura, Diseño y Urbanismo, UBA.',
        cover: 'fotos/en-el-barro/thumbs/cover.jpg',
        items: [clipBarro('teaser-en-el-barro.mp4', 'Teaser — En El Barro')] },
      { title: 'Acumuladores', meta: 'Documental · Producción y Cámara', variant: 'full',
        desc: 'Producción y cámara de un retrato observacional sobre diferentes casos del trastorno obsesivo-compulsivo. Documental para Facultad de Arquitectura, Diseño y Urbanismo, UBA.',
        items: [video('RzHyFfUYjfw', 'Acumuladores', 'Documental')] },
      { title: 'El Comandante', meta: 'Ficción · Dirección de Arte', variant: 'splitR',
        desc: 'Diseño de escenografía, vestuario y maquillaje para cortometraje universitario en Facultad de Arquitectura, Diseño y Urbanismo, UBA.',
        cover: 'fotos/el-comandante/thumbs/6b54fb238195039.690ff9183aa74.webp',
        coverPos: '57% center',
        gridGallery: true, // fotos de proporción uniforme: grilla ordenada, sin hueco
        items: comandanteItems },
      { title: 'Plan Hormiga', meta: 'Ficción · Cámara', variant: 'full',
        desc: 'Cámara para cortometraje universitario en Facultad de Arquitectura, Diseño y Urbanismo, UBA.',
        cover: 'fotos/plan-hormiga/thumbs/cover.jpg',
        items: [clipHormiga('plan-hormiga.mp4', 'Plan Hormiga')] },
    ],
  },
  {
    id: 'instituciones', label: 'Instituciones', nav: 'Instituciones', accent: '#8aa6c9',
    desc: 'Edición de video y contenido de redes sociales para el Hospital Universitario Austral.',
    works: [
      { title: 'Hospital Universitario Austral', meta: 'Contenido institucional · Edición de video',
        desc: 'Piezas para el Hospital Universitario Austral: «SaNar: salidas a la naturaleza» y contenido para redes. Edición de video.',
        variant: 'splitL', // tapa del video a la izquierda, texto a la derecha
        cover: 'fotos/hospital-universitario-austral/thumbs/cover.jpg',
        coverPos: 'center 28%',
        items: hospitalItems },
    ],
  },
];

// Imagen atmosférica para la página "Sobre mí"
const aboutBg = 'about.jpg';

// ── Construcción del orden de páginas ───────────────────────────────────────
const VARIANTS = ['full', 'splitR', 'editorial', 'splitL'];
const pad = (n) => String(n).padStart(2, '0');

const NEUTRAL_ACCENT = '#c9a27f';

const pageDefs = [{ type: 'cover' }, { type: 'toc' }, { type: 'about' }];
const indexEntries = [{ n: '01', label: 'Sobre mí', nav: 'Sobre mí', target: 2, accent: NEUTRAL_ACCENT }];

let secNo  = 1;
let workNo = 0;
sections.forEach(sec => {
  secNo++;
  const di = pageDefs.length;
  pageDefs.push({ type: 'divider', section: sec, no: secNo });
  indexEntries.push({ n: pad(secNo), label: sec.label, nav: sec.nav, target: di, accent: sec.accent });

  sec.works.forEach(work => {
    work.section = sec;
    const imgCount = work.items.filter(it => it.type === 'image').length;
    // Un work puede fijar su variante en los datos; si no, se asigna sola.
    work.variant = work.variant || (imgCount >= 5 ? 'collage' : VARIANTS[workNo % VARIANTS.length]);
    work.no = pad(++workNo);
    pageDefs.push({ type: 'work', section: sec, work });
  });
});
secNo++;
const thankIndex = pageDefs.length;
pageDefs.push({ type: 'thankyou' });
indexEntries.push({ n: pad(secNo), label: 'Contacto', nav: 'Contacto', target: thankIndex, accent: NEUTRAL_ACCENT });

// ── Rutas (#/seccion/proyecto) ──────────────────────────────────────────────
// Cada página tiene su propia URL para poder compartir un link directo a un
// proyecto. Van en el hash porque el sitio es estático (GitHub Pages): así no
// hace falta ninguna regla de servidor.
const slugify = (s) => (s || '')
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')   // saca acentos: Ladrán → ladran
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

(() => {
  // Títulos repetidos (los dos shows de «Franco Martínez») llevan el dato que
  // los distingue —la última parte del meta— en AMBAS rutas, no sólo en la
  // segunda, para que ninguna quede con el nombre "pelado".
  // Se cuenta por sección + título: dos trabajos con el mismo nombre en
  // secciones distintas no chocan (la ruta ya los separa) y conservan su URL.
  const veces = {};
  pageDefs.forEach(d => {
    if (d.type !== 'work') return;
    const s = `${d.section.id}/${slugify(d.work.title)}`;
    veces[s] = (veces[s] || 0) + 1;
  });

  const usadas = new Set();
  const unica = (base) => {
    let r = base, n = 2;
    while (usadas.has(r)) r = `${base}-${n++}`;
    usadas.add(r);
    return r;
  };

  pageDefs.forEach(def => {
    if (def.type === 'cover')         { def.route = ''; return; }
    if (def.type === 'toc')           { def.route = unica('indice'); return; }
    if (def.type === 'about')         { def.route = unica('sobre-mi'); return; }
    if (def.type === 'thankyou')      { def.route = unica('contacto'); return; }
    if (def.type === 'divider')       { def.route = unica(def.section.id); return; }
    if (def.type === 'work') {
      const w = def.work;
      let slug = slugify(w.title);
      if (veces[`${def.section.id}/${slug}`] > 1) {
        const cola = slugify((w.meta || '').split('·').pop());
        if (cola) slug += '-' + cola;
      }
      def.route = unica(`${def.section.id}/${slug}`);
    }
  });
})();

// ── Estado ──────────────────────────────────────────────────────────────────
let pages   = [];
let cur     = 0;
let lbItems = [];
let lbIndex = 0;
let zoomed  = false; // false: la revista descansa sobre la mesa

// ════════════════════════════════════════════════════════════════════════════
//  PLANTILLAS DE PÁGINA
// ════════════════════════════════════════════════════════════════════════════
// Atributos data-bg del fondo de tapa de un work (los consume loadNear).
// Para videos: miniatura HD con fallback a la estándar si no existe.
function workCoverAttrs(work) {
  // Encuadre opcional de la tapa (p. ej. 'center 45%') para centrar el sujeto.
  const pos = work.coverPos ? ` style="background-position:${work.coverPos}"` : '';
  // Imagen de tapa propia (pisa la miniatura del primer video/foto).
  if (work.cover) return `data-bg="url('${work.cover}')"${pos}`;
  const img = work.items.find(it => it.type === 'image');
  if (img) return `data-bg="url('${img.thumb || img.src}')"${pos}`;
  const vid = work.items.find(it => it.type === 'youtube');
  if (!vid) return `data-bg=""${pos}`;
  return `data-bg="url('${ytThumbHD(vid.id)}')" data-bg-fallback="url('${ytThumb(vid.id)}')"${pos}`;
}
// Un work de un solo video (de YouTube o alojado acá): la página muestra el
// play sobre la tapa y al abrirla va directo al reproductor, sin galería.
const isVideoWork = (work) =>
  work.items.length === 1 && (work.items[0].type === 'youtube' || work.items[0].type === 'video');
const playSVG = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>`;


function workInfoHTML(def) {
  const w = def.work;
  // Los videos no llevan link: la miniatura con el play alcanza. Un trabajo sin
  // material cargado todavía tampoco: no hay galería que abrir.
  const sinGaleria = isVideoWork(w) || (!w.categories && !w.items.length);
  const cta = sinGaleria ? '' : `<span class="work-cta">Ver galería &#8594;</span>`;
  // Link al sitio del cliente, si el trabajo lo tiene (p. ej. Distrito BAFA).
  const ext = w.link
    ? `<a class="work-extlink" href="${w.link.href}" target="_blank" rel="noopener">${w.link.label} &#8599;</a>`
    : '';
  return `
    <span class="kicker accent">${def.section.label}</span>
    <h2 class="work-title display">${w.title}</h2>
    <span class="work-meta">${w.meta || ''}</span>
    <p class="work-desc">${w.desc || ''}</p>
    ${cta}${ext}`;
}

function workHTML(def) {
  const w   = def.work;
  const acc = def.section.accent;
  const vid = isVideoWork(w) ? ' is-video' : ''; // en videos sólo la tapa es clickeable
  const play = isVideoWork(w) ? `<button class="media-play" aria-label="Reproducir">${playSVG}</button>` : '';

  // Página placeholder: sin contenido todavía. No es clickeable (no se le
  // enganchan handlers en attachPageHandlers) y muestra "Próximamente".
  if (w.comingSoon) {
    return `
      <div class="pg pg--work pg--soon" style="--accent:${acc}">
        <span class="work-no display">${w.no}</span>
        <div class="soon-inner">
          <span class="kicker accent">${def.section.label}</span>
          <h2 class="work-title display">${w.title}</h2>
          ${w.meta ? `<span class="work-meta">${w.meta}</span>` : ''}
          <span class="soon-tag">Próximamente</span>
        </div>
      </div>`;
  }

  // Card «logo»: isotipo BAFA (imagen con círculo) + textos debajo sobre fondo oscuro.
  if (w.circle) {
    const link = w.link
      ? `<a class="work-extlink" href="${w.link.href}" target="_blank" rel="noopener">${w.link.label} &#8599;</a>`
      : '';
    return `
      <div class="pg pg--work pg--bafa" style="--accent:${acc}">
        <span class="work-no display">${w.no}</span>
        <div class="bafa-badge">
          <div class="bafa-figure">
            <img class="bafa-logo" src="assets/bafa-logo.png" alt="${w.title}" width="480" height="480" />
            ${w.desc ? `<p class="bafa-figure__desc">${w.desc}</p>` : ''}
          </div>
          <div class="bafa-badge__cta">
            <span class="work-cta">Ver galería &#8594;</span>
            ${link}
          </div>
        </div>
        <div class="bafa-top"><span class="kicker accent">${def.section.label}</span></div>
      </div>`;
  }

  if (w.variant === 'full') {
    // is-side: tratamiento tipo "Sobre mí" — foto a la derecha, oscurecida a
    // la izquierda, texto en columna izquierda centrado.
    const side = w.coverSide ? ' is-side' : '';
    return `
      <div class="pg pg--work v-full${side}${vid}" style="--accent:${acc}">
        <div class="work-bg lazy-bg" ${workCoverAttrs(w)}></div>
        <div class="work-bg__grad"></div>
        <span class="work-no display">${w.no}</span>
        ${play}
        <div class="work-foot">${workInfoHTML(def)}</div>
      </div>`;
  }

  if (w.variant === 'splitR' || w.variant === 'splitL') {
    const imgCol  = `<div class="work-img lazy-bg" ${workCoverAttrs(w)}>${play}</div>`;
    const textCol = `<div class="work-col"><span class="work-no display">${w.no}</span>${workInfoHTML(def)}</div>`;
    const order   = w.variant === 'splitR' ? textCol + imgCol : imgCol + textCol;
    return `<div class="pg pg--work v-split v-${w.variant}${vid}" style="--accent:${acc}">${order}</div>`;
  }

  if (w.variant === 'editorial') {
    return `
      <div class="pg pg--work v-editorial${vid}${w.numMini ? ' num-mini' : ''}" style="--accent:${acc}">
        <span class="work-no--ghost display">${w.no}</span>
        <div class="work-frame"><div class="work-img lazy-bg" ${workCoverAttrs(w)}>${play}</div></div>
        <div class="work-col">${workInfoHTML(def)}</div>
      </div>`;
  }

  // collage (proyectos con muchas fotos — siempre fotos, nunca video)
  const thumbs = w.items.filter(it => it.type === 'image').slice(0, 5)
    .map((it, i) => `<div class="collage__cell c${i} lazy-bg" data-bg="url('${it.thumb || it.src}')"></div>`).join('');
  return `
    <div class="pg pg--work v-collage" style="--accent:${acc}">
      <div class="collage">${thumbs}</div>
      <div class="work-col">
        <span class="work-no display">${w.no}</span>
        ${workInfoHTML(def)}
      </div>
    </div>`;
}

function frontHTML(def, i) {
  switch (def.type) {
    case 'cover':
      return `
        <div class="pg pg--cover">
          <div class="pg__bar"><span>Portfolio</span><span></span></div>
          <h1 class="cover-title display">PORT<br>FOLIO.</h1>
          <div class="cover-by">
            <span class="cover-by__name">Martina López Parafita</span>
            <span class="cover-by__role">Photography &amp; Visual Art</span>
          </div>
          <span class="pg__hint">Pasá la página &#8594;</span>
        </div>`;

    case 'toc':
      return `
        <div class="pg pg--toc">
          <div class="pg__bar"><span>Índice</span><span></span></div>
          <h2 class="toc-title display">CONTENIDO</h2>
          <ol class="toc2">
            ${indexEntries.map(e => `
              <li class="toc2__item" data-target="${e.target}">
                <span class="toc2__n">${e.n}</span>
                <span class="toc2__label">${e.label}</span>
                <span class="toc2__line"></span>
              </li>`).join('')}
          </ol>
        </div>`;

    case 'about':
      return `
        <div class="pg pg--about">
          <div class="about__bg lazy-bg" data-bg="url('${aboutBg}')"></div>
          <div class="about__inner">
            <span class="kicker">Sobre mí</span>
            <h2 class="about-title display">HOLA,<br>SOY MARTINA</h2>
            <p class="about__bio">Realizadora audiovisual y fotógrafa, con experiencia en dirección,
              cámara y montaje. Exploro la narrativa visual a través del videoclip, la ficción y el
              contenido comercial, combinando sensibilidad estética con una mirada técnica.</p>
            <ul class="about__tags">
              <li>Cámara</li><li>Dirección</li><li>Dirección de Arte</li>
              <li>Color</li><li>Fotografía</li><li>Montaje</li>
            </ul>
          </div>
        </div>`;

    case 'divider': {
      const sec = def.section;
      // Sólo works con tapa: los placeholders (sin items) no dejan cuadros vacíos.
      // `dividerThumb` permite una imagen chica propia para la portada de sección,
      // distinta de la tapa del trabajo.
      const thumbs = sec.works.filter(w => w.items.length).slice(0, 3).map(w => {
        const attrs = w.dividerThumb ? `data-bg="url('${w.dividerThumb}')"` : workCoverAttrs(w);
        return `<div class="divider__thumb lazy-bg" ${attrs}></div>`;
      }).join('');
      return `
        <div class="pg pg--divider" style="--accent:${sec.accent}">
          <span class="divider__num display">${pad(def.no)}</span>
          <div class="divider__main">
            <span class="kicker accent">Sección ${pad(def.no)}</span>
            <h2 class="divider__title display">${sec.label}</h2>
            <p class="divider__desc">${sec.desc}</p>
          </div>
          <div class="divider__thumbs">${thumbs}</div>
        </div>`;
    }

    case 'work':
      if (!def.work) return '';
      return workHTML(def);

    case 'thankyou':
      return `
        <div class="pg pg--thanks">
          <div class="pg__bar"><span>Contacto</span></div>
          <h2 class="thanks-title display">TRABAJEMOS<br>JUNTOS</h2>
          <div class="thanks__contact">
            <a class="thanks__email" href="mailto:martulopezp@gmail.com">martulopezp@gmail.com</a>
            <div class="thanks__socials">
              <a href="https://www.instagram.com/martulopezp/" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5.2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.6" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.35" cy="6.65" r="1.3" fill="currentColor"/></svg>
                Instagram</a>
              <a href="https://www.behance.net/martulopezp" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.3 V18.7 M3 5.3 H7.6 A3.15 3.15 0 0 1 7.6 11.6 H3 M3 11.6 H8.2 A3.55 3.55 0 0 1 8.2 18.7 H3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="17.3" cy="14.2" r="3.9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M13.45 13.6 H21.15 M14.8 6.9 H19.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                Behance</a>
              <a href="https://www.linkedin.com/in/martinal%C3%B3pezparafita/" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="7.5" cy="7.7" r="1.2" fill="currentColor"/><path d="M7.5 10.9 V17.2 M11.4 17.2 V10.9 M11.4 13.6 C11.4 10.8 16.6 10.8 16.6 13.6 V17.2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                LinkedIn</a>
            </div>
            <a class="thanks__muna" href="https://www.instagram.com/munafilms__/" target="_blank" rel="noopener">
              <svg viewBox="0 0 1144 676" aria-hidden="true">
                <path d="M151.6,643.3C163.5,639.2 173.5,633.1 181.6,625.1C193.3,613.7 200.3,601.0 203.4,585.8C204.8,579.0 205.0,562.8 205.0,447.0L205.0,316.0L225.8,316.0C237.2,316.0 247.4,315.7 248.5,315.4C250.5,314.9 250.5,315.3 250.2,446.2C249.9,590.4 249.7,584.7 255.9,599.8C259.6,608.7 265.1,616.9 272.5,624.3C281.9,633.7 292.1,639.8 306.0,644.2C313.0,646.4 315.1,646.5 338.5,646.5C359.6,646.5 364.5,646.2 370.0,644.7C391.3,638.7 409.6,623.8 418.9,604.5C427.1,587.7 426.5,600.1 426.5,449.5L426.5,315.5L447.5,315.8C459.1,315.9 469.1,316.3 469.8,316.5C470.7,316.8 471.0,344.1 471.0,448.4C471.0,597.2 470.5,587.2 479.2,605.0C483.7,614.2 485.4,616.6 493.4,624.5C500.9,631.9 504.2,634.4 512.0,638.3C527.3,645.9 530.6,646.5 559.5,646.5L584.5,646.5L593.7,643.3C605.5,639.2 615.2,633.2 623.5,625.1C633.8,615.0 640.4,603.7 644.6,589.0C646.4,582.7 646.5,573.5 646.8,344.0C647.0,177.0 646.8,103.0 646.0,97.2C644.7,87.4 640.7,75.4 635.9,67.4C630.9,58.9 618.8,46.7 610.3,41.3C606.2,38.8 599.0,35.3 594.2,33.6C585.5,30.5 585.4,30.5 561.5,30.2C534.2,29.8 529.3,30.5 515.4,37.0C499.3,44.5 487.3,56.0 479.6,71.3C472.2,85.8 471.7,88.4 471.1,115.0L470.5,138.5L447.5,139.1C421.3,139.8 417.5,140.5 403.4,147.5C387.2,155.6 373.9,170.2 367.1,187.2C362.1,199.7 361.5,203.7 361.5,227.7L361.5,250.0L339.9,250.0C323.8,250.0 318.0,249.7 317.2,248.8C316.7,248.1 316.0,238.0 315.7,226.0C315.1,202.1 314.1,196.5 308.5,184.3C302.4,171.1 293.2,160.0 282.0,152.3C275.7,148.0 270.4,145.5 261.3,142.3C253.9,139.7 252.3,139.6 229.5,139.0L205.5,138.5L204.9,115.5C204.2,89.3 203.5,85.7 196.3,71.7C193.0,65.4 189.4,60.4 183.8,54.4C174.4,44.5 164.5,38.0 152.2,33.6C143.6,30.6 143.3,30.5 120.3,30.2C99.3,29.9 96.3,30.0 88.8,31.9C61.5,38.8 40.1,60.1 32.3,88.0C30.6,94.2 30.5,105.8 30.5,338.5C30.5,572.4 30.6,582.8 32.3,589.0C34.6,597.1 39.8,608.4 44.0,614.5C51.8,625.8 65.8,636.7 78.7,641.6C91.3,646.4 95.8,647.0 120.0,646.7C142.3,646.4 142.6,646.4 151.6,643.3ZM816.4,645.5C847.3,640.1 873.7,621.1 884.6,596.4C890.0,584.2 890.0,584.5 890.0,502.3L890.0,426.1L965.2,425.7C1038.5,425.4 1040.7,425.3 1048.5,423.2C1069.9,417.5 1085.7,407.9 1098.5,393.0C1103.8,386.8 1111.1,372.2 1113.2,364.0C1114.1,360.3 1114.5,352.0 1114.5,338.5C1114.4,322.5 1114.1,317.2 1112.6,312.0C1104.6,282.5 1078.0,260.2 1043.1,253.6C1036.0,252.2 1024.3,252.0 962.9,252.0C906.2,252.0 890.8,251.7 890.5,250.8C890.3,250.1 889.9,239.7 889.8,227.7L889.5,206.0L960.5,206.0C1018.1,206.0 1033.2,205.7 1040.5,204.5C1070.7,199.6 1095.6,182.8 1107.1,159.5C1113.5,146.4 1114.5,141.3 1114.5,119.0C1114.5,96.5 1113.8,92.6 1107.4,79.5C1098.4,60.9 1080.9,45.9 1059.4,38.1C1042.4,31.9 1041.8,31.9 959.9,32.3C886.6,32.6 885.4,32.6 877.0,34.8C865.7,37.8 850.1,45.5 841.1,52.5C826.8,63.7 816.7,79.6 813.5,95.8C812.2,102.2 811.9,108.3 812.2,122.8L812.5,141.5L784.0,141.5C757.4,141.5 754.9,141.7 747.0,143.8C735.0,147.1 719.8,154.6 710.8,161.8C698.4,171.7 690.5,182.7 685.3,197.5L682.5,205.5L682.2,389.5C682.0,515.8 682.3,575.7 683.0,580.4C687.4,608.9 712.4,634.2 745.0,643.2C756.4,646.4 760.7,646.7 785.1,646.9C801.3,647.0 810.2,646.6 816.4,645.5Z" fill="currentColor" />
              </svg>
              <span>Muna Films</span>
            </a>
            <button class="thanks__cv" id="cvOpen">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2.8 h8.2 L19 7.6 V21.2 H6 Z M14 3 v5 h5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 12.6 h7 M9 16.2 h5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              Ver mi CV
            </button>
          </div>
          <span class="pg__foot">&copy; 2026 Martina López Parafita</span>
        </div>`;
  }
  return '';
}

// Página vacía (sección Moda): divisor con "Próximamente".
// (Moda no tiene works, así que sólo aparece su divisor; ajustamos su descripción.)

// ════════════════════════════════════════════════════════════════════════════
//  MOTOR DE PÁGINA ÚNICA (page-turn)
// ════════════════════════════════════════════════════════════════════════════
function attachPageHandlers(front, def) {
  if (!def) return;
  if (def.type === 'cover' || def.type === 'thankyou') {
    if (def.type === 'cover') front.addEventListener('click', () => go(1));
  } else if (def.type === 'toc') {
    front.querySelectorAll('.toc2__item').forEach(item => {
      item.addEventListener('click', () => goToPage(parseInt(item.dataset.target)));
    });
  } else if (def.type === 'work' && def.work) {
    // Sólo la imagen / preview del video, el collage y el CTA "Ver galería"
    // abren el despliegue — no cualquier punto de la página.
    front.querySelectorAll('.work-bg, .work-img, .collage__cell, .media-play, .work-cta').forEach(el => {
      el.addEventListener('click', (e) => { e.stopPropagation(); openWork(def.work); });
    });
  }
}

function buildBook() {
  const stage = document.getElementById('stage');
  stage.innerHTML = '';
  pageDefs.forEach((def, i) => {
    const page = document.createElement('div');
    page.className = 'page page--' + def.type;
    page.dataset.i = i;
    page.innerHTML = `<div class="page__back"></div><div class="page__front">${frontHTML(def, i)}<div class="page__shade"></div></div>`;
    stage.appendChild(page);
  });
  pages = Array.from(stage.querySelectorAll('.page'));
  pages.forEach((page, i) => attachPageHandlers(page.querySelector('.page__front'), pageDefs[i]));
  layout();
}

function layout() {
  pages.forEach((page, i) => page.classList.toggle('is-flipped', i < cur));
  pageBaseStyles();
  document.getElementById('book').classList.toggle('is-closed', cur === 0);
  loadNear();
  updateChrome();
  updateTopnav();
}

// Las hojas ya pasadas cercanas se mantienen pintadas (visibles pero con
// opacidad 0 y sin recibir taps): si quedaran visibility:hidden el compositor
// descarta su textura y el giro hacia atrás arrancaba rasterizando la hoja
// entera en el primer frame — por eso se sentía trabado. Hacia adelante nunca
// pasó porque la hoja que gira es la página actual, ya pintada.
function pageBaseStyles() {
  pages.forEach((p, i) => {
    const warm = i < cur && i >= cur - BG_BEHIND;
    p.style.visibility    = warm ? 'visible' : ''; // pisa el hidden de .is-flipped
    p.style.opacity       = warm ? '0' : '';
    p.style.willChange    = warm ? 'transform' : '';
    p.style.pointerEvents = warm ? 'none' : '';
    // Restablece también el z-index inflado de la hoja que estaba girando:
    // si quedara en pages.length+5, la hoja del PRÓXIMO giro (mismo z-index)
    // empata y pierde por orden del DOM — el giro hacia atrás interrumpido
    // por otro se veía animarse "por detrás" de la página actual.
    p.style.zIndex = (i < cur) ? i : (pages.length - i);
  });
}

// ── Carga diferida de fondos (clave para no saturar la memoria en celular) ──
const BG_BEHIND = 2, BG_AHEAD = 3; // ventana de páginas con imagen cargada
function loadNear() {
  const lo = Math.max(0, cur - BG_BEHIND);
  const hi = Math.min(pages.length - 1, cur + BG_AHEAD);
  for (let i = lo; i <= hi; i++) {
    pages[i].querySelectorAll('.lazy-bg').forEach(el => {
      if (!el.dataset.bg || el.style.backgroundImage === el.dataset.bg) return;
      loadBg(el, i);
    });
  }
}

// Carga el fondo de `el` (página i) decodificando fuera del hilo principal
// antes de pintar (asignar el background directo decodificaba en el mismo
// frame en que arranca el giro y se sentía un tirón). Si la imagen falla o
// YouTube devuelve su placeholder de 120x90 (miniatura HD inexistente),
// reintenta con data-bg-fallback.
function loadBg(el, i) {
  const src = el.dataset.bg.slice(5, -2); // url('…') → …
  const img = new Image();
  const fallback = () => {
    if (!el.dataset.bgFallback) return;
    el.dataset.bg = el.dataset.bgFallback;
    el.removeAttribute('data-bg-fallback');
    loadBg(el, i);
  };
  img.onerror = fallback;
  img.onload = () => {
    if (img.naturalWidth && img.naturalWidth < 320) return fallback(); // placeholder
    const apply = () => {
      if (Math.abs(i - cur) > Math.max(BG_BEHIND, BG_AHEAD)) return; // ya quedó lejos
      // Con una hoja en el aire, sólo se pinta la página destino: asignar
      // fondos de páginas vecinas en pleno giro rasteriza a mitad de vuelo
      // y la animación avanza a tirones (el reconcile re-llama a loadNear
      // al aterrizar y ahí se pintan, ya con la imagen decodificada).
      if (activeFlips.length && i !== cur) return;
      el.style.backgroundImage = el.dataset.bg;
    };
    // decode() queda en cola si la pestaña está oculta (Chrome pospone la
    // decodificación): el timeout aplica igual — total, sin pestaña visible
    // no se pinta nada y el decode ocurre recién al mostrarse.
    let applied = false;
    const applyOnce = () => { if (!applied) { applied = true; apply(); } };
    if (img.decode) {
      img.decode().then(applyOnce).catch(applyOnce);
      setTimeout(applyOnce, 400);
    } else applyOnce();
  };
  img.src = src;
  if (img.complete) { if (img.naturalWidth === 0) fallback(); else img.onload(); }
}
function unloadFar() {
  const lo = Math.max(0, cur - BG_BEHIND);
  const hi = Math.min(pages.length - 1, cur + BG_AHEAD);
  pages.forEach((p, i) => {
    if (i < lo || i > hi) {
      p.querySelectorAll('.lazy-bg').forEach(el => {
        if (el.style.backgroundImage) el.style.backgroundImage = '';
      });
    }
  });
}

// ── Barra de secciones (visible una vez pasado el índice) ───────────────────
function buildTopnav() {
  const inner = document.getElementById('topnavInner');
  inner.innerHTML = indexEntries.map(e =>
    `<button class="topnav__tab" data-target="${e.target}" style="--tab-accent:${e.accent}">${e.nav}</button>`
  ).join('');
  inner.querySelectorAll('.topnav__tab').forEach(tab => {
    tab.addEventListener('click', () => goToPage(parseInt(tab.dataset.target)));
  });
}

let lastActiveTab = -1;
function updateTopnav() {
  const nav = document.getElementById('topnav');
  // Se muestra recién después del índice (portada = 0, índice = 1) y en modo lectura.
  if (cur < 2 || !zoomed) { nav.setAttribute('hidden', ''); lastActiveTab = -1; return; }
  nav.removeAttribute('hidden');

  let active = 0;
  indexEntries.forEach((e, i) => { if (e.target <= cur) active = i; });

  const tabs = nav.querySelectorAll('.topnav__tab');
  tabs.forEach((tab, i) => tab.classList.toggle('is-active', i === active));

  if (active !== lastActiveTab) {
    lastActiveTab = active;
    const el = tabs[active];
    if (el) el.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }
}

let reconcileTimer = null;

// ── Giro de hoja (Web Animations API) ───────────────────────────────────────
// La hoja no rota rígida: se levanta hacia la cámara (translateZ), se comba
// apenas (skewY) y se desvanece al reposar, con una sombra que barre tanto la
// hoja que gira como la página que se revela debajo.
const FLIP_MS = 1250;
const FLIP_LIFT = 56; // px que la hoja se levanta de la revista a mitad de giro

let activeFlips = [];
function settleFlips() {
  activeFlips.forEach(a => { try { a.cancel(); } catch (e) {} });
  activeFlips = [];
  // Limpia los overrides del giro (aun si quedó a mitad de camino) y re-aplica
  // el precalentado de hojas cercanas según el estado actual.
  pageBaseStyles();
}

// Sólo transform + opacity: ambas corren en el compositor.
// La rotación es EXACTAMENTE proporcional al offset y una única curva global
// (el `easing` de options, que en WAAPI modula la animación entera) le da la
// aceleración: antes cada tramo tenía su propio cubic-bezier y las velocidades
// no empalmaban en los bordes de los keyframes — la hoja frenaba y re-arrancaba
// y el giro se veía "a pasos" aun corriendo a 60fps.
const FLIP_EASE = 'cubic-bezier(0.5, 0.06, 0.2, 1)';
function flipKeyframes(dir) {
  const N = 8, frames = [];
  for (let k = 0; k <= N; k++) {
    const p    = k / N;
    const ang  = dir > 0 ? -180 * p : -180 * (1 - p);
    const arc  = Math.sin(Math.PI * p);      // campana: alza y comba máximas a mitad de giro
    const lift = FLIP_LIFT * arc;
    const skew = 2.2 * arc * (dir > 0 ? 1 : -1);
    // Se desvanece al reposar (adelante) o aparece al despegar (atrás).
    const op = dir > 0
      ? (p < 0.72 ? 1 : (1 - p) / 0.28)
      : Math.min(1, p / 0.14);
    frames.push({
      offset: p,
      opacity: op,
      transform: `rotateY(${ang.toFixed(2)}deg) translateZ(${lift.toFixed(2)}px) skewY(${skew.toFixed(3)}deg)`,
    });
  }
  return frames;
}

// Pasa a `target` con UN solo paso de hoja, aunque haya páginas en el medio
// (salto): las hojas intermedias se reposicionan al instante y sólo se anima
// la hoja que revela la página destino.
function flipTo(target) {
  target = Math.max(0, Math.min(pages.length - 1, target));
  if (target === cur) return;
  clearTimeout(reconcileTimer);
  settleFlips(); // si había un giro en el aire, lo asienta

  const dir    = target > cur ? 1 : -1;
  const moving = dir > 0 ? pages[cur] : pages[target];
  const under  = dir > 0 ? pages[target] : pages[cur]; // página que recibe la sombra

  // Hacia adelante: las hojas intermedias se voltean al instante (quedan
  // ocultas) para que `moving` revele directamente el destino.
  if (dir > 0) {
    for (let i = cur + 1; i < target; i++) {
      pages[i].classList.add('is-flipped');
      pages[i].style.zIndex = i;
    }
  }

  cur = target;
  loadNear(); // asegura que la página destino tenga su imagen antes de revelarse

  moving.classList.toggle('is-flipped', pages.indexOf(moving) < cur);
  moving.style.zIndex = pages.length + 5;
  moving.style.visibility = 'visible'; // pisa el hidden de .is-flipped mientras gira
  moving.style.willChange = 'transform, opacity';

  activeFlips.push(moving.animate(flipKeyframes(dir), { duration: FLIP_MS, easing: FLIP_EASE, fill: 'forwards' }));

  // Luz que barre la hoja mientras gira.
  const shade = moving.querySelector('.page__shade');
  if (shade) {
    activeFlips.push(shade.animate(
      [{ opacity: 0 }, { opacity: 0.7, offset: 0.45 }, { opacity: 0 }],
      { duration: FLIP_MS, easing: 'ease-in-out' }
    ));
  }

  // Sombra proyectada sobre la página de abajo: se disipa al abrir (adelante)
  // o crece a medida que la hoja aterriza (atrás).
  const cast = under !== moving && under.querySelector('.page__shade');
  if (cast) {
    activeFlips.push(cast.animate(
      dir > 0
        ? [{ opacity: 0.5 }, { opacity: 0.22, offset: 0.55 }, { opacity: 0 }]
        : [{ opacity: 0 }, { opacity: 0.45, offset: 1 }],
      { duration: FLIP_MS, easing: dir > 0 ? 'ease-out' : 'ease-in' }
    ));
  }

  // Con la hoja en el aire, las páginas no reciben clicks: un click a mitad
  // de giro abría la galería de la página vieja. Las flechas y el swipe viven
  // fuera de las hojas, así que igual se puede seguir pasando rápido.
  const book = document.getElementById('book');
  book.classList.add('is-flipping');

  // Al terminar el giro, reconcilia el estado y libera memoria de páginas lejanas.
  reconcileTimer = setTimeout(() => {
    settleFlips();
    moving.style.willChange = '';
    book.classList.remove('is-flipping');
    layout();
    unloadFar();
  }, FLIP_MS + 60);

  book.classList.toggle('is-closed', cur === 0);
  updateChrome();
  updateTopnav();
  if (!desdeHistorial) syncRoute(false);
}

function go(dir)        { flipTo(cur + dir); }
function goToPage(target) { flipTo(target); }

// ── URL ↔ página ────────────────────────────────────────────────────────────
// Al pasar de hoja se reescribe la URL, y al entrar por un link se abre
// directamente en esa página. Además el atrás/adelante del navegador funciona.
let desdeHistorial = false; // navegación disparada por el historial: no re-apilar

const indiceDeRuta = (hash) => {
  const r = (hash || '').replace(/^#\/?/, '').replace(/\/+$/, '');
  if (!r) return 0;
  return pageDefs.findIndex(d => d.route === decodeURIComponent(r));
};

function syncRoute(reemplazar) {
  const r = pageDefs[cur] && pageDefs[cur].route;
  const url = r ? '#/' + r : location.pathname + location.search;
  try {
    history[reemplazar ? 'replaceState' : 'pushState']({ i: cur }, '', url);
  } catch (e) { /* file:// no permite history API; la revista igual funciona */ }
}

function navegarDesdeURL() {
  const i = indiceDeRuta(location.hash);
  if (i < 0) { syncRoute(true); return; } // ruta inexistente: corrige la barra
  if (i === cur) return;
  desdeHistorial = true;
  if (!zoomed) setZoom(true);
  flipTo(i);
  desdeHistorial = false;
}

// Link compartido: entra ya en modo lectura y en la página pedida, sin la
// intro de la revista sobre la mesa (y sin animar el acercamiento).
function aplicarRutaInicial() {
  const i = indiceDeRuta(location.hash);
  if (i > 0) {
    document.body.classList.add('no-anim');
    cur = i;
    layout();
    setZoom(true);
    requestAnimationFrame(() => requestAnimationFrame(
      () => document.body.classList.remove('no-anim')));
  }
  syncRoute(true); // normaliza la barra de direcciones (incluye hash inválido)
}

function updateChrome() {
  const hide = (cur === 0) || !zoomed; // en la portada o sobre la mesa no hay flechas
  document.getElementById('navPrev').hidden = hide;
  document.getElementById('navNext').hidden = hide;
}

// ── Cámara: mesa ↔ lectura ──────────────────────────────────────────────────
function setZoom(z) {
  if (zoomed === z) return;
  zoomed = z;
  document.body.classList.toggle('is-table', !z);
  document.getElementById('zoomOut').hidden = !z;
  // Al dejarla en la mesa, la revista se cierra: queda la tapa adelante.
  if (!z && cur !== 0) flipTo(0);
  updateChrome();
  updateTopnav();
}

// ════════════════════════════════════════════════════════════════════════════
//  DESPLIEGUE DE TRABAJO
// ════════════════════════════════════════════════════════════════════════════
function tileMarkup(item) {
  const label = item.title || '';
  const meta  = item.meta ? `<span class="masonry__meta">${item.meta}</span>` : '';
  if (item.type === 'youtube') {
    return `
      <div class="masonry__media"><img src="${ytThumbHD(item.id)}" data-yt="${item.id}" alt="${label}" loading="lazy" decoding="async" /></div>
      <button class="masonry__play" aria-label="Reproducir ${label}">${playSVG}</button>
      <div class="masonry__overlay"><span class="masonry__caption">${label}</span>${meta}</div>`;
  }
  if (item.type === 'video') {
    // El poster evita bajar video en el mural (preload=none): el mp4 recién
    // se pide al expandirlo en el lightbox.
    return `
      <div class="masonry__media masonry__media--clip"><video src="${item.src}" poster="${item.poster}" preload="none" muted playsinline disablepictureinpicture></video></div>
      <button class="masonry__play" aria-label="Reproducir ${label}">${playSVG}</button>
      <div class="masonry__overlay"><span class="masonry__caption">${label}</span>${meta}</div>`;
  }
  return `
    <img src="${item.thumb || item.src}" alt="${label}" loading="lazy" decoding="async" />
    <div class="masonry__overlay"><span class="masonry__caption">${label}</span>${meta}</div>`;
}

// Mural de un conjunto de items. `lbItems` se fija al set mostrado para que el
// lightbox (prev/next) navegue dentro de la galería visible.
function tileGrid(items, asGrid) {
  lbItems = items;
  const grid = document.createElement('div');
  // `asGrid`: grilla ordenada para sets de proporción uniforme (el masonry de
  // columnas dejaba una columna corta y un hueco al final).
  grid.className = 'masonry' + (asGrid ? ' masonry--grid' : '');
  items.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'masonry__item' + (item.type === 'youtube' || item.type === 'video' ? ' masonry__item--video' : '');
    el.style.animationDelay = (i * 0.04) + 's';
    el.innerHTML = tileMarkup(item);
    const yt = el.querySelector('img[data-yt]');
    if (yt) fixYtImg(yt);
    el.addEventListener('click', () => openLightbox(i));
    grid.appendChild(el);
  });
  return grid;
}

function openWork(work) {
  if (!work) return;
  if (!work.categories && !work.items.length) return; // todavía sin material
  document.getElementById('workEyebrow').textContent = work.section ? work.section.label : '';
  document.getElementById('workTitle').textContent   = work.title;
  document.getElementById('workMeta').textContent    = work.meta || '';
  // `galleryDesc`: texto propio para el encabezado de la galería, cuando debe
  // decir algo distinto al de la página del trabajo.
  document.getElementById('workDesc').textContent    = work.galleryDesc || work.desc || '';

  const body = document.getElementById('workBody');
  if (work.categories) {
    // Galería con sub-galerías: menú lateral izquierdo + mural que cambia.
    body.className = 'work__body work__body--cats';
    body.innerHTML = '';
    const nav = document.createElement('nav');
    nav.className = 'cat-nav';
    const gallery = document.createElement('div');
    gallery.className = 'cat-gallery';

    const show = (idx) => {
      const cat = work.categories[idx];
      gallery.innerHTML = '';
      if (cat.items.length) gallery.appendChild(tileGrid(cat.items));
      else { lbItems = []; gallery.innerHTML = '<p class="cat-empty">Próximamente</p>'; }
      nav.querySelectorAll('.cat-nav__btn').forEach((b, i) => b.classList.toggle('is-active', i === idx));
      // Nueva sección: arrancar arriba y con el menú visible.
      nav.classList.remove('is-hidden');
      document.getElementById('work').scrollTop = 0;
    };

    work.categories.forEach((cat, i) => {
      const btn = document.createElement('button');
      btn.className = 'cat-nav__btn';
      btn.textContent = cat.label;
      btn.addEventListener('click', () => show(i));
      nav.appendChild(btn);
    });
    body.appendChild(nav);
    body.appendChild(gallery);
    show(0);
  } else if (isVideoWork(work)) {
    const it = work.items[0];
    body.className = 'work__body work__body--single';
    body.innerHTML = `
      <div class="work__player">
        ${it.type === 'video'
          ? `<video src="${it.src}" poster="${it.poster}" controls autoplay playsinline preload="metadata"></video>`
          : `<iframe
          src="https://www.youtube.com/embed/${it.id}?rel=0&modestbranding=1&autoplay=1"
          title="${work.title}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>`}
      </div>`;
    lbItems = [];
  } else {
    body.className = 'work__body';
    body.innerHTML = '';
    body.appendChild(tileGrid(work.items, work.gridGallery));
  }

  const w = document.getElementById('work');
  w.style.setProperty('--accent', (work.section && work.section.accent) || '#c9a27f');
  w.classList.add('open');
  w.setAttribute('aria-hidden', 'false');
  w.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeWork() {
  const w = document.getElementById('work');
  w.classList.remove('open');
  w.setAttribute('aria-hidden', 'true');
  document.getElementById('workBody').innerHTML = '';
  if (!document.getElementById('lightbox').classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

// ════════════════════════════════════════════════════════════════════════════
//  LIGHTBOX
// ════════════════════════════════════════════════════════════════════════════
function openLightbox(index) {
  lbIndex = index;
  renderLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.getElementById('lbMedia').innerHTML = '';
  if (!document.getElementById('work').classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

function renderLightbox() {
  const item    = lbItems[lbIndex];
  const media   = document.getElementById('lbMedia');
  const caption = document.getElementById('lbCaption');
  const label   = item.title || '';

  if (item.type === 'youtube') {
    media.innerHTML = `
      <div class="lightbox__video">
        <iframe
          src="https://www.youtube.com/embed/${item.id}?rel=0&modestbranding=1&autoplay=1"
          title="${label}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>`;
  } else if (item.type === 'video') {
    media.innerHTML = `<video class="lightbox__clip" src="${item.src}" controls autoplay playsinline></video>`;
  } else {
    media.innerHTML = `<img src="${item.src}" alt="${label}" decoding="async" />`;
  }
  // `is-video`: en mobile los controles nativos del reproductor ocupan las
  // esquinas del video; con esta clase el CSS corre la ✕ y las flechas fuera de
  // esa zona para que no se solapen (ver bloque responsive del lightbox).
  document.getElementById('lightbox').classList.toggle('is-video', item.type === 'video' || item.type === 'youtube');
  const metaText = item.meta ? `${label} — ${item.meta}` : label;
  caption.textContent = `${metaText}  ·  ${lbIndex + 1} / ${lbItems.length}`;
}

function lbNavigate(dir) {
  document.getElementById('lbMedia').innerHTML = '';
  lbIndex = (lbIndex + dir + lbItems.length) % lbItems.length;
  renderLightbox();
}

// ════════════════════════════════════════════════════════════════════════════
//  CV
// ════════════════════════════════════════════════════════════════════════════
// Se abre desde la página de contacto, por encima de la revista. La imagen se
// carga recién al abrirlo por primera vez (pesa ~440 KB).
function openCV() {
  const cv  = document.getElementById('cv');
  const img = document.getElementById('cvPage');
  if (!img.getAttribute('src')) img.src = img.dataset.src;
  clearTimeout(cvSalida);
  cv.classList.remove('is-closing', 'is-zoomed');
  cv.classList.add('open');
  cv.setAttribute('aria-hidden', 'false');
  document.body.classList.add('cv-abierto');   // el navbar cede su lugar
  document.body.style.overflow = 'hidden';
}

// La hoja se levanta y recién ahí se saca el overlay (si no, desaparecía de golpe).
let cvSalida;
function closeCV() {
  const cv = document.getElementById('cv');
  if (!cv.classList.contains('open')) return;
  cv.classList.add('is-closing');
  document.body.classList.remove('cv-abierto');  // vuelve el navbar
  clearTimeout(cvSalida);
  cvSalida = setTimeout(() => {
    cv.classList.remove('open', 'is-closing', 'is-zoomed');
    cv.setAttribute('aria-hidden', 'true');
    document.getElementById('cvStage').scrollTop = 0;
    document.body.style.overflow = '';
  }, 320);
}

// Acercarla para leerla cómoda (y volver a alejarla).
function toggleCVZoom() {
  const cv = document.getElementById('cv');
  cv.classList.toggle('is-zoomed');
  if (!cv.classList.contains('is-zoomed')) document.getElementById('cvStage').scrollTop = 0;
}

const cvAbierto = () => document.getElementById('cv').classList.contains('open');

// ════════════════════════════════════════════════════════════════════════════
//  TECLADO / TOUCH
// ════════════════════════════════════════════════════════════════════════════
document.addEventListener('keydown', (e) => {
  const lb = document.getElementById('lightbox');
  const wk = document.getElementById('work');
  if (cvAbierto()) {
    if (e.key === 'Escape') closeCV();
    return;
  }
  if (lb.classList.contains('open')) {
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  lbNavigate(-1);
    if (e.key === 'ArrowRight') lbNavigate(1);
    return;
  }
  if (wk.classList.contains('open')) {
    if (e.key === 'Escape') closeWork();
    return;
  }
  if (!zoomed) {
    if (['ArrowLeft', 'ArrowRight', 'Enter', ' '].includes(e.key)) setZoom(true);
    return;
  }
  if (e.key === 'Escape')     setZoom(false);
  if (e.key === 'ArrowLeft')  go(-1);
  if (e.key === 'ArrowRight') go(1);
});

function initSwipe() {
  const stage = document.getElementById('stage');
  let startX = null;
  stage.addEventListener('touchstart', (e) => { startX = e.changedTouches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (!zoomed) return; // sobre la mesa, el tap acerca; no se pasa de página
    if (Math.abs(dx) < 45) return;
    if (dx < 0) go(1); else go(-1);
  }, { passive: true });
}

// Sobre la mesa, cualquier click en la revista acerca la cámara; en modo
// lectura, un click fuera de la revista la vuelve a apoyar en la mesa.
function initZoom() {
  const mag  = document.getElementById('mag');
  const book = document.getElementById('book');

  // Fase de captura: intercepta el click antes que los handlers de las páginas.
  mag.addEventListener('click', (e) => {
    if (!zoomed) {
      e.stopPropagation();
      e.preventDefault();
      setZoom(true);
    }
  }, true);

  mag.addEventListener('click', (e) => {
    if (!zoomed) return;
    if (book.contains(e.target)) return;
    if (e.target.closest('.topnav')) return;
    setZoom(false);
  });

  document.getElementById('zoomOut').addEventListener('click', () => setZoom(false));
}

// ── Bloqueo de zoom por gestos ──────────────────────────────────────────────
// La escena es un viewport fijo (vh/vw + fixed + 3D): el zoom del navegador la
// rompe. El viewport meta y touch-action (pan-x pan-y bloquea pinch y doble
// tap) cubren Android/Chrome; iOS Safari ignora user-scalable=no, así que el
// pinch se frena además con los eventos gesture* (propietarios de Safari).
function initNoZoom() {
  ['gesturestart', 'gesturechange', 'gestureend'].forEach(ev =>
    document.addEventListener(ev, (e) => e.preventDefault(), { passive: false }));
}

// El menú de sub-galerías (cat-nav) se desvanece al scrollear una sección hacia
// abajo y reaparece al subir — el mural gana protagonismo sin perder el menú.
function initCatNavAutoHide() {
  const work = document.getElementById('work');
  let last = 0;
  work.addEventListener('scroll', () => {
    const nav = work.querySelector('.cat-nav');
    if (!nav) { last = work.scrollTop; return; }
    const st = work.scrollTop;
    if (st < 80)            nav.classList.remove('is-hidden'); // cerca del tope: siempre visible
    else if (st > last + 4) nav.classList.add('is-hidden');    // bajando: ocultar
    else if (st < last - 4) nav.classList.remove('is-hidden'); // subiendo: mostrar
    last = st;
  }, { passive: true });
}

// ════════════════════════════════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initNoZoom();
  buildBook();   // loadNear() (dentro de layout) carga sólo las primeras páginas
  buildTopnav();
  initSwipe();
  initZoom();
  initCatNavAutoHide();
  aplicarRutaInicial();
  window.addEventListener('popstate', navegarDesdeURL);   // atrás / adelante
  window.addEventListener('hashchange', navegarDesdeURL); // URL editada a mano

  document.getElementById('navPrev').addEventListener('click', () => go(-1));
  document.getElementById('navNext').addEventListener('click', () => go(1));
  document.getElementById('workClose').addEventListener('click', closeWork);
  document.getElementById('cvClose').addEventListener('click', closeCV);
  document.getElementById('cvSheet').addEventListener('click', toggleCVZoom);
  document.getElementById('cvSheet').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleCVZoom(); }
  });
  // Tocar fuera de la hoja = sacarla de encima de la revista.
  document.getElementById('cvStage').addEventListener('click', (e) => {
    if (e.target === document.getElementById('cvStage')) closeCV();
  });
  // Delegado: el botón vive dentro de la página de contacto, que se re-arma.
  document.addEventListener('click', (e) => {
    if (e.target.closest('#cvOpen')) { e.stopPropagation(); openCV(); }
  });
  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbPrev').addEventListener('click', () => lbNavigate(-1));
  document.getElementById('lbNext').addEventListener('click', () => lbNavigate(1));
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === document.getElementById('lightbox')) closeLightbox();
  });
});
