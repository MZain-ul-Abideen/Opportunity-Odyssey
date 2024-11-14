<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobList from '@/components/JobList.vue';
</script>

<template>
    <Hero />
    <HomeCards />
    <JobList :limit="3" :showbutton="true"/>
</template>