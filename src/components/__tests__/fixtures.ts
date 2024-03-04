import type { Show } from '@/types';

let showId = 0;
const names = ['Under the Dome', 'Person of Interest', 'Bitten'];

const correctFullShow: Show = {
  id: 1,
  url: 'https://www.tvmaze.com/shows/1/under-the-dome',
  name: 'Under the Dome',
  type: 'Scripted',
  language: 'English',
  genres: ['Drama', 'Science-Fiction', 'Thriller'],
  status: 'Ended',
  runtime: 60,
  averageRuntime: 60,
  premiered: '2013-06-24',
  ended: '2015-09-10',
  officialSite: 'http://www.cbs.com/shows/under-the-dome/',
  schedule: {
    time: '22:00',
    days: ['Thursday'],
  },
  rating: {
    average: 6.5,
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
    tvrage: 25988,
    thetvdb: 264492,
    imdb: 'tt1553656',
  },
  image: {
    medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
    original: 'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
  },
  summary:
    "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
  updated: 1704794065,
  _links: {
    self: {
      href: 'https://api.tvmaze.com/shows/1',
    },
    previousepisode: {
      href: 'https://api.tvmaze.com/episodes/185054',
    },
  },
};

const correctMinimalShow = {
  id: 11658,
  url: 'https://www.tvmaze.com/shows/11658/hard-shine',
  name: 'Hard Shine',
  type: 'Reality',
  language: 'English',
  genres: [],
  status: 'Ended',
  runtime: null,
  averageRuntime: null,
  premiered: null,
  ended: null,
  officialSite: null,
  schedule: null,
  rating: {
    average: null,
  },
  weight: 16,
  network: null,
  webChannel: null,
  dvdCountry: null,
  externals: {
    tvrage: null,
    thetvdb: null,
    imdb: null,
  },
  image: null,
  summary: null,
  updated: 1452790172,
  _links: {
    self: {
      href: 'https://api.tvmaze.com/shows/11658',
    },
    previousepisode: {
      href: 'https://api.tvmaze.com/episodes/569612',
    },
  },
};

export function makeCorrectShow(extra: any): Show {
  showId += 1;
  return { ...correctFullShow, id: showId, name: names[showId % names.length], ...extra };
}

export function makeMinimalShow(): Partial<Show> {
  showId += 1;
  return { ...correctMinimalShow, id: showId };
}
