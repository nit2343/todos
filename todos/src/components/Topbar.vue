<template>
    <header class="topbar">
      <div class="spacer"></div>
      <button class="icon-btn">
        <svg class="icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,22A2,2 0 0,1 10,20H14A2,2 0 0,1 12,22M18,16V11C18,7.93 16.36,5.36 13.5,4.68V4A1.5,1.5 0 0,0 12,2A1.5,1.5 0 0,0 10.5,4V4.68C7.63,5.36 6,7.92 6,11V16L4,18V19H20V18L18,16Z" />
        </svg>
      </button>
      <button class="avatar-btn">
        <div class="user-avatar">N</div>
      </button>
      
    </header>
    <v-divider ></v-divider>
  </template>
  
  <style scoped>
  /* 🟣 Topbar Custom Styling */
  .topbar {
    background-color: #1E1E2D;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 12px 24px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    height: 67px;
    width: 100%;
  }
  
  /* 🔹 Spacer for right alignment */
  .spacer {
    flex-grow: 1;
  }
  
  /* 🛎️ Bell Icon Button */
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

  
  /* 👤 User Avatar Button */
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
  </style>
  