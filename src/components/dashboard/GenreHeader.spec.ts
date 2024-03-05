import { test, expect, describe } from 'vitest';
import { mount } from '@vue/test-utils';
import GenreHeader from './GenreHeader.vue';

const genre = 'Comedy';
const showsCount = 7;

describe('GenreHeader', () => {
  test('renders the genre title and count of shows', () => {
    const wrapper = mount(GenreHeader, {
      props: {
        genre,
        showsCount,
        maxShowsCount: 100,
        progress: 0,
      },
    });

    const text = wrapper.text();
    expect(text).contain(genre);
    expect(text).contain(showsCount);
  });

  describe('scrolling progress', () => {
    test('place scrollbar in the beginning when progress is 0', () => {
      const wrapper = mount(GenreHeader, {
        props: {
          genre,
          showsCount,
          maxShowsCount: 100,
          progress: 0,
        },
      });

      const progressBar = wrapper.find('[data-testid="progressBar"]');
      const cssProgress = (progressBar.element as HTMLElement).style.getPropertyValue('--progress');
      expect(cssProgress).equal('0');
    });

    // TODO: add tests for a scrolled situation (we have to get clientWidth from elements)
  });
});
