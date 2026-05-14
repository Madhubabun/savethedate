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
