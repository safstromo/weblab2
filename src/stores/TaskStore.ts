import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Ref } from 'vue';

export type Task = {
    id: string;
    title: string;
    todo: string;
    isDone: Boolean;
};

export const useTaskStore = defineStore('tasks', () => {
    const tasks: Ref<Task[]> = ref([]);
    const filterTasks = ref(false);

    const filterToggle = computed(() => (filterTasks.value = !filterTasks.value));
    const getIncomplete = computed(() => {
        return tasks.value.filter((t) => !t.isDone);
    });

    return { tasks, getIncomplete, filterTasks, filterToggle };
});
