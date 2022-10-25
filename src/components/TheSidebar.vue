<script setup></script>

<template>
  <div class="flex flex-col h-screen bg-gray-400">
    <img class="h-16 mb-6" src="../assets/company-logo.png" />
    <div class="sidebar-item flex text-white font-roboto font-semibold">
      <img
        src="../assets/user-sidebar-icon.svg"
        class="w-4 mr-4 filter-white"
      />Account
    </div>
    <div class="sidebar-item flex text-white font-roboto font-semibold">
      <img src="../assets/calendar.svg" class="w-4 mr-4 filter-white" />Calendar
    </div>
    <div class="sidebar-item flex text-white font-roboto font-semibold">
      <img
        src="../assets/analytics.svg"
        class="w-4 mr-4 filter-white"
      />Analytics
    </div>
    <div
      class="sidebar-item flex mt-auto mb-4 text-white font-roboto font-semibold"
    >
      <img src="../assets/gear.svg" class="w-4 mr-4 filter-white" />Settings
    </div>
  </div>
</template>
