// ── DATA ──────────────────────────────────────────────────────────────────────
// Replace these Picsum placeholders with real image/video paths when ready.
// Each item: { type: 'image'|'video', src, thumb (optional), caption }
// Videos use a poster image as thumbnail.

const projects = [
  {
    id: 'las-palabras-justas',
    label: 'Las Palabras Justas',
    role: 'Cámara y Montaje',
    artist: 'Franco Martínez',
    items: [
      { type: 'youtube', id: 'PNRQ6c6GyzQ', caption: 'Las Palabras Justas' },
    ],
  },
  {
    id: 'calzados-de-cuero',
    hidden: true,
    label: 'Calzados de cuero',
    role: 'Cámara y Edición',
    artist: 'LÓPEZ TAIBO',
    items: [
      { type: 'image', src: 'https://picsum.photos/seed/cc1/800/900',  caption: '' },
      { type: 'image', src: 'https://picsum.photos/seed/cc2/800/600',  caption: '' },
      { type: 'image', src: 'https://picsum.photos/seed/cc3/800/1000', caption: '' },
      { type: 'image', src: 'https://picsum.photos/seed/cc4/800/700',  caption: '' },
    ],
  },
  {
    id: 'franco-ladran-sancho',
    label: 'FRANCO MARTÍNEZ en Ladran Sancho',
    role: 'Show',
    artist: '',
    items: [
      { type: 'image', src: 'fotos/franco-ladran-sancho/07ae18244794795.699f38d5bba80.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/0cc4de244794795.699f38d5b8347.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/114850244794795.699f38d5be551.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/20b13b244794795.699f38d5ba1e7.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/291909244794795.699f38d5b78d7.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/2ec37e244794795.699f38d5bc2c1.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/35f695244794795.699f38d5bd3f5.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/4f5e58244794795.699f38d5c08a3.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/541cb8244794795.699f38d5bfb29.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/58738d244794795.699f38d5b5a03.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/5c5f29244794795.699f38d5b6ebe.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/66d060244794795.699f38d5bb239.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/6ab9e8244794795.699f38d5c0076.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/716a1d244794795.699f38d5bf43a.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/757902244794795.699f38d5b5068.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/87b003244794795.699f38d5b8e97.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/89e18a244794795.699f38d5b3b07.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/89e6c9244794795.699f38d5bed45.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/9e49b5244794795.699f38d5bcc90.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/a6dfd8244794795.699f38d5b4a87.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/cf8cae244794795.699f38d5bdd65.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/cfdeef244794795.699f38d5ba9f8.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/e022cd244794795.699f38d5b6425.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/eb6ccb244794795.699f38d5b4272.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/f0a2c1244794795.699f38d5b9922.webp',  caption: '' },
      { type: 'image', src: 'fotos/franco-ladran-sancho/f1061c244794795.699f38d5b352e.webp',  caption: '' },
    ],
  },
  {
    id: 'dulce-unyx',
    label: 'DULCE (UNYX)',
    role: 'Cámara',
    artist: '',
    items: [
      { type: 'youtube', id: 'ph-mFOwGMzo', caption: 'DULCE — UNYX' },
    ],
  },
  {
    id: 'el-comandante',
    label: 'El Comandante',
    role: 'Dirección de Arte',
    artist: 'Cortometraje',
    cols: 2,
    items: [
      { type: 'image', src: 'fotos/el-comandante/2ee3bc238195039.690ff9183a1a1.webp', caption: '' },
      { type: 'image', src: 'fotos/el-comandante/38dae9238195039.690ff91839978.webp', caption: '' },
      { type: 'image', src: 'fotos/el-comandante/6b54fb238195039.690ff9183aa74.webp', caption: '' },
      { type: 'image', src: 'fotos/el-comandante/805c93238195039.690ff9183b0f4.webp', caption: '' },
    ],
  },
  {
    id: 'luchi-davit',
    label: 'LUCHI DAVIT en The Monkey\'s',
    role: 'Show',
    artist: '',
    items: [
      { type: 'image', src: 'fotos/luchi-davit/6adfdf233853197.68b7c3d0b9f95.webp',  caption: '' },
      { type: 'image', src: 'fotos/luchi-davit/8c54bd233853197.68b7c3d0bc356.webp',  caption: '' },
      { type: 'image', src: 'fotos/luchi-davit/9ef3d6233853197.68b7c3d0bbdb8.webp',  caption: '' },
      { type: 'image', src: 'fotos/luchi-davit/b1b9fc233853197.68b7c3d0bdb96.webp',  caption: '' },
      { type: 'image', src: 'fotos/luchi-davit/bc8dee233853197.68b7c3d0bf343.webp',  caption: '' },
      { type: 'image', src: 'fotos/luchi-davit/bfd6a5233853197.68b7c3d0bebba.webp',  caption: '' },
      { type: 'image', src: 'fotos/luchi-davit/c33cbd233853197.68b7c3d0ba764.webp',  caption: '' },
      { type: 'image', src: 'fotos/luchi-davit/d0f929233853197.68b7c3d0c01c2.webp',  caption: '' },
      { type: 'image', src: 'fotos/luchi-davit/dc8b63233853197.68b7c3d0c0939.webp',  caption: '' },
      { type: 'image', src: 'fotos/luchi-davit/e6e85b233853197.68b7c3d0bb692.webp',  caption: '' },
      { type: 'image', src: 'fotos/luchi-davit/f3a89c233853197.68b7c3d0c15ad.webp',  caption: '' },
      { type: 'image', src: 'fotos/luchi-davit/f5b11b233853197.68b7c3d0c1fa2.webp',  caption: '' },
      { type: 'image', src: 'fotos/luchi-davit/f5f30f233853197.68b7c3d0c2e8d.webp',  caption: '' },
    ],
  },
  {
    id: 'hospital-austral',
    label: 'Hospital Universitario Austral',
    role: 'Edición de video',
    artist: '',
    items: [
      { type: 'youtube', id: '6G79yq3th1g', caption: 'SaNar: salidas a la naturaleza' },
    ],
  },
  {
    id: 'acumuladores',
    label: 'Acumuladores',
    role: 'Producción y Cámara',
    artist: 'Documental',
    items: [
      { type: 'youtube', id: 'RzHyFfUYjfw', caption: 'Acumuladores — Documental' },
    ],
  },
  {
    id: '1-momento',
    label: '1 MOMENTO',
    role: 'Dirección y Color',
    artist: 'Luca Laurito',
    items: [
      { type: 'youtube', id: '0897I0LQ-pE', caption: 'LUCA LAURITO — 1 Momento (Video Oficial)' },
    ],
  },
  {
    id: '2-minutos',
    label: '2 MINUTOS',
    role: 'Cámara',
    artist: 'Ian Cater & Zohar',
    items: [
      { type: 'youtube', id: 'Zm7LLhpThlo', caption: 'IAN CATER & ZOHAR — 2 Minutos (Video Oficial)' },
    ],
  },
  {
    id: 'sabor-a-poco',
    label: 'Sabor a Poco',
    role: 'Arte',
    artist: 'Peka Roux',
    items: [
      { type: 'youtube', id: 'hl-OzYBNd7c', caption: 'Peka Roux — Sabor a Poco (Video Oficial)' },
    ],
  },
  {
    id: 'fadu-uba',
    label: 'FADU-UBA',
    role: 'Iluminación y Cámara',
    artist: 'FADU, UBA',
    items: [
      { type: 'youtube', id: '9zBUHY4DXSc', caption: 'Trabajo de iluminación — FADU, UBA' },
    ],
  },
];

