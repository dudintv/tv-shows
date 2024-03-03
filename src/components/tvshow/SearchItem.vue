<script setup lang="ts">
import type { Show } from '@/types';
import { useShow } from '@/composables/showDetails';
import OriginIcon from '@/components/icons/OriginIcon.vue';
import StarIcon from '@/components/icons/StarIcon.vue';
import ChamferedChip from '@/components/tvshow/ChamferedChip.vue';

const { show } = defineProps<{ show: Show }>();

const {
  displayName,
  displayCoverUrl,
  displayRuntime,
  displayRating,
  displayYears,
  displayDescription,
} = useShow(show);
</script>

<template>
  <div class="grid sm:grid-flow-col gap-8 text-muted-white text-base">
    <div class="grid">
      <img
        :src="displayCoverUrl"
        class="row-span-full col-span-full blur-lg scale-110 opacity-20 mix-blend-lighten pointer-events-none"
      />
      <img :src="displayCoverUrl" alt="displayName" class="row-span-full col-span-full z-10" />
    </div>
    <div class="z-10">
      <router-link :to="`/shows/${show.id}`" class="block w-fit">
        <h2 class="font-display text-2xl hover:text-primary transition-all">{{ displayName }}</h2>
      </router-link>

      <div class="flex gap-2 text-base my-4">
        <span>{{ displayYears }}</span>
        <ChamferedChip class="bg-ternary px-1">{{ displayRuntime }}</ChamferedChip>
        <ChamferedChip class="bg-secondary gap-1 px-1">
          <StarIcon />
          {{ displayRating }}
        </ChamferedChip>
      </div>

      <p v-html="displayDescription"></p>

      <div class="my-4 flex gap-4">
        <h5>Genres</h5>
        <ul class="flex gap-1">
          <li v-for="genre in show.genres" :key="genre">
            <ChamferedChip class="bg-primary">{{ genre }}</ChamferedChip>
          </li>
        </ul>
      </div>

      <router-link
        :to="`/shows/${show.id}`"
        class="flex gap-2 w-fit items-center my-4 opacity-80 hover:text-primary hover:opacity-100 transition-all"
      >
        <OriginIcon /> More...
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
