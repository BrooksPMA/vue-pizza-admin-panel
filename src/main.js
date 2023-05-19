import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './assets/style.css';

import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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

app.use(createPinia()).use(router);

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app');
