<template>
  <v-app>
    <Sidebar />
    <v-main>
      <Topbar />
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
import Topbar from "./components/Topbar.vue";
</script>

<style scoped>
</style>
