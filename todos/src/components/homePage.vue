<template>
        <TaskBoard />
  </template>
  
  <script>
  import TaskBoard from "../components/TaskBoard.vue";
  
  export default {
    components: { TaskBoard }
  };
  </script>
  
  <style scoped>
  .app-container {
    display: flex;
    height: 100vh;
  }
  </style>
  