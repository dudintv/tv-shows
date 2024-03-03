<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import CloseSearchIcon from '@/components/icons/CloseSearchIcon.vue';
import BrandingT from '@/components/icons/BrandingT.vue';

const emit = defineEmits(['close']);

const searchInput = ref('');
function sendSearch() {
  emit('close');
  router.push({ path: '/search', query: { q: searchInput.value } });
}
</script>

<template>
  <div class="w-full md:w-72 pt-4">
    <div class="flex justify-between gap-2 w-full">
      <input
        v-model="searchInput"
        type="input"
        name="search"
        id="search"
        autofocus
        autocomplete="off"
        class="flex-grow bg-transparent"
        @keyup.enter="sendSearch"
      />
      <button class="uppercase flex-grow-0 focus:font-bold" @click="sendSearch">Search</button>
      <button
        class="flex-grow-0 opacity-50 focus:opacity-100 hover:opacity-100"
        @click="emit('close')"
      >
        <CloseSearchIcon />
      </button>
    </div>
    <BrandingT class="h-4 group-hover:h-8 group-focus:h-8 origin-bottom w-full transition-all" />
  </div>
</template>

<style lang="scss" scoped></style>
