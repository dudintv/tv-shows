import { computed } from 'vue';
import type { Show } from '@/types';

const hairSpace = ' ';
const imdbBaseUrl = 'https://www.imdb.com/title/';
const tvdbBaseUrl = '';
const tvrageBaseUrl = '';

export function useShow(show: Show) {
  const displayName = show.name;
  const displayCoverUrl = show.image.medium;
  const largeCoverUrl = show.image.original;
  const officialSiteUrl = show.network?.officialSite;
  const displayYears = computed(() => {
    if (!show.ended) {
      return `${show.premiered.substring(0, 4)}${hairSpace}—${hairSpace}...`;
    }

    return `${show.premiered.substring(0, 4)}${hairSpace}—${hairSpace}${show.ended.substring(0, 4)}`;
  });
  const displayRuntime = `${show.runtime} min`;
  const displayRating = show.rating.average;
  const displayPremiered = show.premiered;
  const displayEnded = show.ended || '';
  const displayNetwork = `${show.network?.name}, ${show.network?.country?.name}`;
  const displayDescription = show.summary;

  const imdbLink = `${imdbBaseUrl}${show.externals.imdb}`;
  const tvdbLink = `${tvdbBaseUrl}${show.externals.thetvdb}`;
  const tvrageLink = `${tvrageBaseUrl}${show.externals.tvrage}`;

  return {
    displayName,
    displayCoverUrl,
    largeCoverUrl,
    officialSiteUrl,
    displayYears,
    displayRuntime,
    displayRating,
    displayPremiered,
    displayEnded,
    displayNetwork,
    displayDescription,
    imdbLink,
    tvdbLink,
    tvrageLink,
  };
}
