<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";
import { useMobileMenuStore } from "../stores/mobileMenu";
import router from "@/router";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const mobileMenuStore = useMobileMenuStore();
const { mobileMenu } = storeToRefs(mobileMenuStore);

const SignOut = () => {
  userStore.signOut();
  router.push({ name: "authentication" });
};

const toggleNav = () => {
  if (mobileMenu.value) {
    mobileMenu.value = false;
  } else {
    mobileMenu.value = true;
  }
};
</script>

<template>
  <div class="h-16 flex justify-end items-center bg-gray-500 w-full text-white">
    <div class="space-y-2 mr-12 hidden sm:block" @click="toggleNav">
      <span class="block h-0.5 w-8 bg-white"></span>
      <span class="block h-0.5 w-8 bg-white"></span>
      <span class="block h-0.5 w-8 bg-white"></span>
    </div>
    <img src="../assets/bell.svg" class="w-6 filter-white" />
    <p class="mx-6">|</p>
    <p class="mr-8">{{ user.email }}</p>
    <button
      @click="SignOut"
      class="group relative flex justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-secondary mr-8 sm:hidden"
    >
      Sign Out
    </button>
  </div>

  <div :class="mobileMenu ? 'showMenuNav' : 'hideMenuNav'">
    <div className="absolute top-0 right-0 px-8 py-8" @click="toggleNav">
      <div class="text-2xl text-white">X</div>
    </div>
    <ul class="flex flex-col items-center justify-between min-h-[250px]">
      <li class="w-full flex font-roboto font-semibold text-xl p-4 text-white">
        <img
          src="../assets/user-sidebar-icon.svg"
          class="w-4 mr-4 filter-white"
        />Account
      </li>
      <li class="w-full flex font-roboto font-semibold text-xl p-4 text-white">
        <img
          src="../assets/calendar.svg"
          class="w-4 mr-4 filter-white"
        />Calendar
      </li>
      <li class="w-full flex font-roboto font-semibold text-xl p-4 text-white">
        <img
          src="../assets/analytics.svg"
          class="w-4 mr-4 filter-white"
        />Analytics
      </li>
      <li
        class="w-full flex mt-auto mb-4 font-roboto font-semibold text-xl p-4 text-white"
      >
        <img src="../assets/gear.svg" class="w-4 mr-4 filter-white" />Settings
      </li>
      <li class="p-4 mt-4">
        <button
          @click="SignOut"
          class="group relative flex justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-secondary"
        >
          Sign Out
        </button>
      </li>
    </ul>
  </div>
</template>
