<script setup lang="ts">
import { computed } from 'vue';
import { tasks } from './Task';
import type { Task } from './Task';

const percentDone = computed(() => {
  const done = tasks.value.filter((task: Task) => task.isDone).length;
  const percent = (done / tasks.value.length) * 100;
  return percent.toFixed(0);
});
</script>

<template>
  <div class="circle">
    <h2>{{ percentDone }}%</h2>
  </div>
</template>

<style scoped>
.circle {
  background-color: rgba(0, 0, 0, 0.5);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
