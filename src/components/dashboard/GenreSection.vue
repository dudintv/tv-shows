<script setup lang="ts">
import type { Show } from 'vue';
import { ref, computed } from 'vue';
import GenreHeader from '@/components/dashboard/GenreHeader.vue';
import ShowsSeparator from '@/components/icons/ShowsSeparator.vue';
import ShowsDisplay from '@/components/dashboard/ShowsDisplay.vue';

const { genre, shows, maxShowsCount } = defineProps<{
  genre: string;
  shows: Show[];
  maxShowsCount: number;
}>();

const scrollProgress = ref(0);
const showsCount = computed(() => shows.length);
</script>

<template>
  <GenreHeader
    :genre="genre"
    :showsCount="showsCount"
    :progress="scrollProgress"
    :maxShowsCount="maxShowsCount"
  />
  <ShowsDisplay :shows="shows" @scroll="scrollProgress = $event" />
  <ShowsSeparator class="bg-muted-white mx-auto mb-12" />
</template>

<style lang="scss" scoped></style>
