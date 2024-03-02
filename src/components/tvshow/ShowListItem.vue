<script setup lang="ts">
import { computed } from 'vue';
import type { Show } from '@/types';
import ChamferedChip from '@/components/tvshow/ChamferedChip.vue';
import StarIcon from '@/components/icons/StarIcon.vue';

const { show } = defineProps<{ show: Show }>();

const hairSpace = ' ';
const displayName = computed(() => show.name);
const displayCoverUrl = computed(() => show.image.medium);
const displayYears = computed(
  () => `${show.premiered.substring(0, 4)}${hairSpace}—${hairSpace}${show.ended.substring(0, 4)}`,
);
const displayRuntime = computed(() => `${show.runtime} min`);
const displayRating = computed(() => show.rating.average);
</script>

<template>
  <div class="text-muted-white">
    <img :src="displayCoverUrl" :alt="displayName" />
    <h4 class="text-lg">{{ displayName }}</h4>
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
