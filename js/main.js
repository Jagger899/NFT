const menuOpen = document.getElementById('menu-open');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');
const main = document.getElementById('main');
const exploreLink = [...document.getElementsByClassName('explore__link')];
console.log(exploreLink);
const exploreLink2 = document.querySelectorAll('.explore__link');
console.log(exploreLink2)

const openDescr = document.getElementById('sellers__title-svg');
const sellersDescr = document.getElementById('sellers__desc');
console.log(openDescr,sellersDescr)


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

for (const link of exploreLink) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    for (const link of exploreLink) {
      link.classList.remove('explore__link--checked');
    }

    link.classList.add('explore__link--checked');
  })
}

// exploreLink.forEach(function (link) {
//   console.log(link);
//   link.addEventListener('click', function (event) {
//     event.preventDefault();

//     let currentLink = link;
    
//     exploreLink.forEach(function (item) {
//       item.classList.remove('explore__link--checked');
//     });

//     currentLink.classList.add('explore__link--checked');
//   });
// });

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  // console.log(scrollPosition)
  if (scrollPosition === 0) {
    header.classList.remove('header--fixed');
    main.classList.remove('main--with-margin');
  }
});

// openDescr.addEventListener('click', function () {
//   sellersDescr.classList.add('sellers__desc--unvis');
  
//   openDescr.addEventListener('click', function () {
//     if (sellersDescr.classList.contains('sellers__desc--unvis')) {
//       sellersDescr.classList.remove('sellers__desc--unvis');
//     } else {
//       sellersDescr.classList.add('sellers__desc--unvis');
//     }
//   })
// });

openDescr.addEventListener('click', function () {
  if (sellersDescr.classList.contains('sellers__desc--unvis')) {
    sellersDescr.classList.remove('sellers__desc--unvis');
    openDescr.classList.remove('sellers__title-colory-svg--rotate');
  } else {
    sellersDescr.classList.add('sellers__desc--unvis');
    openDescr.classList.add('sellers__title-colory-svg--rotate');
  }
});
// openDescr.addEventListener('click', function () {
//   if()
// })

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