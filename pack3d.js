// EQUA 3D Interactive Medicine Models (Tablet Strip & Syrup Bottle)
// Powered by Three.js WebGL

// -------------------------------------------------------------
// 1. EQUA PARACETAMOL TABLET STRIP 3D
// -------------------------------------------------------------
function initTabletStrip3D() {
  const wrap = document.getElementById('stripWrap');
  const cv = document.getElementById('stripCanvas');
  const tt = document.getElementById('stripTooltip');
  if (!wrap || !cv || typeof THREE === 'undefined') return;

  const TEAL = '#0A4A48', SAND = '#FBF8F2', CORAL = '#EB6B47', GREEN = '#1F7A4A', INK = '#142322';
  let sd = 7;
  const rnd = () => (sd = sd * 16807 % 2147483647) / 2147483647;
  const ci = (x, y, r) => `M${x-r} ${y}a${r} ${r} 0 1 0 ${2*r} 0a${r} ${r} 0 1 0 ${-2*r} 0`;
  const IC = {
    thermo: 'M40 22a10 10 0 0 1 20 0V58a18 18 0 1 1 -20 0ZM50 74V34',
    doctor: ci(50, 28, 14) + 'M22 90V70A28 24 0 0 1 78 70V90M50 62V80M41 71H59'
  };

  function icon(g, n, x, y, s, col, lw = 7) {
    g.save();
    g.translate(x, y);
    g.scale(s / 100, s / 100);
    g.strokeStyle = col;
    g.lineWidth = lw;
    g.lineCap = g.lineJoin = 'round';
    g.stroke(new Path2D(IC[n]));
    g.restore();
  }

  function logo(g, x, y, h, col, tc) {
    g.save();
    g.translate(x, y);
    g.scale(h / 100, h / 100);
    g.lineWidth = 13;
    g.lineCap = g.lineJoin = 'round';
    g.strokeStyle = col;
    g.stroke(new Path2D('M60 10H14V90H60M14 50H52' + ci(130, 50, 40) + 'M200 10V58A30 30 0 0 0 260 58V10M285 90L315 10L345 90M297 64H333'));
    g.strokeStyle = tc;
    g.stroke(new Path2D('M112 54L128 70L162 30'));
    g.restore();
  }

  function rr(g, x, y, w, h, r, f, s, lw = 4) {
    g.beginPath();
    g.roundRect ? g.roundRect(x, y, w, h, r) : g.rect(x, y, w, h);
    if (f) { g.fillStyle = f; g.fill(); }
    if (s) { g.strokeStyle = s; g.lineWidth = lw; g.stroke(); }
  }

  function tx(g, t, x, y, sz, col, w = 400, al = 'left', f = 'Plus Jakarta Sans') {
    g.font = `${w} ${sz}px '${f}',sans-serif`;
    g.fillStyle = col;
    g.textAlign = al;
    g.textBaseline = 'alphabetic';
    g.fillText(t, x, y);
  }

  const mk = (w, h) => {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    return [c, c.getContext('2d')];
  };

  const W = 2560, Hh = 1280, CX = [600, 992, 1384, 1776, 2168], CY = [470, 950], PF = [796, 1188, 1580, 1972];
  const dots = (g, x, a, b, col) => {
    g.fillStyle = col;
    for (let y = a; y < b; y += 26) g.fillRect(x - 3, y, 6, 12);
  };

  function foilBase(g, top) {
    const gr = g.createLinearGradient(0, 0, 0, Hh);
    gr.addColorStop(0, top[0]);
    gr.addColorStop(.5, top[1]);
    gr.addColorStop(1, top[0]);
    g.fillStyle = gr;
    g.fillRect(0, 0, W, Hh);
    for (let i = 0; i < 350; i++) {
      g.fillStyle = `rgba(255,255,255,${rnd() * .28})`;
      g.fillRect(0, rnd() * Hh, W, 1);
    }
  }

  function foil() {
    const [c, g] = mk(W, Hh);
    g.save();
    rr(g, 0, 0, W, Hh, 64);
    g.clip();
    foilBase(g, ['#cdd5d9', '#f6f8f8']);
    g.fillStyle = TEAL;
    g.fillRect(0, 0, W, 140);
    logo(g, 40, 22, 96, '#fff', CORAL);
    tx(g, 'Paracetamol Tablets IP 500 mg', 1450, 92, 56, '#fff', 700, 'center');
    tx(g, '10 tablets', 2520, 90, 44, SAND, 700, 'right');
    g.fillStyle = SAND;
    g.fillRect(0, 140, W, 120);
    icon(g, 'thermo', 50, 150, 100, TEAL, 7);
    tx(g, 'For fever and pain', 190, 222, 64, TEAL, 700, 'left');
    tx(g, 'Same medicine as the branded one  ·  Every batch is tested in certified labs', 2520, 215, 38, TEAL, 700, 'right');
    g.fillStyle = TEAL;
    g.fillRect(0, 260, 360, 900);
    [['BATCH', 'EQ-0426-A1', 320], ['MFG', '04/2026', 440]].forEach(([l, v, y]) => {
      tx(g, l, 40, y, 28, SAND, 700);
      tx(g, v, 40, y + 48, 40, '#fff', 700, 'left');
    });
    rr(g, 24, 530, 312, 190, 24, CORAL);
    tx(g, 'EXP', 48, 582, 32, '#fff', 700, 'left');
    tx(g, '03/2028', 180, 680, 58, '#fff', 700, 'center');
    tx(g, 'MRP', 40, 790, 28, SAND, 700);
    tx(g, '₹ 14.00', 40, 838, 40, '#fff', 700, 'left');
    tx(g, 'Verified Batch Record', 40, 1130, 24, SAND, 400);
    CX.forEach(x => {
      tx(g, 'Paracetamol', x, 704, 40, TEAL, 700, 'center');
      tx(g, '500 mg', x, 750, 36, INK, 700, 'center');
    });
    PF.forEach(x => dots(g, x, 270, 1150, 'rgba(34,49,58,.5)'));
    g.fillStyle = CORAL;
    g.fillRect(0, 1160, W, 120);
    icon(g, 'doctor', 40, 1166, 108, '#fff', 7);
    tx(g, 'Not sure? Ask your doctor or pharmacist.', 170, 1235, 54, '#fff', 700, 'left');
    tx(g, 'Keep out of reach of children', 2520, 1210, 36, '#fff', 700, 'right');
    tx(g, 'बच्चों की पहुँच से दूर रखें', 2520, 1255, 34, '#fff', 700, 'right');
    g.restore();
    return c;
  }

  function back() {
    const [c, g] = mk(W, Hh);
    g.save();
    rr(g, 0, 0, W, Hh, 64);
    g.clip();
    foilBase(g, ['#c3ccd1', '#eef1f2']);
    g.save();
    g.translate(W, 0);
    g.scale(-1, 1);
    g.strokeStyle = 'rgba(60,75,85,.18)';
    g.lineWidth = 2;
    for (let i = -Hh; i < W; i += 22) {
      g.beginPath();
      g.moveTo(i, 0);
      g.lineTo(i + Hh, Hh);
      g.stroke();
    }
    CX.forEach(x => CY.forEach(y => {
      g.fillStyle = '#e9eef0';
      g.beginPath();
      g.arc(x, y, 175, 0, 7);
      g.fill();
      g.strokeStyle = 'rgba(60,75,85,.45)';
      g.lineWidth = 4;
      g.beginPath();
      g.arc(x, y, 175, 0, 7);
      g.stroke();
      g.beginPath();
      g.arc(x, y, 160, 0, 7);
      g.stroke();
    }));
    PF.forEach(x => dots(g, x, 130, 1130, 'rgba(34,49,58,.5)'));
    g.restore();
    tx(g, 'Do not use if a blister is open or damaged.', 1280, 80, 44, '#6b787e', 700, 'center');
    tx(g, 'EQUA   ·   Paracetamol 500 mg   ·   10 tablets', 1280, 1235, 44, '#6b787e', 700, 'center');
    g.restore();
    return c;
  }

  const R = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
  R.outputEncoding = THREE.sRGBEncoding;
  R.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  const S = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(36, 1, .1, 60);
  S.add(new THREE.HemisphereLight(0xffffff, 0x998877, .9));
  const dl = new THREE.DirectionalLight(0xffffff, .8);
  dl.position.set(3, 5, 6);
  S.add(dl);
  const dl2 = new THREE.DirectionalLight(0xffffff, .5);
  dl2.position.set(-3, 2, -6);
  S.add(dl2);

  const tex = c => {
    const t = new THREE.CanvasTexture(c);
    t.encoding = THREE.sRGBEncoding;
    t.anisotropy = 8;
    return t;
  };

  const B = new THREE.Group();
  S.add(B);

  function build() {
    const w = 3.2, h = 1.6, r = .16, sh = new THREE.Shape();
    sh.moveTo(-w + r, -h);
    sh.lineTo(w - r, -h);
    sh.quadraticCurveTo(w, -h, w, -h + r);
    sh.lineTo(w, h - r);
    sh.quadraticCurveTo(w, h, w - r, h);
    sh.lineTo(-w + r, h);
    sh.quadraticCurveTo(-w, h, -w, h - r);
    sh.lineTo(-w, -h + r);
    sh.quadraticCurveTo(-w, -h, -w + r, -h);
    const eg = new THREE.ExtrudeGeometry(sh, { depth: .05, bevelEnabled: false });
    eg.translate(0, 0, -.025);
    B.add(new THREE.Mesh(eg, new THREE.MeshPhongMaterial({ color: 0xaab4b9, shininess: 80 })));

    const fm = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 3.2), new THREE.MeshPhongMaterial({ map: tex(foil()), alphaTest: .5, shininess: 110, specular: 0x888888 }));
    fm.position.z = .0255;
    B.add(fm);

    const bm = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 3.2), new THREE.MeshPhongMaterial({ map: tex(back()), alphaTest: .5, shininess: 110, specular: 0x888888 }));
    bm.position.z = -.0255;
    bm.rotation.y = Math.PI;
    B.add(bm);

    const dm = new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true, opacity: .3, shininess: 140, specular: 0xffffff, side: THREE.DoubleSide, depthWrite: false });
    const tm = new THREE.MeshPhongMaterial({ color: 0xfafafa, shininess: 25 });
    CX.forEach(px => CY.forEach(py => {
      const x = (px - 1280) / 400 + 0, y = (640 - py) / 400;
      const d = new THREE.Mesh(new THREE.SphereGeometry(.4, 40, 16, 0, Math.PI * 2, 0, Math.PI / 2), dm);
      d.scale.set(1, .55, 1);
      d.rotation.x = -Math.PI / 2;
      d.position.set(x, y, -.025);
      d.renderOrder = 2;
      B.add(d);
      const t = new THREE.Mesh(new THREE.CylinderGeometry(.29, .29, .1, 40), tm);
      t.rotation.x = Math.PI / 2;
      t.position.set(x, y, -.1);
      B.add(t);
    }));
  }

  const V = {
    foil: { ry: 0, rx: 0, z: 7.6, ty: 0, x: 0, t: 'Foil side: product name on every tablet, doctor strip, and the batch, MFG, EXP, MRP panel.' },
    blister: { ry: Math.PI, rx: 0, z: 7.6, ty: 0, x: 0, t: 'Blister side: tablets visible in clear protective cells. Dotted lines show tear perforations.' },
    angle: { ry: Math.PI - .9, rx: .25, z: 6.4, ty: 0, x: 0, t: 'Angle view: the raised blister cells and the tablets sitting securely inside.' },
    batch: { ry: 0, rx: 0, z: 3.8, ty: 0, x: -2.2, t: 'Batch number, manufacturing date, expiry (EXP) and verified MRP panel.' }
  };

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  let ry = 0, tr = 0, rx = 0, trx = 0, vel = 0, z = 7.6, tz = 7.6, ty = 0, tty = 0, px = 0, tpx = 0, drag = false, lx = 0, ly = 0, lt = 0, spin = false, anim = false, pd = 0;
  const ptr = new Map(), sp = document.getElementById('stripSpin'), btns = document.querySelectorAll('#stripControls button');

  function go(k) {
    const v = V[k];
    if (!v) return;
    spin = false;
    if (sp) sp.checked = false;
    vel = 0;
    anim = true;
    tr = Math.round((ry - v.ry) / 6.2832) * 6.2832 + v.ry;
    trx = v.rx;
    tz = v.z;
    tty = v.ty;
    tpx = v.x;
    if (tt) tt.textContent = v.t;
    btns.forEach(b => b.classList.toggle('on', b.dataset.v == k));
  }

  btns.forEach(b => b.onclick = () => go(b.dataset.v));
  if (sp) sp.onchange = () => {
    spin = sp.checked;
    if (spin) { anim = false; vel = 0; btns.forEach(b => b.classList.remove('on')); }
  };

  const dist = () => {
    const [a, b] = [...ptr.values()];
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  };

  cv.onpointerdown = e => {
    ptr.set(e.pointerId, e);
    try { cv.setPointerCapture(e.pointerId); } catch (_) {}
    anim = false; vel = 0;
    if (ptr.size == 1) { drag = true; lx = e.clientX; ly = e.clientY; lt = performance.now(); }
    else if (ptr.size == 2) { drag = false; pd = dist(); }
    cv.style.cursor = 'grabbing';
  };

  cv.onpointermove = e => {
    if (!ptr.has(e.pointerId)) return;
    ptr.set(e.pointerId, e);
    if (ptr.size == 2) {
      const d = dist();
      if (d > 0 && pd > 0) tz = clamp(tz * pd / d, 3, 14);
      pd = d;
      return;
    }
    if (drag) {
      const dx = e.clientX - lx, n = performance.now(), dt = Math.max(1, n - lt) / 1000;
      ry += dx * .008;
      rx = clamp(rx + (e.clientY - ly) * .006, -.7, .7);
      trx = rx;
      vel = clamp(.7 * vel + .3 * (dx * .008 / dt), -5, 5);
      lx = e.clientX; ly = e.clientY; lt = n;
    }
  };

  const end = e => {
    ptr.delete(e.pointerId);
    if (ptr.size == 1) {
      drag = true;
      const q = [...ptr.values()][0];
      lx = q.clientX; ly = q.clientY; lt = performance.now();
    } else {
      drag = false;
      if (performance.now() - lt > 90) vel = 0;
    }
    cv.style.cursor = 'grab';
  };

  cv.onpointerup = end;
  cv.onpointercancel = end;
  cv.addEventListener('wheel', e => {
    e.preventDefault();
    tz = clamp(tz + e.deltaY * .005, 3, 14);
  }, { passive: false });

  function rs() {
    const w = wrap.clientWidth, h = wrap.clientHeight;
    if (!w || !h) return;
    R.setSize(w, h, false);
    cam.aspect = w / h;
    cam.updateProjectionMatrix();
  }
  window.addEventListener('resize', rs);

  let last = 0;
  function loop(now) {
    requestAnimationFrame(loop);
    const dt = Math.min(.05, Math.max(0, (now - last) / 1000) || 0);
    last = now;
    if (!drag) {
      if (anim) {
        const k2 = 1 - Math.exp(-8 * dt), d = tr - ry;
        ry += d * k2;
        rx += (trx - rx) * k2;
        if (Math.abs(d) < .002 && Math.abs(trx - rx) < .002) { ry = tr; rx = trx; anim = false; }
      } else if (spin) {
        ry += .7 * dt;
      } else if (Math.abs(vel) > .02) {
        ry += vel * dt;
        vel *= Math.exp(-4.5 * dt);
      } else vel = 0;
    }
    const k = 1 - Math.exp(-8 * dt);
    z += (tz - z) * k;
    ty += (tty - ty) * k;
    px += (tpx - px) * k;
    const fit = Math.max(1, 1.45 / cam.aspect);
    B.rotation.y = ry;
    B.rotation.x = rx;
    cam.position.set(px, ty, z * fit);
    cam.lookAt(px, ty, 0);
    R.render(S, cam);
  }

  build();
  rs();
  go('foil');
  requestAnimationFrame(loop);
}

