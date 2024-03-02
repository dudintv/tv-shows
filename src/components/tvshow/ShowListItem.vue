<script setup lang="ts">
import { computed } from 'vue';
import type { Show } from '@/types';
import ChamferedChip from '@/components/tvshow/ChamferedChip.vue';
import StarIcon from '@/components/icons/StarIcon.vue';

const { show } = defineProps<{ show: Show }>();

const hairSpace = ' ';
const displayName = computed(() => show.name);
const displayCoverUrl = computed(() => show.image.medium);
const displayYears = computed(() => {
  if (!show.ended) {
    return `${show.premiered.substring(0, 4)}${hairSpace}—${hairSpace}...`;
  }

  return `${show.premiered.substring(0, 4)}${hairSpace}—${hairSpace}${show.ended.substring(0, 4)}`;
});
const displayRuntime = computed(() => `${show.runtime} min`);
const displayRating = computed(() => show.rating.average);
</script>

<template>
  <div class="group text-muted-white w-fit">
    <div class="grid">
      <img
        :src="displayCoverUrl"
        :alt="displayName"
        class="row-span-full col-span-full blur-lg group-hover:blur-xl opacity-30 group-hover:opacity-80 pointer-events-none transition-all"
      />
      <img :src="displayCoverUrl" :alt="displayName" class="row-span-full col-span-full z-10" />
    </div>
    <router-link :to="`/shows/${show.id}`">
      <h4 class="text-lg">{{ displayName }}</h4>
    </router-link>
    <div class="flex gap-1 text-xs">
      <span class="opacity-60">{{ displayYears }}&#8202;</span>
      <ChamferedChip class="bg-ternary">{{ displayRuntime }}</ChamferedChip>
      <ChamferedChip class="bg-secondary gap-1">
        <StarIcon />
        {{ displayRating }}
      </ChamferedChip>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
