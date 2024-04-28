// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Мобильная навигация
// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

// tabs
import tab from './modules/tab.js';
tab();

// sliders
import sliderOffers from './modules/slider-offers.js';
import sliderEmotions from './modules/slider-emotions.js';
import sliderActivity from './modules/slider-activity.js';
import sliderStars from './modules/slider-stars.js';
import sliderFeedbacks from './modules/slider-feedbacks.js';
import sliderPromo from './modules/slider-promo.js';
import sliderNews from './modules/slider-news.js';
import sliderOffersWide from './modules/slider-offers-wide.js';
import sliderFormOrder from './modules/slider-form-order.js';
sliderOffers();
sliderEmotions();
sliderActivity();
sliderStars();
sliderFeedbacks();
sliderPromo();
sliderNews();
sliderOffersWide();
sliderFormOrder();

