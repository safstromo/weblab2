<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import SingleTask from '../components/SingleTask.vue';
const task = useRoute().params;
</script>
<template>
    <div>
        <SingleTask :taskId="task.taskId" />
    </div>
</template>
<style scoped></style>
