import UpAndDown from "../containers/UpAndDown"
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/numbers", component: null
    },
    {
      path: "/operations", component: null
    },
    {
      path: "/geometry",
      component: UpAndDown,
      children: [
        {
          path: ""
        }
      ]
    },
    {
      path: "/measurement", component: null
    },
    {
      path: "/secret-lab", component: null
    }
  ]
})

export default router