// https://github.com/darkylmnx/Layout-system-with-vue-and-vue-router
// https://scotch.io/tutorials/vue-authentication-and-route-handling-using-vue-router

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "page" },
      component: require("@/pages/static/Home.vue").default
    },
    {
      path: "/login",
      name: "login",
      meta: { layout: "default", guest: true },
      component: require("@/pages/auth/Login.vue").default
      // component: () => import("./pages/auth/Login.vue")
    },
    {
      path: "/dashboard",
      name: "dashboard",
      meta: { layout: "page", requiresAuth: true },
      component: require("@/pages/Dashboard.vue").default
    },
    {
      path: "/admin",
      name: "admin",
      meta: {
        layout: "page",
        requiresAuth: true,
        isAdmin: true
      },
      component: require("@/pages/Admin.vue").default
    },
    {
      path: "*",
      name: "404*",
      meta: { layout: "default" },
      component: require("@/pages/static/404.vue").default
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath }
      });
    } else {
      let user = JSON.parse(localStorage.getItem("user"));
      if (to.matched.some(record => record.meta.isAdmin)) {
        if (user.isAdmin == 1) {
          next();
        } else {
          next({ name: "dashboard" });
        }
      } else {
        next();
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem("jwt") == null) {
      next();
    } else {
      next({ name: "dashboard" });
    }
  } else {
    next();
  }
});

export default router;
