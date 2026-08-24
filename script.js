document.addEventListener('DOMContentLoaded', () => {

  const d = SITE_DATA;

  // ---- Theme toggle ----
  const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const toggleIcon = document.getElementById('theme-toggle-icon');

  let themeState = 'day'; // 'day' | 'night' — the settled state

  function applyTheme(theme) {
    themeState = theme;
    root.setAttribute('data-theme', theme);
    toggleBtn.setAttribute('aria-pressed', theme === 'dark');
    toggleIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', theme);
  }

  toggleBtn.addEventListener('click', () => {
    applyTheme(themeState === 'dark' ? 'day' : 'dark');
  });

  const savedTheme = localStorage.getItem('theme');
  applyTheme(savedTheme === 'dark' ? 'dark' : 'day');

  // ---- Nav ----
  document.getElementById('nav-name').textContent = d.name.toLowerCase();
  const navLinks = document.getElementById('nav-links');
  d.nav.forEach((item, i) => {
    if (i > 0) {
      const dot = document.createElement('span');
      dot.className = 'dot';
      dot.textContent = ' · ';
      navLinks.appendChild(dot);
    }
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.label;
    navLinks.appendChild(a);
  });

  // ---- Hero ----
  document.getElementById('hero-greeting').textContent = d.hero.greeting;
  document.getElementById('hero-headline').textContent = d.hero.headline;
  document.getElementById('hero-sub').textContent = d.hero.sub.replace(/\s+/g, ' ').trim();
  const cta = document.getElementById('hero-cta');
  cta.textContent = `${d.hero.cta.label} \u2192`;
  cta.href = d.hero.cta.href;

  // ---- Hero visual animation ----
  // Plays frames 010–028 once (intro), then loops 029→046 forward,
  // 046→029 backward, forward again, and so on — forever.
  (function heroAnim() {
    const img = document.getElementById('hero-anim');
    if (!img) return;

    const pad = (n) => String(n).padStart(3, '0');
    const path = (n) => `assets/hero-anim/f${pad(n)}.jpg`;

    const intro = Array.from({ length: 19 }, (_, i) => 10 + i);      // 10..28
    const fwd   = Array.from({ length: 18 }, (_, i) => 29 + i);      // 29..46
    const bwd   = Array.from({ length: 16 }, (_, i) => 45 - i);      // 45..30
    const loopChunk = fwd.concat(bwd);

    // Preload all frames so playback doesn't stutter
    intro.concat(loopChunk).forEach((n) => { new Image().src = path(n); });

    const FPS = 8;
    let phase = 'intro';
    let cursor = 0;

    function tick() {
      const seq = phase === 'intro' ? intro : loopChunk;
      img.src = path(seq[cursor]);
      cursor++;
      if (cursor >= seq.length) {
        cursor = 0;
        if (phase === 'intro') phase = 'loop';
      }
    }

    tick();
    setInterval(tick, 1000 / FPS);
  })();

  const copyBtn = document.getElementById('copy-email');
  const copyText = document.getElementById('copy-email-text');
  const copyStatus = document.getElementById('copy-email-status');
  copyText.textContent = d.contact.email;
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(d.contact.email);
      copyStatus.textContent = 'copied ✓';
      setTimeout(() => { copyStatus.textContent = ''; }, 1800);
    } catch {
      copyStatus.textContent = '';
    }
  });

  // ---- Skills ----
  const skillsGrid = document.getElementById('skills-grid');
  d.skills.forEach(s => {
    const row = document.createElement('div');
    row.className = 'skill-category';
    const pills = s.items.map(t => `
      <span class="tag skill-pill" style="--level:${t.level}%">
        <span class="skill-pill-fill"></span>
        <span class="skill-pill-label">${t.name}</span>
        <span class="skill-pill-level">${t.level}%</span>
      </span>`).join('');
    row.innerHTML = `
      <span class="skill-category-label">${s.category}</span>
      <div class="skill-tags">${pills}</div>`;
    skillsGrid.appendChild(row);
  });

  // ---- Work ----
  const workList = document.getElementById('work-list');
  d.work.forEach(w => {
    const item = document.createElement('article');
    item.className = 'work-item';
    item.innerHTML = `
      <span class="work-tag">${w.tag}</span>
      <h3 class="work-title">${w.title}</h3>
      <p class="work-role">${w.role}</p>
      <p class="work-desc">${w.description.replace(/\s+/g, ' ').trim()}</p>
      <div class="work-tags">${w.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <a class="work-link" href="${w.link}" target="_blank" rel="noopener">view project →</a>`;
    workList.appendChild(item);
  });

  // ---- Gallery ----
  const thumbTints = [
    ['#EEF2ED', '#DDE6DC'],
    ['#F2EFE9', '#E6DFD3'],
    ['#EDF0F2', '#DCE3E8'],
    ['#F1EDEE', '#E5DBDD'],
  ];
  const galleryGrid = document.getElementById('gallery-grid');
  d.gallery.forEach((g, i) => {
    // competitions & certificates get a flip-to-reveal back face
    // (sage green placeholder for now — swap in an image later)
    const isFlip = g.tags.some(t => t === 'competition' || t === 'certificate');
    const wrapper = document.createElement(g.link ? 'a' : 'div');
    wrapper.className = 'gallery-card' + (isFlip ? ' gallery-card--flip' : '');
    if (g.link) { wrapper.href = g.link; wrapper.target = '_blank'; wrapper.rel = 'noopener'; }
    const [a, b] = thumbTints[i % thumbTints.length];

    if (isFlip) {
      const icon = g.tags.includes('certificate') ? '🎓' : '🏆';
      wrapper.innerHTML = `
        <div class="flip-card">
          <span class="flip-hint">flip ↻</span>
          <div class="flip-inner">
            <div class="flip-face flip-front">
              <div class="gallery-thumb" style="--thumb-a:${a}; --thumb-b:${b};"><span>${g.title}</span></div>
              <p class="gallery-meta">${g.number} · ${g.year}</p>
              <p class="gallery-title">${g.title}</p>
              <p class="gallery-summary">${g.summary}</p>
              <p class="gallery-tags">${g.tags.join(' · ')}</p>
            </div>
            <div class="flip-face flip-back">
              <span class="flip-back-icon" aria-hidden="true">${icon}</span>
              <span class="flip-back-label">image coming soon</span>
            </div>
          </div>
        </div>`;
    } else {
      wrapper.innerHTML = `
        <div class="gallery-thumb" style="--thumb-a:${a}; --thumb-b:${b};"><span>${g.title}</span></div>
        <p class="gallery-meta">${g.number} · ${g.year}</p>
        <p class="gallery-title">${g.title}</p>
        <p class="gallery-summary">${g.summary}</p>
        <p class="gallery-tags">${g.tags.join(' · ')}</p>`;
    }
    galleryGrid.appendChild(wrapper);
  });

  // ---- Timeline ----
  const timelineList = document.getElementById('timeline-list');
  d.timeline.forEach(t => {
    const row = document.createElement('div');
    row.className = 'timeline-row';
    row.innerHTML = `
      <span class="timeline-years">${t.years}</span>
      <div>
        <div class="timeline-title">${t.title} <span class="timeline-org">· ${t.org}</span></div>
        <div class="timeline-detail">${t.detail}</div>
      </div>`;
    timelineList.appendChild(row);
  });

  // ---- About ----
  document.getElementById('about-heading').textContent = d.about.heading;
  const aboutBody = document.getElementById('about-body');
  d.about.paragraphs.forEach(p => {
    const para = document.createElement('p');
    para.textContent = p.replace(/\s+/g, ' ').trim();
    aboutBody.appendChild(para);
  });

  // ---- Footer links row ----
  const footLinksRow = document.getElementById('footer-links-row');
  const emailLink = document.createElement('a');
  emailLink.href = `mailto:${d.contact.email}`;
  emailLink.textContent = d.contact.email;
  footLinksRow.appendChild(emailLink);

  [
    { label: 'linkedin →', href: d.contact.linkedin },
    { label: 'github →', href: d.contact.github },
  ].forEach(l => {
    const a = document.createElement('a');
    a.textContent = l.label;
    a.href = l.href;
    a.target = '_blank';
    a.rel = 'noopener';
    footLinksRow.appendChild(a);
  });

  document.getElementById('contact-intro').textContent = d.contact.intro;
  document.getElementById('foot-name').textContent = d.name;
  document.getElementById('foot-year').textContent = new Date().getFullYear();

  // ---- Contact form -> opens mail app ----
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('f-name').value.trim();
    const subject = document.getElementById('f-subject').value.trim() || 'Hello';
    const message = document.getElementById('f-message').value.trim();
    const body = `${message}${name ? `\n\n— ${name}` : ''}`;
    window.location.href = `mailto:${d.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  // ---- Nav scroll state ----
  const navEl = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 8) navEl.classList.add('is-scrolled');
    else navEl.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- Scroll reveal ----
  const sections = document.querySelectorAll('.section');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    sections.forEach(s => observer.observe(s));
  } else {
    sections.forEach(s => s.classList.add('is-visible'));
  }

});
