const menuIconMobile = document.querySelector('.navbar__hamb');
const menu = document.querySelector('.navbar__menu');
const viewport = document.querySelector('body');
const menuLinks = document.querySelectorAll('.navbar__menu__link');

function isActiveClassExisted(element) {
  return element.classList.contains('active');
}

function refreshIcon() {
  if (isActiveClassExisted(menu)) {
    menuIconMobile.setAttribute('src', 'images/hamburguer-close.png');
    document.querySelector('.head').style.filter = 'blur(5px)';
  } else {
    menuIconMobile.setAttribute('src', 'images/hamburger.png');
    document.querySelector('.head').style.filter = 'blur(0px)';
  }
}
function openMenu() {
  menu.classList.toggle('active');
  viewport.classList.add('blockover');
  refreshIcon();
}

function closeMenu() {
  menu.classList.remove('active');
  viewport.classList.remove('blockover');
  refreshIcon();
}

menuIconMobile.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});
