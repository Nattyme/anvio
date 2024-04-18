function sliderOffers() {
const swiper = new Swiper('#slider-offers', {
    // Optional parameters
    direction: 'horizontal',
    speed: 1800,
    spaceBetween: 25,
    grabCursor: true,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.slider-offers__pagination',
    },
    
    keyboard: {
        enabled: true,
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '#slider-offers-next',
      prevEl: '#slider-offers-prev',
    },
  });

}

  export default sliderOffers;