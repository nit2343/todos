<template>
  <v-app>
    <Sidebar />
    <v-main>
      <Topbar />
      <TaskBoard />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Topbar from "./components/Topbar.vue";
import TaskBoard from "./components/TaskBoard.vue";

export default {
  components: { Sidebar, Topbar, TaskBoard }
};
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
}
</style>
