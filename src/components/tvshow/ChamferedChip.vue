<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div class="flex">
    <span class="left-triangle px-1" :class="$attrs.class">&nbsp;</span>
    <span class="flex items-center" :class="$attrs.class">
      <slot />
    </span>
    <span class="right-triangle px-1" :class="$attrs.class">&nbsp;</span>
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
