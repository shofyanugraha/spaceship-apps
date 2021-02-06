import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import NProgress from "nprogress";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
