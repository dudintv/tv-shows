import type { Show } from '@/types';
import { toRaw } from 'vue';
import { defineStore } from 'pinia';

export const useShowsStore = defineStore('shows', {
  state: () => {
    return {
      recentlyViewedShows: [] as Show[],
    };
  },
  actions: {
    addShow(show: Show) {
      const foundShowIndex = this.recentlyViewedShows.findIndex(
        (savedShow: Show) => savedShow.id === show.id,
      );
      if (foundShowIndex >= 0) {
        // if the show is already in the array, then just remove it before place in the most recent position
        this.recentlyViewedShows.splice(foundShowIndex, 1);
      }

      this.recentlyViewedShows.unshift(structuredClone(toRaw(show)));
    },
  },
});
