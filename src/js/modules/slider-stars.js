function sliderStars() {
const swiper = new Swiper('#slider-stars', {
    // Optional parameters
    direction: 'horizontal',
    speed: 1800,
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '#slider-stars-next',
      prevEl: '#slider-stars-prev',
    },
  });

}

  export default sliderStars;