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
    <div
        class="flex flex-col items-center justify-center w-60 h-60 rounded-full bg-stone-500 drop-shadow-xl m-2"
    >
        <h2 class="text-2xl">Tasks done</h2>
        <h2 class="text-3xl">{{ percentDone }}%</h2>
    </div>
</template>

<style scoped></style>
