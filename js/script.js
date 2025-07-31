const b = document.querySelector('canvas'),
  c = document.querySelector('.name'),
  d = b.getContext('2d');
let e = [],
  f = [],
  g = [],
  h = 0,
  i = 0,
  j = 0,
  k = window.innerWidth,
  l = window.innerHeight;
b.width = k;
b.height = l;
const m = 70,
  n = 30;
function o() {
  for (let a = 0; a < m; a++) {
    const b = Math.random() * k,
      c = Math.random() * l,
      d = 2 + Math.random() * 2,
      f = 0.5 + Math.random(),
      g = 0.2 + 0.3 * Math.random();
    e.push({
      x: b,
      y: c,
      radius: d,
      alpha: f,
      speed: g
    });
  }
}
function p() {
  for (let a = 0; a < n; a++) {
    const b = Math.random() * k,
      c = Math.random() * l,
      e = 0.5 + Math.random(),
      f = 1 + 2 * Math.random();
    g.push({
      x: b,
      y: c,
      alpha: e,
      speed: f
    });
  }
}
function q() {
  d.clearRect(0, 0, k, l),
    r(),
    s(),
    t(),
    u(),
    requestAnimationFrame(q);
}
function r() {
  for (let a = 0; a < e.length; a++) {
    const b = e[a];
    b.y -= b.speed,
      b.alpha -= 0.002,
      b.alpha <= 0 && (b.x = Math.random() * k,
        b.y = l + 10,
        b.alpha = 0.5 + Math.random()),
      d.beginPath(),
      d.arc(b.x, b.y, b.radius, 0, 2 * Math.PI, !1),
      d.fillStyle = `rgba(255,255,255,${b.alpha})`,
      d.fill();
  }
}
function s() {
  for (let a = 0; a < f.length; a++) {
    const b = f[a];
    b.x += b.vx,
      b.y += b.vy,
      b.life++,
      b.life > 100 && f.splice(a, 1),
      d.beginPath(),
      d.arc(b.x, b.y, 1.5, 0, 2 * Math.PI, !1),
      d.fillStyle = `rgba(255,0,0,${1 - b.life / 100})`,
      d.fill();
  }
}
function t() {
  for (let a = 0; a < g.length; a++) {
    const b = g[a];
    b.y -= b.speed,
      b.alpha -= 0.005,
      b.alpha <= 0 && (b.x = Math.random() * k,
        b.y = l + 10,
        b.alpha = 0.5 + Math.random()),
      d.beginPath(),
      d.rect(b.x, b.y, 1.5, 10),
      d.fillStyle = `rgba(0,255,0,${b.alpha})`,
      d.fill();
  }
}
function u() {
  j++,
    j % 5 == 0 && f.push({
      x: k / 2,
      y: l / 2,
      vx: -2 + 4 * Math.random(),
      vy: -2 + 4 * Math.random(),
      life: 0
    });
}
window.addEventListener('resize', () => {
  k = window.innerWidth,
    l = window.innerHeight,
    b.width = k,
    b.height = l;
});
const N = "RAX";
let O = '',
  P = 0,
  Q = !1,
  R = !0;
function G() {
  if (!Q && P < N.length) O = N.slice(0, P + 1), P++;
  else if (Q && P > 0) O = N.slice(0, P - 1), P--;
  else if (P === N.length) Q = !0, setTimeout(G, 1e4);
  else if (0 === P) Q = !1;
  c.textContent = O + (R ? "|" : " "),
    Math.random() < .1 && (c.classList.add("glitch"), setTimeout(() => c.classList.remove("glitch"), 200)),
    setTimeout(G, Q ? 150 : 300);
}
setInterval(() => {
  R = !R;
}, 500);
o(),
  p(),
  q(),
  G();
