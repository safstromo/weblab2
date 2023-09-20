<script setup lang="ts">
import TaskTile from '../components/TaskTile.vue';
import PercentCircle from '../components/PercentCircle.vue';
import DoneButton from '../components/DoneButton.vue';
</script>
<template>
    <div class="flex flex-col justify-items-center items-center p-2">
        <PercentCircle />
        <div
            class="container border-2 rounded-t-lg shadow-inner shadow-cyan-600 dark:border-black dark:shadow-amber-600"
        >
            <DoneButton />
            <TaskTile />
        </div>
    </div>
</template>
