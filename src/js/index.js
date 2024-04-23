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
import tabs from './modules/tabs.js';
tabs();

// sliders
import sliderOffers from './modules/slider-offers.js';
import sliderOffersWide from './modules/slider-offers-wide.js';
import sliderStars from './modules/slider-stars.js';
import sliderFeedbacks from './modules/slider-feedbacks.js';
import sliderPromo from './modules/slider-promo.js';
import sliderNews from './modules/slider-news.js';
sliderOffers();
sliderOffersWide();
sliderStars();
sliderFeedbacks();
sliderPromo();
sliderNews();

