<template>
    <div class="task-board">
      <v-row class="task-row">
        <!-- To-do Column -->
        <v-col cols="12" md="4">
          <div class="task-column">
            <h2 class="column-title">To-do <i class="bi bi-bookmarks-fill"></i></h2>
            <v-row v-if="workstore.todoslist.length === 0" justify="center" class="mt-7">
              <v-col cols="12" class="text-center">
                <h3 class="empty-text">Your Todos is Empty</h3>
              </v-col>
            </v-row>
            <v-row v-else>
              <v-col v-for="(todo, index) in workstore.todoslist" :key="index" cols="12">
                <div class="task-card">
                  <h3 class="task-title">{{ todo.title }}</h3>
                  <p class="task-date">{{ todo.date }}</p>
                  <div class="progress-bar">
                    <div class="progress-fill" :style="{ width: todo.progress + '%' }"></div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <!-- On Progress Column -->
        <v-col cols="12" md="4">
          <div class="task-column">
            <h2 class="column-title">On Progress <i class="bi bi-reception-2"></i></h2>
            <v-row v-if="workstore.onprogress.length === 0" justify="center" class="mt-7">
              <v-col cols="12" class="text-center">
                <h3 class="empty-text">Your OnProgress  list is Empty</h3>
              </v-col>
            </v-row>
            <v-row v-else>
              <v-col v-for="(todo, index) in workstore.onprogress" :key="index" cols="12">
                <div class="task-card">
                  <h3 class="task-title">{{ todo.title }}</h3>
                  <p class="task-date">{{ todo.date }}</p>
                  <div class="progress-bar">
                    <div class="progress-fill" :style="{ width: todo.progress + '%' }"></div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <!-- Done Column -->
        <v-col cols="12" md="4">
          <div class="task-column">
            <h2 class="column-title">Done <i class="bi bi-check-square-fill"></i></h2>
            <v-row v-if="workstore.done.length === 0" justify="center" class="mt-7">
              <v-col cols="12" class="text-center">
                <h3 class="empty-text">Your Done list is Empty</h3>
              </v-col>
            </v-row>
            <v-row v-else>
              <v-col v-for="(todo, index) in workstore.done" :key="index" cols="12">
                <div class="task-card">
                  <h3 class="task-title">{{ todo.title }}</h3>
                  <p class="task-date">{{ todo.date }}</p>
                  <div class="progress-bar">
                    <div class="progress-fill" :style="{ width: todo.progress + '%' }"></div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
</template>

<script setup>
import { useworkstore } from "../stores/workstore";
const workstore = useworkstore();
</script>

<style>
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
</style>
