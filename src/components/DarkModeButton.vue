<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<template>
    <div class="absolute top-2 right-8">
        <label for="toggle" class="text-xs dark:text-white pr-2">Toggle Darkmode.</label>
        <div
            class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
        >
            <input
                @input="toggleDark()"
                v-model="isDark"
                type="checkbox"
                name="toggle"
                id="toggle"
                class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-400 border-4 appearance-none cursor-pointer dark:bg-white"
            />
            <label
                for="toggle"
                class="toggle-label block overflow-hidden h-6 rounded-full bg-white border shadow-md cursor-pointer dark:border-none"
            ></label>
        </div>
    </div>
</template>
<style scoped>
.toggle-checkbox:checked {
    @apply: right-0 border-green-400;
    right: 0;
    border-color: #68d391;
}

.toggle-checkbox:checked + .toggle-label {
    @apply: bg-green-400;
    background-color: #68d391;
}
</style>
