// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

// calendar
import { easepick } from '@easepick/core';

const picker = new easepick.create({
    element: document.getElementById('datepicker'),
    css: [
      'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
      './css/main.css',
    ],

    setup(picker) {
        picker.on('view', (e) => {
          const { view, date, target } = e.detail;
          // do something
        });
      },
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

