document.querySelectorAll('.dropdown').forEach(d => {
  d.addEventListener('mouseenter', () => d.classList.add('open'));
  d.addEventListener('mouseleave', () => d.classList.remove('open'));
});