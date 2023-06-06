const swiper2 = new Swiper('.open-container', {
   spaceBetween: 40,
   // grabCursor: true,
   slidesPerView: 1,
   grabCursor: true,
   breakpoints: {
      640: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      1000: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
      1480: {
         slidesPerView: 4,
         spaceBetween: 50,
      },
   },
   grabCursor: true,

});
const swiper3 = new Swiper('.client-container', {
   spaceBetween: 40,
   // grabCursor: true,
   slidesPerView: 1,
   grabCursor: true,
   loop: true,
   breakpoints: {
      640: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      1000: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
      1480: {
         slidesPerView: 4,
         spaceBetween: 50,
      },
   },

});

const swiper4 = new Swiper('.projects-container', {
   spaceBetween: 40,
   // grabCursor: true,
   slidesPerView: 1,
   grabCursor: true,
   loop: true,
   breakpoints: {
      640: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      1000: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
      1480: {
         slidesPerView: 3,
         spaceBetween: 50,
      },
   },

});

let stafButton1 = document.querySelector('.staff-button-1')
let stafButton2 = document.querySelector('.staff-button-2')
let stafButton3 = document.querySelector('.staff-button-3')
let stafButton4 = document.querySelector('.staff-button-4')
let stafButton5 = document.querySelector('.staff-button-5')
let stafButton6 = document.querySelector('.staff-button-6')
let stafButton7 = document.querySelector('.staff-button-7')
let stafButton8 = document.querySelector('.staff-button-8')
let stafButton9 = document.querySelector('.staff-button-9')
let stafForm1 = document.querySelector('.staff-form-1')
let stafForm2 = document.querySelector('.staff-form-2')
let stafForm3 = document.querySelector('.staff-form-3')
let stafForm4 = document.querySelector('.staff-form-4')
let stafForm5 = document.querySelector('.staff-form-5')
let stafForm6 = document.querySelector('.staff-form-6')
let stafForm7 = document.querySelector('.staff-form-7')
let stafForm8 = document.querySelector('.staff-form-8')
let stafForm9 = document.querySelector('.staff-form-9')
let stafClose = document.querySelectorAll('.staff-item-close')

stafButton1.addEventListener('click', function () {
   stafForm1.classList.add('active')
})
stafButton2.addEventListener('click', function () {
   stafForm2.classList.add('active')
})
stafButton3.addEventListener('click', function () {
   stafForm3.classList.add('active')
})
stafButton4.addEventListener('click', function () {
   stafForm4.classList.add('active')
})
stafButton5.addEventListener('click', function () {
   stafForm5.classList.add('active')
})
stafButton6.addEventListener('click', function () {
   stafForm6.classList.add('active')
})
stafButton7.addEventListener('click', function () {
   stafForm7.classList.add('active')
})
stafButton8.addEventListener('click', function () {
   stafForm8.classList.add('active')
})
stafButton9.addEventListener('click', function () {
   stafForm9.classList.add('active')
})
stafClose.forEach(el => {
   el.addEventListener('click', function () {
      stafForm1.classList.remove('active')
      stafForm2.classList.remove('active')
      stafForm3.classList.remove('active')
      stafForm4.classList.remove('active')
      stafForm5.classList.remove('active')
      stafForm6.classList.remove('active')
      stafForm7.classList.remove('active')
      stafForm8.classList.remove('active')
      stafForm9.classList.remove('active')

   })
})
let globalButton = document.querySelector('.global-button')
let roomButtons = document.querySelectorAll('.room-button')
let staffButtons2 = document.querySelectorAll('.staff-form-link button')
let staffButtons = document.querySelectorAll('.staff-form-button')
let priceButtons = document.querySelectorAll('.button-price')
let contactForm = document.querySelector('.contact-form')
let contactContainer = document.querySelector('.contact-form-container ')
let contactFormClose = document.querySelector('.contact-close')
let more6 = document.querySelector('.more-6')
let more5 = document.querySelector('.more-5')
let more4 = document.querySelector('.more-4')
let more3 = document.querySelector('.more-3')
let more2 = document.querySelector('.more-2')
let more1 = document.querySelector('.more-1')

let quary1 = document.querySelector('.quary-1')
let quary2 = document.querySelector('.quary-2')
let quary3 = document.querySelector('.quary-3')
let quary4 = document.querySelector('.quary-4')
let quary5 = document.querySelector('.quary-5')
let quary6 = document.querySelector('.quary-6')
let quary7 = document.querySelector('.quary-7')

let quaryButton1 = document.querySelector('.quary-button-1')
let quaryButton2 = document.querySelector('.quary-button-2')
let quaryButton3 = document.querySelector('.quary-button-3')
let quaryButton4 = document.querySelector('.quary-button-4')
let quaryButton5 = document.querySelector('.quary-button-5')
let quaryButton6 = document.querySelector('.quary-button-6')
let quaryButton7 = document.querySelector('.quary-button-7')

let inkey6 = document.querySelector('.inkey-6')
let inkey5 = document.querySelector('.inkey-5')
let inkey4 = document.querySelector('.inkey-4')
let inkey3 = document.querySelector('.inkey-3')
let inkey2 = document.querySelector('.inkey-2')
let inkey1 = document.querySelector('.inkey-1')
let moreClose = document.querySelectorAll('.more-close')
let quaryClose = document.querySelectorAll('.quary-close')

