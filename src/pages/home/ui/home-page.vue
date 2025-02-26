<script setup lang="ts">
import About from './About.vue';
import Skills from './skills.vue';
import RotatingLogos from './RotatingLogos.vue';
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
