  <script setup>
  import JobCard from '@/components/jobcards.vue';
  import axios from 'axios';
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { reactive, defineProps, onMounted } from 'vue';

defineProps ({
  limit: Number,
  showbutton: {
    type: Boolean,
    default: false,
  }
},) 
const state = reactive({
  jobs: [],
  isLoading: true,
});

onMounted (async () => {
  try {
    const response = await axios.get('/api/jobs')
    state.jobs = response.data;
  } catch (error) {
    console.error('Error Fetching Data', error)
  } finally {
    state.isLoading = false;
  }
})

</script>

<template>
    <section class="job_listing px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold mb-6 text-center">
        Browse Jobs
      </h2>
      <div v-if="state.isLoading" class="text-center py-6">
        <PulseLoader color="#D28D0D" />
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <JobCard v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :jobget="job"/>
      </div>
    </div>
    <div class="m-auto max-w-lg my-10 px-6 mt-5" v-if="showbutton">
    <RouterLink to="/jobs"
      class="block view-all-btn text-center py-4 px-6 rounded-xl"
      >View All Jobs</RouterLink>
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