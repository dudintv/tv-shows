<script setup lang="ts">
import { watch, defineEmits } from 'vue';
import { useRoute } from 'vue-router';
import ShowDetails from '@/components/tvshow/ShowDetails.vue';
import { useFetchShows } from '@/composables/fetchShows';
import { useQuery } from 'vue-query';

const emit = defineEmits(['error']);
const route = useRoute();
const { fetchOneShow } = useFetchShows();
const { data, isError, error, suspense } = useQuery(['show', route.params.id], () =>
  fetchOneShow(route.params.id),
);
watch(isError, () => emit('error', error));

await suspense();
</script>

<template>
  <ShowDetails :show="data" />
</template>

<style lang="scss" scoped></style>
