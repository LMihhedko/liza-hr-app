import { createRouter, createWebHistory } from "vue-router";
import Authentication from "@/views/Authentication.vue";
import Dashboard from "@/views/Dashboard.vue";
import successfulSignUp from "@/components/successfulSignUp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/auth",
      name: "authentication",
      component: Authentication,
    },
    {
      path: "/successfulSignUp",
      name: "successfulSignUp",
      component: successfulSignUp,
    },
  ],
});

export default router;
