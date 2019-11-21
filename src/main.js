import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import vSelect from "vue-select";
import VueIziToast from "vue-izitoast";
import "izitoast/dist/css/iziToast.min.css";
Vue.use(VueIziToast, {
  position: "topRight",
  closeOnClick: true,
  timeout: 1000,
  progressBar: false,
  animateInside: false
});

Vue.config.productionTip = false;

import { FaRating } from "vue-rate-it";

Vue.component("fa-rating", FaRating);

Vue.component("v-select", vSelect);

const axiosInstance = axios.create({
  baseURL: "http://370f6715.ngrok.io/"
});

Vue.prototype.$axios = axiosInstance;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
