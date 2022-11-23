const hamburgerIcon = document.querySelector('.navbar__hamb');
const menu = document.querySelector('.navbar__menu');
const viewport = document.querySelector('body');
const links = document.querySelectorAll('.navbar__menu__link');

function open() {
  menu.classList.toggle('active');
  viewport.classList.add('blockover');
  hamburgerIcon.setAttribute('src', 'images/hamburguer-close.png');
}

function close() {
  hamburgerIcon.setAttribute('src', 'images/hamburger.png');
  menu.classList.remove('active');
  viewport.classList.remove('blockover');
}

hamburgerIcon.addEventListener('click', open);

for (let removedMenu of links) {
  removedMenu.addEventListener('click', close);
}
