import { render } from '@testing-library/react';
import TrackSkeletonItem from './TrackSkeletonItem';

describe('TrackSkeletonItem', () => {
  it('рендерит структуру скелетона трека', () => {
    const { container } = render(<TrackSkeletonItem />);

    const playlistItem = container.querySelector('.playlist__item');
    expect(playlistItem).toBeInTheDocument();
  });

  it('содержит все необходимые секции скелетона', () => {
    const { container } = render(<TrackSkeletonItem />);

    const titleImage = container.querySelector('.track__titleImage');
    const titleText = container.querySelector('.track__title-text');
    const author = container.querySelector('.track__author');
    const album = container.querySelector('.track__album');
    const time = container.querySelector('.track__time');

    expect(titleImage).toBeInTheDocument();
    expect(titleText).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(album).toBeInTheDocument();
    expect(time).toBeInTheDocument();
  });
});
