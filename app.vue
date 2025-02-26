<script setup lang="ts">
</script>

<template>
  <NuxtLayout />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from {
  opacity: 0;
  transform: translate(-25px, 0);
}
.page-leave-to {
  opacity: 0;
  transform: translate(25px, 0);
}
</style>