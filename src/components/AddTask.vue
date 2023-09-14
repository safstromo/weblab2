<script setup lang="ts">
import { tasks } from './Task';
import type { Task } from './Task';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const title = ref('');
const todo = ref('');

function addTask() {
  const newTask: Task = {
    id: uuidv4(),
    title: title.value,
    todo: todo.value,
    isDone: false
  };

  tasks.value.push(newTask);
  localStorage.setItem('todo', JSON.stringify(tasks.value));

  title.value = '';
  todo.value = '';
}
</script>

<template>
  <div>
    <form>
      <input type="text" v-model="title" placeholder="Title" />
      <textarea v-model="todo" placeholder="Add stuff to do"></textarea>
      <button @click.prevent="addTask">Add task</button>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
