<script setup lang="ts">
import { tasklist } from './Task';
import type { TaskList } from './Task';
import { RouterLink } from 'vue-router';

function deleteTask(task: TaskList) {
  tasklist.value = tasklist.value.filter((t) => t !== task);
  localStorage.setItem('todo', JSON.stringify(tasklist.value));
}
</script>
<template>
  <ul class="flex flex-row justify-center flex-wrap w-full">
    <li class="box-border m-2 w-80 bg-stone-500 rounded-md drop-shadow-lg" v-for="(task, index) in tasklist" :key="index">
      <router-link :to="{ name: 'task', params: { taskId: task.id } }">
        <div class="textbox flex flex-col items-center">
          <h2 class="text-xl underline">{{ task.title }}</h2>
          <!-- <p class="text-sm text-center">{{ task.todo }}</p> -->
        </div>
      </router-link>
      <input class="checkbox w-8 m-2" type="checkbox" v-model="task.isDone" />
      <button @click="deleteTask(task)"
        class="deleteBtn transition ease-in bg-stone-300 hover:bg-red-600 active:bg-stone-300">
        Delete
      </button>
    </li>
  </ul>
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
