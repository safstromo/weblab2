<script setup lang="ts">
import { tasks } from './components/Task';
import { RouterLink } from 'vue-router';
import AddTaskModal from './components/AddTaskModal.vue';
import DarkModeButton from './components/DarkModeButton.vue';

const storage = localStorage.getItem('todo');

if (storage) {
  tasks.value = JSON.parse(storage);
}
</script>

<template>
  <header>
    <router-link to="/"><img class="w-24" src="./assets/L3oZlx01.svg" alt="" /></router-link>
    <AddTaskModal />
    <DarkModeButton/>
  </header>
  <router-view></router-view>
</template>

<style scoped></style>
