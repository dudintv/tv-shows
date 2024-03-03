<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheLayout from '@/layouts/TheLayout.vue';
</script>

<template>
  <TheLayout>
    <router-view v-slot="{ Component }">
      <suspense timeout="0">
        <template #default>
          <component :is="Component" :key="$route.path"></component>
        </template>
        <template #fallback>
          <div class="w-full grid place-content-center">
            <div class="font-display text-muted-white text-2xl">Loading...</div>
          </div>
        </template>
      </suspense>
    </router-view>
  </TheLayout>
</template>

<style scoped></style>
