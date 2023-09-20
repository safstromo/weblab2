<script setup lang="ts">
import { useTaskStore } from '@/stores/TaskStore';
defineEmits(['filterDone']);

const taskStore = useTaskStore();
</script>
<template>
    <div class="m-2">
        <label for="toggle" class="text-md dark:text-white pr-2">Show</label>
        <div
            class="relative inline-block rounded-md w-26 h-10 mr-2 align-middle select-none shadow-lg shadow-cyan-600 dark:shadow-amber-600"
        >
            <input
                @input="taskStore.filterToggle"
                v-model="taskStore.filterTasks"
                type="checkbox"
                name="toggleDone"
                id="toggleDone"
                class="toggle-checkbox absolute block w-12 h-10 rounded-md bg-white border-4 border-cyan-600 appearance-none cursor-pointer dark:bg-white dark:border-amber-600"
            />
            <label
                for="toggleDone"
                class="toggle-label block overflow-hidden h-10 rounded-md bg-white border shadow-md transition duration-300 ease-in cursor-pointer pt-1 p-1 text-lg text-center dark:border-none"
            >
                <p>Todo &nbsp;ALL&nbsp;</p>
            </label>
        </div>
    </div>
</template>
<style scoped>
.toggle-checkbox:checked {
    @apply dark:border-amber-600;
    right: 0;
    border-color: #00acc1;
}

.toggle-checkbox:checked + .toggle-label {
    @apply dark:bg-amber-600;
    background-color: #00acc1;
}
</style>
