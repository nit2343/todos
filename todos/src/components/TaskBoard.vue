<template>
    <div class="task-board">
      
      <!-- To-do Column -->
      <div class="task-column">
        <h2 class="column-title">To-do <i class="bi bi-bookmarks-fill"></i></h2>
        <div class="task-input">
          <input v-model="todoTask.title" placeholder="Task Title" class="input-field">
          <input v-model="todoTask.date" type="date" class="input-field">
          <input v-model.number="todoTask.progress" type="number" min="0" max="100" class="input-field">
          <button @click="addTaskTodos" class="add-btn"> <i class="bi bi-plus-square"></i> Add Task</button>
        </div>


        </div> 
  
      <!-- On Progress Column -->
      <div class="task-column">
        <h2 class="column-title">On Progress <i class="bi bi-reception-2"></i></h2>
        <div class="task-input">
          <input v-model="progressTask.title" placeholder="Task Title" class="input-field">
          <input v-model="progressTask.date" type="date" class="input-field">
          <input v-model.number="progressTask.progress" type="number" min="0" max="100" class="input-field">
          <button @click="addTaskOnProgress" class="add-btn"> <i class="bi bi-plus-square"></i> Add Task</button>
        </div>
  
       
      </div>
  
      <!-- Done Column -->
      <div class="task-column">
        <h2 class="column-title">Done <span style="font-size: 16px; position: relative; bottom: 2px;"><i class="bi bi-check-square-fill"></i></span></h2>
        <div class="task-input">
          <input v-model="doneTask.title" placeholder="Task Title" class="input-field">
          <input v-model="doneTask.date" type="date" class="input-field">
          <input v-model.number="doneTask.progress" type="number" min="0" max="100" class="input-field">
          <button @click="addTaskDone" class="add-btn"> <i class="bi bi-plus-square"></i> Add Task</button>
        </div>
  
     
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useworkstore  } from "../stores/workstore";
  
  const store = useworkstore ();

  const todoTask = ref({ title: "", date: "", progress: 0 });
  const progressTask = ref({ title: "", date: "", progress: 0 });
  const doneTask = ref({ title: "", date: "", progress: 0 });
  
  const addTaskTodos = () => {
    if (!todoTask.value.title || !todoTask.value.date) return;
    store.addTaskTodos({ ...todoTask.value });
    todoTask.value = { title: "", date: "", progress: 0 };
  };
  
  const addTaskOnProgress = () => {
    if (!progressTask.value.title || !progressTask.value.date) return;
    store.addTaskOnProgress({ ...progressTask.value });
    progressTask.value = { title: "", date: "", progress: 0 };
  };
  
  const addTaskDone = () => {
    if (!doneTask.value.title || !doneTask.value.date) return;
    store.addTaskDone({ ...doneTask.value });
    doneTask.value = { title: "", date: "", progress: 0 };
  };
  </script>
  
  <style scoped>
  .bi-bookmarks-fill{
    font-size: 16px;
    position: relative;
    bottom: 2px;
  }
  .column-title {
    color: white;
  }
  .task-board {
    background-color: #1E1E2D;
    display: flex;
    justify-content: space-around;
    padding: 20px;
    min-height: 698px;
  }
  
  /* 🔹 Task Column */
  .task-column {
    background: #2A2D3E;
    width: 30%;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
  
  /* 📝 Task Input Form */
  .task-input {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 12px;
  }
  
  .input-field {
    padding: 12px;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    background: #32344A;
    color: white;
    height: 60px;
  }
  
  .add-btn {
    background: #4CAF50;
    color: white;
    padding: 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .add-btn:hover {
    background: #388E3C;
  }
  
  /* 📝 Task Card */
  .task-card {
    background: #32344A;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 12px;
  }
  
  .task-title {
    font-size: 16px;
    font-weight: bold;
    color: #F8F8F8;
  }
  
  .task-date {
    font-size: 13px;
    color: #BBBBBB;
  }
  
  /* 📊 Progress Bar */
  .progress-bar {
    width: 100%;
    height: 6px;
    background: #44475A;
    border-radius: 5px;
    margin-top: 10px;
  }
  
  .progress-fill {
    height: 100%;
    background: #4CAF50;
    transition: width 0.4s ease-in-out;
  }
  </style>
  