import { createRouter, createWebHistory } from "vue-router";
// import myTask from "./myTask.vue";

const routes = [
  
//   {
//     path: "/myTask",
//     name: "myTask",
//     component: myTask,
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
