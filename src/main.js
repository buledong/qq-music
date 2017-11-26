import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import fastclick from 'fastclick';
import 'common/stylus/index.styl';
import VueLazyLoad from 'vue-lazyload';
import store from './store';

fastclick.attach(document.body);

Vue.config.productionTip = false;
// require('base/loading/loading.gif')
// '这是图片'
Vue.use(VueLazyLoad, {
  loading: require('base/loading/loading.gif')
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
