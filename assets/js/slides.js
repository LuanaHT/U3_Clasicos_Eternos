let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30, 
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      620: {
        slidesPerView: 1,
        spaceBetween: 10, 
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 20, 
      },
      920: {
        slidesPerView: 3,
        spaceBetween: 20, 
      },
      1240: {
        slidesPerView: 4,
        spaceBetween: 25, 
      },
    },
  });
  