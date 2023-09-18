<script setup lang="ts">
import { tasklist } from './components/Task';
import { RouterLink } from 'vue-router';

const storage = localStorage.getItem('todo');

if (storage) {
  tasklist.value = JSON.parse(storage);
}
</script>

<template>
  <header>
    <router-link to="/"><img class="w-24" src="./assets/L3oZlx01.svg" alt=""></router-link>
  </header>
  <router-view></router-view>
</template>

<style scoped></style>
