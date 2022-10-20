<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";
import router from "@/router";

const userStore = useUserStore();
const { user, globalError } = storeToRefs(userStore);

const email = ref("");
const password = ref("");
let errorMessage = ref("");

console.log(globalError.value);

const onSubmit = () => {
  userStore.signIn(email.value, password.value);
  router.push({ name: "dashboard" });
};
</script>

<template>
  <div
    class="flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 w-1/3 h-screen"
  >
    <div class="w-3/4 max-w-md space-y-12">
      <div>
        <img class="mx-auto h-14 w-auto" src="../assets/user-icon.png" />
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Sign in to your account
        </h2>
      </div>
      <form class="mt-8 space-y-12" @submit.prevent="onSubmit" method="POST">
        <div class="rounded-md shadow-sm">
          <div>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              class="w-full mb-4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
              v-model="email"
            />
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              required
              class="w-full mb-4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <a href="" class="w-full text-right"
            >Don't have an account? Register here</a
          >
          <div
            v-if="errorMessage"
            class="flex items-center justify-center text-sm bg-red-300 mb-6 rounded w-full h-8"
          >
            <img src="../assets/ban.svg" class="w-4 mr-2" />{{ errorMessage }}
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-secondary"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
