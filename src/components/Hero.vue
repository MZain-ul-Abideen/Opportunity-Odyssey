<script setup>
import { defineProps } from 'vue';

defineProps ({
    title: {
        type: String,
        default: 'Explore Your Career!'
    },
    subtitle: {
        type: String,
        default: 'Discover paths, explore opportunities, and find your next adventure in the world of work.'
    }
})

</script>

<template>
    <section class="hero-sec py-20 mb-4">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div class="text-center">
          <h1
            class="text-4xl font-extrabold sm:text-5xl md:text-6xl"
          >
            {{ title }}
          </h1>
          <p class="my-4 text-xl">
            {{ subtitle }}
          </p>
        </div>
      </div>
    </section>
</template>

<style scoped>
.hero-sec {
    background-color: var(--color-1);
    color: var(--ui-2);
}
</style>