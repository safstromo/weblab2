<script setup lang="ts">
import { tasklist } from './components/Task';

const storage = localStorage.getItem('todo');

if (storage) {
  tasklist.value = JSON.parse(storage);
}
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
