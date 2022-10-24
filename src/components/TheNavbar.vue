<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";
import router from "@/router";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const SignOut = () => {
  userStore.signOut();
  router.push({ name: "authentication" });
};
</script>

<template>
  <div>
    <div class="h-16 flex justify-end items-center mr-8">
      <img src="../assets/bell.svg" class="w-6 mr-6" />
      <p class="mr-8">{{ user.email }}</p>
      <button
        @click="SignOut"
        class="group relative flex justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-secondary"
      >
        Sign Out
      </button>
    </div>
  </div>
</template>
