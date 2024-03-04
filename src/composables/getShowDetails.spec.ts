import { test, expect, describe } from 'vitest';
import { makeCorrectShow, makeMinimalShow } from '@/components/__tests__/fixtures';
import { useShow, imdbBaseUrl, tvdbBaseUrl, tvrageBaseUrl } from './getShowDetails.js';
const hairSpace = ' ';

describe('with correct show data', () => {
  test('has all display values', () => {
    const show = makeCorrectShow();
    const displayValues = useShow(show);

    expect(displayValues.displayName).equal(show.name);
    expect(displayValues.displayCoverUrl).equal(show.image.medium);
    expect(displayValues.largeCoverUrl).equal(show.image.original);
    expect(displayValues.officialSiteUrl).equal(show.network.officialSite);
    expect(displayValues.displayYears.value).equal(
      `${show.premiered.substring(0, 4)}${hairSpace}—${hairSpace}${show.ended.substring(0, 4)}`,
    );
    expect(displayValues.displayRuntime).equal(`${show.runtime} min`);
    expect(displayValues.displayRating).equal(show.rating.average);
    expect(displayValues.displayPremiered).equal(show.premiered);
    expect(displayValues.displayEnded).equal(show.ended);
    expect(displayValues.displayNetwork).equal(
      `${show.network?.name}, ${show.network?.country?.name}`,
    );
    expect(displayValues.displaySummary).equal(show.summary);
    expect(displayValues.imdbLink).equal(imdbBaseUrl + show.externals.imdb);
    expect(displayValues.tvdbLink).equal(tvdbBaseUrl + show.externals.thetvdb);
    expect(displayValues.tvrageLink).equal(tvrageBaseUrl + show.externals.tvrage);
  });

  describe('runtime', () => {
    test('shows runtime with "min" suffix', () => {
      const runtime = 42;
      const show = makeCorrectShow({ runtime: runtime });
      const { displayRuntime } = useShow(show);
      expect(displayRuntime).equal(`${runtime} min`);
    });
  });

  describe('dates', () => {
    test('show only premiered date there is no "ended" date', () => {
      const show = makeCorrectShow({ ended: null });
      const { displayYears } = useShow(show);
      expect(displayYears.value).equal(
        `${show.premiered.substring(0, 4)}${hairSpace}—${hairSpace}...`,
      );
    });

    test('do not show date if there is no dates', () => {
      const show = makeCorrectShow({ premiered: null, ended: null });
      const { displayYears } = useShow(show);
      expect(displayYears.value).equal('');
    });
  });

  describe('external links', () => {
    test('returns empty strings if there is no "externals" information', () => {
      const show = makeCorrectShow({ externals: null });
      const { imdbLink, tvdbLink, tvrageLink } = useShow(show);
      expect(imdbLink).equal('');
      expect(tvdbLink).equal('');
      expect(tvrageLink).equal('');
    });
    test('returns empty strings if ids are empty', () => {
      const show = makeCorrectShow({ externals: { imdb: null, thetvdb: null, tvrage: null } });
      const { imdbLink, tvdbLink, tvrageLink } = useShow(show);
      expect(imdbLink).equal('');
      expect(tvdbLink).equal('');
      expect(tvrageLink).equal('');
    });
  });

  describe('displayNetwork', () => {
    test('shows the origin of a TV Show', () => {
      const show = makeCorrectShow();
      const { displayNetwork } = useShow(show);
      expect(displayNetwork).equal(`${show.network?.name}, ${show.network?.country?.name}`);
    });
  });
});

describe('minimal data', () => {
  test('', () => {
    const show = makeMinimalShow();
    const displayValues = useShow(show);

    expect(displayValues.displayName).equal(show.name);
    expect(displayValues.displayCoverUrl).equal('');
    expect(displayValues.largeCoverUrl).equal('');
    expect(displayValues.officialSiteUrl).equal('');
    expect(displayValues.displayYears.value).equal('');
    expect(displayValues.displayRuntime).equal('');
    expect(displayValues.displayRating).equal('');
    expect(displayValues.displayPremiered).equal('');
    expect(displayValues.displayEnded).equal('');
    expect(displayValues.displayNetwork).equal('');
    expect(displayValues.displaySummary).equal('');
    expect(displayValues.imdbLink).equal('');
    expect(displayValues.tvdbLink).equal('');
    expect(displayValues.tvrageLink).equal('');
  });
});
