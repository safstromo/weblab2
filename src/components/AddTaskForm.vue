<script setup lang="ts">
import { ref, computed } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { useTaskStore } from '@/stores/TaskStore';
import type { Task } from '@/stores/TaskStore';
import type { Ref } from 'vue';

const taskStore = useTaskStore();
const emit = defineEmits(['taskAdded']);
const title: Ref<string> = ref('');
const todo = ref('');
const isDisabled = computed(() => title.value.trim() === '');

function addTask() {
    if (title.value.trim() == '') {
        return;
    }

    const newTask: Task = {
        id: uuidv4(),
        title: title.value,
        isDone: false,
        todo: todo.value
    };

    taskStore.tasks.push(newTask);
    localStorage.setItem('todo', JSON.stringify(taskStore.tasks));

    title.value = '';
    todo.value = '';
    emit('taskAdded');
}
</script>

<template>
    <div
        class="fixed flex flex-col justify-evenly md:inset-24 border border-black shadow-lg shadow-cyan-600 mx-auto inset-x-0 z-20 w-80 p-4 md:w-96 md:h-2/5 bg-white rounded-md dark:bg-gray-900 dark:text-white dark:shadow-amber-600"
    >
        <form class="flex flex-col items-center justfy-center mt-2">
            <input class="dark:bg-gray-800" type="text" v-model="title" placeholder="Title" />
            <p v-show="isDisabled" class="text-red-600 underline italic">Title cant be empty.</p>
            <textarea
                v-model="todo"
                class="h-60 dark:bg-gray-800"
                placeholder="Add stuff to do"
            ></textarea>
            <button
                @click.prevent="addTask"
                :disabled="isDisabled"
                class="w-40 mt-1 py-2 rounded-full bg-white transition ease-in-out delay-75 hover:-translate-y-1 hover:bg-stone-500 shadow-md shadow-cyan-600 dark:shadow-amber-600 dark:bg-gray-800 dark:hover:bg-gray-600 border-black border"
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
