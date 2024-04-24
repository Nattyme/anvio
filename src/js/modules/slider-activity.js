function sliderActivity() {
const swiper = new Swiper('#slider-activity', {
    // Optional parameters
    direction: 'horizontal',
    speed: 1800,
    slidesPerView: 1,
    slidesPerGroup: 1,
    centeredSlides: true,
    grabCursor: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '#slider-activity-next',
      prevEl: '#slider-activity-prev',
    },
  });

}

export default sliderActivity;