<script setup lang="ts">
import type { MenuItem } from '@/types';
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import MenuLink from '@/components/nav/MenuLink.vue';
import MenuIcon from '@/components/icons/MenuIcon.vue';
import CloseIcon from '@/components/icons/CloseIcon.vue';
import BrandingT from '@/components/icons/BrandingT.vue';

const menuRef = ref();
const menuDialogRef = ref();

const isMenuOpen = ref(false);
function toggleMenu() {
  menuDialogRef.value.open ? menuDialogRef.value.close() : menuDialogRef.value.show();
  isMenuOpen.value = menuDialogRef.value.open;
}
function closeMenu() {
  menuDialogRef.value.close();
  isMenuOpen.value = false;
}
onClickOutside(menuRef, closeMenu);

const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    description: 'The main page with full lists TV shows categorized by genres',
    link: '/',
    // xxx: 1,
  },
  {
    label: 'About API',
    description: 'External link to the TV Maze API documentation',
    link: 'https://www.tvmaze.com/api',
    target: '_blank',
  },
];
</script>

<template>
  <div ref="menuRef" class="relative">
    <div>
      <button v-if="isMenuOpen" @click="toggleMenu">
        <CloseIcon class="bg-accent text-black" />
      </button>
      <button v-else @click="toggleMenu">
        <MenuIcon :class="{ 'bg-accent text-black': isMenuOpen }" />
      </button>
    </div>
    <dialog id="menu-dialog" ref="menuDialogRef" class="md:min-w-max bg-transparent mt-4 z-50">
      <!-- the input only to avoid autofocus on the first element -->
      <input autofocus="true" class="opacity-0 absolute" />
      <ul class="flex flex-wrap items-stretch gap-4">
        <li
          v-for="(menuItem, index) in menuItems"
          :key="menuItem.link"
          class="menu-item-animation"
          :style="{ '--i': index }"
        >
          <MenuLink
            v-if="isMenuOpen"
            :to="menuItem.link"
            :target="menuItem.target"
            class="group"
            @close="closeMenu"
          >
            <div class="bg-accent px-8 pt-4 rounded-sm max-w-min h-full flex items-end">
              <div class="relative">
                <p
                  class="text-black/60 group-hover:text-black group-focus:text-black text-sm mt-8 mb-2 w-full transition-all"
                >
                  {{ menuItem.description }}
                </p>
                <h5
                  class="font-display text-3xl whitespace-nowrap mb-8 translate-y-2 group-hover:translate-y-0 group-focus:translate-y-0 transition-all"
                >
                  {{ menuItem.label }}
                </h5>
                <BrandingT
                  class="absolute b-0 -translate-y-full h-4 group-hover:h-8 group-focus:h-8 origin-bottom w-full transition-all"
                />
              </div>
            </div>
          </MenuLink>
        </li>
      </ul>
    </dialog>
  </div>
</template>

<style lang="scss" scoped>
.menu-item-animation {
  @apply opacity-0 animate-slide-up;
  animation-delay: calc(0.1s * var(--i));
}
</style>
