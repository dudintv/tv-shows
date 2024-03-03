<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import TheLayout from '@/layouts/TheLayout.vue';

const hasError = ref(false);
const errorMessage = ref('');
function onError(error: any) {
  hasError.value = true;
  errorMessage.value = `${error.value}`;
}
</script>

<template>
  <TheLayout>
    <router-view v-slot="{ Component }">
      <suspense timeout="0">
        <template #default>
          <component :is="Component" :key="$route.path" @error="onError" />
        </template>
        <template #fallback>
          <div class="w-full grid place-content-center">
            <div class="font-display text-muted-white text-2xl">Loading...</div>
          </div>
        </template>
      </suspense>
    </router-view>
    <div v-if="hasError" class="text-accent grid place-content-center">
      {{ errorMessage }}
    </div>
  </TheLayout>
</template>

<style scoped></style>
