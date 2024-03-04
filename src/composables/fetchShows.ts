import type { Show } from '@/types';

const baseShowApiUrl = 'https://api.tvmaze.com';
const showsUrl = `${baseShowApiUrl}/shows`;
const searchUrl = `${baseShowApiUrl}/search/shows`;

async function fetchAllShows(): Promise<Show[]> {
  const response = await fetch(showsUrl);
  const shows = await response.json();
  return shows;
}

async function fetchOneShow(showId: number): Promise<Show> {
  const response = await fetch(`${showsUrl}/${showId}`);
  const show = await response.json();
  return show;
}

async function searchShows(query: string): Promise<Show[]> {
  const params = new URLSearchParams({ q: query });
  const response = await fetch(`${searchUrl}?` + params);
  const shows = await response.json();
  return shows;
}

function arrangeShowsByGenre(shows: Show[]) {
  return shows.reduce((result: Record<string, Show[]>, show: Show) => {
    if (!show.genres || (show.genres.length === 1 && !show.genres[0])) {
      result.other?.push(show) || (result.other = [show]);
      return result;
    }

    show.genres.forEach((genre: string) => {
      const normalizedGenreName = genre.trim().toLowerCase();
      result[normalizedGenreName]?.push(show) || (result[normalizedGenreName] = [show]);
    });
    return result;
  }, {});
}

export function useFetchShows() {
  return {
    fetchAllShows,
    fetchOneShow,
    searchShows,
    arrangeShowsByGenre,
  };
}
