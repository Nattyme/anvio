function sliderOffersWide() {
const swiper = new Swiper('#slider-offers-wide', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    speed: 1800,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    
    keyboard: {
        enabled: true,
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '#slider-offers-wide-next',
      prevEl: '#slider-offers-wide-prev',
    },
  });

}

  export default sliderOffersWide;