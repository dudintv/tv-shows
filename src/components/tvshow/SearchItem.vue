<script setup lang="ts">
import type { Show } from '@/types';
import { useShow } from '@/composables/getShowDetails';
import OriginIcon from '@/components/icons/OriginIcon.vue';
import StarIcon from '@/components/icons/StarIcon.vue';
import ChamferedChip from '@/components/tvshow/ChamferedChip.vue';
import { useImage } from '@vueuse/core';

const { show } = defineProps<{ show: Show }>();

const {
  displayName,
  displayCoverUrl,
  displayRuntime,
  displayRating,
  displayYears,
  displaySummary,
} = useShow(show);
const { error } = useImage({ src: displayCoverUrl });
</script>

<template>
  <div class="grid sm:grid-flow-col justify-start gap-8 text-muted-white text-base">
    <router-link
      v-if="displayCoverUrl"
      v-slot="{ navigate }"
      :to="`/shows/${show.id}`"
      class="grid"
    >
      <div
        v-if="error"
        class="w-[210px] h-[295px] text-white/50 bg-ternary grid place-content-center"
      >
        can't load the cover
      </div>
      <template v-else>
        <img
          :src="displayCoverUrl"
          class="row-span-full col-span-full blur-lg scale-110 opacity-20 mix-blend-lighten pointer-events-none"
        />
        <img
          :src="displayCoverUrl"
          alt="displayName"
          class="row-span-full col-span-full z-10 hover:scale-105 transition-all"
          @click="navigate"
        />
      </template>
    </router-link>
    <div class="z-10">
      <router-link :to="`/shows/${show.id}`" class="block w-fit">
        <h2 class="font-display text-2xl hover:text-primary transition-all">{{ displayName }}</h2>
      </router-link>

      <div class="flex gap-2 text-base my-4">
        <span v-if="displayYears">{{ displayYears }}</span>
        <ChamferedChip v-if="displayRuntime" class="bg-ternary px-1">
          {{ displayRuntime }}
        </ChamferedChip>
        <ChamferedChip v-if="displayRating" class="bg-secondary gap-1 px-1">
          <StarIcon />
          {{ displayRating }}
        </ChamferedChip>
      </div>

      <p v-html="displaySummary"></p>

      <div v-if="show.genres?.length" class="my-4 flex gap-4">
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