// -------------------------------------------------------------
// 2. EQUA PARACETAMOL ORAL SUSPENSION (SYRUP BOTTLE) 3D
// -------------------------------------------------------------
function initSyrupBottle3D() {
  const wrap = document.getElementById('bottleWrap');
  const cv = document.getElementById('bottleCanvas');
  const tooltip = document.getElementById('bottleTooltip');
  if (!wrap || !cv || typeof THREE === 'undefined') return;

  const TEAL = '#0A4A48', SAND = '#FBF8F2', CORAL = '#EB6B47', GREEN = '#1F7A4A', INK = '#142322';
  let sd = 7;
  const rnd = () => (sd = sd * 16807 % 2147483647) / 2147483647;
  const ci = (x, y, r) => `M${x-r} ${y}a${r} ${r} 0 1 0 ${2*r} 0a${r} ${r} 0 1 0 ${-2*r} 0`;
  const IC = {
    thermo: 'M40 22a10 10 0 0 1 20 0V58a18 18 0 1 1 -20 0ZM50 74V34',
    check: ci(42, 42, 26) + 'M62 62L84 84M30 43L39 52L55 34',
    capsule: 'M30 36h40a16 16 0 0 1 0 32H30a16 16 0 0 1 0 -32ZM50 36V68',
    cup: 'M26 20H74L68 82H32ZM34 40H66M36 58H64',
    doctor: ci(50, 28, 14) + 'M22 90V70A28 24 0 0 1 78 70V90M50 62V80M41 71H59',
    speaker: 'M16 40H32L54 22V78L32 60H16ZM66 36A20 20 0 0 1 66 64M76 24A36 36 0 0 1 76 76',
    tick: 'M20 54L42 76L82 28'
  };

  function icon(g, n, x, y, s, col, lw = 7) {
    g.save();
    g.translate(x, y);
    g.scale(s / 100, s / 100);
    g.strokeStyle = col;
    g.lineWidth = lw;
    g.lineCap = g.lineJoin = 'round';
    g.stroke(new Path2D(IC[n]));
    g.restore();
  }

  function logo(g, x, y, h, col, tc) {
    g.save();
    g.translate(x, y);
    g.scale(h / 100, h / 100);
    g.lineWidth = 13;
    g.lineCap = g.lineJoin = 'round';
    g.strokeStyle = col;
    g.stroke(new Path2D('M60 10H14V90H60M14 50H52' + ci(130, 50, 40) + 'M200 10V58A30 30 0 0 0 260 58V10M285 90L315 10L345 90M297 64H333'));
    g.strokeStyle = tc;
    g.stroke(new Path2D('M112 54L128 70L162 30'));
    g.restore();
  }

  function rr(g, x, y, w, h, r, f, s, lw = 4) {
    g.beginPath();
    g.roundRect ? g.roundRect(x, y, w, h, r) : g.rect(x, y, w, h);
    if (f) { g.fillStyle = f; g.fill(); }
    if (s) { g.strokeStyle = s; g.lineWidth = lw; g.stroke(); }
  }

  function tx(g, t, x, y, sz, col, w = 400, al = 'left', f = 'Plus Jakarta Sans') {
    g.font = `${w} ${sz}px '${f}',sans-serif`;
    g.fillStyle = col;
    g.textAlign = al;
    g.textBaseline = 'alphabetic';
    g.fillText(t, x, y);
  }

  const mk = (w, h) => {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    return [c, c.getContext('2d')];
  };

  function tick(g, x, y, s) {
    g.fillStyle = GREEN;
    g.beginPath();
    g.arc(x + s / 2, y + s / 2, s / 2, 0, 7);
    g.fill();
    icon(g, 'tick', x + s * .2, y + s * .2, s * .6, '#fff', 12);
  }

  function frontLabel() {
    const [c, g] = mk(1500, 1024);
    g.fillStyle = '#fff';
    g.fillRect(0, 0, 1500, 1024);
    g.fillStyle = TEAL;
    g.fillRect(0, 0, 1500, 170);
    logo(g, 70, 28, 112, '#fff', CORAL);
    tx(g, 'Equal medicine. Clear proof.', 1430, 105, 42, SAND, 700, 'right');
    tx(g, 'Paracetamol', 70, 350, 130, INK, 700, 'left');
    tx(g, 'Oral Suspension IP  ·  250 mg per 5 ml', 74, 425, 50, TEAL, 700);
    rr(g, 70, 455, 780, 115, 26, SAND);
    icon(g, 'thermo', 95, 462, 100, TEAL);
    tx(g, 'For fever and pain', 225, 538, 62, TEAL, 700, 'left');
    rr(g, 1130, 215, 300, 150, 26, null, TEAL, 6);
    tx(g, '60 ml', 1280, 305, 64, TEAL, 700, 'center');
    tx(g, 'Net contents', 1280, 345, 30, INK, 400, 'center');
    tick(g, 70, 610, 60);
    icon(g, 'capsule', 72, 612, 56, '#fff', 9);
    tx(g, 'Same medicine as the branded one', 150, 658, 40, INK, 700);
    tick(g, 70, 695, 60);
    icon(g, 'check', 72, 697, 56, '#fff', 9);
    tx(g, 'Every batch is tested in a certified lab', 150, 743, 40, INK, 700);
    icon(g, 'cup', 68, 775, 70, TEAL, 6);
    tx(g, "Use the measuring cup. Dose: as doctor says.", 150, 825, 38, INK, 700);
    rr(g, 1090, 600, 340, 230, 28, TEAL);
    icon(g, 'speaker', 1140, 618, 120, '#fff', 6);
    tx(g, 'Hear it', 1260, 770, 56, '#fff', 700, 'center');
    tx(g, 'Scan pack or call free', 1260, 808, 28, SAND, 400, 'center');
    g.fillStyle = CORAL;
    g.fillRect(0, 870, 1500, 154);
    icon(g, 'doctor', 70, 890, 115, '#fff', 7);
    tx(g, 'Show this to your doctor', 230, 975, 74, '#fff', 700, 'left');
    return c;
  }

  function backLabel() {
    const [c, g] = mk(1500, 1024);
    g.fillStyle = '#fff';
    g.fillRect(0, 0, 1500, 1024);
    g.fillStyle = TEAL;
    g.fillRect(0, 0, 1500, 100);
    logo(g, 50, 20, 60, '#fff', CORAL);
    tx(g, 'Read before use', 1450, 68, 44, SAND, 700, 'right');
    tx(g, 'HOW TO USE', 50, 170, 40, CORAL, 700, 'left');
    [['1', 'Shake the bottle well.'], ['2', 'Pour into the cup.'], ['3', 'Dose: as your doctor says.'], ['4', 'Close the cap tightly.']].forEach((r, i) => {
      const y = 215 + i * 130;
      g.fillStyle = TEAL;
      g.beginPath();
      g.arc(88, y + 40, 38, 0, 7);
      g.fill();
      tx(g, r[0], 88, y + 55, 44, '#fff', 700, 'center');
      const w = r[1].split(' ');
      let a = '', b = '';
      w.forEach(x => { (a + x).length < 17 && !b ? a += x + ' ' : b += x + ' '; });
      tx(g, a.trim(), 150, y + 34, 38, INK, 700);
      tx(g, b.trim(), 150, y + 78, 38, INK, 700);
    });
    tx(g, 'EACH 5 ml CONTAINS', 520, 170, 40, CORAL, 700, 'left');
    tx(g, 'Paracetamol IP 250 mg', 520, 225, 44, INK, 700);
    rr(g, 520, 260, 460, 2, 0, TEAL);
    tx(g, 'Store below 25°C, away from', 520, 325, 34, INK);
    tx(g, 'sunlight and moisture.', 520, 368, 34, INK);
    rr(g, 520, 410, 460, 190, 22, SAND);
    tx(g, 'Keep out of reach', 545, 470, 40, INK, 700);
    tx(g, 'of children.', 545, 515, 40, INK, 700);
    tx(g, 'बच्चों की पहुँच से दूर रखें', 545, 575, 40, TEAL, 700, 'left');
    tx(g, 'Do not give more than your', 520, 665, 34, INK);
    tx(g, 'doctor says. If symptoms', 520, 708, 34, INK);
    tx(g, 'continue, see your doctor.', 520, 751, 34, INK);
    icon(g, 'doctor', 520, 780, 100, TEAL, 7);
    tx(g, 'Doctor first.', 640, 850, 48, TEAL, 700, 'left');
    rr(g, 1020, 140, 430, 430, 22, '#fff', INK, 6);
    [['BATCH', 'EQ-0426-A1'], ['MFG', '04/2026'], ['MRP', '₹ 38.00']].forEach((r, i) => {
      tx(g, r[0], 1045, 195 + i * 70, 30, TEAL, 700);
      tx(g, r[1], 1190, 195 + i * 70, 38, INK, 700);
    });
    rr(g, 1040, 385, 390, 160, 18, CORAL);
    tx(g, 'EXP', 1065, 430, 34, '#fff', 700, 'left');
    tx(g, 'Use before this date', 1415, 430, 26, '#fff', 400, 'right');
    tx(g, '03/2028', 1235, 515, 76, '#fff', 700, 'center');
    const q = 21, qs = 9, qx = 1030, qy = 600;
    g.fillStyle = INK;
    for (let i = 0; i < q; i++) {
      for (let j = 0; j < q; j++) {
        const f = (i < 7 && j < 7) || (i > 13 && j < 7) || (i < 7 && j > 13);
        if (f) {
          const e = Math.max(Math.abs(i % 14 - 3), Math.abs(j % 14 - 3));
          if (e == 3 || e <= 1) g.fillRect(qx + i * qs, qy + j * qs, qs, qs);
        } else if (rnd() > .55) {
          g.fillRect(qx + i * qs, qy + j * qs, qs, qs);
        }
      }
    }
    tx(g, 'Scan to verify', 1240, 640, 30, TEAL, 700);
    tx(g, 'this pack.', 1240, 678, 30, TEAL, 700);
    tx(g, 'Free helpline:', 1240, 730, 26, INK, 400);
    tx(g, '1800-266-EQUA', 1240, 764, 28, INK, 700);
    tx(g, 'Press 1', 1240, 798, 26, INK, 400);
    let x = 1030;
    g.fillStyle = INK;
    while (x < 1250) {
      const w = 2 + Math.floor(rnd() * 5);
      g.fillRect(x, 830, w, 70);
      x += w + 2 + Math.floor(rnd() * 4);
    }
    g.fillStyle = TEAL;
    g.fillRect(0, 925, 1500, 99);
    tx(g, 'Mfd. by: Licensed WHO-GMP Plant 04, Baddi   Mfg. Lic. No.: G/25/1842', 50, 968, 30, '#fff', 700);
    tx(g, 'Marketed by EQUA   ·   Equal medicine, explained', 50, 1005, 26, SAND);
    return c;
  }

  function sealTex() {
    const [c, g] = mk(2048, 225);
    g.fillStyle = TEAL;
    g.fillRect(0, 0, 2048, 225);
    g.fillStyle = CORAL;
    g.fillRect(0, 0, 2048, 16);
    g.fillRect(0, 209, 2048, 16);
    for (let i = 0; i < 3; i++) {
      tx(g, 'TAMPER-EVIDENT SEAL  ·  DO NOT USE IF BROKEN  ·  ', i * 700 - 60, 138, 70, '#fff', 700, 'left');
    }
    return c;
  }

  function capTopTex() {
    const [c, g] = mk(512, 512);
    g.fillStyle = TEAL;
    g.fillRect(0, 0, 512, 512);
    g.strokeStyle = SAND;
    g.lineWidth = 8;
    g.beginPath();
    g.arc(256, 256, 230, 0, 7);
    g.stroke();
    logo(g, 126, 190, 60, '#fff', CORAL);
    tx(g, 'PUSH DOWN & TURN', 256, 330, 34, SAND, 700, 'center');
    tx(g, 'Child-resistant cap', 256, 372, 28, '#fff', 400, 'center');
    g.strokeStyle = SAND;
    g.lineWidth = 10;
    g.lineCap = 'round';
    g.beginPath();
    g.arc(256, 256, 180, .3, 2.4);
    g.stroke();
    g.beginPath();
    g.moveTo(300, 425);
    g.lineTo(265, 440);
    g.lineTo(262, 400);
    g.stroke();
    return c;
  }

  function cupTex() {
    const [c, g] = mk(512, 256);
    [['20', .2], ['15', .4], ['10', .6], ['5', .8]].forEach(([t, f]) => {
      g.fillStyle = TEAL;
      g.fillRect(0, f * 256, 512, 5);
      tx(g, t + ' ml', 256, f * 256 - 8, 30, TEAL, 700, 'center');
    });
    return c;
  }

  const R = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
  R.outputEncoding = THREE.sRGBEncoding;
  R.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));

  const S = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(36, 1, .1, 50);
  S.add(new THREE.HemisphereLight(0xffffff, 0x998877, .85));
  const dl = new THREE.DirectionalLight(0xffffff, .8);
  dl.position.set(3, 5, 6);
  S.add(dl);
  const dl2 = new THREE.DirectionalLight(0xffffff, .35);
  dl2.position.set(-4, 2, -5);
  S.add(dl2);

  const tex = c => {
    const t = new THREE.CanvasTexture(c);
    t.encoding = THREE.sRGBEncoding;
    t.anisotropy = 8;
    return t;
  };

  const B = new THREE.Group();
  S.add(B);

  const lp = a => a.map(p => new THREE.Vector2(p[0], p[1]));
  B.add(new THREE.Mesh(
    new THREE.LatheGeometry(lp([[0, 0], [.85, 0], [.97, .06], [1, .2], [1, 2.45], [.95, 2.75], [.75, 2.95], [.5, 3.1], [.42, 3.22], [.42, 3.58], [.46, 3.6], [.46, 3.68], [.4, 3.7]]), 72),
    new THREE.MeshPhongMaterial({ color: 0x8a4b12, transparent: true, opacity: .6, shininess: 90, specular: 0xffffff, side: THREE.DoubleSide })
  ));

  B.add(new THREE.Mesh(
    new THREE.LatheGeometry(lp([[0, .08], [.9, .1], [.93, .25], [.93, 2.3], [0, 2.3]]), 72),
    new THREE.MeshPhongMaterial({ color: 0xe39a3a, transparent: true, opacity: .92 })
  ));

  const lab = (t, cen) => {
    const a = 140 * Math.PI / 180;
    const m = new THREE.Mesh(
      new THREE.CylinderGeometry(1.015, 1.015, 1.7, 96, 1, true, cen - a / 2, a),
      new THREE.MeshPhongMaterial({ map: tex(t), shininess: 30, specular: 0x333333 })
    );
    m.position.y = 1.3;
    B.add(m);
  };

  function build() {
    lab(frontLabel(), 0);
    lab(backLabel(), Math.PI);

    const sl = new THREE.Mesh(new THREE.CylinderGeometry(.435, .435, .3, 64, 1, true), new THREE.MeshPhongMaterial({ map: tex(sealTex()) }));
    sl.position.y = 3.4;
    B.add(sl);

    const cm = new THREE.MeshPhongMaterial({ color: 0x0A4A48, shininess: 60 });
    const cp = new THREE.Mesh(new THREE.CylinderGeometry(.58, .58, .6, 64), cm);
    cp.position.y = 3.85;
    B.add(cp);

    const rm = new THREE.MeshPhongMaterial({ color: 0x073433 });
    for (let i = 0; i < 40; i++) {
      const a = i / 40 * 6.2832;
      const r = new THREE.Mesh(new THREE.BoxGeometry(.04, .5, .05), rm);
      r.position.set(Math.sin(a) * .59, 3.85, Math.cos(a) * .59);
      r.rotation.y = a;
      B.add(r);
    }

    const tp = new THREE.Mesh(new THREE.CircleGeometry(.57, 64), new THREE.MeshPhongMaterial({ map: tex(capTopTex()) }));
    tp.rotation.x = -Math.PI / 2;
    tp.position.y = 4.152;
    B.add(tp);

    const cup = new THREE.Mesh(new THREE.CylinderGeometry(.5, .4, 1.1, 64, 1, true), new THREE.MeshPhongMaterial({ map: tex(cupTex()), transparent: true, opacity: .92, side: THREE.DoubleSide, shininess: 90 }));
    cup.position.set(2.1, .55, .5);
    cup.rotation.y = Math.PI;
    S.add(cup);

    const base = new THREE.Mesh(new THREE.CircleGeometry(.4, 48), new THREE.MeshPhongMaterial({ color: 0xcfe8ea, transparent: true, opacity: .7 }));
    base.rotation.x = -Math.PI / 2;
    base.position.set(2.1, .01, .5);
    S.add(base);

    const [sc, sg] = mk(256, 256);
    const gr = sg.createRadialGradient(128, 128, 10, 128, 128, 128);
    gr.addColorStop(0, 'rgba(0,0,0,.35)');
    gr.addColorStop(1, 'rgba(0,0,0,0)');
    sg.fillStyle = gr;
    sg.fillRect(0, 0, 256, 256);
    const sh = new THREE.Mesh(new THREE.PlaneGeometry(6, 3), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false }));
    sh.rotation.x = -Math.PI / 2;
    sh.position.set(.9, -.01, .2);
    S.add(sh);
  }

  const V = {
    front: { ry: 0, z: 8.4, ty: 2.1, x: .9, t: 'Front: what it is, what it is for, and the doctor strip.' },
    back: { ry: Math.PI, z: 8.4, ty: 2.1, x: .9, t: 'Back: how to use, safety, batch, MFG, EXP, MRP, manufacturer.' },
    cap: { ry: .5, z: 4.2, ty: 3.7, x: 0, t: 'Child-resistant cap with ribs, and the tamper-evident seal band.' },
    side: { ry: Math.PI / 2, z: 8.4, ty: 2.1, x: .9, t: 'Side: amber bottle, liquid level and label edges. Dosing cup beside.' }
  };

  let ry = 0, tr = 0, vel = 0, z = 8.4, tz = 8.4, ty = 2.1, tty = 2.1, px = .9, tpx = .9, drag = false, lx = 0, lt = 0, spin = false;

  function go(k) {
    const v = V[k];
    if (!v) return;
    tr = Math.round((ry - v.ry) / 6.2832) * 6.2832 + v.ry;
    tz = v.z;
    tty = v.ty;
    tpx = v.x;
    if (tooltip) tooltip.textContent = v.t;
    document.querySelectorAll('#bottleControls button').forEach(b => b.classList.toggle('on', b.dataset.v == k));
  }

  document.querySelectorAll('#bottleControls button').forEach(b => {
    b.onclick = () => go(b.dataset.v);
  });

  const spCheck = document.getElementById('bottleSpin');
  if (spCheck) spCheck.onchange = e => spin = e.target.checked;

  cv.onpointerdown = e => {
    drag = true;
    lx = e.clientX;
    cv.setPointerCapture(e.pointerId);
    cv.style.cursor = 'grabbing';
  };
  cv.onpointerup = () => {
    drag = false;
    cv.style.cursor = 'grab';
  };
  cv.onpointermove = e => {
    if (!drag) return;
    ry += (e.clientX - lx) * .01;
    tr = ry;
    lx = e.clientX;
  };
  cv.onwheel = e => {
    e.preventDefault();
    tz = Math.max(3, Math.min(12, tz + e.deltaY * .005));
  };

  function rs() {
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    if (!w || !h) return;
    R.setSize(w, h, false);
    cam.aspect = w / h;
    cam.updateProjectionMatrix();
  }
  window.addEventListener('resize', rs);

  function loop() {
    requestAnimationFrame(loop);
    if (spin && !drag) { tr += .01; }
    ry += (tr - ry) * .1;
    z += (tz - z) * .1;
    ty += (tty - ty) * .1;
    px += (tpx - px) * .1;
    const narrow = cam.aspect < 1, cx = narrow ? 0 : px;
    B.rotation.y = ry;
    B.position.x = 0;
    cam.position.set(cx, ty, narrow ? z * 1.5 : z);
    cam.lookAt(cx, ty, 0);
    R.render(S, cam);
  }

  build();
  rs();
  go('front');
  loop();
}

