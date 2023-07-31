import { createWebHistory, createRouter } from "vue-router";
import contents from "./contents";

const router = createRouter({
  history: createWebHistory(),
  routes:contents
});

export default router;