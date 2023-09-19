<script setup lang="ts">
import { tasks } from './Task';
import type { Task } from './Task';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
const emit = defineEmits(['taskAdded']);
const title = ref('');
const todo = ref('');

function addTask() {
    const newTask: Task = {
        id: uuidv4(),
        title: title.value,
        isDone: false,
        todo: todo.value
    };

    tasks.value.push(newTask);
    localStorage.setItem('todo', JSON.stringify(tasks.value));

    title.value = '';
    todo.value = '';
    emit('taskAdded');
}
</script>

<template>
    <div
        class="fixed md:inset-24 border border-black mx-auto inset-x-0 z-20 w-96 p-4 h-96 bg-white rounded-md dark:bg-gray-900 dark:text-white"
    >
        <form class="flex flex-col items-center justfy-center mt-2">
            <input class="dark:bg-gray-800" type="text" v-model="title" placeholder="Title" />
            <textarea
                v-model="todo"
                class="h-60 dark:bg-gray-800"
                placeholder="Add stuff to do"
            ></textarea>
            <button
                @click.prevent="addTask"
                class="w-40 mt-1 py-2 rounded-full bg-white transition ease-in-out delay-75 hover:-translate-y-1 hover:bg-stone-500 active:translate-y-1 drop-shadow-md dark:bg-gray-800 dark:hover:bg-gray-600 border-black border"
            >
                Add task
            </button>
            <button
                @click.prevent="$emit('taskAdded')"
                class="absolute top-0 right-0 border w-6 h-6 rounded-md bg-red-600"
            >
                X
            </button>
        </form>
    </div>
</template>

<style scoped>
input,
textarea {
    @apply w-full m-1 px-4 py-2 block border border-stone-500 rounded-md shadow-sm;
}
</style>
