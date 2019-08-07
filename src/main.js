import "./plugins/bootstrap-vue";
import "@babel/polyfill";
import "mutationobserver-shim";
import App from "./App.vue";
import Default from "./layouts/Default.vue";
import Page from "./layouts/Page.vue";
import Vue from "vue";
import filters from "./filters";
import router from "./router";

// production tip
Vue.config.productionTip = false;

// page layout
Vue.component("default-layout", Default);
Vue.component("page-layout", Page);

// filters
Vue.use(filters);

// global console.log
Vue.prototype.$console = function(name, value) {
  if (process.env.NODE_ENV === "development") {
    console.log(name, value);
  }
};

// global css
import "@/assets/css/global.css";

// initialize
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
