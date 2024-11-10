<script setup>

import { defineProps } from 'vue';

defineProps ({
    color: {
        type: String,
        default: 'card-color',
    }
})
</script>

<template>
<div :class="`${color} p-6 rounded-lg shadow-md `">
    <slot></slot>
</div>
</template>

<style scoped>
.card-color {
    background-color: var(--color-4);
    color: var(--ui-1)
}
</style>