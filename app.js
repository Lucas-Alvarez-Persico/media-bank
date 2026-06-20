// ════════════════════════════════════════════════════════════════════════════
//  DATOS
//  Revista larga: cada página es distinta. Cada sección tiene un divisor y luego
//  una página por proyecto (con su descripción). item: image | youtube.
// ════════════════════════════════════════════════════════════════════════════

const ytThumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const video  = (id, title, meta) => ({ type: 'youtube', id, title, meta });
const photos = (dir, files, title, meta = '') =>
  files.map(f => ({ type: 'image', src: `fotos/${dir}/${f}`, title, meta }));

const francoItems = photos('franco-ladran-sancho', [
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

const luchiItems = photos('luchi-davit', [
  '6adfdf233853197.68b7c3d0b9f95.webp', '8c54bd233853197.68b7c3d0bc356.webp',
  '9ef3d6233853197.68b7c3d0bbdb8.webp', 'b1b9fc233853197.68b7c3d0bdb96.webp',
  'bc8dee233853197.68b7c3d0bf343.webp', 'bfd6a5233853197.68b7c3d0bebba.webp',
  'c33cbd233853197.68b7c3d0ba764.webp', 'd0f929233853197.68b7c3d0c01c2.webp',
  'dc8b63233853197.68b7c3d0c0939.webp', 'e6e85b233853197.68b7c3d0bb692.webp',
  'f3a89c233853197.68b7c3d0c15ad.webp', 'f5b11b233853197.68b7c3d0c1fa2.webp',
  'f5f30f233853197.68b7c3d0c2e8d.webp',
], 'Luchi Davit', 'En vivo · The Monkey\'s');

const comandanteItems = photos('el-comandante', [
  '2ee3bc238195039.690ff9183a1a1.webp', '38dae9238195039.690ff91839978.webp',
  '6b54fb238195039.690ff9183aa74.webp', '805c93238195039.690ff9183b0f4.webp',
], 'El Comandante', 'Cortometraje · Dirección de Arte');

const sections = [
  {
    id: 'videoclips', label: 'Videoclips', nav: 'Videoclips', accent: '#c9a27f',
    desc: 'Cámara, dirección y color para artistas independientes.',
    works: [
      { title: 'Las Palabras Justas', meta: 'Franco Martínez · Cámara y Montaje',
        desc: 'Videoclip para Franco Martínez. Cámara y montaje de una pieza donde la letra guía el pulso visual.',
        items: [video('PNRQ6c6GyzQ', 'Las Palabras Justas', 'Franco Martínez')] },
      { title: '1 Momento', meta: 'Luca Laurito · Dirección y Color',
        desc: 'Videoclip de Luca Laurito. Dirección y corrección de color para una atmósfera nocturna y cálida.',
        items: [video('0897I0LQ-pE', '1 Momento', 'Luca Laurito')] },
      { title: 'DULCE', meta: 'UNYX · Cámara',
        desc: 'Videoclip para UNYX. Cámara y registro siguiendo la energía del tema.',
        items: [video('ph-mFOwGMzo', 'DULCE', 'UNYX')] },
      { title: 'POCO Set', meta: 'Majo Chicar · Cámara',
        desc: 'Set audiovisual para Majo Chicar. Cámara en vivo capturando la performance.',
        items: [video('2W9xCTxiQk8', 'POCO Set', 'Majo Chicar')] },
      { title: '2 Minutos', meta: 'Ian Cater & Zohar · Cámara',
        desc: 'Videoclip de Ian Cater & Zohar. Cámara y composición de planos al ritmo del track.',
        items: [video('Zm7LLhpThlo', '2 Minutos', 'Ian Cater & Zohar')] },
      { title: 'Sabor a Poco', meta: 'Peka Roux · Arte',
        desc: 'Videoclip de Peka Roux. Dirección de arte y construcción del universo visual de la pieza.',
        items: [video('hl-OzYBNd7c', 'Sabor a Poco', 'Peka Roux')] },
    ],
  },
  {
    id: 'moda', label: 'Moda', nav: 'Moda', accent: '#c98aa6',
    desc: 'Editoriales y campañas de moda.',
    works: [],
  },
  {
    id: 'cobertura-shows', label: 'Cobertura de Shows', nav: 'Cobertura', accent: '#c9b07f',
    desc: 'Registro fotográfico de shows en vivo.',
    works: [
      { title: 'Franco Martínez', meta: 'En vivo · Ladran Sancho',
        desc: 'Cobertura fotográfica del show en Ladran Sancho. Registro en vivo de la puesta, los gestos y el público.',
        items: francoItems },
      { title: 'Luchi Davit', meta: 'En vivo · The Monkey\'s',
        desc: 'Cobertura del show en The Monkey\'s. Fotografía de escenario en clave de luz baja y color.',
        items: luchiItems },
    ],
  },
  {
    id: 'ficciones', label: 'Ficciones · Cortometrajes', nav: 'Ficciones', accent: '#8ab0a4',
    desc: 'Ficción y documental: arte, cámara e iluminación.',
    works: [
      { title: 'Acumuladores', meta: 'Documental · Producción y Cámara',
        desc: 'Documental. Producción y cámara de un retrato observacional.',
        items: [video('RzHyFfUYjfw', 'Acumuladores', 'Documental')] },
      { title: 'El Comandante', meta: 'Cortometraje · Dirección de Arte',
        desc: 'Cortometraje. Dirección de arte: diseño de los espacios y objetos que habitan la escena.',
        items: comandanteItems },
      { title: 'FADU-UBA', meta: 'FADU, UBA · Iluminación y Cámara',
        desc: 'Pieza audiovisual para FADU, UBA. Iluminación y cámara.',
        items: [video('9zBUHY4DXSc', 'FADU-UBA', 'FADU, UBA')] },
    ],
  },
  {
    id: 'instituciones', label: 'Instituciones', nav: 'Instituciones', accent: '#8aa6c9',
    desc: 'Contenido audiovisual para instituciones.',
    works: [
      { title: 'Hospital Universitario Austral', meta: 'SaNar · Edición de video',
        desc: 'Pieza institucional «SaNar: salidas a la naturaleza». Edición de video para el Hospital Universitario Austral.',
        items: [video('6G79yq3th1g', 'Hospital Universitario Austral', 'SaNar')] },
    ],
  },
];

// Imagen atmosférica para la página "Sobre mí"
const aboutBg = 'fotos/luchi-davit/bc8dee233853197.68b7c3d0bf343.webp';

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
    work.variant = imgCount >= 5 ? 'collage' : VARIANTS[workNo % VARIANTS.length];
    work.no = pad(++workNo);
    pageDefs.push({ type: 'work', section: sec, work });
  });
});
secNo++;
const thankIndex = pageDefs.length;
pageDefs.push({ type: 'thankyou' });
indexEntries.push({ n: pad(secNo), label: 'Contacto', nav: 'Contacto', target: thankIndex, accent: NEUTRAL_ACCENT });

