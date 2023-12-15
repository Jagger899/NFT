const menuOpen = document.getElementById('menu-open');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');
const main = document.getElementById('main');
const exploreLink = [...document.getElementsByClassName('explore__link')];
console.log(exploreLink);
const exploreLink2 = document.querySelectorAll('.explore__link');
console.log(exploreLink2)
const explorePhotos = document.querySelectorAll('.explore__right-photo');
console.log(explorePhotos);

const openDescr = document.getElementById('sellers__title-svg');
const sellersDescr = document.getElementById('sellers__desc');

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
  
});

for (const link of exploreLink) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    let tabId = link.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);
    // console.log(currentTab)
    // console.log(tabId);

    if (!currentTab.classList.contains('explore__right-photo--visible')) {
      for (const link of exploreLink) {
        link.classList.remove('explore__link--checked');
      };

      for (const image of explorePhotos) {
        image.classList.remove('explore__right-photo--visible');
      }

      link.classList.add('explore__link--checked');
      currentTab.classList.add('explore__right-photo--visible');
    };
  });
};

const firstExploreLink = document.querySelector('.explore__link');
firstExploreLink.click();


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

// window.addEventListener('scroll', function () {
//   const scrollPosition = window.scrollY;
//   // console.log(scrollPosition)
//   if (scrollPosition === 0) {
//     header.classList.remove('header--fixed');
//     main.classList.remove('main--with-margin');
//   }
// });

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

const swiper1 = new Swiper('.tops__slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  grabcursor:true,
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
  grabcursor:true,
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

const accordeonTitles = document.querySelectorAll('.accordeon__title');
const accordeonText = document.querySelectorAll('.accordeon__text');
const accordeon = document.querySelector('.accordeon');


accordeonTitles.forEach(function (accordeonTitle) {
  console.log(accordeonTitle)

  accordeonTitle.addEventListener('click', function () {
    let currentElement = accordeonTitle.nextElementSibling;
    console.log(currentElement);

    if (!accordeonTitle.classList.contains('accordeon__title--visible')) {
      accordeonTitle.classList.add('accordeon__title--visible');
    } else {
      accordeonTitle.classList.remove('accordeon__title--visible');
    }

    if (!currentElement.classList.contains('accordeon__text--visible')) {
      currentElement.classList.add('accordeon__text--visible');
    } else {
      currentElement.classList.remove('accordeon__text--visible');
    }
  })
});


