<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/img/logo-1.png'

const isActivelink = (routpath) => {
  const route = useRoute();
  return route.path === routpath;
}

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
              <div class="flex space-x-2 ">
                <RouterLink
                  to="/"
                  :class="[isActivelink('/') ? 'active' : 'nav_link', 'nav-links', 'rounded-md', 'px-3', 'py-2']"
                  >Home</RouterLink
                >
                <RouterLink
                  to="/jobs"
                  :class="[isActivelink('/jobs') ? 'active' : 'nav_link', 'nav-links', 'rounded-md', 'px-3', 'py-2']"
                  >Jobs</RouterLink
                >
                <RouterLink
                  to="/jobs/add"
                  :class="[isActivelink('/jobs/add') ? 'active' : 'nav_link', 'nav-links', 'rounded-md', 'px-3', 'py-2']"
                  >Add Job</RouterLink
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
.nav_link {
  background-color: var(--color-1);
}
.nav-links:hover {
    background-color: var(--color-2);
  transition: all 0.1s ease;
}
.active {
  background-color: var(--color-2);
}

</style>