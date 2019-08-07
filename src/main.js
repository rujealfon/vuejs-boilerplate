import "./plugins/bootstrap-vue";
import "@babel/polyfill";
import "mutationobserver-shim";
import App from "./App.vue";
import Default from "./layouts/Default.vue";
import Page from "./layouts/Page.vue";
import Vue from "vue";
import router from "./router";

Vue.component("default-layout", Default);
Vue.component("page-layout", Page);

Vue.config.productionTip = false;

import "@/assets/css/global.css";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
