<script setup lang="ts">
import { tasks } from './Task';
import type { Task } from './Task';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
const emit = defineEmits(['taskAdded']);
const title = ref('');
const todo = ref('');

function addTask() {
  const newTask: Task = {
    id: uuidv4(),
    title: title.value,
    isDone: false,
    todo: todo.value
  };

  tasks.value.push(newTask);
  localStorage.setItem('todo', JSON.stringify(tasks.value));

  title.value = '';
  todo.value = '';
  emit('taskAdded');
}
</script>

<template>
  <div class="fixed mx-auto inset-x-0 z-20 w-96 p-4 overflow-y-auto md:inset-0 h-96 bg-stone-500 rounded-md">
    <form class="flex flex-col items-center justfy-center">
      <input type="text" v-model="title" maxlength="18" placeholder="Title" />
      <textarea v-model="todo" class="h-60" maxlength="200" placeholder="Add stuff to do"></textarea>
      <button @click.prevent="addTask"
        class="w-40 mt-1 py-2 rounded-full bg-stone-300 transition ease-in-out delay-75 hover:-translate-y-1 hover:bg-stone-500 active:translate-y-1 drop-shadow-md">
        Add task
      </button>
    </form>
  </div>
</template>

<style scoped>
input,
textarea {
  @apply w-full m-1 px-4 py-2 block border border-stone-500 rounded-md shadow-sm;
}
</style>
