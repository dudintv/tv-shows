<script setup lang="ts">
import { watch, defineEmits } from 'vue';
import { useRoute } from 'vue-router';
import BrandingT from '@/components/icons/BrandingT.vue';
import SearchItem from '@/components/tvshow/SearchItem.vue';
import ShowsSeparator from '@/components/icons/ShowsSeparator.vue';
import { useFetchShows } from '@/composables/fetchShows';
import { useQuery } from 'vue-query';

const emit = defineEmits(['error']);
const route = useRoute();
const { searchShows } = useFetchShows();
const { data, isError, error, suspense } = useQuery(['search', route.query.q], () =>
  searchShows(route.query.q),
);
watch(isError, () => emit('error', error));

await suspense();
</script>

<template>
  <div class="mx-auto w-fit text-muted-white opacity-30">
    <span class="text-sm w-full text-center">You're looking for: {{ route.query.q }}</span>
  </div>
  <div class="mx-auto w-fit font-display text-accent text-2xl tracking-widest mb-16">
    <h1 v-if="!data.length">No results</h1>
    <h1 v-if="data.length === 1">1 result</h1>
    <h1 v-if="data.length">{{ data.length }} results</h1>
    <BrandingT />
  </div>
  <ul class="flex flex-col gap-6">
    <li v-for="findResult in data" :key="findResult.show.id">
      <SearchItem :show="findResult.show" />
      <ShowsSeparator class="bg-accent mx-auto my-4" />
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
