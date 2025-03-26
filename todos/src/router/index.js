import { createRouter, createWebHistory } from "vue-router";
import myTask from "../components/myTask.vue";
import homePage from "../components/homePage.vue";

const routes = [
  
   {
     path: "/",
     name: "homePage",
     component: homePage,
  },
   {
     path: "/myTask",
     name: "myTask",
     component: myTask,
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