// Hero carousel images (seeds from featured projects)
const heroImages = [
  'https://picsum.photos/seed/hero1/1600/900',
  'https://picsum.photos/seed/r1/1600/900',
  'https://picsum.photos/seed/m1/1600/900',
  'https://picsum.photos/seed/p1/1600/900',
  'https://picsum.photos/seed/b1/1600/900',
];

// ── STATE ──────────────────────────────────────────────────────────────────────
let currentProject = 0;
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
  let isFirst = true;
  projects.forEach((proj, i) => {
    if (proj.hidden) return;
    const li = document.createElement('li');
    li.className = 'sidebar-item' + (isFirst ? ' active' : '');
    li.dataset.index = i;
    li.textContent = proj.label;
    li.addEventListener('click', () => selectProject(i));
    list.appendChild(li);
    isFirst = false;
  });
}

function selectProject(index) {
  currentProject = index;
  document.querySelectorAll('.sidebar-item').forEach(el => {
    el.classList.toggle('active', parseInt(el.dataset.index) === index);
  });
  renderGallery();
}

// ── GALLERY ───────────────────────────────────────────────────────────────────
function renderGallery() {
  const proj  = projects[currentProject];
  const grid  = document.getElementById('masonryGrid');
  const title = document.getElementById('galleryTitle');

  title.textContent = proj.label;

  const roleEl   = document.getElementById('galleryRole');
  const sepEl    = document.getElementById('gallerySep');
  const artistEl = document.getElementById('galleryArtist');

  roleEl.textContent   = proj.role;
  artistEl.textContent = proj.artist;
  sepEl.textContent    = proj.artist ? '·' : '';

  grid.innerHTML = '';

  const isYoutubeProject = proj.items.every(item => item.type === 'youtube');

  if (isYoutubeProject) {
    grid.className = 'video-showcase-wrap';
    lbItems = [];

    proj.items.forEach(item => {
      const wrapper = document.createElement('div');
      wrapper.className = 'video-showcase';
      wrapper.innerHTML = `
        <div class="video-showcase__frame">
          <iframe
            src="https://www.youtube.com/embed/${item.id}?rel=0&modestbranding=1"
            title="${item.caption}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        ${item.caption ? `<p class="video-showcase__caption">${item.caption}</p>` : ''}
      `;
      grid.appendChild(wrapper);
    });

  } else {
    grid.className = 'masonry';
    grid.style.columns = proj.cols ? proj.cols : '';
    lbItems = proj.items;

    proj.items.forEach((item, i) => {
      const el = document.createElement('div');
      el.className = 'masonry__item';
      el.style.animationDelay = (i * 0.05) + 's';

      if (item.type === 'video') {
        el.innerHTML = `
          <img src="${item.thumb}" alt="${item.caption}" loading="lazy" />
          <div class="masonry__play-icon"></div>
          <div class="masonry__overlay">
            <span class="masonry__caption">${item.caption}</span>
          </div>
        `;
      } else {
        el.innerHTML = `
          <img src="${item.src}" alt="${item.caption}" loading="lazy" />
          <div class="masonry__overlay">
            <span class="masonry__caption">${item.caption}</span>
          </div>
        `;
      }

      el.addEventListener('click', () => openLightbox(i));
      grid.appendChild(el);
    });
  }
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
  // Pause any video
  const vid = document.querySelector('.lightbox__media video');
  if (vid) vid.pause();
}

function renderLightbox() {
  const item    = lbItems[lbIndex];
  const media   = document.getElementById('lbMedia');
  const caption = document.getElementById('lbCaption');

  if (item.type === 'video') {
    media.innerHTML = `<video src="${item.src}" controls autoplay playsinline></video>`;
  } else {
    media.innerHTML = `<img src="${item.src}" alt="${item.caption}" />`;
  }

  caption.textContent = `${item.caption}  —  ${lbIndex + 1} / ${lbItems.length}`;
}

function lbNavigate(dir) {
  // Pause current video if any
  const vid = document.querySelector('.lightbox__media video');
  if (vid) vid.pause();
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
  projects.forEach((proj, i) => {
    if (i === currentProject) return; // ya está visible
    proj.items.forEach(item => {
      if (item.type === 'image') load(item.src);
      if (item.type === 'video' && item.thumb) load(item.thumb);
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
