<script setup lang="ts">
import { computed } from 'vue';
import type { Show } from '@/types';
import ChamferedChip from '@/components/tvshow/ChamferedChip.vue';
import StarIcon from '@/components/icons/StarIcon.vue';
import { useShow } from '@/composables/showDetails';

const { show } = defineProps<{ show: Show }>();

const { displayName, displayCoverUrl, displayYears, displayRuntime, displayRating } = useShow(show);
</script>

<template>
  <div class="group text-muted-white w-fit">
    <router-link :to="`/shows/${show.id}`">
      <div class="grid">
        <img
          :src="displayCoverUrl"
          :alt="displayName"
          class="row-span-full col-span-full blur-lg group-hover:blur-xl opacity-30 group-hover:opacity-80 pointer-events-none transition-all"
        />
        <img
          :src="displayCoverUrl"
          :alt="displayName"
          class="row-span-full col-span-full z-10 group-hover:scale-105 transition-all"
        />
      </div>
      <h4 class="text-lg mt-2 mb-1 opacity-70 group-hover:opacity-100 transition-all">
        {{ displayName }}
      </h4>
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
