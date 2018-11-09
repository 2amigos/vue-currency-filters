/* eslint max-len:['off'] */
import Vue from 'vue';

const constants = new Vue({
  data: {
    EUR_SYMBOL: 'EUR',
    USD_SYMBOL: 'USD',
  },
});

Vue.prototype.$constants = constants;

export { constants as default };
