/* script.js */
const openBtn = document.getElementById('openBtn');
if (openBtn) {
  openBtn.addEventListener('click', () => {
    localStorage.setItem('playMusic', 'true');
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 700);
  });
}

// bg music
// Countdown Timer
const targetDate = new Date('Oct 26, 2025 19:00:00').getTime();
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;
  if (diff < 0) return clearInterval(countdown);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}, 1000);