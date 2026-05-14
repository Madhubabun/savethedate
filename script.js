
// Countdown
const target = new Date('2026-06-10T10:00:00');
function updateCountdown(){
  const x = Math.max(0, target - new Date());
  const ids = ['d','h','m','s'];
  const vals = [
    Math.floor(x/86400000),
    Math.floor(x/3600000)%24,
    Math.floor(x/60000)%60,
    Math.floor(x/1000)%60
  ];
  ids.forEach((id,i)=>{ const el=document.getElementById(id); if(el) el.textContent = vals[i]; });
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Floating effects
const symbols = [
  {char:'🌸', size:[18,34]},
  {char:'🌺', size:[20,36]},
  {char:'🌷', size:[18,32]},
  {char:'✨', size:[14,26]},
  {char:'🕊️', size:[20,34]},
  {char:'🌹', size:[20,34]}
];

const layer = document.createElement('div');
layer.id = 'floating-effects';
document.body.appendChild(layer);

function rand(min, max){ return Math.random() * (max - min) + min; }

for(let i=0; i<70; i++){
  const item = document.createElement('div');
  item.className = 'floating-item';
  const sym = symbols[Math.floor(Math.random()*symbols.length)];
  item.textContent = sym.char;
  item.style.left = rand(-5, 100) + 'vw';
  item.style.fontSize = rand(sym.size[0], sym.size[1]) + 'px';
  item.style.animationDuration = rand(10, 28) + 's';
  item.style.animationDelay = (-rand(0, 28)) + 's';
  item.style.setProperty('--drift', rand(-120, 120) + 'px');
  item.style.setProperty('--rotate', rand(-540, 540) + 'deg');
  item.style.opacity = rand(0.25, 0.8);
  layer.appendChild(item);
}
