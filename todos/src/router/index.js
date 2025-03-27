import { createRouter, createWebHistory } from "vue-router";
import myTask from "../components/myTask.vue";
import homePage from "../components/homePage.vue";
import document from "../components/document.vue";

const routes = [
  
   {
     path: "/document",
     name: "document",
     component: document,
  },
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
