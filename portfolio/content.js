/* ============================================================
   CONTENT — edit this file to make the site yours.
   Used by the intro (index.html) and the editor (site/index.html).
   ============================================================ */
const ME = {
  name: "Gaurav",                 // shown in the status bar
  initials: "GA",                 // the little brand mark
  handle: "gaurav",               // prompt user: gaurav@dev
  host: "dev",
  domain: "gaurav.dev",
  role: "Software engineer · Columbia University",
  location: "New York, NY",
  email: "you@example.com",
  links: [
    { label: "github", href: "https://github.com/Acinonyx44" },
    { label: "linkedin", href: "https://www.linkedin.com/" },
  ],
  about: [
    "I build <strong>full-stack products</strong> end to end: React on the front, Python and Postgres behind it, and maps, data and small delightful details wherever they fit.",
    "Right now I'm studying at Columbia and shipping side projects in the evenings. I like tools that feel like instruments: fast, keyboard-first and a little bit alive.",
  ],
  now: "building vouch · reading about spatial indexes",
  tagline: "software you can vouch for.",   // the line under the intro
};

// Each project shows up in `git log --graph projects/`.
// art: graph | map | grid | wave | term | bars   (or image: "shots/foo.png")
const PROJECTS = [
  { name: "vouch", date: "2026-03", lang: "JavaScript · Python", license: "MIT",
    desc: "Places you can vouch for. React + Leaflet map on the front, FastAPI + PostgreSQL behind it.",
    url: "https://github.com/Acinonyx44/vouch", art: "map" },
  { name: "terminal-portfolio", date: "2026-10", lang: "HTML", license: "MIT",
    desc: "This site. A portfolio that opens in an editor, with a wheel, an eye and a worm.",
    url: "https://github.com/Acinonyx44/vouch/tree/main/portfolio", art: "term" },
  { name: "sample-dataviz", date: "2026-01", lang: "TypeScript", license: "MIT",
    desc: "Example entry: replace with a real project, its link and a screenshot.",
    url: "https://github.com/Acinonyx44", art: "graph" },
  { name: "sample-cli", date: "2025-11", lang: "Rust", license: "MIT",
    desc: "Example entry: a small command-line tool. Swap in your own.",
    url: "https://github.com/Acinonyx44", art: "bars" },
];

const EXPERIENCE = [
  { date: "2026-05", role: "Software Engineering Intern", org: "Example Co.", period: "May – Aug 2026",
    points: ["Replace with what you shipped.", "One line per outcome, with a number if you have one."] },
  { date: "2025-09", role: "M.S. Computer Science", org: "Columbia University", period: "2025 – 2027",
    points: ["Coursework or research focus goes here."] },
  { date: "2024-06", role: "Previous role", org: "Somewhere", period: "Jun 2024 – May 2025",
    points: ["Edit EXPERIENCE in index.html."] },
];

// level is out of 6
const STACK = [
  { group: "lang",  items: [["Python", 6], ["JavaScript", 5], ["TypeScript", 4], ["SQL", 4], ["Rust", 2]] },
  { group: "web",   items: [["React", 5], ["Vite", 4], ["Tailwind", 4], ["Leaflet", 3]] },
  { group: "back",  items: [["FastAPI", 5], ["PostgreSQL", 4], ["Alembic", 3], ["Docker", 3]] },
  { group: "tools", items: [["git", 5], ["neovim", 4], ["Linux", 4]] },
];

const LOG = [
  { date: "2026-10-11", title: "opened the portfolio in an editor", body: "Rebuilt the site as a terminal with a wheel of sections. Try `help` in the prompt." },
  { date: "2026-03-12", title: "first commit on vouch", body: "React/Vite frontend and a FastAPI/PostgreSQL backend, seeded with real places." },
  { date: "2026-01-04", title: "a note to future me", body: "Write here: what you learned, what broke, what you'd do again." },
];

// Colour palettes, switchable from :theme on the intro and themes/ in the editor.
const PALETTES = {
  dusk:     { bg: "#0b0a0d", ink: "#dcd4cd", chrome: "#a29b96", dim: "#77807c", rule: "#34302f", line: "#19171b", accent: "#ff3d9a", worm: "120, 124, 232", scheme: "dark",  note: "the default" },
  phosphor: { bg: "#070b08", ink: "#c9f0cf", chrome: "#8fb898", dim: "#5f7a66", rule: "#22362a", line: "#0f1912", accent: "#f5c542", worm: "245, 120, 90", scheme: "dark",  note: "green screen" },
  ice:      { bg: "#090c12", ink: "#d5dde8", chrome: "#97a3b3", dim: "#6c7888", rule: "#2a3240", line: "#131924", accent: "#4fd1ff", worm: "255, 92, 160", scheme: "dark",  note: "cold and quiet" },
  paper:    { bg: "#ebe5da", ink: "#1d1b1e", chrome: "#4f4a47", dim: "#7c7570", rule: "#c2b9ab", line: "#dfd8cb", accent: "#d4245f", worm: "52, 72, 196",   scheme: "light", note: "for daylight" },
};

// Background colours offered by the picker (any colour works; these are shortcuts).
const BG_PRESETS = ["#0b0a0d", "#0e1726", "#1a1024", "#0f1d17", "#24140d", "#2b0f1a", "#ebe5da", "#dfe8ef"];

// A palette re-tuned to sit on any background colour: ink flips for light
// backgrounds, and the lines and greys are mixed from the new background.
function withBg(p, bg) {
  if (!bg || !/^#[0-9a-f]{6}$/i.test(bg)) return p;
  const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const mix = (a, b, t) => "#" + rgb(a).map((v, i) => Math.round(v + (rgb(b)[i] - v) * t).toString(16).padStart(2, "0")).join("");
  const [r, g, b] = rgb(bg), light = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 > 0.5;
  const base = light ? PALETTES.paper : p.scheme === "light" ? PALETTES.dusk : p;
  return {
    ...base, bg, accent: p.accent, scheme: light ? "light" : "dark",
    line: mix(bg, base.ink, 0.06), rule: mix(bg, base.ink, 0.18),
    dim: mix(bg, base.ink, 0.48), chrome: mix(bg, base.ink, 0.68),
  };
}
