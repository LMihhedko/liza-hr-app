<script setup>
import { storeToRefs } from "pinia";
import { useSignUpSuccessStore } from "../stores/signUpSuccess";
import router from "@/router";

const signUpSuccessStore = useSignUpSuccessStore();
const { signUpSuccess } = storeToRefs(signUpSuccessStore);

const onClick = () => {
  signUpSuccess.value = false;
  router.push({ name: "authentication" });
};
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div
      class="flex items-center justify-center h-64 w-64 mb-4 bg-lime-500 rounded-full"
    >
      <img src="../assets/check.svg" class="w-24 filter-white" />
    </div>
    <div class="p-6 flex flex-col items-center">
      <p>Congratulations! Your account has been successfully created.</p>
      <button
        @click="onClick"
        class="bg-lime-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
      >
        Sign in
      </button>
    </div>
  </div>
</template>
