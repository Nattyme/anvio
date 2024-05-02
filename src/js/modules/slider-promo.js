function sliderPromo() {
const swiper = new Swiper('#slider-promo', {
    // Optional parameters
    direction: 'horizontal',
    speed: 1800,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 30,
    grabCursor: true,

    keyboard: {
        enabled: true,
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '#slider-promo-next',
      prevEl: '#slider-promo-prev',
    },
  });

}

export default sliderPromo;