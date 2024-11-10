  <script setup>
  import JobCard from '@/components/jobcards.vue';
import JobData from '@/jobs.json';
import { ref, defineProps } from 'vue';

defineProps ({
  
})

const jobs = ref(JobData.jobs);
</script>

<template>
    <section class="job_listing px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <JobCard v-for="job in jobs" :key="job.id" :jobget="job"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
.job_listing {
    background-color: var(--color-5);
}
.job_listing h2 {
    color: var(--color-1);
}
</style>