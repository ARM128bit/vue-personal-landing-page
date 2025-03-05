<script setup lang="ts">
import About from './ui/components/About.vue';
import Skills from './ui/components/Skills.vue';
import RotatingLogos from './ui/components/RotatingLogos.vue';
</script>

<template>
  <div>
    <About />
    <div class="grid grid-cols-2">
      <Skills />
      <RotatingLogos />
    </div>
  </div>
</template>

<style scoped></style>
