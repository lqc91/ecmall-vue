import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import fastclick from 'fastclick';

import 'assets/scss/index.scss';
import 'swiper/dist/css/swiper.min.css';

// fastclick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
