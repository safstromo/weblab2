<script setup lang="ts">
import TaskTile from '../components/TaskTile.vue';
import PercentCircle from '../components/PercentCircle.vue';
import AddTask from '../components/AddTask.vue';


</script>
<template>
  <div class="flex flex-col justify-items-center items-center p-2">
    <div class="bg-gray-50">Hello</div>
    <PercentCircle />
    <TaskTile />
    <!-- sätt probs för att veta vilken task -->
    <AddTask />
  </div>
</template>
