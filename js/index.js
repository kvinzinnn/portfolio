const btn = document.getElementById('btnMenu');
const menu = document.getElementById('menu');
const body = document.body;

btn.addEventListener('click', () => {
  menu.classList.toggle('ativo');
  body.classList.toggle('menu-aberto');
});
