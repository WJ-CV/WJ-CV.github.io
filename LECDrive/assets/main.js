'use strict';
// Static figures remain available when JavaScript is disabled.
const resultCarousel = document.querySelector('.results-carousel');
if (resultCarousel) {
  const slides = [...resultCarousel.querySelectorAll('.result-slide')];
  const previous = document.getElementById('results-prev');
  const next = document.getElementById('results-next');
  const counter = document.getElementById('results-counter');
  let current = 0;
  function showResult(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== current; });
    counter.textContent = `${current + 1} / ${slides.length}`;
  }
  resultCarousel.classList.add('is-interactive');
  previous.hidden = next.hidden = counter.hidden = false;
  previous.addEventListener('click', () => showResult(current - 1));
  next.addEventListener('click', () => showResult(current + 1));
  resultCarousel.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault(); showResult(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  showResult(0);
}
const config = window.LECDRIVE_CONFIG || { links: {}, demos: [] };
const resources = [['paper', 'Paper'], ['code', 'Code'], ['dataset', 'Dataset'], ['checkpoints', 'Checkpoints']];
for (const [key, title] of resources) {
  const href = config.links?.[key];
  const item = document.createElement(href ? 'a' : 'span');
  item.className = href ? 'resource' : 'resource-pending';
  item.textContent = title;
  if (href) item.href = href;
  else { const state = document.createElement('small'); state.textContent = 'Coming soon'; item.append(state); }
  document.getElementById('resource-links').append(item);
}
const gallery = document.getElementById('demo-gallery');
for (const demo of config.demos || []) {
  const figure = document.createElement('figure'); figure.className = 'demo';
  if (demo.title) { const heading = document.createElement('h3'); heading.textContent = demo.title; figure.append(heading); }
  const empty = () => {
    const box = document.createElement('div'); box.className = 'demo-empty';
    const title = document.createElement('strong'); title.textContent = 'Demo coming soon';
    const detail = document.createElement('span'); detail.textContent = 'Visual demonstrations will be released here.';
    box.append(title, detail); return box;
  };
  if (demo.src) {
    const media = document.createElement(demo.type === 'video' ? 'video' : 'img');
    media.className = 'demo-media'; media.src = demo.src;
    if (demo.type === 'video') {
      media.controls = true; media.loop = true; media.muted = true; media.playsInline = true; media.preload = 'metadata';
      media.setAttribute('aria-label', demo.title); if (demo.poster) media.poster = demo.poster;
    } else { media.alt = demo.alt || demo.title || 'LECDrive driving demonstration'; media.loading = 'lazy'; }
    media.addEventListener('error', () => media.replaceWith(empty()), { once: true });
    figure.append(media);
  } else figure.append(empty());
  if (demo.caption) { const caption = document.createElement('figcaption'); caption.textContent = demo.caption; figure.append(caption); }
  gallery.append(figure);
}
document.getElementById('copy-citation').addEventListener('click', async () => {
  const code = document.getElementById('bibtex');
  const status = document.getElementById('copy-status');
  try { await navigator.clipboard.writeText(code.textContent); status.textContent = 'Citation copied.'; }
  catch { const range = document.createRange(); range.selectNodeContents(code); const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range); status.textContent = 'Citation selected. Press Ctrl+C (or ⌘C) to copy.'; }
});
