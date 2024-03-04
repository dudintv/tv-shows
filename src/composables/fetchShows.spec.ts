import { test, expect, describe } from 'vitest';
import { useFetchShows } from './fetchShows';
const { arrangeShowsByGenre } = useFetchShows();

const show1 = {
  id: 1,
  name: 'First TV show',
  genres: ['comedy', 'drama', 'action'],
};
const show2 = {
  id: 2,
  name: 'Second TV show',
  genres: ['comedy'],
};
const show3 = {
  id: 3,
  name: 'Third TV show',
  genres: ['comedy', 'drama'],
};
const shows = [show1, show2, show3];
const arrangedShowsByGenre = {
  comedy: [show1, show2, show3],
  drama: [show1, show3],
  action: [show1],
};

const showWithoutGenre = {
  id: 3,
  name: 'No genre TV show',
  genres: null,
};
const showWithEmptyGenreName = {
  id: 4,
  name: 'A TV show',
  genres: [''],
};

describe('arrangeShowsByGenre function', () => {
  test('arranges shows by genre', () => {
    const showsByGenre = arrangeShowsByGenre(structuredClone(shows));
    expect(showsByGenre).toMatchObject(arrangedShowsByGenre);
  });

  test('normalizes genre names', () => {
    const show = { ...structuredClone(show1), genres: ['Comedy', 'drama'] };
    const showsByGenre = arrangeShowsByGenre([show]);
    expect(showsByGenre).toMatchObject({ comedy: [show], drama: [show] });
  });

  describe('no shows', () => {
    test('makes empty object in case ', () => {
      const showsByGenre = arrangeShowsByGenre([]);
      expect(showsByGenre).toMatchObject({});
    });
  });

  describe('with a no-genre show', () => {
    test('adds the no-genre show to "Other" genre', () => {
      const showsByGenre = arrangeShowsByGenre([...structuredClone(shows), showWithoutGenre]);
      expect(showsByGenre).toMatchObject({ ...arrangedShowsByGenre, other: [showWithoutGenre] });
    });
  });

  describe('empty genre name', () => {
    describe('only empty genre name', () => {
      test('add the show to the "other" genre', () => {
        const showsByGenre = arrangeShowsByGenre([showWithEmptyGenreName]);
        expect(showsByGenre).toMatchObject({ other: [showWithEmptyGenreName] });
      });
    });

    describe('empty genre along normal ones', () => {
      test('do not add the show to the "other" genre', () => {
        const showWithNormalAndEmptyGenreNames = structuredClone(showWithEmptyGenreName);
        showWithNormalAndEmptyGenreNames.genres.push('drama');
        const showsByGenre = arrangeShowsByGenre([showWithNormalAndEmptyGenreNames]);
        expect(showsByGenre).toMatchObject({ drama: [showWithNormalAndEmptyGenreNames] });
      });
    });
  });
});
