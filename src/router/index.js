import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@home/Home.vue") },
  { path: "/about", component: () => import("@about/About.vue") },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;