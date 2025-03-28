import { defineStore } from "pinia";
import { ref } from "vue";

export const useworkstore = defineStore("workStore", () => {
  const todoslist = ref(JSON.parse(localStorage.getItem("todoslist")) || []);
  const onprogress = ref(JSON.parse(localStorage.getItem("onprogress")) || []);
  const done = ref(JSON.parse(localStorage.getItem("done")) || []);

  const saveToLocalStorage = () => {
    localStorage.setItem("todoslist", JSON.stringify(todoslist.value));
    localStorage.setItem("onprogress", JSON.stringify(onprogress.value));
    localStorage.setItem("done", JSON.stringify(done.value));
  };

  const addTaskTodos = (task) => {
    todoslist.value.push(task);
    saveToLocalStorage();
  };

  const addTaskOnProgress = (task) => {
    onprogress.value.push(task);
    saveToLocalStorage();
  };

  const addTaskDone = (task) => {
    done.value.push(task);
    saveToLocalStorage();
  };

  return { todoslist, onprogress, done, addTaskTodos, addTaskOnProgress, addTaskDone };
}, {
  persist: true, // Pinia Plugin PersistedState ka use karne ke liye
});
