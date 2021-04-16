// // src/api.js
// import Vue from "vue";
// import Auth from "@/services/api/auth";

// // Initialize all or API factories
// const factories = {
//  auth: Auth(Vue.axios),
// };

// // Make them available in the app with this.$api
// // https://vuejs.org/v2/cookbook/adding-instance-properties.html
// Vue.$api = factories;

// export default {
//     install: (app, options) => {
//       app.config.globalProperties.$translate = key => {
//         return key.split('.').reduce((o, i) => {
//           if (o) return o[i]
//         }, options)
//       }
//     }
//   }

import { App } from "vue";
import axios, { AxiosPromise } from "axios";

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

export interface ApiModule {
  sayHello: (name: string) => string;
  sayHi: (name: string) => string;
  forgotPassword(email: string): AxiosPromise;
}

export default {
  install: (app: App) => {
    const apiModule: ApiModule = {
      sayHello: (name: string) => {
        return `Hello ${name}`;
      },

      sayHi: (name: string) => {
        return `Hi ${name}`;
      },

      forgotPassword: (email: string) => {
        return axios.post("http://hellow.com/auth/password/forgot", {
          email
        });
      }
    };

    app.config.globalProperties.$api = apiModule;
  }
};

declare module "@vue/runtime-core" {
  //Bind to `this` keyword
  interface ComponentCustomProperties {
    $api: ApiModule;
  }
}
