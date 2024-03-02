<script setup lang="ts">
import { ref, toRefs, watch, defineProps, onMounted } from 'vue';
import BrandingT from '@/components/icons/BrandingT.vue';

const props = defineProps<{ progress: number; itemsCount: number }>();
const { progress, itemsCount } = toRefs(props);

const progressRef = ref();
const progressBarRef = ref();

watch(progress, handleProgress);
onMounted(handleProgress);
function handleProgress() {
  if (!progressBarRef.value) return;

  const extraPadding = 4;
  const progressWidth = progressRef.value?.clientWidth - extraPadding;
  const progressBarWidth = progressBarRef.value?.clientWidth;
  progressBarRef.value.style.setProperty(
    '--progress',
    extraPadding / 2 + (progress.value / 100) * (progressWidth - progressBarWidth),
  );
}
</script>

<template>
  <div class="text-muted-white w-full flex flex-col items-center">
    <small class="opacity-50">{{ itemsCount }}</small>
    <h2 class="font-display text-3xl">Drama</h2>
    <div ref="progressRef" class="w-[50%] relative">
      <div
        ref="progressBarRef"
        class="progress w-12 h-2 bg-muted-white absolute top-0 -translate-y-full mt-px"
      />
      <BrandingT class="w-full h-8" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.progress {
  left: calc(var(--progress) * 1px);
}
</style>
