function sliderEmotions() {
const swiper = new Swiper('#slider-emotions', {
    // Optional parameters
    direction: 'horizontal',
    speed: 1800,
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '#slider-emotions-next',
      prevEl: '#slider-emotions-prev',
    },

    keyboard: {
        enabled: true,
      },
  });

}

  export default sliderEmotions;