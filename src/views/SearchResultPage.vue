<script setup lang="ts">
import BrandingT from '@/components/icons/BrandingT.vue';
import SearchItem from '@/components/tvshow/SearchItem.vue';
import ShowsSeparator from '@/components/icons/ShowsSeparator.vue';

const foundShows = [
  {
    id: 18,
    url: 'https://www.tvmaze.com/shows/18/the-amazing-race',
    name: 'The Amazing Race',
    type: 'Reality',
    language: 'English',
    genres: ['Action', 'Adventure', 'Family'],
    status: 'Running',
    runtime: 90,
    averageRuntime: 62,
    premiered: '2001-09-05',
    ended: null,
    officialSite: 'http://www.cbs.com/shows/amazing_race/',
    schedule: {
      time: '21:30',
      days: ['Wednesday'],
    },
    rating: {
      average: 6.8,
    },
    weight: 98,
    network: {
      id: 2,
      name: 'CBS',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: 'https://www.cbs.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 5566,
      thetvdb: 77666,
      imdb: 'tt0285335',
    },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/478/1196763.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/478/1196763.jpg',
    },
    summary:
      '<p>From athletes and actors to tattoo artists, social workers and musicians - a diverse mix of teams will need to utilize their street smarts and savvy know-how to compete in the race of their lifetime.</p>',
    updated: 1709260448,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/18',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/2674257',
      },
      nextepisode: {
        href: 'https://api.tvmaze.com/episodes/2687440',
      },
    },
  },
  {
    id: 19,
    url: 'https://www.tvmaze.com/shows/19/supernatural',
    name: 'Supernatural',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Action', 'Supernatural'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '2005-09-13',
    ended: '2020-11-19',
    officialSite: 'http://www.cwtv.com/shows/supernatural',
    schedule: {
      time: '20:00',
      days: ['Thursday'],
    },
    rating: {
      average: 8.4,
    },
    weight: 99,
    network: {
      id: 5,
      name: 'CW',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: 'https://www.cwtv.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 5410,
      thetvdb: 78901,
      imdb: 'tt0460681',
    },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/445/1114097.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/445/1114097.jpg',
    },
    summary:
      "<p>This haunting series follows the Winchester brothers as they crisscross the lonely and mysterious back roads of the country in their '67 Chevy Impala, hunting down every evil supernatural force they encounter along the way.</p>",
    updated: 1704794240,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/19',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/1753661',
      },
    },
  },
];
</script>

<template>
  <div class="mx-auto w-fit font-display text-accent text-2xl tracking-widest mb-16">
    <h1>2 results</h1>
    <BrandingT />
  </div>
  <ul class="flex flex-col gap-6">
    <li v-for="show in foundShows" :key="show.id">
      <SearchItem :show="show" />
      <ShowsSeparator class="bg-accent mx-auto my-4" />
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
