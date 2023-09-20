<script setup lang="ts">
import { RouterLink } from 'vue-router';
import AddTaskModal from './components/AddTaskModal.vue';
import DarkModeButton from './components/DarkModeButton.vue';
import { useDark } from '@vueuse/core';
import { computed, ref } from 'vue';
import { useTaskStore } from '@/stores/TaskStore';

const taskStore = useTaskStore();
const isDark = ref(useDark());

const storage = localStorage.getItem('todo');

const logo = computed(() => {
    if (isDark.value) {
        return '/src/assets/logo_white.png';
    } else {
        return '/src/assets/logo_black.svg';
    }
});

if (storage) {
    taskStore.tasks = JSON.parse(storage);
}
</script>

<template>
    <header>
        <router-link to="/" class="w-24"><img class="w-24" :src="logo" alt="logo" /></router-link>
        <AddTaskModal />
        <DarkModeButton />
    </header>
    <router-view></router-view>
</template>

<style scoped></style>
