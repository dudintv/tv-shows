export type MenuItem = {
  label: string;
  description: string;
  link: string;
  target?: '_blank';
};

export type Show = {
  id: number;
  url: string;
  name: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  rating: { average: number };
  weight: number;
  network: any;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
};
