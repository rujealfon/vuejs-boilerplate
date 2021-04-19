import { App } from "vue";

export interface HelloModule {
  sayHello: (name: string) => string;
}

export default {
  install: (app: App) => {
    const helloModule: HelloModule = {
      sayHello: function(name: string) {
        return `Hello ${name}`;
      }
    };

    app.config.globalProperties.$hello = helloModule;
  }
};

declare module "@vue/runtime-core" {
  //Bind to `this` keyword
  interface ComponentCustomProperties {
    $hello: HelloModule;
  }
}
