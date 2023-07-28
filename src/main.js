import { createApp } from 'vue';
import { createPinia } from 'pinia';

import VueCountdown from '@chenfengyuan/vue-countdown';

import './assets/style.css';

import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueApexCharts from 'vue3-apexcharts';

/* import specific icons */
import {
  faTrash,
  faHome,
  faBars,
  faCartPlus,
  faUser,
  faRightFromBracket,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(
  faTrash,
  faBars,
  faHome,
  faCartPlus,
  faUser,
  faRightFromBracket,
  faThumbsUp
);

const app = createApp(App);

app
  .use(createPinia())
  .use(router)
  .use(VueApexCharts)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component(VueCountdown.name, VueCountdown)
  .mount('#app');
