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
  <div>Hello</div>
  <PercentCircle />
  <TaskTile />
  <AddTask />
</template>

<style scoped></style>
