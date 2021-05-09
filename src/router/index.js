import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirct: "/css-background",
  },
  {
    path: "/css-background",
    component: () => import("../views/cssBackground.vue"),
    children: [],
  },
  {
    path: "/tabbar",
    component: () => import("../views/tabbar.vue"),
    children: [],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "activeNav", //导航选中时的样式名称
});

// 路由守卫
router.beforeEach((to, from, next) => {
  next();
});
export default router;

// vue-router4.0 官网地址 https://next.router.vuejs.org/zh/installation.html
