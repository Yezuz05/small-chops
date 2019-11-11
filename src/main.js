import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import { FaRating } from "vue-rate-it";

Vue.component("fa-rating", FaRating);

import vSelect from "vue-select";

Vue.component("v-select", vSelect);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
