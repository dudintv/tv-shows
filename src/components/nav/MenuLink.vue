<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, useLink } from 'vue-router';
import type { RouterLinkProps } from 'vue-router';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  // @ts-ignore
  ...RouterLink.props,
}) as RouterLinkProps;

// `props` contains `to` and any other prop that can be passed to <router-link>
const { navigate, href, route, isActive, isExactActive } = useLink(props);
const isExternalLink = computed(() => typeof props.to === 'string' && props.to.startsWith('http'));
</script>

<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
    <slot />
  </a>
  <router-link v-else v-bind="props" :class="$attrs.class">
    <slot />
  </router-link>
</template>
