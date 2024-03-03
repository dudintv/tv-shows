<script setup lang="ts">
import type { Show } from '@/types';
import { computed } from 'vue';
import GenreSection from '@/components/dashboard/GenreSection.vue';
import { useFetchShows } from '@/composables/fetchShows';
import { useQuery } from 'vue-query';

const { fetchAllShows } = useFetchShows();
const { data, isError, error, suspense } = useQuery(['shows'], fetchAllShows);

await suspense();

const showsByGenre = computed(() => {
  return data.value.reduce((result: Record<string, Show[]>, show: Show) => {
    if (!show.genres) {
      result.other?.push(show) || (result.other = [show]);
      return result;
    }

    show.genres.forEach((genre: string) => {
      result[genre]?.push(show) || (result[genre] = [show]);
    });
    return result;
  }, {});
});
const genres = computed(() => Object.keys(showsByGenre.value));
</script>

<template>
  <GenreSection v-for="genre in genres" :key="genre" :genre="genre" :shows="showsByGenre[genre]" />
</template>

<style lang="scss" scoped></style>
