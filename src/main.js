import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueLazyload from 'vue-lazyload';

// import fastclick from 'fastclick';

import 'assets/scss/index.scss';
import 'swiper/dist/css/swiper.min.css';

// fastclick.attach(document.body);

Vue.use(VueLazyload, {
  preload: 1, // 预加载高度比例
  error: require('assets/img/error.png'),
  loading: require('assets/img/loading.gif'),
  attempt: 1 // 尝试加载次数
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
