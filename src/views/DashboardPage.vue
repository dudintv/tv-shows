<script setup lang="ts">
import { ref } from 'vue';
import RecentlyViewedShows from '@/components/dashboard/RecentlyViewedShows.vue';
import GenresList from '@/components/dashboard/GenresList.vue';

const hasError = ref(false);
const errorMessage = ref('');
function onError(error: any) {
  hasError.value = true;
  errorMessage.value = `${error.value}`;
}
</script>

<template>
  <div>
    <RecentlyViewedShows />

    <suspense timeout="0">
      <GenresList @error="onError" />

      <template #fallback>
        <div class="w-full grid place-content-center">
          <div class="font-display text-muted-white text-2xl">Loading...</div>
        </div>
      </template>
    </suspense>

    <div v-if="hasError" class="text-accent grid place-content-center">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
