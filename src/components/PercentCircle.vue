<script setup lang="ts">
import { computed } from 'vue';
import { tasklist } from './Task';
import type { TaskList } from './Task';

const percentDone = computed(() => {
  const done = tasklist.value.filter((task: TaskList) => task.isDone).length;
  const percent = (done / tasklist.value.length) * 100;
  return percent.toFixed(0);
});
</script>

<template>
  <div class="flex items-center justify-center w-60 h-60 rounded-full bg-stone-500 drop-shadow-xl m-2">
    <h2 class="text-3xl">{{ percentDone }}%</h2>
  </div>
</template>

<style scoped></style>
