import Vue from 'vue';
import store from 'store/index';
import filters from 'filters/index';
import App from './App';

Vue.prototype.$store = store;
Vue.config.productionTip = false;
Vue.use(filters);

App.mpType = 'app';

const app = new Vue({
  store,
  ...App,
});
app.$mount();
