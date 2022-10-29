<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./stores/user";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

onMounted(async () => {
  try {
    await userStore.fetchUser();
    if (!user.value) {
      router.push({ path: "/" });
    } else {
      router.push({ path: "/dashboard" });
    }
  } catch (e) {
    console.log(e);
  }
});
</script>

<template>
  <router-view class="app-main" />
</template>
