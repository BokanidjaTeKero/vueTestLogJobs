import Vue from 'vue';
import App from './App';
import { store } from './store/store';
import axios from 'axios';
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')