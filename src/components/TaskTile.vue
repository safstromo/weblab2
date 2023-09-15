<script setup lang="ts">
import { ref } from 'vue';
import { tasks } from './Task';
import type { Task } from './Task';

function deleteTask(task: Task) {
  tasks.value = tasks.value.filter((t) => t !== task);
  localStorage.setItem('todo', JSON.stringify(tasks.value));
}
</script>
<template>
  <ul class="">
    <li v-for="(task, index) in tasks" :key="index">
      <div class="textbox">
        <h2>{{ task.title }}</h2>
        <p>{{ task.todo }}</p>
      </div>
      <input class="checkbox" type="checkbox" v-model="task.isDone" />
      <button @click="deleteTask(task)" class="deleteBtn">Delete</button>
    </li>
  </ul>
</template>
<style scoped>
.gridArea {}

.checkbox {
  grid-area: checkbox;
  @apply w-8 m-2;
  /* width: 30px; */
}

.deleteBtn {
  grid-area: delete;
  @apply transition ease-in bg-stone-300 hover:bg-red-600 active:bg-stone-300;
}

.textbox {
  grid-area: text;
  @apply flex flex-col items-center;
}

p {
  @apply text-sm text-center;
}

h2 {
  @apply text-xl underline;
}

ul {
  @apply flex flex-col justify-center flex-wrap;
}

li {
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  grid-template-areas: 'checkbox text delete';
  @apply box-border m-2 w-80 bg-stone-500 rounded-md drop-shadow-lg;
}
</style>
