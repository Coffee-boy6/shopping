import * as VueRouter from "vue-router";

import Home from "../pages/Home.vue";
import Cart from "../pages/Cart.vue";
import Work from "../pages/Work.vue";
import Order from "../pages/Order.vue";

const routes = [
  {
    name: "home", // 页面名
    path: "/", // 映射的路径
    component: Home, // 虽配置名为 component 组件，但我更愿意理解为 page 页面
  },
  {
    name: "cart", // 页面名
    path: "/cart", // 映射的路径
    component: Cart, // 虽配置名为 component 组件，但我更愿意理解为 page 页面
  },

  {
    name: "work",
    path: "/work",
    component: Work,
  },
  {
    name: "order",
    path: "/order",
    component: Order,
  },
];

const router = VueRouter.createRouter({
  // 使用 HTML5 的历史记录模式
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
