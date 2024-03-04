<script setup lang="ts">
import { ref, toRefs, watch, defineProps, onMounted } from 'vue';
import BrandingT from '@/components/icons/BrandingT.vue';

const props = defineProps<{ genre: string; progress: number; showsCount: number }>();
const { progress, showsCount } = toRefs(props);
const displayGenre = props.genre.charAt(0).toUpperCase() + props.genre.slice(1);

const progressRef = ref();
const progressBarRef = ref();

watch(progress, handleProgress);
onMounted(handleProgress);
function handleProgress() {
  if (!progressBarRef.value) return;

  const progressWidth = progressRef.value?.clientWidth;
  const progressBarWidth = progressBarRef.value?.clientWidth;
  progressBarRef.value.style.setProperty(
    '--progress',
    (progress.value / 100) * (progressWidth - progressBarWidth),
  );
}
</script>

<template>
  <div class="text-muted-white w-full flex flex-col items-center">
    <small class="opacity-50">{{ showsCount }}</small>
    <h2 class="font-display text-3xl">{{ displayGenre }}</h2>
    <div ref="progressRef" class="w-[50%] relative">
      <div
        ref="progressBarRef"
        class="progress w-12 h-2 bg-muted-white absolute top-0 -translate-y-full mt-px"
        data-testid="progressBar"
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
