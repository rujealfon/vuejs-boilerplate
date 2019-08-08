import "./plugins/bootstrap-vue";
import "@babel/polyfill";
import "mutationobserver-shim";
import App from "./App.vue";
import Axios from "axios";
import Default from "./layouts/Default.vue";
import Page from "./layouts/Page.vue";
import Vue from "vue";
import filters from "./filters/index";
import router from "./router/index";
import store from "./store/index";
import ApiService from "./services/api";
import { TokenService } from "./services/storage";

// production tip
Vue.config.productionTip = false;

// Set the base URL of the API
ApiService.init(process.env.VUE_APP_API);

// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader();
  ApiService.mount401Interceptor();
}

// filters
Vue.use(filters);

// axios
Vue.prototype.$http = Axios;

// global console.log
Vue.prototype.$console = function(name, value) {
  if (process.env.NODE_ENV === "development") {
    console.log(name, value);
  }
};

// global css
import "@/assets/css/global.css";

// page layout
Vue.component("default-layout", Default);
Vue.component("page-layout", Page);

// initialize
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
