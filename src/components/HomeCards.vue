<script setup>
import { RouterLink } from 'vue-router';
import cards from './cards.vue';
import { defineProps } from 'vue';

defineProps ({
  cardsubtitle_Developers: {
    type: String,
    default: 'Browse our Vue jobs and start your career today'
  },
  Cardsubtitle_Employers: {
    type: String,
    default: 'List your job to find the perfect developer for the role'
  }
})

</script>

<template>
<!-- Developers and Employers -->
<section class="py-4">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <cards>
            <h2 class="text-2xl font-bold">For Developers</h2>
            <p class="mt-2 mb-4">
              {{ cardsubtitle_Developers }}
            </p>
            <RouterLink
              to="/jobs"
              class="inline-block buttons rounded-lg px-4 py-2"
            >
              Browse Jobs
            </RouterLink>
          </cards>
          <cards>
            <h2 class="text-2xl font-bold">For Employers</h2>
            <p class="mt-2 mb-4">
              {{ Cardsubtitle_Employers }}
            </p>
            <RouterLink
              to="/jobs/add"
              class="inline-block buttons rounded-lg px-4 py-2"
            >
              Add Job
            </RouterLink>
          </cards>
        </div>
      </div>
    </section>


</template>

<style scoped>
.buttons {
  background-color: var(--color-1);
  color: var(--ui-2);
}
.buttons:hover {
  background-color: var(--color-2);
  transition: all 0.1s ease;
}
</style>