<script setup>
import { storeToRefs } from "pinia";
import { useSignUpSuccessStore } from "../stores/signUpSuccess";
import router from "@/router";

const signUpSuccessStore = useSignUpSuccessStore();
const { signUpSuccess } = storeToRefs(signUpSuccessStore);

const onClick = () => {
  router.push({ name: "signin" });
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center bg-primary w-1/3 p-20 max-w-md"
  >
    <p class="text-white text-justify mb-8">
      Please check your email to activate your account and then proceed to sign
      in.
    </p>
    <div
      class="flex items-center justify-center h-64 w-64 mb-4 bg-lightgreen rounded-full"
    >
      <img src="../assets/check.svg" class="w-24 filter-white" />
    </div>
    <div class="p-6 flex flex-col items-center">
      <button
        @click="onClick"
        class="bg-lightgreen hover:bg-darkgreen text-white font-bold py-2 px-4 rounded mt-8"
      >
        Sign in
      </button>
    </div>
  </div>
</template>
