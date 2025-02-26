<script setup lang="ts">
import MenuIcon from "@/assets/icons/menu.svg?component";
import GithubIcon from "@/assets/icons/github-mark.svg?component";
import { onClickOutside } from "@vueuse/core";
import { NuxtLink } from "#components";

const route = useRoute();

watch(route, () => {
  sidebarToggle.value = false;
});

const headerRef = ref<HTMLHeadElement>();
onClickOutside(headerRef, () => {
  sidebarToggle.value && (sidebarToggle.value = false);
});

const sidebarToggle = ref<boolean>(false);
</script>

<template>
  <header
    ref="headerRef"
    class="fixed w-xs h-[100%] transition-all duration-500 transform max-md:-translate-x-full max-md:bg-white md:h-auto md:w-full md:backdrop-blur-xl z-100 md:grid md:grid-cols-2 md:grid-rows-1 shadow-md md:shadow-node"
    :class="{ 'max-md:translate-x-0': sidebarToggle }"
  >
    <h1 class="mt-auto mb-auto text-1xl lg:text-3xl font-bold px-5 py-5">
      Iurii Antonevich
    </h1>
    <nav>
      <ul
        class="w-full flex flex-col md:flex-nowrap md:flex-row md:justify-end gap-5 md:gap-10 p-5 md:p-5 text-1xl lg:text-2xl font-light"
      >
        <li>
          <nuxt-link to="/"><span>About</span></nuxt-link>
        </li>
        <li>
          <nuxt-link to="/experience"><span>Experience</span></nuxt-link>
        </li>
        <li>
          <a href="mailto:antonevichye@gmail.com">antonevichye@gmail.com</a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/ARM128bit">
            <GithubIcon width="36" height="36" viewBox="0 0 100 100" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
  <div class="flex md:hidden px-5">
    <input
      aria-label="Menu"
      type="checkbox"
      id="sidebar-toggle"
      class="relative sr-only"
      v-model="sidebarToggle"
    />
    <label class="py-5" for="sidebar-toggle" aria-label="Menu">
      <menu-icon />
    </label>
    <h1 class="w-full mt-auto mb-auto text-2xl text-center">
      Iurii Antonevich
    </h1>
  </div>
</template>

<style scoped>
nav li {
  background-color: transparent;
  transition: all 0.2s ease;
  cursor: pointer;
}
nav li:hover {
  text-shadow: 0px 0 50px black;
}
</style>
