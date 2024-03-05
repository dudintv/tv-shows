<script setup lang="ts">
import { watch, computed, defineEmits } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BrandingT from '@/components/icons/BrandingT.vue';
import SearchItem from '@/components/tvshow/SearchItem.vue';
import ShowsSeparator from '@/components/icons/ShowsSeparator.vue';
import { useFetchShows } from '@/composables/fetchShows';
import { useQuery } from 'vue-query';

const emit = defineEmits(['error']);
const route = useRoute();
const router = useRouter();
const { searchShows } = useFetchShows();
const query = computed(() => route.query.q);
watch(query, () => {
  router.go(0);
});

const { data, isError, error, suspense } = useQuery(['search', query.value], () =>
  searchShows(query.value),
);
watch(isError, () => emit('error', error));

await suspense();
</script>

<template>
  <div>
    <div class="mx-auto w-fit text-muted-white opacity-30">
      <span class="text-sm w-full text-center">You're looking for: {{ query }}</span>
    </div>
    <div class="mx-auto w-fit font-display text-accent text-2xl tracking-widest mb-16">
      <h1 v-if="!data.length">No results</h1>
      <h1 v-else-if="data.length === 1">1 result</h1>
      <h1 v-else-if="data.length">{{ data.length }} results</h1>
      <BrandingT />
    </div>
    <ul class="flex flex-col gap-6">
      <li v-for="findResult in data" :key="findResult.show.id">
        <SearchItem :show="findResult.show" />
        <ShowsSeparator class="bg-accent mx-auto my-4" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