globalButton.addEventListener('click', function () {
   contactForm.classList.add('active')
})

priceButtons.forEach(element => {
   element.addEventListener('click', function () {
      contactForm.classList.add('active')
   })
});
staffButtons2.forEach(element => {
   element.addEventListener('click', function () {
      contactForm.classList.add('active')
   })
});
roomButtons.forEach(element => {
   element.addEventListener('click', function () {
      contactForm.classList.add('active')
   })
});
staffButtons2.forEach(element => {
   element.addEventListener('click', function () {
      contactForm.classList.add('active')

      stafForm1.classList.remove('active')
      stafForm2.classList.remove('active')
      stafForm3.classList.remove('active')
      stafForm4.classList.remove('active')
      stafForm5.classList.remove('active')
      stafForm6.classList.remove('active')
      stafForm7.classList.remove('active')
      stafForm8.classList.remove('active')
      stafForm9.classList.remove('active')

   })
});
staffButtons.forEach(element => {
   element.addEventListener('click', function () {
      contactForm.classList.add('active')

      stafForm1.classList.remove('active')
      stafForm2.classList.remove('active')
      stafForm3.classList.remove('active')
      stafForm4.classList.remove('active')
      stafForm5.classList.remove('active')
      stafForm6.classList.remove('active')
      stafForm7.classList.remove('active')
      stafForm8.classList.remove('active')
      stafForm9.classList.remove('active')

   })
});
contactFormClose.addEventListener('click', function () {
   contactForm.classList.remove('active')
})
document.onclick = function (e) {
   if (e.target == contactForm && e.target !== globalButton) {
      contactForm.classList.remove('active')

   }
}
inkey6.addEventListener('click', function () {
   more6.classList.add('active')
})
inkey5.addEventListener('click', function () {
   more5.classList.add('active')
})
inkey4.addEventListener('click', function () {
   more4.classList.add('active')
})
inkey3.addEventListener('click', function () {
   more3.classList.add('active')
})
inkey2.addEventListener('click', function () {
   more2.classList.add('active')
})
inkey1.addEventListener('click', function () {
   more1.classList.add('active')
})


quaryButton1.addEventListener('click', function () {
   quary1.classList.add('active')
})
quaryButton2.addEventListener('click', function () {
   quary2.classList.add('active')
})
quaryButton3.addEventListener('click', function () {
   quary3.classList.add('active')
})
quaryButton4.addEventListener('click', function () {
   quary4.classList.add('active')
})
quaryButton5.addEventListener('click', function () {
   quary5.classList.add('active')
})
quaryButton6.addEventListener('click', function () {
   quary6.classList.add('active')
})
quaryButton7.addEventListener('click', function () {
   quary7.classList.add('active')
})

quaryClose.forEach(element => {
   element.addEventListener('click', function () {
      quary1.classList.remove('active')
      quary2.classList.remove('active')
      quary3.classList.remove('active')
      quary4.classList.remove('active')
      quary5.classList.remove('active')
      quary6.classList.remove('active')
      quary7.classList.remove('active')

   })
});
moreClose.forEach(element => {
   element.addEventListener('click', function () {
      more4.classList.remove('active')
      more1.classList.remove('active')
      more2.classList.remove('active')
      more3.classList.remove('active')
      more5.classList.remove('active')
      more6.classList.remove('active')
   })
});





let burgerMenu = document.querySelector('.header-burger')
let burgerNav = document.querySelector('.header-nav')

burgerMenu.addEventListener('click', function () {
   burgerNav.classList.toggle('active')
   burgerMenu.classList.toggle('active')
})

let links = document.querySelectorAll('.header-item')
links.forEach(link => {
   link.addEventListener('click', function () {
      burgerNav.classList.remove("active")
      burgerMenu.classList.remove("active")
   })
})


ScrollReveal({
   distance: '100px',
   duration: 2000,
   delay: 200,
   reset: false,
});
ScrollReveal().reveal(".global-item h1", { delay: 300, origin: "right", interval: 100 });
ScrollReveal().reveal(".global-item h2", { delay: 700, origin: "right" });
ScrollReveal().reveal(".global-item p", { delay: 900, origin: "right" });
ScrollReveal().reveal(".global-button", { delay: 1000, origin: "right" });
ScrollReveal().reveal(".subglobal-item", { delay: 1400, origin: "right", interval: 100 });
ScrollReveal().reveal(".staff-item", { delay: 300, origin: "top", interval: 100 });
ScrollReveal().reveal(".room-item", { delay: 300, origin: "top", interval: 100 });
ScrollReveal().reveal(".inkey-item", { delay: 300, origin: "top", interval: 100 });
ScrollReveal().reveal(".category-item", { delay: 300, origin: "top", interval: 100 });

ScrollReveal().reveal(".title h2", { delay: 400, origin: "top" });
ScrollReveal().reveal(".consultation-text h2", { delay: 400, origin: "left" });
ScrollReveal().reveal(".consultation-text p", { delay: 600, origin: "left" });
ScrollReveal().reveal(".consultation-form", { delay: 800, origin: "right" });



