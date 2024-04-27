function sliderFormOrder() {
const swiper = new Swiper('#slider-form-order', {
    // Optional parameters
    direction: 'horizontal',
    speed: 1800,
    slidesPerView: 4,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 5,
    grabCursor: true,

    keyboard: {
        enabled: true,
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '#slider-form-order-next',
      prevEl: '#slider-form-order-prev',
    },
  });

}

export default sliderFormOrder;