// ── Estado ──────────────────────────────────────────────────────────────────
let pages   = [];
let cur     = 0;
let lbItems = [];
let lbIndex = 0;

// ════════════════════════════════════════════════════════════════════════════
//  PLANTILLAS DE PÁGINA
// ════════════════════════════════════════════════════════════════════════════
function workCover(work) {
  const img = work.items.find(it => it.type === 'image');
  if (img) return img.src;
  const vid = work.items.find(it => it.type === 'youtube');
  return vid ? ytThumb(vid.id) : '';
}
const isVideoWork = (work) => work.items.length === 1 && work.items[0].type === 'youtube';
const playSVG = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>`;

function workBgStyle(work) {
  return `background-image:url('${workCover(work)}')`;
}

function workInfoHTML(def) {
  const w = def.work;
  // Los videos no llevan link: la miniatura con el play alcanza.
  const cta = isVideoWork(w) ? '' : `<span class="work-cta">Ver galería &#8594;</span>`;
  return `
    <span class="kicker accent">${def.section.label}</span>
    <h2 class="work-title display">${w.title}</h2>
    <span class="work-meta">${w.meta || ''}</span>
    <p class="work-desc">${w.desc || ''}</p>
    ${cta}`;
}

function workHTML(def) {
  const w   = def.work;
  const acc = def.section.accent;
  const vid = isVideoWork(w) ? ' is-video' : ''; // en videos sólo la tapa es clickeable
  const play = isVideoWork(w) ? `<button class="media-play" aria-label="Reproducir">${playSVG}</button>` : '';

  if (w.variant === 'full') {
    return `
      <div class="pg pg--work v-full${vid}" style="--accent:${acc}">
        <div class="work-bg" style="${workBgStyle(w)}"></div>
        <div class="work-bg__grad"></div>
        <span class="work-no display">${w.no}</span>
        ${play}
        <div class="work-foot">${workInfoHTML(def)}</div>
      </div>`;
  }

  if (w.variant === 'splitR' || w.variant === 'splitL') {
    const imgCol  = `<div class="work-img" style="${workBgStyle(w)}">${play}</div>`;
    const textCol = `<div class="work-col"><span class="work-no display">${w.no}</span>${workInfoHTML(def)}</div>`;
    const order   = w.variant === 'splitR' ? textCol + imgCol : imgCol + textCol;
    return `<div class="pg pg--work v-split v-${w.variant}${vid}" style="--accent:${acc}">${order}</div>`;
  }

  if (w.variant === 'editorial') {
    return `
      <div class="pg pg--work v-editorial${vid}" style="--accent:${acc}">
        <span class="work-no--ghost display">${w.no}</span>
        <div class="work-frame"><div class="work-img" style="${workBgStyle(w)}">${play}</div></div>
        <div class="work-col">${workInfoHTML(def)}</div>
      </div>`;
  }

  // collage (proyectos con muchas fotos — siempre fotos, nunca video)
  const thumbs = w.items.filter(it => it.type === 'image').slice(0, 5)
    .map((it, i) => `<div class="collage__cell c${i}" style="background-image:url('${it.src}')"></div>`).join('');
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
          <div class="pg__bar"><span>Portfolio</span><span>MMXXV</span></div>
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
          <div class="pg__bar"><span>Índice</span><span>MMXXV</span></div>
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
          <div class="about__bg" style="background-image:url('${aboutBg}')"></div>
          <div class="about__inner">
            <span class="kicker">Sobre mí</span>
            <h2 class="about-title display">HOLA,<br>SOY MARTINA</h2>
            <p class="about__bio">Realizadora audiovisual y fotógrafa. Trabajo entre el videoclip, la
              cobertura de shows en vivo y la ficción, buscando imágenes con identidad, textura y una
              estética cuidada.</p>
            <ul class="about__tags">
              <li>Cámara</li><li>Dirección</li><li>Dirección de Arte</li>
              <li>Color</li><li>Fotografía</li><li>Montaje</li>
            </ul>
          </div>
        </div>`;

    case 'divider': {
      const sec = def.section;
      const thumbs = sec.works.slice(0, 3).map(w =>
        `<div class="divider__thumb" style="background-image:url('${workCover(w)}')"></div>`).join('');
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
          <div class="pg__bar"><span>Contacto</span><span>Fin</span></div>
          <h2 class="thanks-title display">GRACIAS.</h2>
          <div class="thanks__contact">
            <a class="thanks__email" href="mailto:hola@martinalopezparafita.com">hola@martinalopezparafita.com</a>
            <div class="thanks__socials">
              <a href="#" target="_blank" rel="noopener">Instagram</a>
              <a href="#" target="_blank" rel="noopener">Behance</a>
              <a href="#" target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
          <span class="pg__foot">&copy; 2025 Martina López Parafita</span>
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
    if (isVideoWork(def.work)) {
      // Sólo la tapa del video (miniatura + play) abre el reproductor.
      front.querySelectorAll('.work-bg, .work-img, .media-play').forEach(el => {
        el.addEventListener('click', (e) => { e.stopPropagation(); openWork(def.work); });
      });
    } else {
      front.addEventListener('click', () => openWork(def.work));
    }
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
  pages.forEach((page, i) => {
    page.classList.toggle('is-flipped', i < cur);
    page.style.zIndex = (i < cur) ? i : (pages.length - i);
  });
  document.getElementById('book').classList.toggle('is-closed', cur === 0);
  updateChrome();
  updateTopnav();
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
  // Se muestra recién después del índice (portada = 0, índice = 1).
  if (cur < 2) { nav.setAttribute('hidden', ''); lastActiveTab = -1; return; }
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

// Pasa a `target` con UN solo paso de hoja, aunque haya páginas en el medio
// (salto): las hojas intermedias se reposicionan al instante y sólo se anima
// la hoja que revela la página destino.
function flipTo(target) {
  target = Math.max(0, Math.min(pages.length - 1, target));
  if (target === cur) return;
  const dir    = target > cur ? 1 : -1;
  const moving = dir > 0 ? pages[cur] : pages[target];
  const stage  = document.getElementById('stage');

  // Hacia adelante: las hojas intermedias se voltean al instante (quedan a la
  // izquierda, fuera de vista) para que `moving` revele directamente el destino.
  if (dir > 0) {
    for (let i = cur + 1; i < target; i++) {
      pages[i].style.transition = 'none';
      pages[i].classList.add('is-flipped');
      pages[i].style.zIndex = i;
    }
    void stage.offsetWidth; // aplica el cambio sin animación
    for (let i = cur + 1; i < target; i++) pages[i].style.transition = '';
  }

  cur = target;

  // Anima sólo la hoja que se da vuelta.
  moving.style.zIndex = pages.length + 5;
  moving.classList.toggle('is-flipped', pages.indexOf(moving) < target);
  const shade = moving.querySelector('.page__shade');
  if (shade) {
    shade.animate(
      [{ opacity: 0 }, { opacity: 0.85, offset: 0.5 }, { opacity: 0 }],
      { duration: 1050, easing: 'ease-in-out' }
    );
  }

  // Al terminar el giro, reconcilia el estado de todas las hojas sin animación.
  clearTimeout(reconcileTimer);
  reconcileTimer = setTimeout(() => {
    pages.forEach(p => { p.style.transition = 'none'; });
    layout();
    void stage.offsetWidth;
    pages.forEach(p => { p.style.transition = ''; });
  }, 1150);

  document.getElementById('book').classList.toggle('is-closed', cur === 0);
  updateChrome();
  updateTopnav();
}

function go(dir)        { flipTo(cur + dir); }
function goToPage(target) { flipTo(target); }

function updateChrome() {
  const controls = document.getElementById('controls');
  if (cur === 0) controls.setAttribute('hidden', '');
  else           controls.removeAttribute('hidden');
}

// ════════════════════════════════════════════════════════════════════════════
//  DESPLIEGUE DE TRABAJO
// ════════════════════════════════════════════════════════════════════════════
function tileMarkup(item) {
  const label = item.title || '';
  const meta  = item.meta ? `<span class="masonry__meta">${item.meta}</span>` : '';
  if (item.type === 'youtube') {
    return `
      <div class="masonry__media"><img src="${ytThumb(item.id)}" alt="${label}" loading="lazy" /></div>
      <button class="masonry__play" aria-label="Reproducir ${label}">${playSVG}</button>
      <div class="masonry__overlay"><span class="masonry__caption">${label}</span>${meta}</div>`;
  }
  return `
    <img src="${item.src}" alt="${label}" loading="lazy" />
    <div class="masonry__overlay"><span class="masonry__caption">${label}</span>${meta}</div>`;
}

function openWork(work) {
  if (!work) return;
  document.getElementById('workEyebrow').textContent = work.section ? work.section.label : '';
  document.getElementById('workTitle').textContent   = work.title;
  document.getElementById('workMeta').textContent    = work.meta || '';
  document.getElementById('workDesc').textContent    = work.desc || '';

  const body = document.getElementById('workBody');
  if (isVideoWork(work)) {
    const it = work.items[0];
    body.className = 'work__body work__body--single';
    body.innerHTML = `
      <div class="work__player">
        <iframe
          src="https://www.youtube.com/embed/${it.id}?rel=0&modestbranding=1&autoplay=1"
          title="${work.title}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>`;
    lbItems = [];
  } else {
    body.className = 'work__body';
    body.innerHTML = '';
    lbItems = work.items;
    const grid = document.createElement('div');
    grid.className = 'masonry';
    work.items.forEach((item, i) => {
      const el = document.createElement('div');
      el.className = 'masonry__item' + (item.type === 'youtube' ? ' masonry__item--video' : '');
      el.style.animationDelay = (i * 0.04) + 's';
      el.innerHTML = tileMarkup(item);
      el.addEventListener('click', () => openLightbox(i));
      grid.appendChild(el);
    });
    body.appendChild(grid);
  }

  const w = document.getElementById('work');
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
  } else {
    media.innerHTML = `<img src="${item.src}" alt="${label}" />`;
  }
  const metaText = item.meta ? `${label} — ${item.meta}` : label;
  caption.textContent = `${metaText}  ·  ${lbIndex + 1} / ${lbItems.length}`;
}

