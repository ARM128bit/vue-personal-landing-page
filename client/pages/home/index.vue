<script setup lang="ts">
import About from './ui/About.vue';
import Skills from './ui/Skills.vue';
import RotatingLogos from './ui/RotatingLogos.vue';
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
