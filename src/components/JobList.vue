  <script setup>
  import JobCard from '@/components/jobcards.vue';
import JobData from '@/jobs.json';
import { ref, defineProps } from 'vue';

defineProps ({
  limit: Number,
  showbutton: {
    type: Boolean,
    default: false,
  }
},) 
const jobs = ref(JobData.jobs);
</script>

<template>
    <section class="job_listing px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <JobCard v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :jobget="job"/>
      </div>
    </div>
    <div class="m-auto max-w-lg my-10 px-6 mt-5" v-if="showbutton">
    <a href="/jobs"
      class="block view-all-btn text-center py-4 px-6 rounded-xl"
      >View All Jobs</a>
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
.view-all-btn {
  background-color: var(--color-1);
  color: var(--ui-2);
}
.view-all-btn:hover {
  background-color: var(--color-2);
  transition: all 0.1s ease;
}
</style>