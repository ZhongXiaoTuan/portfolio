import Vue from 'vue'
import axios from 'axios'
import App from './App'

axios.defaults.baseURL = '.';

Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
