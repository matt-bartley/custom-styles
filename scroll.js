let mobileMenu = document.getElementById('widget_5852_11049_6676');

let scroll = function () {
  console.log(mobileMenu);
  let scroll = window.scrollY;
  if (scroll > 15) {
    mobileMenu.setAttribute('style', 'position: absolute');
  } else {
    mobileMenu.setAttribute('style', 'position: fixed');
  }
};

window.addEventListener('scroll', scroll);
