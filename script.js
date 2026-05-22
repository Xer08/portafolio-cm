const menuToggle = document.querySelector('.menu-toggle');
menuToggle?.addEventListener('click', () => {
  const header = document.querySelector('.site-header');
  header?.classList.toggle('menu-open');
});