function lbNavigate(dir) {
  document.getElementById('lbMedia').innerHTML = '';
  lbIndex = (lbIndex + dir + lbItems.length) % lbItems.length;
  renderLightbox();
}

// ════════════════════════════════════════════════════════════════════════════
//  TECLADO / TOUCH
// ════════════════════════════════════════════════════════════════════════════
document.addEventListener('keydown', (e) => {
  const lb = document.getElementById('lightbox');
  const wk = document.getElementById('work');
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
    if (Math.abs(dx) < 45) return;
    if (dx < 0) go(1); else go(-1);
  }, { passive: true });
}

function preloadImages() {
  const load = (src) => { const img = new Image(); img.src = src; };
  load(aboutBg);
  sections.forEach(sec => sec.works.forEach(work => {
    work.items.forEach(item => {
      if (item.type === 'image')   load(item.src);
      if (item.type === 'youtube') load(ytThumb(item.id));
    });
  }));
}

// ════════════════════════════════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  buildBook();
  buildTopnav();
  initSwipe();

  document.getElementById('navPrev').addEventListener('click', () => go(-1));
  document.getElementById('navNext').addEventListener('click', () => go(1));
  document.getElementById('workClose').addEventListener('click', closeWork);
  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbPrev').addEventListener('click', () => lbNavigate(-1));
  document.getElementById('lbNext').addEventListener('click', () => lbNavigate(1));
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === document.getElementById('lightbox')) closeLightbox();
  });

  if ('requestIdleCallback' in window) requestIdleCallback(preloadImages);
  else setTimeout(preloadImages, 1500);
});
