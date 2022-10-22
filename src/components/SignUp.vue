<script setup>
import SuccessfulSignUp from "../components/SuccessfulSignUp.vue";

import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";
import { useSignUpSuccessStore } from "../stores/signUpSuccess";

import { ref } from "vue";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const signUpSuccessStore = useSignUpSuccessStore();
const { signUpSuccess } = storeToRefs(signUpSuccessStore);

const email = ref("");
const password = ref("");
let errorMessage = ref("");

const onSubmit = () => {
  userStore.signUp(email.value, password.value);
  signUpSuccess.value = true;
};
</script>

<template>
  <div
    class="flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 w-screen h-screen"
  >
    <div class="w-2/3 h-screen flex items-center justify-center">
      <img src="../assets/auth-image.jpg" />
    </div>
    <div v-if="!signUpSuccess" class="w-1/3 max-w-md px-20">
      <div>
        <img class="mx-auto h-14 w-auto" src="../assets/user-icon.png" />
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Register
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
          <RouterLink class="w-full font-medium text-primary" to="/signin"
            >Already have an account?</RouterLink
          >
          <div
            v-if="errorMessage"
            class="flex items-center justify-center text-sm bg-red-300 mb-6 rounded w-full h-8"
          >
            {{ errorMessage }}
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-secondary"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
    <SuccessfulSignUp v-else />
  </div>
</template>
