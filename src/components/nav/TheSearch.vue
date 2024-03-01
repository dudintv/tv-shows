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
      class="absolute top-0 bottom-0 right-0 flex items-end bg-accent px-8 opacity-0 animate-slide-left"
    >
      <SearchInput @close="closeSearchDialog" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
