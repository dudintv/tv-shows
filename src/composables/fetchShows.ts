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
  const response = await fetch(`${searchUrl}` + params);
  const show = await response.json();
  return show;
}

export function useFetchShows() {
  return {
    fetchAllShows,
    fetchOneShow,
    searchShows,
  };
}
