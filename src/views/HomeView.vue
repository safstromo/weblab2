<script setup lang="ts">
import TaskTile from '../components/TaskTile.vue';
import PercentCircle from '../components/PercentCircle.vue';
import { tasklist } from '../components/Task';
import { ref } from 'vue';
const tasks = ref(tasklist);
</script>
<template>
    <div class="flex flex-col justify-items-center items-center p-2">
        <PercentCircle :tasks="tasks" />
        <TaskTile />
    </div>
</template>
