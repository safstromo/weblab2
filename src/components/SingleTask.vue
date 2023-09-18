<script setup lang="ts">
import { tasks } from './Task';
import type { TaskList, Task } from './Task';
const taskProp = defineProps(['taskId']);
const task: Task = tasks.value.find((task) => task.id === taskProp.taskId)!;
// console.log(task);
</script>
<template>
    <div class="flex flex-col items-center">
        <h2 class="text-3xl underline m-5">{{ task?.title }}</h2>

        <p class="text-sm text-center">{{ task.todo }}</p>
        <!-- <input class="checkbox w-8 m-2" type="checkbox" v-model="task.isDone" /> -->
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
