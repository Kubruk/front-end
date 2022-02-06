import { createRouter, createWebHistory } from "vue-router";
import Home from "@home/Home.vue";
import About from "@about/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;