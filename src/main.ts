import { createApp } from "vue";

import axios from "axios";
import VueAxios from "vue-axios";

import Hello from "@/plugins/hello";

import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .use(Hello);

// // Plugin for validating some data

// declare module "@vue/runtime-core" {
//   export interface ComponentCustomProperties {
//     $validate: (message: string) => void;
//   }
// }

// app.config.globalProperties.gg = (message: string) => console.log(message);

// app.config.globalProperties.foo = "bar";
app.mount("#app");
