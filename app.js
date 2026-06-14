// ── DATA ──────────────────────────────────────────────────────────────────────
// Cada sección agrupa varios trabajos en un único mural mixto de fotos y videos.
// item: { type: 'image'|'youtube', src|id, title, meta, caption }
//   - 'image'   → foto del mural (src = ruta del archivo)
//   - 'youtube' → tile de video con botón de play (id = id de YouTube)

// Helper: convierte una lista de nombres de archivo en items de tipo imagen.
const photos = (dir, files, title, meta = '') =>
  files.map(f => ({ type: 'image', src: `fotos/${dir}/${f}`, title, meta, caption: '' }));

const francoPhotos = photos('franco-ladran-sancho', [
  '07ae18244794795.699f38d5bba80.webp', '0cc4de244794795.699f38d5b8347.webp',
  '114850244794795.699f38d5be551.webp', '20b13b244794795.699f38d5ba1e7.webp',
  '291909244794795.699f38d5b78d7.webp', '2ec37e244794795.699f38d5bc2c1.webp',
  '35f695244794795.699f38d5bd3f5.webp', '4f5e58244794795.699f38d5c08a3.webp',
  '541cb8244794795.699f38d5bfb29.webp', '58738d244794795.699f38d5b5a03.webp',
  '5c5f29244794795.699f38d5b6ebe.webp', '66d060244794795.699f38d5bb239.webp',
  '6ab9e8244794795.699f38d5c0076.webp', '716a1d244794795.699f38d5bf43a.webp',
  '757902244794795.699f38d5b5068.webp', '87b003244794795.699f38d5b8e97.webp',
  '89e18a244794795.699f38d5b3b07.webp', '89e6c9244794795.699f38d5bed45.webp',
  '9e49b5244794795.699f38d5bcc90.webp', 'a6dfd8244794795.699f38d5b4a87.webp',
  'cf8cae244794795.699f38d5bdd65.webp', 'cfdeef244794795.699f38d5ba9f8.webp',
  'e022cd244794795.699f38d5b6425.webp', 'eb6ccb244794795.699f38d5b4272.webp',
  'f0a2c1244794795.699f38d5b9922.webp', 'f1061c244794795.699f38d5b352e.webp',
], 'Franco Martínez', 'En vivo · Ladran Sancho');

const luchiPhotos = photos('luchi-davit', [
  '6adfdf233853197.68b7c3d0b9f95.webp', '8c54bd233853197.68b7c3d0bc356.webp',
  '9ef3d6233853197.68b7c3d0bbdb8.webp', 'b1b9fc233853197.68b7c3d0bdb96.webp',
  'bc8dee233853197.68b7c3d0bf343.webp', 'bfd6a5233853197.68b7c3d0bebba.webp',
  'c33cbd233853197.68b7c3d0ba764.webp', 'd0f929233853197.68b7c3d0c01c2.webp',
  'dc8b63233853197.68b7c3d0c0939.webp', 'e6e85b233853197.68b7c3d0bb692.webp',
  'f3a89c233853197.68b7c3d0c15ad.webp', 'f5b11b233853197.68b7c3d0c1fa2.webp',
  'f5f30f233853197.68b7c3d0c2e8d.webp',
], 'Luchi Davit', 'En vivo · The Monkey\'s');

const comandantePhotos = photos('el-comandante', [
  '2ee3bc238195039.690ff9183a1a1.webp', '38dae9238195039.690ff91839978.webp',
  '6b54fb238195039.690ff9183aa74.webp', '805c93238195039.690ff9183b0f4.webp',
], 'El Comandante');

