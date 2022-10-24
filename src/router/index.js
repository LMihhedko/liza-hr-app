import { createRouter, createWebHistory } from "vue-router";
import Authentication from "@/views/Authentication.vue";
import Dashboard from "@/views/Dashboard.vue";
import SuccessfulSignUp from "@/components/SuccessfulSignUp.vue";
import SignUp from "@/components/SignUp.vue";
import SignIn from "@/components/SignIn.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/",
      name: "authentication",
      component: Authentication,
    },
    {
      path: "/successfulSignUp",
      name: "successfulSignUp",
      component: SuccessfulSignUp,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn,
    },
  ],
});

export default router;
