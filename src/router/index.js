import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/tabbar",
    component: () => import("../views/Tabbar/index.vue"),
  },
  {
    path: "/css-background",
    component: () => import("../views/BackgroundImage/index.vue"),
  },
  {
    path: "/transform",
    component: () => import("../views/Transform/index.vue"),
  },
  {
    path: "/animation",
    component: () => import("../views/Animation/index.vue"),
  },
  {
    path: "/music",
    component: () => import("../views/Audio/index.vue"),
  },
  {
    path: "/animation",
    component: () => import("../views/Animation/index.vue"),
  },
  {
    path: "/",
    redirect: "/tabbar",
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
