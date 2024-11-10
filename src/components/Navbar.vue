<script setup>
import logo from '@/assets/img/logo-1.png'
</script>

<template>
    <nav class="nav-bar">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <!-- Logo -->
            <a class="flex flex-shrink-0 items-center mr-4" ref="index.html">
              <img class="h-10 w-auto" :src="logo" alt="Opportunity Odyssey" />
              <span class="hidden md:block  text-2xl font-bold ml-2 uppercase"
                >Opportunity Odyssey</span
              >
            </a>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <a
                  href="index.html"
                  class=" nav-links-active nav-links hover: rounded-md px-3 py-2"
                  >Home</a
                >
                <a
                  href="jobs.html"
                  class=" nav-links hover: rounded-md px-3 py-2"
                  >Jobs</a
                >
                <a
                  href="add-job.html"
                  class=" nav-links hover: rounded-md px-3 py-2"
                  >Add Job</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<style scoped>
.nav-bar {
    background-color: var(--color-1);
    color: var(--ui-2);
    border-bottom: 1px solid var(--color-5);
}
.nav-links-active {
    background-color: var(--color-2);
}
.nav-links:hover {
    background-color: var(--color-2);
  transition: all 0.1s ease;
}
</style>