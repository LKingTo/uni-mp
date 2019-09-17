import Vue from 'vue'
import App from './App'
import store from 'store/index'
import filters from 'filters/index'

Vue.prototype.$store = store;
Vue.config.productionTip = false;
Vue.use(filters);

App.mpType = 'app';

const app = new Vue({
	store,
  ...App
});
app.$mount();
