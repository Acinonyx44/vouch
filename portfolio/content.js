/* ============================================================
   CONTENT — edit this file to make the site yours.
   Used by the intro (index.html) and the editor (site/index.html).
   ============================================================ */
const ME = {
  name: "Gaurav Agarwal",         // shown in the status bar
  initials: "GA",                 // the little brand mark
  handle: "gaurav",               // prompt user: gaurav@dev
  host: "dev",
  domain: "gaurav-agarwal.nyc",
  role: "MS Electrical Engineering · Columbia University",
  location: "New York, NY",
  email: "gaurav.agarwal@columbia.edu",
  links: [
    { label: "github", href: "https://github.com/Acinonyx44" },
  ],
  about: [
    "I work where <strong>machine learning meets markets and minds</strong>: LLM agents that build portfolios, discrete diffusion models that refine themselves, and circuits modelled on the fruit fly brain.",
    "I'm doing an MS in Electrical Engineering (Data-Driven Analysis and Computation) at <strong>Columbia</strong>, GPA 3.88, as a research assistant with Prof. Aurel Lazar and Prof. Paul Sajda. Before that: quant research at Millennium, AI/ML research at IIIT Hyderabad on a Meta AI × DRDO project, and decision science at JPMorgan Chase.",
    "Outside the lab: Harvard HPAIR delegate, top 0.30% of 1.4 million in India's JEE, NIT Jaipur lawn tennis champion and hardware hackathon winner, and founder of the consulting club there.",
  ],
  now: "MS at Columbia, finishing Dec 2026 · research with Prof. Lazar and Prof. Sajda",
  tagline: "models, markets and fruit-fly brains.",   // the line under the intro
};

// Each project shows up in `git log --graph projects/`.
// art: graph | map | grid | wave | term | bars   (or image: "shots/foo.png")
// The second word in the meta line is `license`; here it says what the project is.
const PROJECTS = [
  { name: "r2d2-discrete-diffusion", date: "2025-08", lang: "PyTorch", license: "paper · main author",
    desc: "Recursive Refinement for Discrete Diffusion. Context anchoring curbs representation drift: 7.2% better perplexity than vanilla discrete diffusion, near GPT-3 quality at 25M parameters.",
    url: "https://github.com/Acinonyx44", art: "wave" },
  { name: "ai-trading-engine", date: "2025-06", lang: "Python · PyTorch · RL", license: "ongoing",
    desc: "Risk-aware trading engine: GMM + LSTM + PPO/DQN in a custom Gym environment, VaR and drawdown limits, SHAP explainability in Streamlit. Beat benchmark indices by 7%, Sharpe > 1.5.",
    url: "https://github.com/Acinonyx44", art: "graph" },
  { name: "web-research-engine", date: "2025-01", lang: "FastAPI · JavaScript", license: "full-stack",
    desc: "AI search and summarisation across SerpAPI, Google, Bing and DuckDuckGo with async pipelines. Cut research time by 60%.",
    url: "https://github.com/Acinonyx44", art: "term" },
  { name: "vouch", date: "2026-03", lang: "JavaScript · Python", license: "full-stack",
    desc: "Places you can vouch for. React + Leaflet map on the front, FastAPI + PostgreSQL behind it.",
    url: "https://github.com/Acinonyx44/vouch", art: "map" },
  { name: "paralysis-care-monitor", date: "2023-06", lang: "ML · embedded", license: "capstone",
    desc: "ML-driven autonomous monitoring for paralysis patients: 35% more patient throughput and 40% fewer critical issues.",
    url: "https://github.com/Acinonyx44", art: "bars" },
  { name: "gaurav-agarwal.nyc", date: "2026-10", lang: "HTML", license: "this site",
    desc: "A portfolio that opens as a wall of code. Look at the iris to fall through into an editor.",
    url: "https://github.com/Acinonyx44/vouch/tree/main/portfolio", art: "grid" },
];

