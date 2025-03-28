<template>
  <header class="topbar" :class="{ 'dark-mode': isDarkMode }">
    <!-- 🖼️ Logo Positioned Left -->
    <div class="logo-container">
  <img src="../images/tasks.png" class="logo" />
  <h3>Get Things Done!</h3>
</div>


    <div class="spacer"></div>

    <!-- 🔎 Search Bar -->
    <div class="search-container">
      <input type="text" placeholder="Search..." class="search-input" />
      <i class="bi bi-search search-icon"></i>
    </div>

    <!-- 🌙 Dark Mode Toggle -->
    <button class="icon-btn" @click="toggleDarkMode">
      <svg class="icon" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,2A10,10 0 1,1 2,12A10,10 0 0,1 12,2M12,4V20A8,8 0 0,0 12,4Z" />
      </svg>
    </button>

    <!-- 🔔 Notification Icon -->
    <button class="icon-btn">
      <svg class="icon" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,22A2,2 0 0,1 10,20H14A2,2 0 0,1 12,22M18,16V11C18,7.93 16.36,5.36 13.5,4.68V4A1.5,1.5 0 0,0 12,2A1.5,1.5 0 0,0 10.5,4V4.68C7.63,5.36 6,7.92 6,11V16L4,18V19H20V18L18,16Z" />
      </svg>
    </button>

    <!-- 👤 User Avatar with Dropdown -->
    <div class="avatar-container">
      <button class="avatar-btn" @click="toggleDropdown">
        <div class="user-avatar">N</div>
      </button>
      <div v-if="isDropdownOpen" class="dropdown-menu">
        <ul>
          <li @click="viewProfile">👤 Profile</li>
          <li @click="logout">🚪 Logout</li>
        </ul>
      </div>
    </div>
  </header>

  <v-divider></v-divider>
</template>

<script setup>
import { ref } from "vue";

const isDropdownOpen = ref(false);

const isDarkMode = ref(false); 

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value; 
};


const viewProfile = () => {
  alert("Profile page coming soon!");
};

const logout = () => {
  alert("Logged out successfully!");
};
</script>

<style scoped>
/* 🟣 Topbar Styling */
.topbar {
  background-color: #1e1e2d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  height: 67px;
  width: 100%;
}
.logo-container {
  display: flex;
  align-items: center;
  gap: 20px; /* ✅ Perfect gap between image & text */
}

.dark-mode {
  background-color: white !important;
  color: black !important;
}

h3 {
  color: white;
}


/* 🖼️ Logo Styling */
.logo {
  height: 40px;
}

/* 🔹 Spacer */
.spacer {
  flex-grow: 1;
}

/* 🔎 Search Bar */
.search-container {
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.search-input {
  background: #32344a;
  border: none;
  padding: 6px 30px 6px 10px;
  border-radius: 5px;
  color: white;
  font-size: 14px;
}

.search-icon {
  position: absolute;
  right: 10px;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

/* 🛎️ Icon Button */
.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  transition: background 0.3s ease;
}

.icon-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.icon {
  width: 24px;
  height: 24px;
  color: white;
}

/* 👤 User Avatar with Dropdown */
.avatar-container {
  position: relative;
}

.avatar-btn {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 12px;
  padding: 5px;
  border-radius: 50%;
}

.user-avatar {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #4caf50;
  border-radius: 50%;
  transition: transform 0.2s ease;
}

.user-avatar:hover {
  transform: scale(1.1);
}

/* 🔽 Dropdown Menu */
.dropdown-menu {
  position: absolute;
  right: 0;
  top: 50px;
  background: #32344a;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.dropdown-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown-menu li {
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}

.dropdown-menu li:hover {
  background: #4caf50;
}

/* 🌙 Dark Mode */
.dark-mode {
  background-color: #121212;
  color: white;
}

</style>