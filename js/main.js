/* منطق الموقع: عرض المحتوى، تبديل اللغة والوضع، القائمة، والحركات.
   لا تحتاج لتعديل هذا الملف لتحديث المحتوى — عدّل js/content.js بدلاً منه. */
(function () {
  "use strict";

  const SITE = window.SITE;
  const UI = window.UI;
  const root = document.documentElement;
  const $ = (sel) => document.querySelector(sel);

  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ } },
  };

  let lang = root.lang === "ar" ? "ar" : "en";

  const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? (v[lang] ?? v.en) : v);
  const ui = (key) => UI[lang][key] ?? UI.en[key] ?? key;
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const tx = (v) => esc(t(v));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Icons (Lucide, MIT) ---------- */
  const ICONS = {
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    message: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    external: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    languages: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
    menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
    cap: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    stethoscope: '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>',
    heartPulse: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
    cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    note: '<path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"/><path d="M15 3v6h6"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    smartphone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    plug: '<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    sparkles: '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>',
    chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    play: '<polygon points="6 3 20 12 6 21 6 3"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    arrowUp: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    chevronLeft: '<path d="m15 18-6-6 6-6"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    images: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
  };
  const icon = (name, cls = "") => `<svg class="icon ${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name] || ""}</svg>`;

  /* ---------- Helpers ---------- */
  const period = (from, to, expected) => {
    const end = to ? (expected ? `${ui("expected")} ${to}` : to) : ui("present");
    return `<bdi>${esc(from)}</bdi> – <bdi>${esc(end)}</bdi>`;
  };

  // عدّاد الأرقام: يقسم قيمة مثل "1,200+" إلى بادئة ورقم ولاحقة
  const counted = new Set();
  function parseCount(value) {
    const m = String(value).match(/^(\D*)([\d.,]+)(.*)$/);
    if (!m) return null;
    const raw = m[2].replace(/,/g, "");
    const n = parseFloat(raw);
    if (Number.isNaN(n)) return null;
    return { prefix: m[1], n, decimals: (raw.split(".")[1] || "").length, grouping: m[2].includes(","), suffix: m[3] };
  }
  const formatCount = (c, x) => c.prefix + x.toLocaleString("en-US", {
    minimumFractionDigits: c.decimals,
    maximumFractionDigits: c.decimals,
    useGrouping: c.grouping,
  }) + c.suffix;
  // القيمة النهائية مكتوبة دائماً في الصفحة؛ العدّ يبدأ من الصفر فقط عند ظهور الرقم
  const countMarkup = (value, key) => `<span class="count" data-count="${esc(value)}" data-key="${esc(key)}">${esc(value)}</span>`;

  const external = (url) => `href="${esc(url)}" target="_blank" rel="noopener noreferrer"`;

  const linkChips = (links) => (links && links.length
    ? `<div class="chip-links">${links.map((l) => `<a class="link-chip" ${external(l.url)}>${icon(l.icon || "external")}<span>${tx(l.label)}</span></a>`).join("")}</div>`
    : "");

  const yearChips = (years) => (years && years.length
    ? `<div class="year-chips">${years.map((y) => `<span class="year-chip${y.highlight ? " highlight" : ""}">${y.highlight ? icon("trophy") : ""}<b>${esc(y.year)}</b><span>${tx(y.label)}</span></span>`).join("")}</div>`
    : "");

  const PROJECT_LINKS = {
    play: { icon: "play", label: "view_play" },
    github: { icon: "github", label: "view_code" },
    demo: { icon: "external", label: "view_demo" },
    video: { icon: "play", label: "view_video" },
  };

  /* ---------- Sections ---------- */
  function renderHero() {
    const name = t(SITE.name).split(" ");
    const first = name.shift();
    const socials = [
      ["github", SITE.links.github, "GitHub"],
      ["linkedin", SITE.links.linkedin, "LinkedIn"],
      ["chart", SITE.links.codeforces, "Codeforces"],
    ]
      .filter(([, url]) => url)
      .map(([ic, url, label]) => `<a class="social" ${external(url)} aria-label="${label}" title="${label}">${icon(ic)}</a>`)
      .join("");

    $("#heroContent").innerHTML = `
      <div class="hero-text">
        ${SITE.photo ? `<img class="hero-avatar" src="${esc(SITE.photo)}" alt="${tx(SITE.name)}" width="76" height="76">` : ""}
        <p class="hero-eyebrow"><span class="dot" aria-hidden="true"></span>${tx(SITE.role)}</p>
        <h1>${esc(first)} <span class="grad">${esc(name.join(" "))}</span></h1>
        <p class="hero-lead">${tx(SITE.tagline)}</p>
        <p class="hero-meta">${icon("pin")}<span>${tx(SITE.location)}</span></p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#contact">${icon("mail")}<span>${ui("cta_contact")}</span></a>
          <a class="btn btn-ghost" href="${esc(SITE.links.cv)}" download>${icon("download")}<span>${ui("cta_cv")}</span></a>
          <div class="socials">${socials}</div>
        </div>
      </div>
      ${heroVisual()}
      <div class="stats">
        ${SITE.stats.map((s, i) => `<div class="stat"><div class="stat-value">${countMarkup(s.value, "stat-" + i)}</div><div class="stat-label">${tx(s.label)}</div></div>`).join("")}
      </div>`;
  }

  // رسم توضيحي لشاشة قائمة الانتظار المباشرة في تطبيق الطبيب
  const QUEUE_WIDTHS = [[74, 46], [62, 38], [70, 50], [56, 34], [66, 42]];
  const QUEUE_STATES = [["in", "success"], ["next", "accent"], ["wait", "muted"]];
  let queueStart = 15;

  function queueRow(num, i) {
    const [state, tone] = QUEUE_STATES[Math.min(i, 2)];
    const [w1, w2] = QUEUE_WIDTHS[num % QUEUE_WIDTHS.length];
    return `
        <li class="q-row${i === 0 ? " is-current" : ""}">
          <span class="q-num">${num}</span>
          <span class="q-lines"><span style="width:${w1}%"></span><span style="width:${w2}%"></span></span>
          <span class="q-pill ${tone}">${ui("mock_" + state)}</span>
        </li>`;
  }

  function heroVisual() {
    const rows = [0, 1, 2, 3, 4].map((i) => queueRow(queueStart + i, i)).join("");

    return `
      <div class="hero-visual" aria-hidden="true">
        <div class="phone">
          <div class="phone-screen">
            <div class="ps-appbar">
              <div>
                <div class="ps-title">${ui("mock_title")}</div>
                <span class="ps-sub"></span>
              </div>
              <span class="live-pill"><span class="live-dot"></span>${ui("mock_live")}</span>
            </div>
            <div class="ps-now">
              <div><small>${ui("mock_now")}</small><strong class="ps-now-num">#${queueStart}</strong></div>
              <div class="ps-now-bars"><span style="width:72px"></span><span style="width:48px"></span></div>
            </div>
            <ul class="q-list">${rows}</ul>
            <div class="ps-tabbar">
              <span class="on">${icon("home")}</span>${icon("calendar")}${icon("users")}${icon("bell")}
            </div>
          </div>
        </div>
        <div class="float-card">
          <span class="fc-icon">${icon("bell")}</span>
          <span><span class="fc-title">${ui("mock_notif")}</span><span class="fc-sub">${ui("mock_notif_sub")}</span></span>
        </div>
        <div class="float-chip"><span class="live-dot"></span>${ui("mock_chip")}</div>
      </div>`;
  }

  function renderAbout() {
    $("#aboutContent").innerHTML = `
      <div class="about-grid">
        <div class="about-text">${SITE.about.map((p) => `<p>${tx(p)}</p>`).join("")}</div>
        <div class="highlights stagger">
          ${SITE.highlights.map((h) => `
            <div class="card highlight">
              <span class="hl-icon">${icon(h.icon)}</span>
              <h3>${tx(h.title)}</h3>
              <p>${tx(h.text)}</p>
            </div>`).join("")}
        </div>
      </div>`;
  }

  function renderExperience() {
    $("#experienceContent").innerHTML = `
      <div class="timeline stagger">
        ${SITE.experience.map((e) => `
          <article class="card tl-item">
            <div class="tl-head">
              <h3 class="tl-role">${tx(e.role)} <span class="tl-company">· ${tx(e.company)}</span></h3>
              <span class="tl-date">${period(e.from, e.to)}</span>
            </div>
            <p class="tl-meta">${icon("pin")}<span>${tx(e.location)}</span></p>
            ${e.summary ? `<p class="tl-summary">${tx(e.summary)}</p>` : ""}
            <ul class="bullets">${e.points.map((p) => `<li>${tx(p)}</li>`).join("")}</ul>
            ${linkChips(e.links)}
          </article>`).join("")}
      </div>`;
  }

  function skeletonScreen(p, variant) {
    const rows = (variant === 1 ? [70, 58, 76] : [78, 62, 70, 54])
      .map((w) => `<div class="sk-row"><span class="sk-dot"></span><span class="sk-lines"><span style="width:${w}%"></span><span style="width:${w - 24}%"></span></span></div>`)
      .join("");
    return `
      <div class="sk-top"><span class="sk-app">${icon(p.icon)}</span><span class="sk-line" style="width:48%"></span></div>
      <div class="sk-hero"></div>
      ${variant === 1 ? '<div class="sk-tiles"><span></span><span></span><span></span></div>' : ""}
      ${rows}`;
  }

  function projectVisual(p, index) {
    const images = p.images || [];
    const count = p.featured ? 2 : 1;
    const phones = Array.from({ length: count }, (_, i) => {
      const src = images[i];
      return `
        <div class="mini-phone">
          <div class="mini-screen${src ? " has-img" : ""}">
            ${src ? `<img src="${esc(src)}" alt="${tx(p.title)} — ${i + 1}" loading="lazy">` : skeletonScreen(p, i)}
          </div>
        </div>`;
    }).join("");

    if (!images.length) return `<div class="project-visual" aria-hidden="true">${phones}</div>`;
    return `
      <div class="project-visual has-gallery" data-gallery="${index}">
        ${phones}
        <button class="shots-btn" type="button">${icon("images")}<span>${ui("view_shots")}</span><b>${images.length}</b></button>
      </div>`;
  }

  function projectCard(p, index) {
    const links = (p.links || []).map((l) => {
      const meta = PROJECT_LINKS[l.type] || PROJECT_LINKS.demo;
      return `<a class="btn btn-ghost btn-sm" ${external(l.url)}>${icon(meta.icon)}<span>${l.label ? tx(l.label) : ui(meta.label)}</span></a>`;
    }).join("");

    return `
      <article class="card project${p.featured ? " featured" : ""} reveal" data-reveal="project-${index}" style="--hue:${Number(p.hue) || 214}">
        ${projectVisual(p, index)}
        <div class="project-body">
          <p class="project-type">${p.featured ? `<span class="badge">${ui("featured")}</span>` : ""}<span>${tx(p.type)}</span></p>
          <h3>${tx(p.title)}</h3>
          <div class="project-meta">
            <span>${period(p.from, p.to)}</span>
            ${p.live ? `<span class="status">${ui("live_play")}</span>` : ""}
          </div>
          <p class="project-summary">${tx(p.summary)}</p>
          ${p.metrics ? `<div class="metrics">${p.metrics.map((m, j) => `<div class="metric"><b>${countMarkup(m.value, `metric-${index}-${j}`)}</b><span>${tx(m.label)}</span></div>`).join("")}</div>` : ""}
          <ul class="bullets">${p.points.map((x) => `<li>${tx(x)}</li>`).join("")}</ul>
          <div class="tags">${p.tags.map((x) => `<span class="tag">${tx(x)}</span>`).join("")}</div>
          ${links ? `<div class="project-links">${links}</div>` : ""}
        </div>
      </article>`;
  }

  function renderProjects() {
    const cards = SITE.projects.map((p, i) => ({ p, html: projectCard(p, i) }));
    const featured = cards.filter((c) => c.p.featured).map((c) => c.html).join("");
    const others = cards.filter((c) => !c.p.featured).map((c) => c.html).join("");
    $("#projectsContent").innerHTML = featured + (others ? `<div class="project-grid">${others}</div>` : "");
  }

  function renderSkills() {
    $("#skillsContent").innerHTML = `
      <div class="skills-grid stagger">
        ${SITE.skills.map((g) => `
          <div class="card skill-card">
            <h3><span class="skill-icon">${icon(g.icon)}</span>${tx(g.title)}</h3>
            <div class="chips">${g.items.map((i) => `<span class="chip">${tx(i)}</span>`).join("")}</div>
          </div>`).join("")}
      </div>`;
  }

  function renderEducation() {
    const item = (ic, title, body) => `
      <div class="card edu-item">
        <span class="edu-icon">${icon(ic)}</span>
        <div>
          <h4>${title}</h4>
          ${body}
        </div>
      </div>`;

    const education = SITE.education
      .map((e) => item("cap", tx(e.degree), `<p>${tx(e.school)}</p><span class="edu-date">${period(e.from, e.to, e.expected)}</span>`))
      .join("");
    const achievements = SITE.achievements
      .map((a) => item(a.icon, tx(a.title), `${a.text ? `<p>${tx(a.text)}</p>` : ""}${yearChips(a.years)}${linkChips(a.links)}`))
      .join("");
    const courses = item("book", tx(SITE.courses.provider), `<ul class="course-list">${SITE.courses.items.map((c) => `<li>${tx(c)}</li>`).join("")}</ul>`);

    $("#educationContent").innerHTML = `
      <div class="edu-grid">
        <div class="edu-col stagger">
          <h3 class="col-title">${ui("edu_col")}</h3>
          ${education}
          <h3 class="col-title">${ui("courses_col")}</h3>
          ${courses}
        </div>
        <div class="edu-col stagger">
          <h3 class="col-title">${ui("ach_col")}</h3>
          ${achievements}
        </div>
      </div>`;
  }

  function renderContact() {
    const L = SITE.links;
    const row = (ic, href, label, value, isExternal) => `
      <a class="contact-item" ${isExternal ? external(href) : `href="${esc(href)}"`}>
        <span class="ci-icon">${icon(ic)}</span>
        <span class="ci-main"><span class="ci-label">${esc(label)}</span><bdi class="ci-value">${esc(value)}</bdi></span>
        ${icon("external", "ci-arrow flip")}
      </a>`;

    const items = [
      `<div class="contact-item">
        <span class="ci-icon">${icon("mail")}</span>
        <a class="ci-main" href="mailto:${esc(L.email)}"><span class="ci-label">${ui("email")}</span><bdi class="ci-value">${esc(L.email)}</bdi></a>
        <button class="copy-btn" type="button" data-copy="${esc(L.email)}">${icon("copy")}<span>${ui("copy")}</span></button>
      </div>`,
      L.whatsapp ? row("message", `https://wa.me/${L.whatsapp.replace(/\D/g, "")}`, ui("whatsapp"), L.phoneDisplay, true) : "",
      L.phone ? row("phone", `tel:${L.phone}`, ui("phone"), L.phoneDisplay, false) : "",
      L.linkedin ? row("linkedin", L.linkedin, "LinkedIn", L.linkedin.replace(/^https?:\/\/(www\.)?/, ""), true) : "",
      L.github ? row("github", L.github, "GitHub", L.github.replace(/^https?:\/\/(www\.)?/, ""), true) : "",
    ].join("");

    $("#contactContent").innerHTML = `
      <div class="contact-grid">
        <div class="contact-text">
          <p class="eyebrow">${ui("contact_eyebrow")}</p>
          <h2>${ui("contact_title")}</h2>
          <p>${ui("contact_text")}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="mailto:${esc(L.email)}">${icon("mail")}<span>${ui("cta_contact")}</span></a>
            <a class="btn btn-ghost" href="${esc(L.cv)}" download>${icon("download")}<span>${ui("cta_cv")}</span></a>
          </div>
        </div>
        <div class="contact-list stagger">${items}</div>
      </div>`;
  }

  function renderFooter() {
    $("#footerContent").innerHTML = `
      <span>© ${new Date().getFullYear()} ${tx(SITE.name)}. ${ui("rights")}</span>
      <a class="back-top" href="#top">${ui("back_top")} ${icon("arrowUp")}</a>`;
  }

  /* ---------- Language ---------- */
  const langBtn = $("#langBtn");
  const themeBtn = $("#themeBtn");
  const menuBtn = $("#menuBtn");
  const nav = $("#nav");
  const header = $(".site-header");

  function applyLang(next) {
    lang = next;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t(SITE.meta.title);
    document.querySelector('meta[name="description"]').setAttribute("content", t(SITE.meta.description));
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = ui(el.dataset.i18n); });

    $("#brandName").textContent = t(SITE.name);
    nav.setAttribute("aria-label", ui("nav_label"));
    langBtn.textContent = lang === "ar" ? "EN" : "ع";
    langBtn.setAttribute("lang", lang === "ar" ? "en" : "ar");
    langBtn.setAttribute("aria-label", ui("lang_switch"));
    langBtn.title = ui("lang_switch");
    menuBtn.setAttribute("aria-label", ui("menu"));
    labelGallery();

    renderHero();
    renderAbout();
    renderExperience();
    renderProjects();
    renderSkills();
    renderEducation();
    renderContact();
    renderFooter();
    updateThemeBtn();
    observeReveals();
    indexStagger();
    observeCounters();
  }

  langBtn.addEventListener("click", () => {
    applyLang(lang === "ar" ? "en" : "ar");
    storage.set("lang", lang);
  });

  /* ---------- Theme ---------- */
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const currentTheme = () => root.dataset.theme || (darkQuery.matches ? "dark" : "light");

  function updateThemeBtn() {
    const dark = currentTheme() === "dark";
    themeBtn.innerHTML = icon(dark ? "sun" : "moon");
    themeBtn.setAttribute("aria-label", ui(dark ? "theme_light" : "theme_dark"));
    themeBtn.title = ui(dark ? "theme_light" : "theme_dark");
    document.querySelector('meta[name="theme-color"]').setAttribute("content", dark ? "#080d18" : "#f6f8fc");
  }

  themeBtn.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    storage.set("theme", next);
    updateThemeBtn();
  });
  if (darkQuery.addEventListener) darkQuery.addEventListener("change", updateThemeBtn);

  /* ---------- Mobile menu ---------- */
  function setMenu(open) {
    nav.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.innerHTML = icon(open ? "x" : "menu");
  }
  menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  setMenu(false);

  /* ---------- Header state & active link ---------- */
  const progressBar = $("#scrollProgress");
  let scrollFrame = 0;
  const onScroll = () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = 0;
      header.classList.toggle("scrolled", window.scrollY > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();

  const navLinks = Array.from(nav.querySelectorAll("a"));
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
  }

  /* ---------- Reveal on scroll ---------- */
  const revealed = new Set();
  const revealer = "IntersectionObserver" in window && !reduceMotion
    ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        if (entry.target.dataset.reveal) revealed.add(entry.target.dataset.reveal);
        revealer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px" })
    : null;

  function observeReveals() {
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
      if (!revealer || revealed.has(el.dataset.reveal)) el.classList.add("in");
      else revealer.observe(el);
    });
  }

  /* ---------- Motion ---------- */
  // ترقيم عناصر القوائم لتظهر واحداً تلو الآخر
  function indexStagger() {
    document.querySelectorAll(".stagger").forEach((list) => {
      Array.from(list.children).forEach((child, i) => child.style.setProperty("--i", i));
    });
  }

  // عدّ الأرقام تصاعدياً عند ظهورها
  function runCount(el) {
    const c = parseCount(el.dataset.count);
    if (!c) return;
    counted.add(el.dataset.key);
    const start = performance.now() + (el.closest(".hero") ? 550 : 150);
    const duration = 1600;
    const step = (now) => {
      const p = Math.min(1, Math.max(0, (now - start) / duration));
      el.textContent = p < 1 ? formatCount(c, c.n * (1 - Math.pow(1 - p, 3))) : el.dataset.count;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const counterIO = "IntersectionObserver" in window && !reduceMotion
    ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        counterIO.unobserve(entry.target);
        runCount(entry.target);
      });
    }, { threshold: 0.6 })
    : null;

  function observeCounters() {
    document.querySelectorAll(".count[data-key]").forEach((el) => {
      if (counted.has(el.dataset.key)) return;
      if (counterIO) counterIO.observe(el);
      else el.textContent = el.dataset.count;
    });
  }

  // قائمة الانتظار الحية في الجوال: يدخل المريض الأول ويتقدم الباقون
  const heroSection = $("#hero");
  let heroVisible = true;
  const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";
  const BELL_RING = [
    { transform: "rotate(0)" }, { transform: "rotate(-16deg)" }, { transform: "rotate(13deg)" },
    { transform: "rotate(-9deg)" }, { transform: "rotate(5deg)" }, { transform: "rotate(0)" },
  ];

  function setRowState(row, i) {
    if (!row) return;
    const [state, tone] = QUEUE_STATES[i];
    row.classList.toggle("is-current", i === 0);
    const pill = row.querySelector(".q-pill");
    pill.className = `q-pill ${tone}`;
    pill.textContent = ui("mock_" + state);
    pill.animate([{ transform: "scale(0.6)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: 420, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" });
  }

  function queueTick() {
    if (document.hidden || !heroVisible) return;
    const list = $(".q-list");
    if (!list || list.dataset.busy || !list.firstElementChild) return;
    list.dataset.busy = "1";
    const first = list.firstElementChild;
    const shift = first.offsetHeight + (parseFloat(getComputedStyle(list).rowGap) || 0);
    queueStart += 1;

    first.animate([{ opacity: 1 }, { opacity: 0, transform: "scale(0.94)" }], { duration: 520, easing: EASE, fill: "forwards" });
    list.animate([{ transform: "translateY(0)" }, { transform: `translateY(${-shift}px)` }], { duration: 640, easing: EASE }).onfinish = () => {
      first.remove();
      setRowState(list.children[0], 0);
      setRowState(list.children[1], 1);
      list.insertAdjacentHTML("beforeend", queueRow(queueStart + 4, 4));
      list.lastElementChild.animate([{ opacity: 0, transform: "translateY(14px)" }, { opacity: 1, transform: "none" }], { duration: 480, easing: EASE });

      const num = $(".ps-now-num");
      if (num) {
        num.textContent = "#" + queueStart;
        num.animate([{ transform: "scale(0.7)", opacity: 0 }, { transform: "scale(1.08)", opacity: 1, offset: 0.6 }, { transform: "none" }], { duration: 520, easing: "ease-out" });
      }
      const bell = $(".fc-icon .icon");
      if (bell && queueStart % 2 === 0) bell.animate(BELL_RING, { duration: 900, easing: "ease-in-out" });
      delete list.dataset.busy;
    };
  }

  if (!reduceMotion && typeof Element.prototype.animate === "function") {
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([entry]) => { heroVisible = entry.isIntersecting; }).observe(heroSection);
    }
    setInterval(queueTick, 3400);
  }

  // إمالة ثلاثية الأبعاد خفيفة للجوال مع حركة الفأرة
  if (!reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let tiltFrame = 0;
    heroSection.addEventListener("pointermove", (e) => {
      const { clientX, clientY } = e;
      cancelAnimationFrame(tiltFrame);
      tiltFrame = requestAnimationFrame(() => {
        const visual = heroSection.querySelector(".hero-visual");
        if (!visual) return;
        const r = visual.getBoundingClientRect();
        const x = Math.max(-1, Math.min(1, (clientX - (r.left + r.width / 2)) / (r.width / 2 + 240)));
        const y = Math.max(-1, Math.min(1, (clientY - (r.top + r.height / 2)) / (r.height / 2 + 240)));
        heroSection.style.setProperty("--ry", `${(x * 10).toFixed(2)}deg`);
        heroSection.style.setProperty("--rx", `${(y * -7).toFixed(2)}deg`);
        heroSection.style.setProperty("--px", x.toFixed(3));
        heroSection.style.setProperty("--py", y.toFixed(3));
      });
    });
    heroSection.addEventListener("pointerleave", () => {
      cancelAnimationFrame(tiltFrame);
      ["--rx", "--ry", "--px", "--py"].forEach((prop) => heroSection.style.removeProperty(prop));
    });
  }

  // بعد انتهاء حركة الدخول لا تُعاد عند تبديل اللغة
  setTimeout(() => root.classList.add("intro-done"), 1700);

  /* ---------- Back to top ---------- */
  // روابط #top (الشعار وزر العودة للأعلى) تُعالج هنا لأن الهيدر ثابت (sticky)
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href="#top"]');
    if (!link) return;
    e.preventDefault();
    setMenu(false);
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  });

  /* ---------- Screenshot gallery ---------- */
  const gallery = $("#gallery");
  const galleryTrack = $("#galleryTrack");
  const galleryPrev = $("#galleryPrev");
  const galleryNext = $("#galleryNext");
  const galleryClose = $("#galleryClose");

  function labelGallery() {
    galleryClose.innerHTML = icon("x");
    galleryClose.setAttribute("aria-label", ui("close"));
    galleryPrev.innerHTML = icon("chevronLeft", "flip");
    galleryPrev.setAttribute("aria-label", ui("gallery_prev"));
    galleryNext.innerHTML = icon("chevronRight", "flip");
    galleryNext.setAttribute("aria-label", ui("gallery_next"));
  }

  function openGallery(index) {
    const p = SITE.projects[index];
    if (!p || !p.images || !p.images.length || typeof gallery.showModal !== "function") return;
    $("#galleryTitle").textContent = t(p.title);
    $("#galleryCount").textContent = `${p.images.length} ${ui("shots_count")}`;
    galleryTrack.innerHTML = p.images
      .map((src, i) => `<img src="${esc(src)}" alt="${tx(p.title)} — ${i + 1}" loading="${i < 3 ? "eager" : "lazy"}" decoding="async">`)
      .join("");
    gallery.showModal();
    galleryTrack.scrollLeft = 0;
    galleryTrack.focus({ preventScroll: true });
  }

  // step > 0 moves toward the end of the list (left in RTL, right in LTR)
  function slideGallery(step) {
    const first = galleryTrack.querySelector("img");
    if (!first) return;
    const distance = first.getBoundingClientRect().width + 16;
    galleryTrack.scrollBy({ left: step * distance * (root.dir === "rtl" ? -1 : 1), behavior: reduceMotion ? "auto" : "smooth" });
  }

  galleryPrev.addEventListener("click", () => slideGallery(-1));
  galleryNext.addEventListener("click", () => slideGallery(1));
  galleryClose.addEventListener("click", () => gallery.close());
  gallery.addEventListener("click", (e) => { if (e.target === gallery) gallery.close(); });
  gallery.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); slideGallery(root.dir === "rtl" ? -1 : 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); slideGallery(root.dir === "rtl" ? 1 : -1); }
  });
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-gallery]");
    if (trigger) openGallery(Number(trigger.dataset.gallery));
  });

  /* ---------- Copy email ---------- */
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;
    const text = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e2) { /* ignore */ }
      ta.remove();
    }
    btn.classList.add("copied");
    btn.innerHTML = icon("check") + `<span>${ui("copied")}</span>`;
    clearTimeout(btn._timer);
    btn._timer = setTimeout(() => {
      btn.classList.remove("copied");
      btn.innerHTML = icon("copy") + `<span>${ui("copy")}</span>`;
    }, 1800);
  });

  applyLang(lang);
})();
