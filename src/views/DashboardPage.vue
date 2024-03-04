<script setup lang="ts">
import { computed, watch } from 'vue';
import GenreSection from '@/components/dashboard/GenreSection.vue';
import { useFetchShows } from '@/composables/fetchShows';
import { useQuery } from 'vue-query';

const emit = defineEmits(['error']);
const { fetchAllShows, arrangeShowsByGenre } = useFetchShows();
const { data, isError, error, suspense } = useQuery(['shows'], fetchAllShows);
watch(isError, () => emit('error', error));

await suspense();

const showsByGenre = computed(() => arrangeShowsByGenre(data.value));
const genres = computed(() => Object.keys(showsByGenre.value));
</script>

<template>
  <GenreSection v-for="genre in genres" :key="genre" :genre="genre" :shows="showsByGenre[genre]" />
</template>

<style lang="scss" scoped></style>
