import { defineStore } from "pinia";
import { ref } from "vue";

export const useworkstore  = defineStore("workStore", () => {

  const todoslist = ref([]);
  const onprogress = ref([]);
  const done = ref([]);


  const addTaskTodos = (task) => {
    todoslist.value.push(task);
  };

  const addTaskOnProgress = (task) => {
    onprogress.value.push(task);
  };

  const addTaskDone = (task) => {
    done.value.push(task);
  };

  return { todoslist, onprogress, done, addTaskTodos, addTaskOnProgress, addTaskDone };
});
