function sliderFormOrder() {
const swiper = new Swiper('#slider-form-order', {
    // Optional parameters
    direction: 'horizontal',
    speed: 1800,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 5,
    grabCursor: true,

    keyboard: {
        enabled: true,
      },
  });

}

export default sliderFormOrder;