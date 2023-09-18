<script setup lang="ts">
import { tasks } from './components/Task';
import { RouterLink } from 'vue-router';
import AddTaskModal from './components/AddTaskModal.vue';
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const toggleDark = useToggle(isDark);

const storage = localStorage.getItem('todo');

if (storage) {
  tasks.value = JSON.parse(storage);
}
</script>

<template>
  <header>
    <router-link to="/"><img class="w-24" src="./assets/L3oZlx01.svg" alt="" /></router-link>
    <AddTaskModal />
<button
      @click="toggleDark()"
      class="px-4 py-2 text-white bg-gray-600 dark:bg-sky-700"
    >
      Dark Toggle
    </button>
  </header>
  <router-view></router-view>
</template>

<style scoped></style>
