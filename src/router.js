import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
      path: "/",
      name: "home",
      component: require("./pages/Home.vue").default // load sync home
    },
    {
      path: "/login",
      name: "login",
      meta: { layout: "default" },
      component: () => import("./pages/auth/Login.vue")
    },
    {
      path: "*",
      name: "404*",
      meta: { layout: "default" },
      component: require("@/pages/404.vue").default // load sync home
    }
  ]
});
