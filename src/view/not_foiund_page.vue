<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <section class="text-center flex flex-col justify-center items-center h-96">
      <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <RouterLink
        to="/"
        class="text-white buttons rounded-md px-3 py-2 mt-4"
        >Go Back</RouterLink
      >
    </section>
</template>

<style scoped>
    .buttons {
        background-color: var(--color-1);
        color: var(--ui-2);
    }
    .buttons:hover {
        background-color: var(--color-2);

    }
</style>