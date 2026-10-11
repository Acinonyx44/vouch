/* iris.js — an eye drawn in glyphs. Shared by the intro and the editor.

   const e = Iris.create(cx, cy, w, h);           // canvas-space px
   Iris.update(e, now, dt, focus, still);          // focus: {x, y, kind} | null
   Iris.draw(ctx, e, now, text, colors, opts);     // colors: {ink, accent, bg}

   Set e.open = false to close the lids, e.dilate = 0..1 to force the pupil,
   e.blinkAt = now to blink. After update, e.p holds the pupil {x, y, ri, rp}. */
(function () {
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const S = (v, k) => ({ v, t: v, k });
  const ease = (s, dt) => { s.v += (s.t - s.v) * (1 - Math.exp(-dt / s.k)); };

  function create(cx, cy, w, h) {
    const now = performance.now();
    const e = {
      cx, cy, w, h, open: true, dilate: null, spinBoost: 0,
      lid: S(0, 0.09), gx: S(0, 0.1), gy: S(0, 0.1), dil: S(0.45, 0.22), zoom: S(1, 0.25),
      spin: 0, blinkAt: -1e9, nextBlink: now + 2400 + Math.random() * 2600,
      openNow: 0, speed: 0, last: null, focusKind: null,
      offset: Math.floor(Math.random() * 1e4),
    };
    e.p = pupil(e);
    return e;
  }

  function pupil(e) {
    const ri = e.h * 0.34 * e.zoom.v;
    return { x: e.cx + e.gx.v * e.w * 0.22, y: e.cy + e.gy.v * e.h * 0.13, ri, rp: ri * (0.2 + 0.34 * e.dil.v) };
  }

  function update(e, now, dt, focus, still) {
    e.lid.t = e.open ? 1 : 0;
    if (focus) {
      e.gx.t = clamp((focus.x - e.cx) / 380, -1, 1);
      e.gy.t = clamp((focus.y - e.cy) / 260, -1, 1);
      if (e.last && dt > 0) e.speed += (Math.hypot(focus.x - e.last.x, focus.y - e.last.y) / dt - e.speed) * 0.08;
      e.last = { x: focus.x, y: focus.y };
    } else {
      e.gx.t = still ? 0 : Math.sin(now / 2300) * 0.25;
      e.gy.t = still ? 0 : Math.sin(now / 3100) * 0.15;
      e.speed *= 0.9;
      e.last = null;
    }
    e.focusKind = focus ? focus.kind : null;
    // Wide when something moves fast, a slit while it reads.
    e.dil.t = e.dilate ?? (focus?.kind === "caret" ? 0.16 : focus ? clamp(0.32 + e.speed / 2400, 0.32, 0.95) : 0.5 + 0.15 * Math.sin(now / 1400));
    e.zoom.t = focus?.kind === "caret" ? 0.92 : 1;
    for (const s of [e.lid, e.gx, e.gy, e.dil, e.zoom]) ease(s, dt);
    e.spin += dt * (still ? 0 : (focus?.kind === "caret" ? 0.45 : 0.1) + e.spinBoost);
    if (!still && e.open && now > e.nextBlink && e.lid.v > 0.95) {
      e.blinkAt = now;
      e.nextBlink = now + 2600 + Math.random() * 3800;
    }
    const b = now - e.blinkAt < 180 ? Math.sin(((now - e.blinkAt) / 180) * Math.PI) : 0;
    e.openNow = clamp(e.lid.v, 0, 1) * (1 - 0.97 * b);
    e.p = pupil(e);
  }

  // [intensity, part] for a point, or null outside. part: 0 white, 1 iris, 2 pupil, 3 lid, 4 light
  function sample(e, x, y) {
    const u = (x - e.cx) / (e.w * 0.48);
    if (u <= -1 || u >= 1) return null;
    const k = 1 - u * u;
    const top = e.cy - e.h * 0.46 * e.openNow * k ** 0.8;
    const bot = e.cy + e.h * 0.38 * e.openNow * k ** 1.15;
    const rim = Math.max(Math.max(0, 1 - Math.abs(y - top) / 2) * Math.sqrt(k), Math.max(0, 1 - Math.abs(y - bot) / 1.6) * 0.55 * Math.sqrt(k));
    if (y < top || y > bot) return rim > 0.05 ? [rim, 3] : null;
    const p = e.p, dx = x - p.x, dy = y - p.y, d = Math.hypot(dx, dy);
    let v, part;
    if (d < p.rp) {
      v = 0; part = 2;
    } else if (d < p.ri) {
      const rr = (d - p.rp) / (p.ri - p.rp), a = Math.atan2(dy, dx) + e.spin;
      const fibre = 0.5 + 0.5 * Math.sin(a * 31 + 3 * Math.sin(a * 4 + rr * 5));   // fibres that twist
      const rings = 0.5 + 0.5 * Math.cos(rr * 22 - e.spin * 3);                   // faint growth rings
      const collar = 0.4 * Math.exp(-((rr - 0.28) ** 2) / 0.01);
      const limbus = rr > 0.82 ? (rr - 0.82) / 0.18 : 0;
      v = (0.22 + 0.42 * fibre * (1 - 0.4 * rr) + 0.14 * rings + collar) * (1 - 0.85 * limbus);
      part = 1;
    } else {
      v = 0.3 * (1 - 0.6 * u * u) * (0.45 + 0.55 * Math.min(1, (y - top) / (e.h * 0.2)));
      part = 0;
    }
    if (Math.abs(x - (p.x - p.ri * 0.38)) < p.ri * 0.12 && Math.abs(y - (p.y - p.ri * 0.4)) < p.ri * 0.12) return [1, 4];
    return [Math.max(v, rim), rim > v ? 3 : part];
  }

  function draw(g, e, now, text, col, opts = {}) {
    if (e.openNow < 0.004 && e.lid.v < 0.004) return;
    const fs = opts.font || 5.5, cw = fs * 0.6, ch = fs * 1.08;
    const x0 = e.cx - e.w * 0.5, y0 = e.cy - e.h * 0.5, cols = Math.ceil(e.w / cw), rows = Math.ceil(e.h / ch);
    const off = e.offset + Math.floor(now / 420), n = text.length || 1;
    g.save();
    g.font = `${fs}px "IBM Plex Mono", ui-monospace, monospace`;
    g.textBaseline = "middle";
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = x0 + (c + 0.5) * cw, y = y0 + (r + 0.5) * ch, s = sample(e, x, y);
        if (!s) continue;
        if (opts.mask) { g.globalAlpha = 1; g.fillStyle = col.bg; g.fillRect(x - cw / 2, y - ch / 2, cw + 0.4, ch + 0.4); }
        const [v, part] = s;
        if (v < 0.05) continue;
        g.globalAlpha = Math.min(1, 0.12 + v ** 0.75 * 0.88);
        g.fillStyle = part === 1 && v > 0.5 ? col.accent : col.ink;
        g.fillText(text[(off + r * cols + c) % n], x - cw / 2, y);
      }
    }
    g.restore();
  }

  window.Iris = { create, update, draw };
})();
