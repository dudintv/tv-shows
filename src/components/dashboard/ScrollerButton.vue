<script setup lang="ts">
import ScrollArrowDown from '@/components/icons/ScrollArrowDown.vue';
</script>

<template>
  <div class="group manual-scroll manual-scroll-right grid cursor-pointer">
    <div
      class="row-span-full col-span-full bg-accent opacity-0 group-hover:opacity-80 transition-all"
    />
    <div class="row-span-full col-span-full grid place-content-center">
      <ScrollArrowDown
        class="text-muted-white -rotate-90 group-hover:text-black group-hover:scale-150 transition-all"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.manual-scroll {
  @apply h-full w-12 sm:w-16 md:w-24 z-10;
  background: radial-gradient(100% 50% at 100% 50%, black 0%, rgba(0, 0, 0, 0) 100%);
}
</style>