// -------------------------------------------------------------
// 3. TAB CONTROLLER TO SWITCH BETWEEN TABLET STRIP AND SYRUP
// -------------------------------------------------------------
let stripStarted = false;
let bottleStarted = false;

window.switch3DModel = function(modelType) {
  const tabStrip = document.getElementById('tabStripBtn');
  const tabBottle = document.getElementById('tabBottleBtn');
  const stageStrip = document.getElementById('stageStrip');
  const stageBottle = document.getElementById('stageBottle');

  if (modelType === 'strip') {
    tabStrip.classList.add('bg-[#0A4A48]', 'text-white');
    tabStrip.classList.remove('bg-white', 'text-[#2B3D3B]');
    tabBottle.classList.remove('bg-[#0A4A48]', 'text-white');
    tabBottle.classList.add('bg-white', 'text-[#2B3D3B]');

    stageStrip.classList.remove('hidden');
    stageBottle.classList.add('hidden');

    if (!stripStarted) {
      stripStarted = true;
      setTimeout(initTabletStrip3D, 50);
    }
  } else {
    tabBottle.classList.add('bg-[#0A4A48]', 'text-white');
    tabBottle.classList.remove('bg-white', 'text-[#2B3D3B]');
    tabStrip.classList.remove('bg-[#0A4A48]', 'text-white');
    tabStrip.classList.add('bg-white', 'text-[#2B3D3B]');

    stageBottle.classList.remove('hidden');
    stageStrip.classList.add('hidden');

    if (!bottleStarted) {
      bottleStarted = true;
      setTimeout(initSyrupBottle3D, 50);
    }
  }
};

window.initBoth3D = function() {
  // Start with tablet strip by default
  window.switch3DModel('strip');
};
