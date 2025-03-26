<template>
    <v-navigation-drawer app permanent class="sidebar">
      <v-list dense>
        <v-list-item class="logo">
          <v-icon class="logo-icon">mdi-view-dashboard</v-icon>
          <span class="logo-text">Todos</span>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :class="{ active: activeItem === item.title }"
          @click="setActive(item.title)"
        >
          <v-icon class="menu-icon">{{ item.icon }}</v-icon>
          <span class="menu-text">{{ item.title }}</span>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeItem: "Home",
        menuItems: [
          { title: "Home", icon: "mdi-home" },
          { title: "My Tasks", icon: "mdi-checkbox-marked" },
          { title: "Documents", icon: "mdi-file-document" },
        ],
      };
    },
    methods: {
      setActive(title) {
        this.activeItem = title;
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    background-color: #1e1e2d;
    color: white;
    width: 260px;
    padding-top: 10px;
  }
  .logo {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    padding: 16px;
    color: #fff;
  }
  .logo-icon {
    font-size: 24px;
    margin-right: 10px;
    color: #4caf50;
    position: relative;
    bottom: 3px;
  }
  .menu-icon {
    margin-right: 10px;
  }
  .menu-text {
    font-size: 16px;
  }
  .v-list-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background 0.3s;
    padding: 12px;
  }
  .v-list-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .active {
    background-color: #4caf50;
    color: white;
    border-radius: 8px;
  }
  </style>
  