const EXPERIENCE = [
  { date: "2026-06", role: "Quantitative Researcher Intern", org: "Millennium Management", period: "Jun – Sep 2026 · New York",
    points: ["Built an evaluation-driven agentic portfolio system: LLM agents for regime assessment, trade ideas, equity selection and constrained optimisation, gated by quantitative scoring.",
      "Signal layer over proprietary and Bloomberg data, incl. Hurst-exponent regime classification and mean-reversion indicators.",
      "Closed self-improvement loop: backtests, forward simulation and P&L attribution feed back into idea selection. 2.17% avg MoM returns, max drawdown < 1.17% in walk-forward simulation."] },
  { date: "2025-08", role: "MS Electrical Engineering", org: "Columbia University", period: "Aug 2025 – Dec 2026 · GPA 3.88",
    points: ["Data-Driven Analysis and Computation.",
      "Research assistant: Prof. Aurel Lazar (fruit fly brain circuits & GPT) and Prof. Paul Sajda (PhysioLabXR, supported by Google DeepMind)."] },
  { date: "2025-01", role: "Research Associate, AI/ML", org: "IIIT Hyderabad", period: "Jan – Aug 2025 · Meta AI × DRDO",
    points: ["Open-set recognition and anomaly detection with Weibull SVM, Mahalanobis distance and OpenMax.",
      "Bispectrum and Zak-transform features: > 90% unknown-class detection, 40% fewer false positives, deployed on Google Coral TPUs.",
      "Knowledge distillation, class anchoring loss and regular polytope networks: up to 35% better key metrics."] },
  { date: "2024-09", role: "MS Electrical & Computer Engineering", org: "NYU", period: "Sep – Dec 2024 · transferred to Columbia",
    points: ["Course assistant for Electronics II and Intro to ML."] },
  { date: "2023-07", role: "Decision Science & Applied AI/ML Intern", org: "JPMorgan Chase", period: "Jul – Dec 2023 · Mumbai",
    points: ["Credit-risk and lifecycle models with XGBoost, CatBoost and GSQL graph databases: 27% lift in key metrics, 35% less processing time.",
      "Ran a technical session for 50+ professionals on ML, big data and AutoML with SageMaker; built the team's AI/ML knowledge base (50% faster onboarding)."] },
  { date: "2020-12", role: "B.Tech Electronics & Communication", org: "MNIT Jaipur", period: "2020 – 2024 · GPA 8.54, top 5%",
    points: ["Placement coordinator, founder of the consulting club, VP of the IEEE RFID student council, head of the E-Cell."] },
];

// level is out of 6
const STACK = [
  { group: "ml",       items: [["PyTorch", 6], ["TensorFlow", 5], ["Hugging Face", 5], ["LangGraph", 4], ["Ollama", 4]] },
  { group: "data",     items: [["Python", 6], ["SQL", 5], ["PySpark", 4], ["Polars", 4], ["PostgreSQL", 4], ["TigerGraph", 3]] },
  { group: "infra",    items: [["FastAPI", 5], ["AWS", 4], ["Docker", 4], ["Git", 5]] },
  { group: "hardware", items: [["Verilog", 4], ["VHDL", 3], ["MATLAB", 4], ["Cadence", 3], ["LTSpice", 3], ["HFSS", 3]] },
];

const LOG = [
  { date: "2026-09", title: "wrapped the summer at Millennium", body: "Agentic portfolio construction with quantitative gates at every stage, and a loop that learns from its own backtests." },
  { date: "2025-12", title: "R2D2: recursive refinement for discrete diffusion", body: "Context anchoring against representation drift. 7.2% perplexity gain, and a map of which recursion depths are worth paying for." },
  { date: "2025-08", title: "started at Columbia", body: "MS in EE (Data-Driven Analysis and Computation), research with Prof. Lazar and Prof. Sajda." },
  { date: "2024-08", title: "graduated from MNIT Jaipur", body: "B.Tech in Electronics and Communication, top 5% of the class." },
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
