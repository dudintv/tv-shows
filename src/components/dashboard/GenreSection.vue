<script setup lang="ts">
import type { Show } from 'vue';
import { ref, computed, onMounted, onUnmounted, defineProps, nextTick } from 'vue';
import GenreHeader from '@/components/dashboard/GenreHeader.vue';
import ShowListItem from '@/components/tvshow/ShowListItem.vue';
import ScrollerButton from '@/components/dashboard/ScrollerButton.vue';
import ShowsSeparator from '@/components/icons/ShowsSeparator.vue';

const { genre, shows, maxShowsCount } = defineProps<{
  genre: string;
  shows: Show[];
  maxShowsCount: number;
}>();

const scrollerRef = ref<HTMLElement>();
const scrollProgress = ref(0);
const hasScroll = ref(true);
function scrollHandle() {
  if (!scrollerRef.value) {
    scrollProgress.value = 0;
    return;
  }
  scrollProgress.value =
    (scrollerRef.value.scrollLeft /
      (scrollerRef.value.scrollWidth - scrollerRef.value.clientWidth)) *
    100;
}
onMounted(async () => {
  scrollerRef.value?.addEventListener('scroll', scrollHandle);
  await nextTick();
  if (!scrollerRef.value || +scrollerRef.value?.scrollWidth <= +scrollerRef.value?.clientWidth) {
    scrollProgress.value = 0;
    hasScroll.value = false;
  }
});
onUnmounted(() => {
  scrollerRef.value?.removeEventListener('scroll', scrollHandle);
});

const leftButtonVisibilityThreshold = 1;
const rightButtonVisibilityThreshold = 99;
const hasLeftScrollButton = computed(
  () => hasScroll.value && scrollProgress.value > leftButtonVisibilityThreshold,
);
const hasRightScrollButton = computed(
  () => hasScroll.value && scrollProgress.value < rightButtonVisibilityThreshold,
);

const showsCount = computed(() => shows.length);

function scrollBy(step: number) {
  if (!scrollerRef.value) return;

  scrollerRef.value.scroll({
    left: scrollerRef.value.scrollLeft + step,
    behavior: 'smooth',
  });
}

const manualScrollStepMultiplier = 0.9;
function stepLeft() {
  if (!scrollerRef.value?.clientWidth) return;
  scrollBy(-scrollerRef.value.clientWidth * manualScrollStepMultiplier);
}
function stepRight() {
  if (!scrollerRef.value?.clientWidth) return;
  scrollBy(scrollerRef.value.clientWidth * manualScrollStepMultiplier);
}
</script>

<template>
  <GenreHeader
    :genre="genre"
    :showsCount="showsCount"
    :progress="scrollProgress"
    :maxShowsCount="maxShowsCount"
  />
  <div class="bleeding-full-width -mt-8">
    <div
      ref="scrollerRef"
      class="scroll-container px-8 sm:px-12 md:px-16 py-16 grid grid-flow-col gap-8"
      :class="hasScroll ? 'justify-start' : 'justify-center'"
    >
      <ShowListItem :show="show" v-for="show in shows" :key="show.id" class="flex-shrink-0" />
    </div>
    <ScrollerButton
      v-show="hasLeftScrollButton"
      class="absolute top-0 left-0 rotate-180"
      @click="stepLeft"
    />
    <ScrollerButton
      v-show="hasRightScrollButton"
      class="absolute top-0 right-0"
      @click="stepRight"
    />
  </div>
  <ShowsSeparator class="bg-muted-white mx-auto mb-12" />
</template>

<style lang="scss" scoped>
.bleeding-full-width {
  @apply relative w-screen  left-[50%] right-[50%] -ml-[50vw] -mr-[50vw];
}

.scroll-container {
  @apply overflow-x-auto overflow-y-hidden;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
