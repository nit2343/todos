<template>
  <div class="task-board">
    <v-row class="task-row">
      <!-- To-do Column -->
      <v-col cols="12" md="4">
        <div class="task-column" @dragover.prevent @drop="dropTask('todoslist')">
          <h2 class="column-title">To-do <i class="bi bi-bookmarks-fill"></i></h2>
          <div v-if="workstore.todoslist.length === 0" class="empty-text mt-7">Your Todos is Empty</div>
          <div v-else>
            <div v-for="(task, index) in workstore.todoslist" 
              :key="index" 
              class="task-card" 
              draggable="true" 
              @dragstart="dragTask(task, 'todoslist')">
              <div class="task-header">
                <h3 class="task-title">{{ task.title }}</h3>
                <button class="delete-btn" @click="removeTask(index, 'todoslist')"><i class="bi bi-x"></i> </button>
              </div>
              <p class="task-date">{{ task.date }}</p>
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: task.progress + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </v-col>

      <!-- On Progress Column -->
      <v-col cols="12" md="4">
        <div class="task-column" @dragover.prevent @drop="dropTask('onprogress')">
          <h2 class="column-title">On Progress <i class="bi bi-reception-2"></i></h2>
          <div v-if="workstore.onprogress.length === 0" class="empty-text mt-7">Your OnProgress list is Empty</div>
          <div v-else>
            <div v-for="(task, index) in workstore.onprogress" 
              :key="index" 
              class="task-card" 
              draggable="true" 
              @dragstart="dragTask(task, 'onprogress')">
              <div class="task-header">
                <h3 class="task-title">{{ task.title }}</h3>
                <button class="delete-btn" @click="removeTask(index, 'onprogress')">🗑</button>
              </div>
              <p class="task-date">{{ task.date }}</p>
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: task.progress + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </v-col>

      <!-- Done Column -->
      <v-col cols="12" md="4">
        <div class="task-column" @dragover.prevent @drop="dropTask('done')">
          <h2 class="column-title">Done <i class="bi bi-check-square-fill"></i></h2>
          <div v-if="workstore.done.length === 0" class="empty-text mt-7">Your Done list is Empty</div>
          <div v-else>
            <div v-for="(task, index) in workstore.done" 
              :key="index" 
              class="task-card" 
              draggable="true" 
              @dragstart="dragTask(task, 'done')">
              <div class="task-header">
                <h3 class="task-title">{{ task.title }}</h3>
                <button class="delete-btn" @click="removeTask(index, 'done')">🗑</button>
              </div>
              <p class="task-date">{{ task.date }}</p>
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: task.progress + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useworkstore } from "../stores/workstore";

const workstore = useworkstore();
let draggedTask = null;
let draggedFrom = null;

// 🟢 Task Drag Karna Start
const dragTask = (task, from) => {
  draggedTask = task;
  draggedFrom = from;
};

// 🔵 Task Drop Karna (Move to New List)
const dropTask = (to) => {
  if (draggedTask && draggedFrom !== to) {
    workstore[draggedFrom] = workstore[draggedFrom].filter(task => task !== draggedTask);
    workstore[to].push(draggedTask);
    draggedTask = null;
    draggedFrom = null;
  }
};

// 🗑 Task Remove Karna
const removeTask = (index, from) => {
  workstore[from].splice(index, 1);
};
</script>

<style>   
/* Basic Styles */
.bi-bookmarks-fill,
.bi-reception-2,
.bi-check-square-fill {
  font-size: 16px;
  position: relative;
  bottom: 2px;
}
.column-title {
  color: white;
  text-align: center;
}
.task-board {
  background-color: #1E1E2D;
  display: flex;
  justify-content: center;
  padding: 20px;
  min-height: 698px;
}
.task-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.task-column {
  background: #2A2D3E;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  min-height: 200px;
}
.task-card {
  background: #32344A;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 12px;
  cursor: grab;
  position: relative;
}
.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.empty-text {
  color: white;
  text-align: center;
}
.delete-btn {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
</style>
