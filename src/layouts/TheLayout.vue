<script setup lang="ts">
import TheNavbar from '@/components/nav/TheNavbar.vue';
</script>

<template>
  <div class="absolute top-0 w-full h-[30vh] opacity-20 radial-gradient pointer-events-none" />
  <main class="md:container md:mx-auto px-2 xs:px-4 z-10">
    <TheNavbar class="mb-16" />
    <slot />
  </main>
</template>

<style lang="scss" scoped>
.radial-gradient {
  background: radial-gradient(
    50% 150% at 50% -50%,
    theme('colors.primary') 0%,
    theme('colors.primary/0') 100%
  );
}
</style>
