<script setup lang="ts">
import TaskTile from '../components/TaskTile.vue';
import PercentCircle from '../components/PercentCircle.vue';
import { useTaskStore } from '@/stores/TaskStore';

const taskStore = useTaskStore();
</script>
<template>
    <div class="flex flex-col justify-items-center items-center p-2">
        <PercentCircle :tasks="taskStore.tasks" />
        <TaskTile />
    </div>
</template>