const sections = [
  {
    id: 'videoclips',
    label: 'Videoclips',
    role: 'Videoclips musicales',
    items: [
      { type: 'youtube', id: 'PNRQ6c6GyzQ', title: 'Las Palabras Justas', meta: 'Franco Martínez · Cámara y Montaje' },
      { type: 'youtube', id: '0897I0LQ-pE', title: '1 Momento',   meta: 'Luca Laurito · Dirección y Color' },
      { type: 'youtube', id: 'ph-mFOwGMzo', title: 'DULCE',       meta: 'UNYX · Cámara' },
      { type: 'youtube', id: '2W9xCTxiQk8', title: 'POCO Set',     meta: 'Majo Chicar · Cámara' },
      { type: 'youtube', id: 'Zm7LLhpThlo', title: '2 Minutos',   meta: 'Ian Cater & Zohar · Cámara' },
      { type: 'youtube', id: 'hl-OzYBNd7c', title: 'Sabor a Poco', meta: 'Peka Roux · Arte' },
    ],
  },
  {
    id: 'moda',
    label: 'Moda',
    role: 'Editoriales y campañas',
    items: [],
  },
  {
    id: 'cobertura-shows',
    label: 'Cobertura de Shows',
    role: 'Registro en vivo',
    items: [
      ...francoPhotos,
      ...luchiPhotos,
    ],
  },
  {
    id: 'ficciones',
    label: 'Ficciones · Cortometrajes',
    role: 'Ficción y documental',
    items: [
      { type: 'youtube', id: 'RzHyFfUYjfw', title: 'Acumuladores', meta: 'Documental · Producción y Cámara' },
      ...comandantePhotos,
      { type: 'youtube', id: '9zBUHY4DXSc', title: 'FADU-UBA', meta: 'FADU, UBA · Iluminación y Cámara' },
    ],
  },
  {
    id: 'instituciones',
    label: 'Instituciones',
    role: 'Contenido institucional',
    items: [
      { type: 'youtube', id: '6G79yq3th1g', title: 'Hospital Universitario Austral', meta: 'SaNar · Edición de video' },
    ],
  },
];

// Hero carousel images (fotos reales destacadas)
const heroImages = [
  'fotos/luchi-davit/bc8dee233853197.68b7c3d0bf343.webp',
  'fotos/franco-ladran-sancho/89e18a244794795.699f38d5b3b07.webp',
  'fotos/el-comandante/805c93238195039.690ff9183b0f4.webp',
  'fotos/luchi-davit/d0f929233853197.68b7c3d0c01c2.webp',
  'fotos/franco-ladran-sancho/9e49b5244794795.699f38d5bcc90.webp',
];

// Miniatura de YouTube para los tiles del mural.
const ytThumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

// ── STATE ──────────────────────────────────────────────────────────────────────
let currentSection = 0;
let currentSlide   = 0;
let carouselTimer  = null;
let lbItems        = [];
let lbIndex        = 0;

// ── CAROUSEL ──────────────────────────────────────────────────────────────────
function buildCarousel() {
  const wrap = document.getElementById('carousel');
  const dots = document.getElementById('carouselDots');

  heroImages.forEach((url, i) => {
    const slide = document.createElement('div');
    slide.className = 'carousel__slide' + (i === 0 ? ' active' : '');
    slide.style.backgroundImage = `url('${url}')`;
    wrap.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    dots.appendChild(dot);
  });
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.carousel__slide');
  const dots   = document.querySelectorAll('.carousel-dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (index + heroImages.length) % heroImages.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function startCarousel() {
  carouselTimer = setInterval(() => goToSlide(currentSlide + 1), 4500);
}

// ── SIDEBAR ───────────────────────────────────────────────────────────────────
function buildSidebar() {
  const list = document.getElementById('sidebarList');
  sections.forEach((sec, i) => {
    const li = document.createElement('li');
    li.className = 'sidebar-item' + (i === 0 ? ' active' : '');
    li.dataset.index = i;
    li.textContent = sec.label;
    li.addEventListener('click', () => selectSection(i));
    list.appendChild(li);
  });
}

function selectSection(index) {
  currentSection = index;
  document.querySelectorAll('.sidebar-item').forEach(el => {
    el.classList.toggle('active', parseInt(el.dataset.index) === index);
  });
  renderGallery();
}

// ── GALLERY ───────────────────────────────────────────────────────────────────
function renderGallery() {
  const sec   = sections[currentSection];
  const grid  = document.getElementById('masonryGrid');
  const title = document.getElementById('galleryTitle');

  title.textContent = sec.label;

  document.getElementById('galleryRole').textContent   = sec.role || '';
  document.getElementById('gallerySep').textContent    = '';
  document.getElementById('galleryArtist').textContent = '';

  grid.style.columns = '';
  grid.innerHTML = '';

  // Sección vacía → mensaje "próximamente".
  if (!sec.items.length) {
    grid.className = 'gallery-empty';
    grid.innerHTML = '<p class="gallery-empty__text">Próximamente</p>';
    lbItems = [];
    return;
  }

  // Secciones solo de video → grilla con orden de lectura (izq→der, arriba→abajo).
  // El resto usa masonry por columnas (mejor para fotos de alturas variables).
  const allVideos = sec.items.every(item => item.type === 'youtube');
  grid.className = allVideos ? 'video-grid' : 'masonry';

  lbItems = sec.items;

  sec.items.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'masonry__item' + (item.type === 'youtube' ? ' masonry__item--video' : '');
    el.style.animationDelay = (i * 0.05) + 's';

    const label = item.title || item.caption || '';
    const meta  = item.meta ? `<span class="masonry__meta">${item.meta}</span>` : '';

    if (item.type === 'youtube') {
      el.innerHTML = `
        <div class="masonry__media">
          <img src="${ytThumb(item.id)}" alt="${label}" loading="lazy" />
        </div>
        <button class="masonry__play" aria-label="Reproducir ${label}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
        </button>
        <div class="masonry__overlay">
          <span class="masonry__caption">${label}</span>
          ${meta}
        </div>
      `;
    } else {
      el.innerHTML = `
        <img src="${item.src}" alt="${label}" loading="lazy" />
        <div class="masonry__overlay">
          <span class="masonry__caption">${label}</span>
          ${meta}
        </div>
      `;
    }

    el.addEventListener('click', () => openLightbox(i));
    grid.appendChild(el);
  });
}

