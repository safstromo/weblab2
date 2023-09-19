<script setup lang="ts">
import { tasks } from './Task';
import type { Task } from './Task';
const taskProp = defineProps(['taskId']);
const task: Task = tasks.value.find((task) => task.id === taskProp.taskId)!;
</script>
<template>
    <div class="container mx-auto flex flex-col items-center dark:text-white">
        <h2 class="text-3xl underline m-5 ">{{ task?.title }}</h2>

        <p class="text-md text-center">{{ task.todo }}</p>

    <h3 class="text-lg underline pt-8">
    Mark as done
    </h3>
        <input class="checkbox w-10 h-10 m-2 shadow-md" type="checkbox" v-model="task.isDone" />
    </div>
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
