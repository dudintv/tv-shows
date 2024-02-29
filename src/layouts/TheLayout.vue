<script setup lang="ts"></script>

<template>
  <div class="absolute top-0 w-full h-[30%] opacity-20 radial-gradient"></div>
  <slot />
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
