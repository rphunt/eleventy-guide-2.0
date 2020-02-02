
var menuOpen = document.getElementById('hamburger__openbtn');
var menuClose = document.getElementById('menu__closebtn');
var menu = document.getElementById('tableofcontents');

menuOpen.addEventListener('click', function(e) {
  menu.classList.remove('tableofcontents--closed');
  menu.classList.add('tableofcontents--open');
});

menuClose.addEventListener('click', function(e) {
  menu.classList.remove('tableofcontents--open');
  menu.classList.add('tableofcontents--closed');
});
