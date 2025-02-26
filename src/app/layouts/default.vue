<script setup lang="ts">
import { HeaderMenu } from '@/widgets/header';
import { FooterMenu } from '@/widgets/footer';
</script>

<template>
  <header-menu />
  <main class="layout lg:w-[1280px] md:py-30 mr-auto ml-auto overflow-y-visible">
    <NuxtPage />
  </main>
  <footer-menu />
</template>

<style scoped>
</style>
