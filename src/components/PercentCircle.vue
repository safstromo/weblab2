<script setup lang="ts">
import { defineProps, computed,ref } from 'vue';
import type { Task, TaskList } from './Task'

interface ListProps<T> {
  tasks: T[];
}

const props = defineProps<ListProps<Task | TaskList>>();

const percentDone = computed(() => {
  if (props.tasks.length === 0) {
    return 0;
  }
  const done = props.tasks.filter((task) => task.isDone).length;
  const percent = (done / props.tasks.length) * 100;
  return percent.toFixed(0);
});

let circle = ref(percentDone.value);

</script>

<template>
  <div class="flex items-center justify-center w-60 h-60 rounded-full bg-stone-500 drop-shadow-xl m-2">
    <h2 class="text-3xl">{{ circle }}%</h2>
  </div>
</template>

<style scoped></style>
