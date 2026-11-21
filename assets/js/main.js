/* =========================================================
   Maram ALraee — Portfolio · Motion & Interactions
   Pure JS (no dependencies): Web Animations API + rAF
   ========================================================= */
(() => {
  'use strict';

  const C = window.SITE_CONTENT || {};
  const PH = C.showPlaceholders !== false;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const root = document.documentElement;
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FINE = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const EASE = 'cubic-bezier(.16,1,.3,1)';
  const EASE_IO = 'cubic-bezier(.65,0,.35,1)';
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const pad2 = n => String(n).padStart(2, '0');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const wait = ms => new Promise(r => setTimeout(r, ms));

  if (!RM) root.classList.add('motion');
  if (FINE) root.classList.add('fine');
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  /* Animate FROM a state to the element's natural CSS state */
  function from(el, props, opts = {}) {
    if (RM || !el || !el.animate) return null;
    try {
      return el.animate([Object.assign({ offset: 0 }, props)], Object.assign({ duration: 1000, easing: EASE, fill: 'backwards' }, opts));
    } catch (e) { return null; }
  }
  function fromTo(el, a, b, opts = {}) {
    if (RM || !el || !el.animate) return null;
    return el.animate([a, b], Object.assign({ duration: 1000, easing: EASE, fill: 'backwards' }, opts));
  }

  /* ---------------------------------------------------------
     LINKS
  --------------------------------------------------------- */
  const LINKS = Object.assign({
    message: 'https://ig.me/m/maram.design31',
    instagram: 'https://www.instagram.com/maram.design31/?hl=ar'
  }, C.links || {});
  $$('[data-link-key]').forEach(a => { const u = LINKS[a.dataset.linkKey]; if (u) a.href = u; });
  const yearEl = $('#year'); if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     PLACEHOLDER ART (clearly labeled, never presented as work)
  --------------------------------------------------------- */
  function phArt(w, h, seed, k, label) {
    const pal = [['#E07C98', '#F3B7C6'], ['#F3B7C6', '#E07C98'], ['#E07C98', '#FFF5F1'], ['#F3B7C6', '#FFF5F1']][seed % 4];
    const cx = [0.28, 0.74, 0.5, 0.3][(seed + k) % 4], cy = [0.3, 0.22, 0.72, 0.5][(seed * 2 + k) % 4];
    const m = Math.min(w, h), t = (seed + k) % 4;
    let s = '';
    if (t === 0) s = `<circle cx='${w * cx}' cy='${h * cy}' r='${m * .3}' fill='none' stroke='${pal[1]}' stroke-opacity='.5' stroke-width='${m * .006}'/><circle cx='${w * cx}' cy='${h * cy}' r='${m * .17}' fill='${pal[0]}' fill-opacity='.16'/>`;
    if (t === 1) { s = `<g stroke='${pal[0]}' stroke-opacity='.22' stroke-width='${m * .004}'>`; for (let i = -10; i < 22; i++) s += `<line x1='${i * m * .09}' y1='0' x2='${i * m * .09 + h * .6}' y2='${h}'/>`; s += '</g>'; }
    if (t === 2) { s = `<g fill='${pal[1]}' fill-opacity='.28'>`; for (let x = 1; x < 12; x++) for (let y = 1; y < 14; y++) s += `<circle cx='${x * w / 12}' cy='${y * h / 14}' r='${m * .005}'/>`; s += '</g>'; }
    if (t === 3) s = `<rect x='${w * .1}' y='${h * .1}' width='${w * .8}' height='${h * .8}' rx='${m * .05}' fill='none' stroke='${pal[1]}' stroke-opacity='.4' stroke-width='${m * .005}'/><rect x='${w * .16}' y='${h * .74}' width='${w * .4}' height='${m * .02}' rx='${m * .01}' fill='${pal[0]}' fill-opacity='.6'/><rect x='${w * .16}' y='${h * .79}' width='${w * .26}' height='${m * .02}' rx='${m * .01}' fill='#FFF5F1' fill-opacity='.25'/>`;
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'><defs><linearGradient id='b' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#3D2733'/><stop offset='1' stop-color='#21151B'/></linearGradient><radialGradient id='r' cx='${cx}' cy='${cy}' r='.75'><stop offset='0' stop-color='${pal[0]}' stop-opacity='.5'/><stop offset='1' stop-color='${pal[0]}' stop-opacity='0'/></radialGradient></defs><rect width='100%' height='100%' fill='url(#b)'/><rect width='100%' height='100%' fill='url(#r)'/>${s}<text x='50%' y='${h / 2}' text-anchor='middle' dominant-baseline='middle' font-family='Tahoma,Arial,sans-serif' font-size='${m * .052}' fill='#FFF5F1' fill-opacity='.92'>${label}</text><text x='50%' y='${h / 2 + m * .08}' text-anchor='middle' font-family='Arial,sans-serif' font-size='${m * .03}' fill='#F3B7C6' fill-opacity='.85' letter-spacing='3'>${w} × ${h}</text></svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  /* ---------------------------------------------------------
     SERVICES
  --------------------------------------------------------- */
  const svcGrid = $('#svcGrid');
  if (svcGrid) {
    const services = C.services || [];
    svcGrid.innerHTML = services.map((s, i) => `
      <article class="svc" data-reveal="up">
        <div class="svc-inner">
          <div class="svc-top"><span class="svc-num">${pad2(i + 1)}</span><span class="svc-ico"><svg><use href="#s-${esc(s.icon || (i % 6) + 1)}"/></svg></span></div>
          <h3>${esc(s.ar)}</h3>
          <span class="svc-en">${esc(s.en)}</span>
          <p>${esc(s.desc)}</p>
          <a class="svc-link" href="${esc(LINKS.message)}" target="_blank" rel="noopener">اطلب الخدمة <svg><use href="#i-arrow"/></svg></a>
        </div>
      </article>`).join('');
    if (FINE) $$('.svc-inner', svcGrid).forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        card.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
        card.style.setProperty('--my', (py * 100).toFixed(1) + '%');
        card.style.transform = `rotateX(${((.5 - py) * 7).toFixed(2)}deg) rotateY(${((px - .5) * 9).toFixed(2)}deg) translateZ(0)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  /* ---------------------------------------------------------
     WORK — stacked project cards + lightbox
  --------------------------------------------------------- */
  let projects = (C.projects || []).filter(p => p && Array.isArray(p.images) && p.images.length);
  let projectsPH = false;
  if (!projects.length && PH) {
    projectsPH = true;
    projects = [
      ['مكان مشروع هوية بصرية', 'هوية بصرية', 'BRAND IDENTITY'],
      ['مكان مشروع سوشيال ميديا', 'سوشيال ميديا', 'SOCIAL MEDIA'],
      ['مكان مشروع مطبوعات', 'مطبوعات', 'PRINT DESIGN'],
      ['مكان مشروع تصميم جرافيك', 'تصميم جرافيك', 'GRAPHIC DESIGN']
    ].map((d, i) => ({
      title: d[0], category: d[1], categoryEn: d[2], placeholder: true,
      description: 'مساحة مؤقتة للمعاينة فقط — أضيفي صور هذا المشروع من ملف content.js.',
      images: [phArt(1600, 1100, i, 0, 'الصورة الرئيسية'), phArt(1080, 1350, i, 1, 'صورة 02'), phArt(1080, 1080, i, 2, 'صورة 03'), phArt(1080, 1350, i, 3, 'صورة 04')]
    }));
  }

  // work rows are built after the marquee helper is defined (see WORK ROWS below)
  let suppressClick = false;

  // Lightbox
  const lb = {
    el: $('#lb'), img: $('#lbImg'), frame: $('#lbFrame'), thumbs: $('#lbThumbs'),
    num: $('#lbNum'), title: $('#lbTitle'), cat: $('#lbCat'), count: $('#lbCount'),
    p: 0, k: 0, last: null
  };
  function lockScroll(on) { root.classList.toggle('lock', on); }
  function lbRender(dir = 0, projectChange = false) {
    const pr = projects[lb.p]; if (!pr) return;
    const n = pr.images.length;
    lb.num.textContent = pad2(lb.p + 1);
    lb.title.textContent = pr.title;
    lb.cat.textContent = [pr.categoryEn, pr.category].filter(Boolean).join(' · ');
    lb.count.textContent = `${pad2(lb.k + 1)} / ${pad2(n)}`;
    lb.img.src = pr.images[lb.k];
    lb.img.alt = `${pr.title} — صورة ${lb.k + 1}`;
    if (projectChange || !lb.thumbs.children.length) {
      lb.thumbs.innerHTML = pr.images.map((s, k) => `<button data-k="${k}" aria-label="صورة ${k + 1}"><img src="${esc(s)}" alt="" loading="lazy"></button>`).join('');
      from($('.lb-meta', lb.el), { opacity: 0, transform: 'translateY(16px)' }, { duration: 700 });
    }
    $$('button', lb.thumbs).forEach((b, k) => b.classList.toggle('on', k === lb.k));
    const on = lb.thumbs.children[lb.k]; if (on && on.scrollIntoView) on.scrollIntoView({ block: 'nearest', inline: 'center', behavior: RM ? 'auto' : 'smooth' });
    if (dir) from(lb.img, { opacity: 0, transform: `translateX(${dir * -70}px) scale(.97)` }, { duration: 750 });
    else from(lb.img, { opacity: 0, transform: 'scale(.94)' }, { duration: 900 });
    // preload neighbours
    [lb.k + 1, lb.k - 1].forEach(j => { const s = pr.images[(j + n) % n]; if (s) { const im = new Image(); im.src = s; } });
  }
  function lbOpen(p, k) {
    if (!lb.el || !projects[p]) return;
    lb.p = p; lb.k = k || 0; lb.last = document.activeElement;
    lb.thumbs.innerHTML = '';
    lb.el.hidden = false; lockScroll(true);
    from($('.lb-backdrop', lb.el), { opacity: 0 }, { duration: 500, easing: 'ease' });
    from($('.lb-top', lb.el), { opacity: 0, transform: 'translateY(-20px)' }, { duration: 800, delay: 120 });
    from($('.lb-bottom', lb.el), { opacity: 0, transform: 'translateY(20px)' }, { duration: 800, delay: 160 });
    lbRender(0, true);
    $('#lbClose').focus({ preventScroll: true });
  }
  function lbClose() {
    if (!lb.el || lb.el.hidden) return;
    const done = () => { lb.el.hidden = true; lockScroll(false); if (lb.last) lb.last.focus({ preventScroll: true }); };
    if (RM) return done();
    const a = lb.el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 380, easing: 'ease' });
    a.onfinish = done;
  }
  function lbStep(d) { const n = projects[lb.p].images.length; if (n < 2) return; lb.k = (lb.k + d + n) % n; lbRender(d); }
  function lbProject(d) { const N = projects.length; lb.p = (lb.p + d + N) % N; lb.k = 0; lbRender(d, true); }

  document.addEventListener('click', e => {
    if (suppressClick) { e.preventDefault(); return; }
    const o = e.target.closest('[data-open]');
    if (o) { e.preventDefault(); lbOpen(+o.dataset.open, +o.dataset.img || 0); }
  });
  if (lb.el) {
    lb.el.addEventListener('click', e => {
      if (e.target.closest('[data-close]')) return lbClose();
      const t = e.target.closest('[data-k]'); if (t) { const k = +t.dataset.k; const d = k > lb.k ? 1 : -1; lb.k = k; lbRender(d); }
    });
    $('#lbNext').addEventListener('click', () => lbStep(1));
    $('#lbPrev').addEventListener('click', () => lbStep(-1));
    $('#lbNextProj').addEventListener('click', () => lbProject(1));
    let sx = null;
    lb.frame.addEventListener('pointerdown', e => { sx = e.clientX; });
    lb.frame.addEventListener('pointerup', e => { if (sx == null) return; const dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 50) lbStep(dx > 0 ? 1 : -1); });
  }

  /* ---------------------------------------------------------
     VIDEO — 3D coverflow
  --------------------------------------------------------- */
  let videos = (C.videos || []).filter(v => v && (v.src || v.poster || v.preview));
  let videosPH = false;
  if (!videos.length && PH) {
    videosPH = true;
    videos = ['9:16', '9:16', '16:9', '9:16', '9:16', '16:9', '9:16'].map((r, i) => ({ title: `مكان فيديو ${pad2(i + 1)}`, type: r === '9:16' ? 'Reels · 9:16' : 'Video · 16:9', ratio: r, placeholder: true }));
  }
  const cf = { stage: $('#cfStage'), dots: $('#cfDots'), cap: $('#cfCaption'), cards: [], idx: 0, pos: 0, dims: [], wv: 300, visible: false };
  function ratioOf(v) { const m = String(v.ratio || '9:16').split(':').map(Number); return (m[0] && m[1]) ? m[0] / m[1] : 9 / 16; }
  function cfBuild() {
    if (!cf.stage) return;
    if (!videos.length) {
      cf.stage.innerHTML = '<p class="work-empty" style="position:absolute;inset:auto 10% 40%;">فيديوهات المونتاج قيد الإضافة — قريبًا.</p>';
      $$('.cf-nav').forEach(b => b.hidden = true);
      return;
    }
    cf.stage.innerHTML = videos.map((v, i) => `
      <div class="cf-card" data-i="${i}" role="group" aria-label="${esc(v.title || 'فيديو')} (${i + 1} من ${videos.length})">
        <div class="cf-media">${v.poster ? `<img src="${esc(v.poster)}" alt="" loading="lazy" decoding="async">` : ''}</div>
        ${v.placeholder ? `<div class="cf-ph"><div><div class="ph-ico"><svg><use href="#i-play"/></svg></div><b>أضيفي فيديو هنا</b><span>${esc(v.ratio)} · من ملف content.js</span></div></div>` : ''}
        <div class="cf-shade"></div>
        <span class="cf-ratio">${esc(v.ratio || '9:16')}</span>
        <div class="cf-info"><span class="cf-play"><svg><use href="#i-play"/></svg></span><span class="cf-title">${esc(v.title || '')}${v.type ? `<small>${esc(v.type)}</small>` : ''}</span></div>
        <div class="cf-dim"></div>
      </div>`).join('');
    cf.cards = $$('.cf-card', cf.stage);
    cf.dots.innerHTML = videos.map((v, i) => `<button aria-label="الفيديو ${i + 1}"></button>`).join('');
    cf.idx = cf.pos = Math.max(0, videos.findIndex(v => /فلسطين/.test(v.title)));
    cfMeasure(); cfApply(cf.pos); cfSync();
  }
  function cfMeasure() {
    if (!cf.cards.length) return;
    const H = cf.stage.clientHeight, W = cf.stage.clientWidth;
    const hv = H * 0.9; let wv = hv * 9 / 16; if (wv > W * 0.62) wv = W * 0.62;
    cf.wv = wv;
    cf.dims = videos.map(v => {
      const r = ratioOf(v);
      if (r <= 1) { const h = Math.min(hv, wv / r); return { w: h * r, h }; }
      const w = Math.min(W * 0.82, wv * 2.15); return { w, h: w / r };
    });
    cf.cards.forEach((c, i) => { c.style.width = cf.dims[i].w + 'px'; c.style.height = cf.dims[i].h + 'px'; });
  }
  function cfLayout(a) {
    const n = cf.cards.length, x = new Array(n).fill(0), gap = -cf.wv * 0.06;
    const foot = j => cf.dims[j].w * (j === a ? 1 : 0.5);
    for (let j = a + 1; j < n; j++) x[j] = x[j - 1] + (foot(j - 1) + foot(j)) / 2 + gap;
    for (let j = a - 1; j >= 0; j--) x[j] = x[j + 1] - (foot(j + 1) + foot(j)) / 2 - gap;
    return x.map((xx, j) => {
      const d = j - a, ad = Math.abs(d), sd = Math.sign(d);
      return { x: -xx, ry: sd * -42 * Math.min(ad, 1) * -1, z: -Math.min(ad, 4) * 130, s: 1 - Math.min(ad, 4) * 0.05, o: ad > 3.4 ? 0 : 1, dim: Math.min(ad, 3) * 0.24 };
    });
  }
  function cfApply(pos) {
    if (!cf.cards.length) return;
    const a0 = Math.floor(pos), a1 = Math.min(a0 + 1, cf.cards.length - 1), f = pos - a0;
    const L0 = cfLayout(clamp(a0, 0, cf.cards.length - 1)), L1 = cfLayout(a1);
    cf.cards.forEach((c, j) => {
      const A = L0[j], B = L1[j];
      const x = lerp(A.x, B.x, f), ry = lerp(A.ry, B.ry, f), z = lerp(A.z, B.z, f), s = lerp(A.s, B.s, f), o = lerp(A.o, B.o, f), dim = lerp(A.dim, B.dim, f);
      // left-side cards turn their outer (left) edge away, right-side cards their right edge
      const side = x < -1 ? -1 : x > 1 ? 1 : 0;
      const rot = side * Math.abs(ry);
      c.style.transform = `translate(-50%,-50%) translate3d(${x.toFixed(1)}px,0,${z.toFixed(1)}px) rotateY(${rot.toFixed(2)}deg) scale(${s.toFixed(3)})`;
      c.style.opacity = o.toFixed(3);
      c.style.zIndex = String(100 - Math.round(Math.abs(j - pos) * 10));
      c.style.pointerEvents = o < .2 ? 'none' : '';
      const dm = c.lastElementChild; if (dm) dm.style.opacity = dim.toFixed(3);
    });
  }
  function cfSync() {
    cf.cards.forEach((c, i) => c.classList.toggle('is-active', i === cf.idx));
    $$('button', cf.dots).forEach((b, i) => { b.classList.toggle('on', i === cf.idx); b.setAttribute('aria-current', i === cf.idx ? 'true' : 'false'); });
    const v = videos[cf.idx]; if (cf.cap) cf.cap.textContent = v ? (v.title || '') : '';
    cfPreview();
  }
  function cfGo(i) {
    if (!cf.cards.length) return;
    cf.idx = clamp(i, 0, cf.cards.length - 1); cf.pos = cf.idx;
    cfApply(cf.pos); cfSync();
  }
  function cfPreview() {
    cf.cards.forEach((c, i) => {
      const v = videos[i]; const vid = $('video', c);
      if (i === cf.idx && cf.visible && !v.placeholder && (v.preview || v.src)) {
        let el = vid;
        if (!el) {
          el = document.createElement('video');
          el.muted = true; el.loop = true; el.playsInline = true; el.setAttribute('playsinline', ''); el.preload = 'metadata';
          if (v.poster) el.poster = v.poster;
          el.src = v.preview || v.src;
          $('.cf-media', c).appendChild(el);
        }
        const pr = el.play(); if (pr && pr.catch) pr.catch(() => {});
      } else if (vid) vid.pause();
    });
  }
  function openPlayer(v) {
    const pl = $('#player'), box = $('#playerBox'); if (!pl) return;
    if (v && v.src && !v.placeholder) {
      const r = ratioOf(v);
      box.innerHTML = `<video controls autoplay playsinline ${v.poster ? `poster="${esc(v.poster)}"` : ''} src="${esc(v.src)}" style="${r < 1 ? 'height:84vh;width:auto' : 'width:min(92vw,1280px);height:auto'}"></video>`;
    } else {
      box.innerHTML = '<div class="player-empty"><b>لم يُضَف فيديو بعد</b><p>هذه بطاقة مؤقتة. أضيفي رابط الفيديو وصورة الغلاف من ملف content.js وسيعمل التشغيل مباشرة.</p></div>';
    }
    cf.cards.forEach(c => { const x = $('video', c); if (x) x.pause(); });
    lb.last = document.activeElement;
    pl.hidden = false; lockScroll(true);
    from($('.player-backdrop', pl), { opacity: 0 }, { duration: 450, easing: 'ease' });
    from(box, { opacity: 0, transform: 'scale(.92) translateY(30px)' }, { duration: 800 });
    $('.player-close', pl).focus({ preventScroll: true });
  }
  function closePlayer() {
    const pl = $('#player'); if (!pl || pl.hidden) return;
    const v = $('video', pl); if (v) v.pause();
    const done = () => { pl.hidden = true; $('#playerBox').innerHTML = ''; lockScroll(false); cfPreview(); if (window.__crumpleBack) window.__crumpleBack(); if (lb.last) lb.last.focus({ preventScroll: true }); };
    if (RM) return done();
    pl.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 320, easing: 'ease' }).onfinish = done;
  }
  if (cf.stage) {
    cfBuild();
    $('#cfNext').addEventListener('click', () => cfGo(cf.idx + 1));
    $('#cfPrev').addEventListener('click', () => cfGo(cf.idx - 1));
    cf.dots.addEventListener('click', e => { const b = e.target.closest('button'); if (b) cfGo($$('button', cf.dots).indexOf(b)); });
    cf.stage.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); cfGo(cf.idx + 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); cfGo(cf.idx - 1); }
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPlayer(videos[cf.idx]); }
    });
    let drag = null;
    cf.stage.addEventListener('pointerdown', e => {
      if (!cf.cards.length || e.button > 0) return;
      drag = { x0: e.clientX, moved: false, card: e.target.closest('.cf-card'), id: e.pointerId };
    });
    cf.stage.addEventListener('pointermove', e => {
      if (!drag) return;
      const dx = e.clientX - drag.x0;
      if (!drag.moved && Math.abs(dx) > 8) { drag.moved = true; cf.stage.classList.add('dragging'); try { cf.stage.setPointerCapture(drag.id); } catch (_) {} }
      if (drag.moved) {
        let p = cf.idx + dx / (cf.wv * 0.75);
        const max = cf.cards.length - 1;
        if (p < 0) p = p * 0.3; if (p > max) p = max + (p - max) * 0.3;
        cf.pos = p; cfApply(clamp(p, 0, max));
      }
    });
    const end = e => {
      if (!drag) return;
      const d = drag; drag = null; cf.stage.classList.remove('dragging');
      if (d.moved) {
        const dx = e.clientX - d.x0;
        let t = Math.round(cf.pos);
        if (t === cf.idx && Math.abs(dx) > 40) t = cf.idx + (dx > 0 ? 1 : -1);
        cfGo(t);
      } else if (d.card && e.type === 'pointerup') {
        const i = +d.card.dataset.i;
        if (i === cf.idx) openPlayer(videos[i]); else cfGo(i);
      }
    };
    cf.stage.addEventListener('pointerup', end);
    cf.stage.addEventListener('pointercancel', end);
    new IntersectionObserver(es => { cf.visible = es[0].isIntersecting; cfPreview(); }, { threshold: 0.25 }).observe(cf.stage);
  }
  const pl = $('#player');
  if (pl) pl.addEventListener('click', e => { if (e.target.closest('[data-close]')) closePlayer(); });

  /* ---------------------------------------------------------
     CLIENTS / TESTIMONIALS
  --------------------------------------------------------- */
  const clientsSec = $('#clients');
  let testi = (C.testimonials || []).filter(t => t && t.approved === true && t.text);
  let testiPH = false;
  if (!testi.length) {
    if (PH) { testiPH = true; testi = Array.from({ length: 6 }, (_, i) => ({ text: 'مساحة مخصّصة لمراجعة عميل. ستظهر هنا فقط بعد اعتمادها وتأكيد أنها مراجعة حقيقية.', role: `مراجعة ${pad2(i + 1)}` })); }
    else if (clientsSec) clientsSec.remove();
  }
  const clientsTrack = $('#clientsTrack');
  const tcardHTML = t => `<article class="tcard${testiPH ? ' is-ph' : ''}"><div class="tcard-in">${testiPH ? '<span class="ph-badge">نموذج</span>' : ''}<svg class="tq" aria-hidden="true"><use href="#i-quote"/></svg><p>${esc(t.text)}</p>${t.role ? `<span class="role">${esc(t.role)}</span>` : ''}</div></article>`;

  /* ---------------------------------------------------------
     MARQUEES (ribbons + clients) — seamless loop
  --------------------------------------------------------- */
  const STAR = '<svg class="mq-sep" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0z" fill="currentColor"/></svg>';
  const WORDS = ['GRAPHIC DESIGN', 'VIDEO EDITING', 'BRANDING', 'SOCIAL MEDIA', 'REELS & ADS', 'PRINT DESIGN'];
  const loops = [];
  function makeLoop(track, html, opts) {
    track.innerHTML = `<div class="group">${html}</div>`;
    const g = track.firstElementChild;
    let reps = 1;
    while (g.offsetWidth < innerWidth * 1.15 && reps < 10) { g.insertAdjacentHTML('beforeend', html); reps++; }
    track.appendChild(g.cloneNode(true));
    track.lastElementChild.setAttribute('aria-hidden', 'true');
    return Object.assign({ track, g, html, w: g.offsetWidth, x: 0, v: 0, hover: 0, drag: null }, opts);
  }
  function remeasureLoops() { loops.forEach(l => { l.w = l.g.offsetWidth || l.w; }); }
  $$('[data-marquee]').forEach(tr => {
    const isR2 = !!tr.closest('.r2');
    const html = WORDS.map((w, i) => `<span class="mq-item${isR2 && i % 2 ? ' solid' : ''}">${esc(w)}</span>${STAR}`).join('');
    const l = makeLoop(tr, html, { dir: +tr.dataset.marquee, speed: +tr.dataset.speed || 60, boost: true });
    if (l.dir > 0) l.x = -l.w / 2;
    loops.push(l);
  });
  function attachDrag(row, loop, hoverSlow) {
    if (FINE && hoverSlow) { row.addEventListener('pointerenter', () => loop.hover = 1); row.addEventListener('pointerleave', () => loop.hover = 0); }
    row.addEventListener('pointerdown', e => {
      if (e.button > 0) return;
      loop.drag = { x0: e.clientX, x: loop.x, last: e.clientX, t: performance.now(), id: e.pointerId, moved: false };
    });
    row.addEventListener('pointermove', e => {
      const d = loop.drag; if (!d) return;
      const dx = e.clientX - d.x0;
      if (!d.moved && Math.abs(dx) > 6) { d.moved = true; row.classList.add('dragging'); try { row.setPointerCapture(d.id); } catch (_) {} }
      if (!d.moved) return;
      const now = performance.now(), dt = Math.max(1, now - d.t);
      loop.v = (e.clientX - d.last) / dt * 1000; d.last = e.clientX; d.t = now;
      loop.x = d.x + dx;
    });
    const up = () => { const d = loop.drag; if (!d) return; loop.drag = null; row.classList.remove('dragging');
      if (d.moved) { suppressClick = true; setTimeout(() => { suppressClick = false; }, 60); } };
    row.addEventListener('pointerup', up); row.addEventListener('pointercancel', up);
  }
  let clientsLoop = null;
  if (clientsTrack && testi.length) {
    clientsLoop = makeLoop(clientsTrack, testi.map(tcardHTML).join(''), { dir: -1, speed: 34, boost: false });
    loops.push(clientsLoop);
    attachDrag($('#clientsRow'), clientsLoop, true);
  }

  /* ---------------------------------------------------------
     WORK ROWS — two slow opposing marquees of designs
  --------------------------------------------------------- */
  const workRows = $('#workRows');
  if (workRows) {
    if (!projects.length) {
      workRows.innerHTML = '<p class="work-empty">الأعمال قيد الإضافة — قريبًا.</p>';
    } else {
      const items = [];
      projects.forEach((p, i) => p.images.forEach((src, k) => items.push({ p, i, k, src: (p.thumbs && p.thumbs[k]) || src, ar: (p.ratios && p.ratios[k]) || 0.8 })));
      // interleave projects so neighbours differ
      const byP = projects.map((_, i) => items.filter(x => x.i === i)); const mixed = [];
      for (let r = 0; byP.some(a => a.length); r++) byP.forEach(a => { if (a.length) mixed.push(a.shift()); });
      const rows = [[], []]; mixed.forEach((x, n) => rows[n % 2].push(x));
      const itemHTML = x => `<button class="wk" style="--ar:${x.ar}" data-open="${x.i}" data-img="${x.k}" data-cursor="عرض" aria-label="عرض ${esc(x.p.title)}"><img src="${esc(x.src)}" alt="${esc(x.p.title)}" loading="lazy" decoding="async" draggable="false"><span class="wi-cap"><small>${esc(x.p.categoryEn || '')}</small><b>${esc(x.p.title)}</b></span></button>`;
      [['#workRow1', rows[0], -1], ['#workRow2', rows[1], 1]].forEach(([sel, list, dir]) => {
        const row = $(sel), tr = $('.track', row);
        const l = makeLoop(tr, list.map(itemHTML).join(''), { dir, speed: 62, boost: false });
        if (dir > 0) l.x = -l.w / 2;
        loops.push(l); attachDrag(row, l, true);
        $$('[data-open]', tr).forEach(b => b.setAttribute('tabindex', b.closest('[aria-hidden="true"]') ? '-1' : '0'));
      });
    }
  }


  /* =========================================================
     WORK SPHERE + CRUMPLED VIDEO REEL (new sections inside the first site)
  ========================================================= */
  /* designs float in a slowly turning sphere: drag to spin, click to open the project */
  const orbit = $('#orbit');
  const designsLabel = n => n === 1 ? 'تصميم واحد' : n === 2 ? 'تصميمان' : n <= 10 ? `${n} تصاميم` : `${n} تصميمًا`;
  if (orbit && !projects.length) {
    orbit.innerHTML = '<p class="work-empty">الأعمال قيد الإضافة — قريبًا.</p>';
  } else if (orbit) {
    const cap = $('#orbitCap');
    // pick round-robin across projects so every project shows, without crowding the sphere
    const MAX = innerWidth < 640 ? 16 : 26;
    const list = [];
    for (let round = 0; list.length < MAX; round++) {
      let added = false;
      projects.forEach((p, pi) => {
        if (list.length < MAX && round < p.images.length) {
          list.push({ pi, ii: round, title: p.title, src: (p.thumbs && p.thumbs[round]) || p.images[round], r: (p.ratios && p.ratios[round]) || 0.8 });
          added = true;
        }
      });
      if (!added) break;
    }
    orbit.insertAdjacentHTML('beforeend', list.map((it, k) =>
      { const pr = projects[it.pi], th = i => esc((pr.thumbs && pr.thumbs[i]) || pr.images[i]), cnt = pr.images.length;
        // each project is a folder: its cover on top, the next designs peeking out behind, and the count
        return `<button class="ob" type="button" data-k="${k}" data-cursor="عرض" aria-label="${esc(it.title)}، التصميم ${it.ii + 1}"><span class="ob-f"><img src="${esc(it.src)}" alt="" loading="lazy" decoding="async" draggable="false"></span></button>`; }).join(''));
    const els = $$('.ob', orbit), n = els.length;
    // even spread on a sphere (golden-angle spiral)
    const ga = Math.PI * (3 - Math.sqrt(5));
    // keep away from the poles: a point on the spin axis would never move
    const pts = els.map((_, i) => { const y = (1 - ((i + 0.5) / n) * 2) * 0.82, r = Math.sqrt(1 - y * y), t = ga * i; return [Math.cos(t) * r, y, Math.sin(t) * r]; });
    let rx = 300, ry = 240;
    const size = () => {
      const W = orbit.clientWidth, H = orbit.clientHeight;
      rx = Math.min(W * 0.4, H * 0.78); ry = H * 0.34;
      const base = Math.max(74, Math.min(170, Math.min(W, H) * 0.2));
      els.forEach((el, i) => { el.style.width = base + 'px'; el.style.height = (base / list[i].r) + 'px'; });
    };
    size(); addEventListener('resize', size);

    const AUTO = RM ? 0 : (Math.PI * 2) / 16;   // one turn every 16s
    let ay = 0, ax = -0.22, vy = AUTO, vx = 0, slow = 1, last = 0, running = false, drag = null, moved = false;
    const frame = t => {
      if (!running) return;
      const dt = Math.min(0.05, (t - (last || t)) / 1000); last = t;
      if (!drag) { vy += (AUTO * slow - vy) * Math.min(1, dt * 1.6); vx *= 0.9; ax += (-0.22 - ax) * Math.min(1, dt * 0.8); }
      ay += vy * dt; ax = Math.max(-0.7, Math.min(0.7, ax + vx * dt));
      const cy = Math.cos(ay), sy = Math.sin(ay), cx = Math.cos(ax), sx = Math.sin(ax);
      for (let i = 0; i < n; i++) {
        const [x, y, z] = pts[i];
        const x1 = x * cy + z * sy, z1 = -x * sy + z * cy;
        const y2 = y * cx - z1 * sx, z2 = y * sx + z1 * cx;   // z2: 1 = front
        const d = (z2 + 1) / 2;
        const s = 0.42 + 0.58 * d;
        const el = els[i];
        el.style.transform = `translate(-50%,-50%) translate3d(${(x1 * rx).toFixed(1)}px,${(y2 * ry).toFixed(1)}px,0) scale(${s.toFixed(3)})`;
        el.style.zIndex = Math.round(d * 1000);
        el.style.opacity = (0.28 + 0.72 * d * d).toFixed(3);
      }
      requestAnimationFrame(frame);
    };
    new IntersectionObserver(es => {
      const vis = es[0].isIntersecting;
      if (vis && !running) { running = true; last = 0; requestAnimationFrame(frame); }
      else if (!vis) running = false;
    }).observe(orbit);

    // drag to spin (horizontal), tilt a little (vertical)
    orbit.addEventListener('pointerdown', e => {
      if (e.button) return;
      drag = { x: e.clientX, y: e.clientY, t: performance.now(), id: e.pointerId }; moved = false;
    });
    addEventListener('pointermove', e => {
      if (!drag) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!moved && Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(dy)) { moved = true; orbit.classList.add('dragging'); }
      if (!moved) return;
      const now = performance.now(), dt = Math.max(1, now - drag.t) / 1000;
      vy = (dx / rx) / dt * 0.9; vx = (dy / ry) / dt * 0.3;
      ay += dx / rx; ax = Math.max(-0.7, Math.min(0.7, ax + dy / ry * 0.3));
      drag.x = e.clientX; drag.y = e.clientY; drag.t = now;
    });
    const endDrag = () => { if (!drag) return; drag = null; orbit.classList.remove('dragging'); setTimeout(() => { moved = false; }, 0); };
    addEventListener('pointerup', endDrag); addEventListener('pointercancel', endDrag);

    orbit.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') slow = 0.35; });
    orbit.addEventListener('pointerleave', () => { slow = 1; hide(); });
    // the project name shows only while a design is under the pointer (or focused)
    const show = el => { const it = list[+el.dataset.k]; cap.textContent = `${it.title}، ${designsLabel(projects[it.pi].images.length)}`; cap.classList.add('on'); };
    const hide = () => cap.classList.remove('on');
    orbit.addEventListener('pointerover', e => { const el = e.target.closest('.ob'); if (el) show(el); });
    orbit.addEventListener('pointerout', e => { const el = e.target.closest('.ob'); if (el && !el.contains(e.relatedTarget)) hide(); });
    orbit.addEventListener('focusin', e => { const el = e.target.closest('.ob'); if (el && el.matches(':focus-visible')) { show(el); slow = 0.35; } });
    orbit.addEventListener('focusout', () => { slow = 1; hide(); });
    orbit.addEventListener('click', e => {
      if (moved) { e.preventDefault(); e.stopPropagation(); return; }
      const el = e.target.closest('.ob'); if (!el) return;
      const it = list[+el.dataset.k]; lbOpen(it.pi, it.ii);
    });
  }


  /* ---------------- vlist: crumpled drafts drifting by; the one you point at unfolds ---------------- */
  const fmtD = s => { s = Math.round(s); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
  const reel = $('#vReel'), vtrack = $('#vTrack');
  const vlist = videos.filter(v => v.src && !v.placeholder);
  if (reel && vtrack && vlist.length) {
    const SC = 1.5;                                         // sheets are rendered at 1.5x
    const kSize = () => innerWidth < 640 ? 0.68 : innerWidth < 1100 ? 0.85 : 1;
    const durs = [];
    const cardHTML = (v, i, clone) => {
      const [fw, fh] = v.crumpleSize || [420, 700];
      return `<button class="crc" type="button" data-v="${i}" data-cursor="تشغيل" ${clone ? 'tabindex="-1" aria-hidden="true"' : `aria-label="تشغيل فيديو ${esc(v.title)}"`}
        style="--fw:${(fw / SC).toFixed(1)};--fh:${(fh / SC).toFixed(1)};--pad:${(Math.max(fw, fh) * 0.06 / 1.12 / SC).toFixed(1)};--n:${v.crumpleFrames || 12}">
        <span class="crs" style="background-image:url('${esc(v.crumple || v.poster)}')"></span>
        <video class="crv" muted loop playsinline preload="none"></video>
        <span class="crc-cap"><b>${esc(v.title)}</b><time data-i="${i}"></time></span>
      </button>`;
    };
    // one set, then clones until the vtrack is at least two screens wide
    vtrack.innerHTML = vlist.map((v, i) => cardHTML(v, i, false)).join('');
    let setW = 0;
    const build = () => {
      $$('.crc[aria-hidden]', vtrack).forEach(e => e.remove());
      vtrack.style.setProperty('--k', kSize());
      setW = vtrack.scrollWidth;
      let reps = Math.max(1, Math.ceil((innerWidth * 2) / setW));
      vtrack.insertAdjacentHTML('beforeend', Array.from({ length: reps }, () => vlist.map((v, i) => cardHTML(v, i, true)).join('')).join(''));
      setW = setW + parseFloat(getComputedStyle(vtrack).columnGap || 0);
    };
    build();
    let cards = $$('.crc', vtrack);
    const state = new WeakMap();
    const init = () => { cards = $$('.crc', vtrack); cards.forEach(c => { if (!state.has(c)) state.set(c, { f: (+c.style.getPropertyValue('--n') || 12) - 1, shown: -1 }); }); fillDurations(); };

    function fillDurations() {
      $$('time[data-i]', vtrack).forEach(t => { const d = durs[+t.dataset.i]; if (d) { t.textContent = fmtD(d); t.setAttribute('datetime', `PT${Math.round(d)}S`); } });
    }
    new IntersectionObserver((es, io) => {
      if (!es[0].isIntersecting) return; io.disconnect();
      vlist.forEach((v, i) => {
        const m = document.createElement('video'); m.preload = 'metadata'; m.muted = true; m.src = v.src;
        m.addEventListener('loadedmetadata', () => { if (isFinite(m.duration)) { durs[i] = m.duration; fillDurations(); } m.removeAttribute('src'); m.load(); }, { once: true });
      });
    }, { rootMargin: '400px' }).observe(reel);

    let x = 0, speed = 0, last = 0, running = false, hover = null, drag = null, moved = false;
    const SPEED = RM ? 0 : 95;                                // px per second
    const frame = now => {
      if (!running) return;
      const dt = Math.min(0.05, (now - (last || now)) / 1000); last = now;
      const target = (hover || drag) ? 0 : SPEED;
      speed += (target - speed) * Math.min(1, dt * 4);
      if (!drag) x -= speed * dt;
      if (x <= -setW) x += setW; if (x > 0) x -= setW;
      vtrack.style.transform = `translate3d(${x.toFixed(1)}px,0,0)`;
      // the clip under the pointer (or nearest the middle) unfolds and plays its preview; the rest stay crumpled
      let active = hover;
      if (!active) {
        const mid = innerWidth / 2; let best = 1e9;
        for (const c of cards) { const r = c.getBoundingClientRect(); const d = Math.abs(r.left + r.width / 2 - mid); if (d < best) { best = d; active = c; } }
      }
      for (const c of cards) {
        const st = state.get(c), n = +c.style.getPropertyValue('--n') || 12;
        const goal = c === active ? 0 : n - 1;
        st.f += Math.sign(goal - st.f) * Math.min(Math.abs(goal - st.f), dt * 30);
        const fi = Math.round(st.f);
        if (fi !== st.shown) { c.style.setProperty('--i', fi); st.shown = fi; }
        c.classList.toggle('on', c === active);
        const vEl = c.querySelector('video');
        if (fi === 0 && c === active && !RM) {
          if (!c.classList.contains('playing')) {
            const v = vlist[+c.dataset.v];
            if (v.preview && !vEl.src) vEl.src = v.preview;
            if (vEl.src) vEl.play().then(() => c.classList.add('playing')).catch(() => {});
          }
        } else if (c.classList.contains('playing')) { vEl.pause(); c.classList.remove('playing'); }
      }
      requestAnimationFrame(frame);
    };
    init();
    new IntersectionObserver(es => {
      const vis = es[0].isIntersecting;
      if (vis && !running) { running = true; last = 0; requestAnimationFrame(frame); }
      else if (!vis) running = false;
    }).observe(reel);
    addEventListener('resize', () => { build(); init(); });

    vtrack.addEventListener('pointerover', e => { if (e.pointerType !== 'touch') { const c = e.target.closest('.crc'); if (c) hover = c; } });
    reel.addEventListener('pointerleave', () => { hover = null; });
    vtrack.addEventListener('focusin', e => { const c = e.target.closest('.crc'); if (c) hover = c; });
    vtrack.addEventListener('focusout', () => { hover = null; });
    // swipe / drag the reel
    reel.addEventListener('pointerdown', e => { if (e.button) return; drag = { x: e.clientX, y: e.clientY }; moved = false; });
    addEventListener('pointermove', e => {
      if (!drag) return;
      const dx = e.clientX - drag.x;
      if (!moved && Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(e.clientY - drag.y)) moved = true;
      if (moved) { x += dx; drag.x = e.clientX; drag.y = e.clientY; }
    });
    const end = () => { if (drag) { drag = null; setTimeout(() => { moved = false; }, 0); } };
    addEventListener('pointerup', end); addEventListener('pointercancel', end);
    reel.addEventListener('dragstart', e => e.preventDefault());
    vtrack.addEventListener('click', e => {
      if (moved) { e.preventDefault(); return; }
      const c = e.target.closest('.crc'); if (c) openPlayer(vlist[+c.dataset.v]);
    });
  }


  /* ---------------------------------------------------------
     TEXT SPLITTING
  --------------------------------------------------------- */
  function splitChars(container) {
    const nodes = Array.from(container.childNodes);
    container.textContent = '';
    let i = 0;
    nodes.forEach(n => {
      if (n.nodeType !== 3) { container.appendChild(n); return; }
      n.textContent.split(/(\s+)/).forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)) { container.appendChild(document.createTextNode(' ')); return; }
        const w = document.createElement('span'); w.className = 'w';
        for (const ch of part) { const c = document.createElement('span'); c.className = 'c'; c.textContent = ch; c.style.setProperty('--i', i++); w.appendChild(c); }
        container.appendChild(w);
      });
    });
  }
  function splitWords(el, cls, inner) {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map(w => inner ? `<span class="w"><span class="${inner}">${esc(w)}</span></span>` : `<span class="${cls}">${esc(w)}</span>`).join(' ');
  }
  $$('[data-chars]').forEach(splitChars);
  const introName = $('[data-intro]');
  if (introName) {
    const dot = introName.querySelector('.dot');
    const txt = introName.firstChild;
    const wrap = document.createElement('span'); wrap.textContent = txt.textContent; introName.replaceChild(wrap, txt);
    splitChars(wrap);
    if (dot) dot.style.setProperty('--i', 99);
  }
  $$('[data-rise]').forEach(el => splitWords(el, null, 'wi'));
  const aboutLead = $('#aboutLead');
  if (aboutLead) splitWords(aboutLead, 'sw');
  const aboutWords = aboutLead ? $$('.sw', aboutLead) : [];

  /* ---------------------------------------------------------
     FIT big typography to its container
  --------------------------------------------------------- */
  function fitAll() {
    $$('[data-fit]').forEach(el => {
      const inner = el.querySelector('.fit-inner'); if (!inner) return;
      const ratio = parseFloat(el.dataset.ratio || 1), max = parseFloat(el.dataset.max || 220);
      el.style.fontSize = '100px';
      const w = inner.offsetWidth, avail = el.clientWidth * ratio;
      if (w > 0 && avail > 0) el.style.fontSize = Math.min(max, 100 * avail / w).toFixed(2) + 'px';
    });
  }
  fitAll();

  /* ---------------------------------------------------------
     SCROLL REVEALS
  --------------------------------------------------------- */
  const VARIANTS = {
    up: { opacity: 0, transform: 'translateY(48px)' },
    fade: { opacity: 0 },
    scale: { opacity: 0, transform: 'scale(.9)' }
  };
  function countUp(el) {
    const end = +el.dataset.count, t0 = performance.now(), d = 1600;
    if (RM) { el.textContent = end; return; }
    const step = t => { const k = Math.min(1, (t - t0) / d); el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }
  function reveal(el, extraDelay = 0) {
    if (el.classList.contains('in')) return;
    el.classList.add('in');
    $$('[data-count]', el).forEach(c => setTimeout(() => countUp(c), extraDelay + 200));
    const delay = (+el.dataset.delay || 0) + extraDelay;
    if (el.hasAttribute('data-split')) {
      $$('.c', el).forEach((c, i) => from(c, { transform: 'translateY(110%) rotate(5deg)' }, { duration: 1150, delay: delay + i * 45 }));
      return;
    }
    if (el.hasAttribute('data-rise')) {
      $$('.wi', el).forEach((w, i) => from(w, { transform: 'translateY(110%)' }, { duration: 1000, delay: delay + i * 60 }));
      return;
    }
    const v = el.dataset.reveal;
    if (v === 'clip') {
      fromTo(el, { clipPath: 'inset(16% 8% 16% 8% round 34px)', opacity: 0, transform: 'scale(1.04)' }, { clipPath: 'inset(-20% -20% -20% -20% round 0px)', opacity: 1, transform: 'scale(1)' }, { duration: 1500, delay, easing: EASE });
      return;
    }
    from(el, VARIANTS[v] || VARIANTS.up, { duration: 1100, delay });
  }
  const staggerChildren = new Set();
  $$('[data-stagger]').forEach(p => Array.from(p.children).forEach(ch => { if (ch.hasAttribute('data-reveal')) staggerChildren.add(ch); }));
  if (!RM && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        if (e.target.hasAttribute('data-stagger')) {
          const step = +e.target.dataset.stagger || 90;
          Array.from(e.target.children).filter(c => staggerChildren.has(c)).forEach((c, i) => reveal(c, i * step));
        } else reveal(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 });
    $$('[data-reveal],[data-split],[data-rise]').forEach(el => { if (!staggerChildren.has(el)) io.observe(el); });
    $$('[data-stagger]').forEach(p => io.observe(p));
  } else {
    $$('[data-reveal],[data-split],[data-rise]').forEach(el => el.classList.add('in')); $$('[data-count]').forEach(c => c.textContent = c.dataset.count);
  }

  /* ---------------------------------------------------------
     NAV — active state, sliding pill, mobile menu
  --------------------------------------------------------- */
  const nav = $('#nav'), navLinks = $('#navLinks'), pill = $('.nav-pill');
  let activeId = 'home';
  function movePill(a) {
    if (!pill) return;
    $$('a', navLinks).forEach(x => x.classList.toggle('on', x === a));
    if (!a) { pill.style.opacity = '0'; return; }
    pill.style.opacity = '1';
    pill.style.width = a.offsetWidth + 'px';
    pill.style.transform = `translateX(${a.offsetLeft}px)`;
  }
  function setActive(id) {
    activeId = id;
    $$('[data-link]').forEach(a => a.classList.toggle('active', a.dataset.link === id));
    if (!navLinks.matches(':hover')) movePill($(`a[data-link="${id}"]`, navLinks));
  }
  if (navLinks) {
    $$('a', navLinks).forEach(a => a.addEventListener('pointerenter', () => movePill(a)));
    navLinks.addEventListener('pointerleave', () => movePill($(`a[data-link="${activeId}"]`, navLinks)));
    const sio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setActive(e.target.dataset.section); }), { rootMargin: '-45% 0px -54% 0px' });
    $$('[data-section]').forEach(s => sio.observe(s));
    requestAnimationFrame(() => setActive('home'));
  }
  const burger = $('#burger'), mnav = $('#mnav');
  function menu(open) {
    if (!mnav) return;
    mnav.classList.toggle('open', open);
    mnav.setAttribute('aria-hidden', String(!open));
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة');
    lockScroll(open);
    $$('.ml', mnav).forEach((a, i) => a.style.transitionDelay = open ? (0.15 + i * 0.06) + 's' : '0s');
  }
  if (burger) burger.addEventListener('click', () => menu(!mnav.classList.contains('open')));
  if (mnav) mnav.addEventListener('click', e => { if (e.target.closest('a')) menu(false); });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closePlayer(); lbClose(); if (mnav && mnav.classList.contains('open')) menu(false); }
    if (lb.el && !lb.el.hidden) {
      if (e.key === 'ArrowLeft') lbStep(1);
      if (e.key === 'ArrowRight') lbStep(-1);
    }
  });

  /* ---------------------------------------------------------
     MAGNETIC BUTTONS + CURSOR
  --------------------------------------------------------- */
  const state = { mx: 0, my: 0, tmx: 0, tmy: 0 };
  if (FINE) {
    $$('.magnetic').forEach(el => {
      const k = el.classList.contains('icon-btn') ? .4 : .3;
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2), y = e.clientY - (r.top + r.height / 2);
        el.style.setProperty('--tx', (x * k).toFixed(1) + 'px');
        el.style.setProperty('--ty', (y * k * 1.2).toFixed(1) + 'px');
        const t = el.querySelector('.btn-t'); if (t) t.style.transform = `translate(${(x * .1).toFixed(1)}px,${(y * .14).toFixed(1)}px)`;
      });
      el.addEventListener('pointerleave', () => {
        el.style.setProperty('--tx', '0px'); el.style.setProperty('--ty', '0px');
        const t = el.querySelector('.btn-t'); if (t) t.style.transform = '';
      });
    });
    const cur = $('.cursor'), dot = cur && cur.firstElementChild;
    var cursor = { x: -100, y: -100, tx: -100, ty: -100, el: cur };
    addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse') return;
      cursor.tx = e.clientX; cursor.ty = e.clientY;
      state.tmx = (e.clientX / innerWidth - .5) * 2; state.tmy = (e.clientY / innerHeight - .5) * 2;
    }, { passive: true });
    document.addEventListener('pointerover', e => {
      if (!cur) return;
      const lab = e.target.closest('[data-cursor]');
      const link = e.target.closest('a,button,.cf-card,.clients-row');
      cur.classList.toggle('is-label', !!lab);
      dot.textContent = lab ? lab.dataset.cursor : '';
      cur.classList.toggle('is-link', !lab && !!link);
    });
    document.addEventListener('pointerleave', () => cur && cur.classList.add('is-hidden'));
    document.addEventListener('pointerenter', () => cur && cur.classList.remove('is-hidden'));
  }

  /* ---------------------------------------------------------
     MAIN LOOP — parallax, scrubs, marquees
  --------------------------------------------------------- */
  const heroWord = $('#heroWord'), heroFigure = $('#heroFigure'), beams = $('#beams'), heroText = $('.hero-text'), hero = $('#home');
  const aboutImg = $('#aboutImg'), aboutFrame = $('.about-frame');
  const speeds = $$('[data-speed]');
  const contactBig = $('#contactBig'), contact = $('#contact');
  const wcs = $$('.wc');
  const near = new Map();
  if ('IntersectionObserver' in window) {
    const nio = new IntersectionObserver(es => es.forEach(e => near.set(e.target, e.isIntersecting)), { rootMargin: '25% 0px 25% 0px' });
    [hero, $('#about'), $('#work'), contact].forEach(s => s && nio.observe(s));
  }
  const isNear = el => el && near.get(el) !== false;
  let stickTops = [];
  function measureStick() { stickTops = wcs.map(c => parseFloat(getComputedStyle(c).top) || 0); }
  measureStick();

  let lastT = performance.now(), lastY = scrollY, vel = 0, vh = innerHeight, navScrolled = null;
  function frame(t) {
    const dt = Math.min(0.064, (t - lastT) / 1000) || 0.016; lastT = t;
    const sy = window.scrollY;
    vel = lerp(vel, (sy - lastY) / dt, 0.1); lastY = sy;

    const sc = sy > 30;
    if (sc !== navScrolled && nav) { nav.classList.toggle('scrolled', sc); navScrolled = sc; }

    if (!RM) {
      // hero parallax
      if (hero && isNear(hero) && heroWord) {
        state.mx = lerp(state.mx, state.tmx, 0.06); state.my = lerp(state.my, state.tmy, 0.06);
        const p = clamp(sy / vh, 0, 1.3);
        heroWord.style.transform = `translate3d(${(state.mx * -18).toFixed(2)}px,${(sy * 0.3 + state.my * -10).toFixed(2)}px,0)`;
        heroWord.style.opacity = (1 - p * 0.85).toFixed(3);
        heroFigure.style.transform = `translate3d(${(state.mx * 14).toFixed(2)}px,${(sy * 0.06 + state.my * 6).toFixed(2)}px,0)`;
        beams.style.transform = `translate3d(${(state.mx * -8).toFixed(2)}px,${(sy * 0.16).toFixed(2)}px,0)`;
        if (heroText) { heroText.style.transform = `translate3d(0,${(sy * -0.08).toFixed(2)}px,0)`; heroText.style.opacity = (1 - clamp(p - 0.25, 0, 1) * 1.3).toFixed(3); }
      }
      // about: photo parallax + word-by-word reveal
      if (isNear($('#about'))) {
        if (aboutFrame && aboutImg) {
          const r = aboutFrame.getBoundingClientRect();
          const p = (r.top + r.height / 2 - vh / 2) / vh;
          aboutImg.style.transform = `scale(1.12) translate3d(0,${(p * -34).toFixed(2)}px,0)`;
        }
        speeds.forEach(el => {
          const r = el.getBoundingClientRect(), base = el._ty || 0;
          const c = r.top - base + r.height / 2 - vh / 2;
          el._ty = c * -(+el.dataset.speed || .1);
          el.style.transform = `translate3d(0,${el._ty.toFixed(2)}px,0)`;
        });
        if (aboutWords.length) {
          const r = aboutLead.getBoundingClientRect();
          const p = clamp((vh * 0.82 - r.top) / (r.height + vh * 0.3), 0, 1);
          const k = p * (aboutWords.length + 3);
          aboutWords.forEach((w, i) => {
            const o = 0.16 + 0.84 * clamp(k - i, 0, 1);
            if (w._o !== o) { w.style.opacity = o.toFixed(3); w._o = o; }
            const hl = i < k && i > k - 3 && p < 1;
            if (w._hl !== hl) { w.classList.toggle('hl', hl); w._hl = hl; }
          });
        }
      }
      // work: stacked cards scale back as the next one covers them
      if (wcs.length && isNear($('#work'))) {
        wcs.forEach((card, i) => {
          const inner = card.firstElementChild, dim = inner && inner.querySelector('.wc-dim');
          let p = 0;
          const next = wcs[i + 1];
          if (next) {
            const nt = next.getBoundingClientRect().top, h = card.offsetHeight;
            p = clamp(1 - (nt - stickTops[i]) / h, 0, 1);
          }
          if (card._p !== p) {
            card._p = p;
            inner.style.transform = p ? `scale(${(1 - p * 0.07).toFixed(4)})` : '';
            if (dim) dim.style.opacity = (p * 0.55).toFixed(3);
          }
        });
      }
      // contact: big word grows into place
      if (contactBig && isNear(contact)) {
        const r = contact.getBoundingClientRect();
        const p = clamp((vh - r.top) / (vh * 0.95), 0, 1), e = 1 - Math.pow(1 - p, 3);
        contactBig.style.transform = `scale(${(0.78 + 0.22 * e).toFixed(4)})`;
      }
    }

    // marquees
    loops.forEach(l => {
      if (!l.w) return;
      if (l.drag) { /* position set by pointer */ }
      else {
        let sp = RM ? 0 : l.speed;
        if (l.boost) sp *= 1 + Math.min(Math.abs(vel) / 500, 5);
        if (l.hover) sp *= 0.3;
        l.x += l.dir * sp * dt + l.v * dt;
        l.v *= Math.pow(0.04, dt);
        if (Math.abs(l.v) < 1) l.v = 0;
      }
      while (l.x <= -l.w) { l.x += l.w; if (l.drag) l.drag.x += l.w; }
      while (l.x > 0) { l.x -= l.w; if (l.drag) l.drag.x -= l.w; }
      l.track.style.transform = `translate3d(${l.x.toFixed(2)}px,0,0)`;
    });

    // cursor
    if (FINE && cursor && cursor.el) {
      cursor.x = lerp(cursor.x, cursor.tx, 0.2); cursor.y = lerp(cursor.y, cursor.ty, 0.2);
      cursor.el.style.transform = `translate3d(${cursor.x.toFixed(1)}px,${cursor.y.toFixed(1)}px,0)`;
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  /* ---------------------------------------------------------
     RESIZE / FONTS
  --------------------------------------------------------- */
  let rz;
  function onResize() {
    vh = innerHeight;
    fitAll(); remeasureLoops(); cfMeasure(); cfApply(cf.pos); measureStick();
    movePill($(`a[data-link="${activeId}"]`, navLinks));
  }
  addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(onResize, 120); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(onResize);
  addEventListener('load', onResize);

  /* ---------------------------------------------------------
     INTRO + CINEMATIC HERO ENTRANCE
  --------------------------------------------------------- */
  function heroIn() {
    if (RM) return;
    from(nav, { opacity: 0, transform: 'translateY(-100%)' }, { duration: 1200, delay: 1000 });
    $$('.beam').forEach((b, i) => from(b, { transform: 'scaleY(0)', opacity: 0 }, { duration: 1800, delay: 150 + i * 90, easing: EASE_IO }));
    from($('.hero-bg .g1'), { opacity: 0, transform: 'translateX(-50%) scale(.6)' }, { duration: 2200, delay: 100 });
    $$('#heroMega .c').forEach((c, i) => from(c, { transform: 'translateY(108%) rotate(4deg)' }, { duration: 1400, delay: 380 + i * 70 }));
    from($('.hero-word .echo'), { opacity: 0, transform: 'translateY(14%)' }, { duration: 1800, delay: 1100 });
    const fig = $('#figInner');
    fromTo(fig, { clipPath: 'inset(100% -40% 0% -40%)', transform: 'translateY(80px) scale(1.1)' }, { clipPath: 'inset(-40% -40% 0% -40%)', transform: 'translateY(0) scale(1)' }, { duration: 1700, delay: 520, easing: EASE });
    from($('.fig-glow'), { opacity: 0, transform: 'translate(-50%,-50%) scale(.5)' }, { duration: 2000, delay: 900 });
    from($('#ringCircle'), { strokeDashoffset: 1 }, { duration: 2400, delay: 900, easing: EASE_IO });
    $$('[data-hero]').forEach(el => from(el, { opacity: 0, transform: 'translateY(46px)', filter: 'blur(10px)' }, { duration: 1300, delay: 950 + (+el.dataset.hero) * 110 }));
  }

  function runIntro() {
    const intro = $('#intro');
    if (RM || !intro || getComputedStyle(intro).display === 'none') { if (intro) intro.remove(); afterIntro(); return; }
    lockScroll(true);
    $$('.c', intro).forEach((c, i) => from(c, { transform: 'translateY(115%)', opacity: 0 }, { duration: 900, delay: 100 + i * 40 }));
    from($('.intro-sub', intro), { opacity: 0, transform: 'translateY(12px)' }, { duration: 900, delay: 650 });
    from($('.intro-bar', intro), { opacity: 0 }, { duration: 600, delay: 500 });
    const bar = $('.intro-bar i', intro), count = $('.intro-count', intro);
    const img = $('#heroImg');
    const imgReady = img ? (img.complete ? Promise.resolve() : new Promise(r => { img.addEventListener('load', r, { once: true }); img.addEventListener('error', r, { once: true }); })) : Promise.resolve();
    const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    let ready = false;
    Promise.race([Promise.all([imgReady, fontsReady]), wait(3200)]).then(() => { ready = true; });
    const start = performance.now(), minDur = 1500;
    let p = 0, exited = false;
    function tick(t) {
      let target = Math.min((t - start) / minDur, 1);
      if (!ready) target = Math.min(target, 0.88);
      p = lerp(p, target, 0.09);
      if (target === 1 && p > 0.992) p = 1;
      bar.style.transform = `scaleX(${p.toFixed(4)})`;
      count.textContent = String(Math.round(p * 100)).padStart(3, '0');
      if (p < 1) requestAnimationFrame(tick); else if (!exited) { exited = true; exit(); }
    }
    requestAnimationFrame(tick);
    function exit() {
      fitAll();
      $('.intro-inner', intro).animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(-40px)' }], { duration: 650, easing: EASE_IO, fill: 'forwards' });
      heroIn();
      const a = intro.animate([{ clipPath: 'inset(0 0 0 0)' }, { clipPath: 'inset(0 0 100% 0)' }], { duration: 1150, delay: 280, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' });
      const fin = () => { intro.remove(); lockScroll(false); afterIntro(); };
      a.onfinish = fin;
      setTimeout(() => { if (document.body.contains(intro)) fin(); }, 2500);
    }
  }
  function afterIntro() {
    if (location.hash && location.hash.length > 1) {
      const t = document.getElementById(location.hash.slice(1));
      if (t) t.scrollIntoView({ behavior: 'auto' });
    }
  }
  window.scrollTo(0, 0);
  runIntro();
})();
