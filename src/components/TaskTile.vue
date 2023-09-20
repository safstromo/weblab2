<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useTaskStore } from '@/stores/TaskStore';
import type { Task } from '@/stores/TaskStore';

const taskStore = useTaskStore();

function deleteTask(taskToDelete: Task) {
    taskStore.tasks = taskStore.tasks.filter((t) => t !== taskToDelete);
    localStorage.setItem('todo', JSON.stringify(taskStore.tasks));
}
</script>
<template>
    <ul class="flex flex-row justify-center flex-wrap w-full">
        <li
            v-show="!taskStore.filterTasks"
            class="box-border flex m-2 w-80 bg-white border border-x-cyan-600 rounded-md shadow-md shadow-cyan-600 dark:border-black dark:bg-gray-900 dark:text-white dark:shadow-amber-600 md:max-h-none max-h-20"
            v-for="task in taskStore.tasks"
            :key="task.id"
        >
            <router-link :to="{ name: 'task', params: { taskId: task.id } }">
                <div class="textbox flex h-auto max-h-20 flex-col items-center md:max-h-none">
                    <h2 class="m-2 text-xl underline">{{ task.title }}</h2>
                    <p class="m-2 text-sm max-h-32 text-center overflow-hidden">{{ task.todo }}</p>
                </div>
            </router-link>
            <input class="checkbox w-6 m-2 h-auto" type="checkbox" v-model="task.isDone" />
            <button
                @click="deleteTask(task)"
                class="deleteBtn h-auto transition ease-in bg-stone-300 hover:bg-red-600 active:bg-stone-300 dark:bg-black dark:hover:bg-red-600"
            >
                Delete
            </button>
        </li>
        <li
            class="box-border flex m-2 w-80 bg-white border border-black rounded-md shadow-md shadow-cyan-600 dark:bg-gray-900 dark:text-white dark:shadow-amber-600"
            v-show="taskStore.filterTasks"
            v-for="task in taskStore.getIncomplete"
            :key="task.id"
        >
            <router-link :to="{ name: 'task', params: { taskId: task.id } }">
                <div class="textbox flex max-h-20 flex-col items-center md:max-h-none">
                    <h2 class="m-2 text-xl underline">{{ task.title }}</h2>
                    <p class="m-2 text-sm h-32 text-center overflow-hidden">{{ task.todo }}</p>
                </div>
            </router-link>
            <input class="checkbox w-6 m-2" type="checkbox" v-model="task.isDone" />
            <button
                @click="deleteTask(task)"
                class="deleteBtn transition ease-in bg-stone-300 hover:bg-red-600 active:bg-stone-300 dark:bg-black dark:hover:bg-red-600"
            >
                Delete
            </button>
        </li>
    </ul>
</template>
<style scoped>
.checkbox {
    grid-area: checkbox;
}

.deleteBtn {
    grid-area: delete;
}

.textbox {
    grid-area: text;
}

li {
    display: grid;
    grid-template-columns: 0.5fr 2fr 0.5fr;
    grid-template-areas: 'checkbox text delete';
}
</style>
