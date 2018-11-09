import Vue from 'vue';

import '@/filters/_globals';
import '@/constants';

import App from './App.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