// ── LIGHTBOX ──────────────────────────────────────────────────────────────────
function openLightbox(index) {
  lbIndex = index;
  renderLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
  // Detiene cualquier reproducción (video o iframe de YouTube).
  document.getElementById('lbMedia').innerHTML = '';
}

function renderLightbox() {
  const item    = lbItems[lbIndex];
  const media   = document.getElementById('lbMedia');
  const caption = document.getElementById('lbCaption');
  const label   = item.title || item.caption || '';

  if (item.type === 'youtube') {
    media.innerHTML = `
      <div class="lightbox__video">
        <iframe
          src="https://www.youtube.com/embed/${item.id}?rel=0&modestbranding=1&autoplay=1"
          title="${label}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>`;
  } else if (item.type === 'video') {
    media.innerHTML = `<video src="${item.src}" controls autoplay playsinline></video>`;
  } else {
    media.innerHTML = `<img src="${item.src}" alt="${label}" />`;
  }

  const metaText = item.meta ? `${label} — ${item.meta}` : label;
  caption.textContent = `${metaText}  ·  ${lbIndex + 1} / ${lbItems.length}`;
}

function lbNavigate(dir) {
  // Limpia el medio actual (detiene video/iframe) antes de pasar al siguiente.
  document.getElementById('lbMedia').innerHTML = '';
  lbIndex = (lbIndex + dir + lbItems.length) % lbItems.length;
  renderLightbox();
}

// ── KEYBOARD ──────────────────────────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   lbNavigate(-1);
  if (e.key === 'ArrowRight')  lbNavigate(1);
});

// ── PRELOAD ───────────────────────────────────────────────────────────────────
function preloadAllImages() {
  const load = (src) => { const img = new Image(); img.src = src; };
  sections.forEach((sec, i) => {
    if (i === currentSection) return; // ya está visible
    sec.items.forEach(item => {
      if (item.type === 'image')   load(item.src);
      if (item.type === 'youtube') load(ytThumb(item.id));
    });
  });
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildCarousel();
  startCarousel();
  buildSidebar();
  renderGallery();

  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbPrev').addEventListener('click', () => lbNavigate(-1));
  document.getElementById('lbNext').addEventListener('click', () => lbNavigate(1));

  // Close lightbox on backdrop click
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === document.getElementById('lightbox')) closeLightbox();
  });

  // Preload all project images once the page is idle
  if ('requestIdleCallback' in window) {
    requestIdleCallback(preloadAllImages);
  } else {
    setTimeout(preloadAllImages, 1500);
  }
});
