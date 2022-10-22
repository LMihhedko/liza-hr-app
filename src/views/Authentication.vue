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
  <img src="../assets/welcome-logo.png" class="w-1/6" />
  <div>Welcome to Dunder Mifflin HR app</div>
  <RouterLink to="/signup">Register</RouterLink>
  <RouterLink to="/signin">SignIn</RouterLink>
</template>
