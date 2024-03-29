import { computed } from 'vue';
import type { Show } from '@/types';

const hairSpace = ' ';
export const imdbBaseUrl = 'https://www.imdb.com/title/';
export const tvdbBaseUrl = 'https://www.thetvdb.com/dereferrer/series/';
export const tvrageBaseUrl = 'http://api.tvmaze.com/lookup/shows?tvrage=';

export function useShow(show: Show) {
  const displayName = show.name;
  const displayCoverUrl = show.image?.medium || '';
  const largeCoverUrl = show.image?.original || '';
  const officialSiteUrl = show.network?.officialSite || '';
  const displayYears = computed(() => {
    if (!show.premiered) {
      return '';
    }
    if (!show.ended) {
      return `${show.premiered.substring(0, 4)}${hairSpace}—${hairSpace}...`;
    }

    return `${show.premiered.substring(0, 4)}${hairSpace}—${hairSpace}${show.ended.substring(0, 4)}`;
  });
  const displayRuntime = show.runtime ? `${show.runtime} min` : '';
  const displayRating = show.rating?.average || '';
  const displayPremiered = show.premiered || '';
  const displayEnded = show.ended || '';
  const displayNetwork = [show.network?.name, show.network?.country?.name]
    .filter(Boolean)
    .join(', ');
  const displaySummary = show.summary || '';

  const imdbLink = show.externals?.imdb ? `${imdbBaseUrl}${show.externals.imdb}` : '';
  const tvdbLink = show.externals?.thetvdb ? `${tvdbBaseUrl}${show.externals.thetvdb}` : '';
  const tvrageLink = show.externals?.tvrage ? `${tvrageBaseUrl}${show.externals.tvrage}` : '';

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
    displaySummary,
    imdbLink,
    tvdbLink,
    tvrageLink,
  };
}
