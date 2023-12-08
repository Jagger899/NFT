const menuOpen = document.getElementById('menu-open');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');
const main = document.getElementById('main');
console.log(menuOpen);

menuOpen.addEventListener('click', function () {
  mobileMenu.classList.add('mobile-menu--open');
});

menuClose.addEventListener('click', function () {
  mobileMenu.classList.remove('mobile-menu--open');
});

const header = document.getElementById('header');
console.log(header)

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    header.classList.add('header--fixed');
    main.classList.add('main--with-margin')
  }
  
  console.log('sroll is run')
});

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  console.log(scrollPosition)
  if (scrollPosition === 0) {
    header.classList.remove('header--fixed');
    main.classList.remove('main--with-margin');
  }
});

const swiper1 = new Swiper('.tops__slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween:10,
      },
      450: {
        slidesPerView:1.5,
      },
      600: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      901: {
        slidesPerView: 3,
        spaceBetween:30,
      }
  }

});

const swiper2 = new Swiper('.collections__slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween:10,
      },
      450: {
        slidesPerView:1.5,
      },
      600: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      901: {
        slidesPerView: 3,
        spaceBetween:30,
      }
  }

});