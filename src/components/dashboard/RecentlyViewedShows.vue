<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useShowsStore } from '@/stores/shows';
import ShowsDisplay from '@/components/dashboard/ShowsDisplay.vue';
import BrandingT from '@/components/icons/BrandingT.vue';

const showsStore = useShowsStore();
const { recentlyViewedShows } = storeToRefs(showsStore);
</script>

<template>
  <div
    v-if="recentlyViewedShows?.length"
    class="bleeding-full-width mb-8 pt-8 rounded-sm bg-ternary/20"
  >
    <h2 class="font-display text-muted-white text-xl text-center w-fit mx-auto">
      Recently viewed shows
      <BrandingT class="text-muted-white w-full h-8 mx-auto" />
    </h2>
    <ShowsDisplay :shows="recentlyViewedShows" />
  </div>
</template>

<style lang="scss" scoped>
.bleeding-full-width {
  @apply relative w-screen  left-[50%] right-[50%] -ml-[50vw] -mr-[50vw];
}
</style>
