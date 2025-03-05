<script setup lang="ts">
interface DefaultProps {
  from: string;
  to: string;
  img: string;
}
defineProps<DefaultProps>();
</script>

<template>
  <div class="w-[100%] py-2 px-6 flex flex-col text-right">
    <h4>{{ from }} - {{ to }}</h4>
    <span></span>
    <span class="ml-auto">
      <NuxtImg :src="img" class="w-36" />
    </span>
  </div>
</template>

<style scoped></style>
