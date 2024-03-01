<script setup lang="ts">
import TheMenu from '@/components/nav/TheMenu.vue';
import LogoIcon from '@/components/icons/LogoIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
</script>

<template>
  <nav class="w-full flex justify-between">
    <TheMenu />
    <router-link to="/">
      <LogoIcon />
    </router-link>
    <SearchIcon />
  </nav>
</template>

<style lang="scss" scoped></style>
