<script setup>
import TheNavbar from "../components/TheNavbar.vue";
import TheSidebar from "../components/TheSidebar.vue";
import EmployeeItem from "../components/EmployeeItem.vue";
import NewEmployee from "../components/NewEmployee.vue";
</script>

<template>
  <div class="container mx-auto flex">
    <TheSidebar />
    <div class="flex-col w-full bg-slate-200">
      <TheNavbar />
      <EmployeeItem />
    </div>
  </div>
</template>
