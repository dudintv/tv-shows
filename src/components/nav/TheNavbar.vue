<script setup lang="ts">
import TheMenu from '@/components/nav/TheMenu.vue';
import LogoIcon from '@/components/icons/LogoIcon.vue';
import TheSearch from '@/components/nav/TheSearch.vue';
</script>

<template>
  <nav class="w-full flex justify-between">
    <TheMenu />
    <router-link to="/">
      <LogoIcon />
    </router-link>
    <TheSearch />
  </nav>
</template>

<style lang="scss" scoped></style>
