<script setup>
import AuthImage from "../components/AuthImage.vue";

import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";
import router from "@/router";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const email = ref("");
const password = ref("");
let errorMessage = ref("");

const onSubmit = async () => {
  try {
    await userStore.signIn(email.value, password.value);
    router.push({ name: "dashboard" });
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>

<template>
  <div class="flex w-screen h-screen">
    <div class="w-1/3 h-screen max-w-md space-y-12 p-20 bg-primary sm:w-screen">
      <img class="w-20" src="../assets/company-logo-white.png" />
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-white">
        Welcome to HR App!
      </h2>
      <form class="mt-8 space-y-8" @submit.prevent="onSubmit" method="POST">
        <div class="rounded-md shadow-sm">
          <div>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              class="w-full mb-4 rounded-md border border-gray-300 px-3 py-2 bg-darkblue text-white placeholder-white focus:z-10 focus:border-white focus:outline-none focus:ring-white sm:text-sm"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              required
              class="w-full mb-4 rounded-md border border-gray-300 px-3 py-2 bg-darkblue text-white placeholder-white focus:z-10 focus:border-white focus:outline-none focus:ring-white sm:text-sm"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div
            v-if="errorMessage"
            class="flex items-center justify-center text-sm bg-red-300 my-4 rounded w-full h-8"
          >
            <img src="../assets/ban.svg" class="w-4 mr-2" />{{ errorMessage }}
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md border border-transparent bg-white text-primary py-2 px-4 mb-4 text-sm font-medium hover:bg-secondary"
          >
            Sign in
          </button>
          <span><hr class="my-8" /></span>
        </div>
      </form>
      <button
        class="group relative flex w-full justify-center rounded-md border border-transparent bg-darkblue py-2 px-4 mb-4 text-sm font-medium text-white hover:bg-secondary"
      >
        <RouterLink class="w-full font-medium" to="/signup"
          >Create new account</RouterLink
        >
      </button>
    </div>
    <AuthImage class="w-2/3" />
  </div>
</template>
