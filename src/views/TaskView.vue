<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import TaskTile from '../components/TaskTile.vue'
const route = useRoute();
</script>
<template>
  <div>
    Test {{route.params.id}} 
    <TaskTile />
  </div>
</template>
<style scoped>
  
</style>
