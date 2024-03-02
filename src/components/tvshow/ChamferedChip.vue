<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div class="flex">
    <span :class="twMerge('left-triangle px-1', $attrs.class)">&nbsp;</span>
    <span :class="twMerge('flex items-center', $attrs.class)">
      <slot />
    </span>
    <span :class="twMerge('right-triangle px-1', $attrs.class)">&nbsp;</span>
  </div>
</template>

<style lang="scss" scoped>
.left-triangle {
  clip-path: polygon(100% 0, 0 50%, 100% 100%);
}
.right-triangle {
  clip-path: polygon(0 0, 0 100%, 100% 50%);
}
</style>
