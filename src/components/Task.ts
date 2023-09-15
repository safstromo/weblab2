import { ref } from 'vue';
import type { Ref } from 'vue';

export const tasks: Ref<Task[]> = ref([]);
export const tasklist: Ref<TaskList[]> = ref([]);

export type TaskList = {
  id: string;
  title: string;
  todoList: Task[];
  isDone: Boolean
};

export type Task = {
  id: string;
  title: string;
  todo: string;
  isDone: Boolean;
};
