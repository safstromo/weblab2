<script setup lang="ts">
import { tasks } from './components/Task';
import { RouterLink } from 'vue-router';
import AddTaskModal from './components/AddTaskModal.vue';

const storage = localStorage.getItem('todo');

if (storage) {
  tasks.value = JSON.parse(storage);
}
</script>

<template>
  <header>
    <router-link to="/"><img class="w-24" src="./assets/L3oZlx01.svg" alt="" /></router-link>
    <AddTaskModal />
  </header>
  <router-view></router-view>
</template>

<style scoped></style>
