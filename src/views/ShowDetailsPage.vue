<script setup lang="ts">
import { watch, defineEmits, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import ShowDetails from '@/components/tvshow/ShowDetails.vue';
import { useFetchShows } from '@/composables/fetchShows';
import { useQuery } from 'vue-query';
import { useShowsStore } from '@/stores/shows';

const emit = defineEmits(['error']);
const route = useRoute();
const showStore = useShowsStore();
const { fetchOneShow } = useFetchShows();
const { data, isError, error, suspense } = useQuery(['show', route.params.id], () =>
  fetchOneShow(route.params.id),
);
watch(isError, () => emit('error', error));

await suspense();
onMounted(async () => {
  await nextTick();
  showStore.addShow(data.value);
});
</script>

<template>
  <ShowDetails :show="data" />
</template>

<style lang="scss" scoped></style>
