<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
<section>
      <div class="container m-auto py-6 px-6">
        <RouterLink
          to="/jobs"
          class="link-btn flex items-center"
        >
        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
 </svg> <span class="mx-2">Back to Job Listings</span>
        </RouterLink>
      </div>
    </section>

</template>

<style scoped>
.link-btn {
    color: var(--color-1);
}
</style>