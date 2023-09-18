<script setup lang="ts">
import { tasks } from './Task';
import type { Task } from './Task';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

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
}
</script>

<template>
    <div>
        <form class="flex flex-col items-center justify-center">
            <input type="text" v-model="title" placeholder="Title" />
            <textarea v-model="todo" placeholder="Add stuff to do"></textarea>
            <button
                @click.prevent="addTask"
                class="w-40 mt-1 py-2 rounded-full bg-stone-300 transition ease-in-out delay-75 hover:-translate-y-1 hover:bg-stone-500 active:translate-y-1 drop-shadow-md"
            >
                Add task
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
