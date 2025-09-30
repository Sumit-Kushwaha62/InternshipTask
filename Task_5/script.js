function closeMenu() {
  const list = document.getElementById('navList');
  if (list) list.classList.remove('open');
}

window.addEventListener('DOMContentLoaded', () => {
 
  const toggle = document.getElementById('menuToggle');
  const list = document.getElementById('navList');
  if (toggle && list) {
    toggle.addEventListener('click', () => {
      list.classList.toggle('open');
    });
  }


  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
