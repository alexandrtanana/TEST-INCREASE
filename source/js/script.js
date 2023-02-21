var icons = document.querySelectorAll('.toggle');
var navMain = document.querySelector('.sidebar-nav__list');
var navToggle = document.querySelector('.toggle');


icons.forEach(toggle => {
  toggle.addEventListener('click', (event) => {
    toggle.classList.toggle('open');
  });
});

navMain.classList.remove('nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('closed')) {
    navMain.classList.remove('closed');
    navMain.classList.add('opened');
  } else {
    navMain.classList.add('closed');
    navMain.classList.remove('opened');
  }
});
