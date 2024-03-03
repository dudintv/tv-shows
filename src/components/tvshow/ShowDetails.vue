<script setup lang="ts">
import type { Show } from '@/types';
import { useShow } from '@/composables/showDetails';
import OriginIcon from '@/components/icons/OriginIcon.vue';
import ImdbIcon from '@/components/icons/ImdbIcon.vue';
import TvdbIcon from '@/components/icons/TvdbIcon.vue';
import TvrageIcon from '@/components/icons/TvrageIcon.vue';
import StarIcon from '@/components/icons/StarIcon.vue';
import ChamferedChip from '@/components/tvshow/ChamferedChip.vue';

const { show } = defineProps<{ show: Show }>();

const {
  displayName,
  largeCoverUrl,
  officialSiteUrl,
  displayRuntime,
  displayRating,
  displayPremiered,
  displayEnded,
  displayNetwork,
  displayDescription,
  imdbLink,
  tvdbLink,
  tvrageLink,
} = useShow(show);
</script>

<template>
  <div class="grid grid-flow-col auto-cols-[1fr] gap-8 text-muted-white text-base">
    <div class="grid">
      <img
        :src="largeCoverUrl"
        class="row-span-full col-span-full blur-3xl scale-125 opacity-80 mix-blend-lighten pointer-events-none"
      />
      <img :src="largeCoverUrl" alt="displayName" class="row-span-full col-span-full z-10" />
    </div>
    <div class="z-10">
      <div class="flex justify-between text-base">
        <ChamferedChip class="bg-ternary px-1">{{ displayRuntime }}</ChamferedChip>
        <ChamferedChip class="bg-secondary gap-1 px-1">
          <StarIcon />
          {{ displayRating }}
        </ChamferedChip>
      </div>
      <h1 class="font-display text-2xl text-primary">{{ displayName }}</h1>

      <div class="flex justify-between opacity-50 mb-8">
        <ul>
          <li>Premiered: {{ displayPremiered }}</li>
          <li v-if="displayEnded">Ended: {{ displayEnded }}</li>
        </ul>
        <span>{{ displayNetwork }}</span>
      </div>

      <p v-html="displayDescription"></p>

      <a
        :href="officialSiteUrl"
        class="flex gap-2 w-fit items-center my-4 opacity-80 hover:text-primary hover:opacity-100 transition-all"
      >
        <OriginIcon /> Official website
      </a>

      <div class="flex items-center gap-4">
        <a :href="imdbLink" class="hover:scale-110 transition-all"><ImdbIcon /></a>
        <a :href="tvdbLink" class="hover:scale-110 transition-all"><TvdbIcon /></a>
        <a :href="tvrageLink" class="hover:scale-110 transition-all"><TvrageIcon /></a>
      </div>

      <div class="my-4 flex flex-col gap-2">
        <h5>Genres</h5>
        <ul class="flex gap-1">
          <li v-for="genre in show.genres" :key="genre">
            <ChamferedChip class="bg-primary">{{ genre }}</ChamferedChip>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <img
    :src="largeCoverUrl"
    class="row-span-full col-span-full blur-3xl scale-125 opacity-80 mix-blend-lighten pointer-events-none fixed top-0 right-0 translate-x-full"
  />
</template>

<style lang="scss" scoped></style>
