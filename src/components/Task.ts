import { ref } from 'vue';
import type { Ref } from 'vue';

export const tasks: Ref<Task[]> = ref([]);

export type Task = {
  title: string;
  todo: string;
  isDone: Boolean;
};

