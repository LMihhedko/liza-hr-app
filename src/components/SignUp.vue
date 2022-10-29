<script setup>
import SuccessfulSignUp from "../components/SuccessfulSignUp.vue";
import AuthImage from "../components/AuthImage.vue";

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

const onSubmit = async () => {
  try {
    await userStore.signUp(email.value, password.value);
    signUpSuccess.value = true;
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>

<template>
  <div class="flex w-screen h-screen">
    <div
      v-if="!signUpSuccess"
      class="w-1/3 h-screen max-w-md space-y-12 p-20 bg-primary sm:w-screen"
    >
      <img class="w-20" src="../assets/company-logo-white.png" />
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-white">
        Register
      </h2>
      <form class="mt-8 space-y-12" @submit.prevent="onSubmit" method="POST">
        <div class="rounded-md shadow-sm">
          <div>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              class="w-full mb-4 rounded-md border border-gray-300 px-3 py-2 bg-darkblue text-white placeholder-white focus:z-10 focus:border-white focus:outline-none focus:ring-white sm:text-sm"
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
              class="w-full mb-4 rounded-md border border-gray-300 px-3 py-2 bg-darkblue text-white placeholder-white focus:z-10 focus:border-white focus:outline-none focus:ring-white sm:text-sm"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <RouterLink class="w-full font-medium text-white" to="/signin"
            >Already have an account?</RouterLink
          >
          <div
            v-if="errorMessage"
            class="flex items-center justify-center text-sm bg-red-300 my-6 rounded w-full h-12"
          >
            <img src="../assets/ban.svg" class="w-4 mr-2" />{{ errorMessage }}
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-darkblue py-2 px-4 text-sm font-medium text-white hover:bg-secondary"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
    <SuccessfulSignUp v-else />
    <AuthImage class="w-2/3" />
  </div>
</template>
