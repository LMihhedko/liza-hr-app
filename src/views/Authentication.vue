<script setup>
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";
import { useSignUpSuccessStore } from "../stores/signUpSuccess";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const signUpSuccessStore = useSignUpSuccessStore();
const { signUpSuccess } = storeToRefs(signUpSuccessStore);

console.log(user.value);
</script>

<template>
  <div class="flex">
    <div class="w-2/3 h-screen flex items-center justify-center">
      <img src="../assets/auth-image.jpg" />
    </div>
    <SignIn v-if="user && !signUpSuccess" />
    <SignUp v-else />
  </div>
</template>
