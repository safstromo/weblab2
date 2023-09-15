<script setup lang="ts">
import TaskTile from './components/TaskTile.vue';
import PercentCircle from './components/PercentCircle.vue';
import AddTask from './components/AddTask.vue';
import { tasks } from './components/Task';

const storage = localStorage.getItem('todo');

if (storage) {
  tasks.value = JSON.parse(storage);
}
</script>

<template>
  <div class="flex flex-col justify-items-center items-center flex-shrink-0 p-2">
    <div class="bg-gray-50">Hello</div>
    <PercentCircle class="bg-red-50"/>
    <TaskTile />
    <AddTask />
  </div>
</template>

<style scoped></style>
