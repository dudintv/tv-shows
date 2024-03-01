<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import SearchInput from '@/components/nav/SearchInput.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';

const searchRef = ref();

const isSearchOpen = ref(false);
function toggleSearch() {
  isSearchOpen.value = !isSearchOpen.value;
}
function closeSearchDialog() {
  isSearchOpen.value = false;
}
onClickOutside(searchRef, closeSearchDialog);
</script>

<template>
  <div ref="searchRef" class="relative">
    <SearchIcon @click="toggleSearch" />
    <div
      v-if="isSearchOpen"
      class="search-input-position search-input-animation flex items-end bg-accent px-8"
    >
      <SearchInput @close="closeSearchDialog" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-input {
  &-position {
    @apply w-[100vw] fixed top-0 right-0 h-20;
    @apply sm:absolute sm:top-0 sm:bottom-0 sm:right-0 sm:w-auto;
  }
  &-animation {
    @apply opacity-0 animate-slide-left;
  }
}
</style>
