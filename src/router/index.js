// https://github.com/darkylmnx/Layout-system-with-vue-and-vue-router
// https://scotch.io/tutorials/vue-authentication-and-route-handling-using-vue-router
// https://medium.com/@zitko/structuring-a-vue-project-authentication-87032e5bfe16

import Vue from "vue";
import Router from "vue-router";
import { TokenService } from "../services/storage";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        public: true
      },
      component: require("@/pages/static/Home.vue").default
    },
    {
      path: "/about",
      name: "about",
      meta: {
        public: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/pages/static/About.vue")
    },
    {
      path: "/login",
      name: "login",
      meta: {
        layout: "default",
        public: true,
        onlyWhenLoggedOut: true
      },
      component: require("@/pages/auth/Login.vue").default
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: require("@/pages/Dashboard.vue").default
    },
    {
      path: "/admin",
      name: "admin",
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
  const isPublic = to.matched.some(record => record.meta.public);
  const onlyWhenLoggedOut = to.matched.some(
    record => record.meta.onlyWhenLoggedOut
  );
  const loggedIn = !!TokenService.getToken();

  if (!isPublic && !loggedIn) {
    return next({
      path: "/login",
      query: { redirect: to.fullPath } // Store the full path to redirect the user to after login
    });
  }

  // Do not allow user to visit login page or register page if they are logged in
  if (loggedIn && onlyWhenLoggedOut) {
    return next("/");
  }

  next();
});

export default router;
