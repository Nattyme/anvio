function sliderNews() {
const swiper = new Swiper('#slider-news', {
    // Optional parameters
    direction: 'horizontal',
    speed: 1800,
    slidesPerView: 4,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '#slider-news-next',
      prevEl: '#slider-news-prev',
    },
  });

}

export default sliderNews;