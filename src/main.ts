import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/api";
import "@/plugins/buefy";
import "@/plugins/dayjs";
import "@/plugins/vee-validate";
import "@/plugins/inifiniteloading";

import "@/assets/scss/style.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
