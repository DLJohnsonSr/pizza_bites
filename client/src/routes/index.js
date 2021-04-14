import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/store_front/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("@/views/store_front/Menu.vue"),
    },
    {
      // path: "/edit/source/:source/category/:category/name/:name",
      path: "/edit/source/:source/category/:category/name/:name/(id/:id)?",
      name: "edit",
      component: () => import("@/views/store_front/EditItem.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("@/views/store_front/Checkout.vue"),
    },
    // {
    //   path: "/cart",
    //   name: "cart",
    //   component: () => import("@/components/Cart.vue")
    // }
  ],
});
