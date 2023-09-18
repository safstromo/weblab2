<script setup lang="ts">
import { tasklist } from './Task';
import type { TaskList, Task } from './Task';
const taskProp = defineProps(['taskId']);
const task: TaskList = tasklist.value.find((task) => task.id === taskProp.taskId)!;
console.log(task);
</script>
<template>
  <div class="flex flex-col items-center">
    <h2 class="text-3xl underline m-5">{{ task?.title }}</h2>

    <ul class="flex flex-row justify-center flex-wrap w-full">
      <li class="box-border m-2 w-80 bg-stone-500 rounded-md drop-shadow-lg" v-for="(taskTodo, index) in task.todoList"
        :key="index">
        <div class="textbox flex flex-col items-center">
          <h2 class="text-xl">{{ taskTodo.title }}</h2>
        </div>
        <input class="checkbox w-8 m-2" type="checkbox" v-model="task.isDone" />
      </li>
    </ul>
  </div>
</template>
<style scoped>
.checkbox {
  grid-area: checkbox;
}

.deleteBtn {
  grid-area: delete;
}

.textbox {
  grid-area: text;
}

li {
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  grid-template-areas: 'checkbox text delete';
}
</style>
