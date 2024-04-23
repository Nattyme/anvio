// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

// Мобильная навигация
// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

// tabs
import tab from './modules/tab.js';
tab();

// sliders
import sliderOffers from './modules/slider-offers.js';
import sliderEmotions from './modules/slider-emotions.js';
import sliderStars from './modules/slider-stars.js';
import sliderFeedbacks from './modules/slider-feedbacks.js';
import sliderPromo from './modules/slider-promo.js';
import sliderNews from './modules/slider-news.js';
import sliderOffersWide from './modules/slider-offers-wide.js';
sliderOffers();
sliderEmotions();
sliderStars();
sliderFeedbacks();
sliderPromo();
sliderNews();
sliderOffersWide();

