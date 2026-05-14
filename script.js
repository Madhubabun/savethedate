// Countdown
const target = new Date('2026-06-10T10:00:00');

function updateCountdown() {
  const x = Math.max(0, target - new Date());

  const values = {
    d: Math.floor(x / 86400000),
    h: Math.floor(x / 3600000) % 24,
    m: Math.floor(x / 60000) % 60,
    s: Math.floor(x / 1000) % 60
  };

  Object.entries(values).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ============================================
// Soft Transparent Falling Love Symbols Only
// ============================================

const symbols = ['💞',];

const layer = document.createElement('div');
layer.id = 'floating-effects';
document.body.appendChild(layer);

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

// Smaller quantity for subtle effect
const TOTAL_SYMBOLS = 18;

for (let i = 0; i < TOTAL_SYMBOLS; i++) {
  const item = document.createElement('div');
  item.className = 'floating-item';

  item.textContent =
    symbols[Math.floor(Math.random() * symbols.length)];

  // Random positions
  item.style.left = rand(-5, 100) + 'vw';

  // Small size
  item.style.fontSize = rand(18, 28) + 'px';

  // Slow movement
  item.style.animationDuration = rand(18, 35) + 's';

  // Random stagger
  item.style.animationDelay = (-rand(0, 35)) + 's';

  // Natural drift
  item.style.setProperty('--drift', rand(-80, 80) + 'px');
  item.style.setProperty('--rotate', rand(-180, 180) + 'deg');

  // Transparent appearance
  item.style.opacity = rand(0.10, 0.22);

  layer.appendChild(item);
}
