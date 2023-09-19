<script setup lang="ts">
import { computed } from 'vue';
import { useTaskStore } from '@/stores/TaskStore';
import type { Task } from '@/stores/TaskStore';

const taskStore = useTaskStore();

const percentDone = computed(() => {
    if (taskStore.tasks.length === 0) return 100;
    const done = taskStore.tasks.filter((task: Task) => task.isDone).length;
    const percent = (done / taskStore.tasks.length) * 100;
    return percent.toFixed(0);
});
</script>

<template>
    <div
        class="flex flex-col items-center justify-center w-60 h-60 rounded-full bg-white border drop-shadow-xl m-2 dark:bg-gray-800 dark:text-white dark:border-black"
    >
        <h2 class="text-2xl">Tasks done</h2>
        <h2 class="text-3xl">{{ percentDone }}%</h2>
    </div>
</template>

<style scoped></style>
