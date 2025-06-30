document.addEventListener("DOMContentLoaded", function() {
// Эффект наведения на заголовок
const mainTitle = document.getElementById('mainTitle');
mainTitle.addEventListener('mouseenter', function() {
  mainTitle.classList.add('hovered');
});
mainTitle.addEventListener('mouseleave', function() {
  mainTitle.classList.remove('hovered');
});

const SIZE = 120;
const SPEED = 3;
const CHAOS = 0.02;

let vw = innerWidth;
let vh = innerHeight;

function rand(max) { return Math.random() * max; }
function randVel() { return (Math.random() * 2 - 1) * SPEED; }

const circles = [
  { el: c1, x: rand(vw), y: rand(vh), vx: randVel(), vy: randVel() },
  { el: c2, x: rand(vw), y: rand(vh), vx: randVel(), vy: randVel() }
];

function tick() {
  circles.forEach(c => {
    c.x += c.vx;
    c.y += c.vy;
    if (c.x < 0 || c.x > vw - SIZE) c.vx *= -1;
    if (c.y < 0 || c.y > vh - SIZE) c.vy *= -1;
    if (Math.random() < CHAOS) {
      c.vx = randVel();
      c.vy = randVel();
    }
    c.el.style.transform = `translate(${c.x}px, ${c.y}px)`;
  });
  requestAnimationFrame(tick);
}

addEventListener('resize', () => {
  vw = innerWidth;
  vh = innerHeight;
});

tick();

    
});
