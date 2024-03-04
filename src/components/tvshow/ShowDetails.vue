<script setup lang="ts">
import type { Show } from '@/types';
import { useShow } from '@/composables/getShowDetails';
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
  displaySummary,
  imdbLink,
  tvdbLink,
  tvrageLink,
} = useShow(show);
</script>

<template>
  <div class="row-span-full col-span-full animate-slow-fade-in">
    <img
      :src="largeCoverUrl"
      class="blur-3xl opacity-30 scale-110 mix-blend-lighten pointer-events-none fixed top-0 left-0"
    />
  </div>
  <div
    class="row-span-full col-span-full animate-slow-fade-in delay-500 fixed top-0 right-0 translate-x-full"
  >
    <img
      :src="largeCoverUrl"
      class="row-span-full col-span-full blur-3xl scale-125 opacity-30 mix-blend-lighten pointer-events-none"
    />
  </div>
  <div
    class="grid sm:grid-flow-col auto-cols-[1fr] justify-start gap-6 md:gap-8 lg:gap-12 text-muted-white text-base"
  >
    <div class="grid">
      <img :src="largeCoverUrl" alt="displayName" class="row-span-full col-span-full z-10" />
    </div>
    <div class="z-10">
      <div class="flex gap-2 text-base mb-4">
        <ChamferedChip v-if="displayRuntime" class="bg-ternary px-1">
          {{ displayRuntime }}
        </ChamferedChip>
        <ChamferedChip v-if="displayRating" class="bg-secondary gap-1 px-1">
          <StarIcon />
          {{ displayRating }}
        </ChamferedChip>
      </div>
      <h1 class="font-display text-2xl text-primary">{{ displayName }}</h1>

      <div class="flex justify-between opacity-50 mb-8">
        <ul>
          <li v-if="displayPremiered">Premiered: {{ displayPremiered }}</li>
          <li v-if="displayEnded">Ended: {{ displayEnded }}</li>
        </ul>
        <span>{{ displayNetwork }}</span>
      </div>

      <p v-html="displaySummary"></p>

      <a
        v-if="officialSiteUrl"
        :href="officialSiteUrl"
        class="flex gap-2 w-fit items-center my-6 opacity-80 text-primary hover:opacity-100 transition-all"
      >
        <OriginIcon /> Official website
      </a>

      <div class="flex items-center gap-4">
        <a v-if="imdbLink" :href="imdbLink" class="hover:scale-110 transition-all"><ImdbIcon /></a>
        <a v-if="tvdbLink" :href="tvdbLink" class="hover:scale-110 transition-all"><TvdbIcon /></a>
        <a v-if="tvrageLink" :href="tvrageLink" class="hover:scale-110 transition-all"
          ><TvrageIcon
        /></a>
      </div>

      <div v-if="show.genres?.length" class="my-4 flex flex-col gap-2">
        <h5>Genres</h5>
        <ul class="flex gap-1">
          <li v-for="genre in show.genres" :key="genre">
            <ChamferedChip class="bg-primary">{{ genre }}</ChamferedChip>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
