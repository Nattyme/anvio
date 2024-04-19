// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

// Мобильная навигация
// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

// sliders
import sliderOffers from './modules/slider-offers.js';
import sliderStars from './modules/slider-stars.js';
import sliderFeedbacks from './modules/slider-feedbacks.js';
import sliderPromo from './modules/slider-promo.js';
import sliderNews from './modules/slider-news.js';
sliderOffers();
sliderStars();
sliderFeedbacks();
sliderPromo();
sliderNews();
