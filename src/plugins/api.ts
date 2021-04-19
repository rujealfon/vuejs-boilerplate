import { App } from "vue";
import axios from "axios";

import Auth from "@/services/api/auth";

axios.defaults.baseURL = "http://auth.com";

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    config.headers.common.Authorization =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBZ2VudElEIjoiMjY1ODc4MSIsIkxhbmd1YWdlIjoiZW4iLCJpYXQiOjE2MDIyMDY0MTksIlRva2VuVmFsaWRpdHkiOjE2MDIyMDcwMTksIm5iZiI6MTYwMjIwNjQxOSwiZXhwIjoxNjAyMjA3MDE5fQ.We-F3qBy1tNFzbg-meKe22bMvPoJtisvTgWHgowxMy8";

    console.log(config);
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default {
  install: (app: App) => {
    const factories = {
      auth: new Auth()
    };

    app.config.globalProperties.$api = factories;
  }
};

declare module "@vue/runtime-core" {
  //Bind to `this` keyword
  interface ComponentCustomProperties {
    $api: {
      auth: Auth;
    };
  }
}
