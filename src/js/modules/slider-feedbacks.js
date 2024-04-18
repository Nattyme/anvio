function sliderFeedbacks() {
const swiper = new Swiper('#slider-feedbacks', {
    // Optional parameters
    direction: 'horizontal',
    speed: 1800,
    slidesPerView: 4,
    slidesPerGroup: 2,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '#slider-feedbacks-next',
      prevEl: '#slider-feedbacks-prev',
    },
  });

}

  export default sliderFeedbacks;