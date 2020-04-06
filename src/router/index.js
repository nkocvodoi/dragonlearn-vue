/* eslint-disable no-unused-vars */
import route from "./config"
import VueRouter from "vue-router";
// import NProgress from "nprogress"
// import "nprogress/nprogress.css"

const router = new VueRouter({
  mode: "hash",
  linkActiveClass: "active",
  routes: route
})
// router gards
// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   //auth route is authenticated
//   next()
// })

// router.afterEach((to, from) => {
//   NProgress.done()
// })

export default router