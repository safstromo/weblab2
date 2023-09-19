<script setup lang="ts">
import AddTaskForm from './AddTaskForm.vue';
import { ref } from 'vue';
let show = ref(false);
</script>
<template>
    <button
        @click.prevent="show = !show"
        class="absolute top-10 right-10 w-40 mt-1 py-2 rounded-full bg-white transition ease-in-out delay-75 hover:-translate-y-1 hover:bg-stone-500 active:translate-y-1 shadow-md border border-black dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white dark:shadow-amber-600"
    >
        Add task
    </button>
    <div>
        <AddTaskForm @task-added="() => (show = !show)" v-show="show" />
    </div>
    <div v-show="show" class="fixed w-full h-full z-10 bg-black opacity-50"></div>
</template>
