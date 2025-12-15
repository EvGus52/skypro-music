import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Filter from './Filter';
import { mockTracks, createTestStore } from '@/utils/testHelpers';

describe('Filter', () => {
  it('рендерит компонент с заголовком', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Filter tracks={mockTracks} />
      </Provider>,
    );
    expect(screen.getByText('Искать по:')).toBeInTheDocument();
  });

  it('отображает кнопки фильтров', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Filter tracks={mockTracks} />
      </Provider>,
    );
    expect(screen.getByText('исполнителю')).toBeInTheDocument();
    expect(screen.getByText('году выпуска')).toBeInTheDocument();
    expect(screen.getByText('жанру')).toBeInTheDocument();
  });

  it('открывает выпадающий список при клике на фильтр', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Filter tracks={mockTracks} />
      </Provider>,
    );

    const authorButton = screen.getByText('исполнителю');
    fireEvent.click(authorButton);

    expect(screen.getByText('Author 1')).toBeInTheDocument();
    expect(screen.getByText('Author 2')).toBeInTheDocument();
  });

  it('отображает активные элементы фильтра', () => {
    const store = createTestStore();
    store.dispatch({
      type: 'tracks/setFilterAuthors',
      payload: 'Author 1',
    });

    render(
      <Provider store={store}>
        <Filter tracks={mockTracks} />
      </Provider>,
    );

    const authorButton = screen.getByText('исполнителю');
    fireEvent.click(authorButton);

    const activeItem = screen.getByText('Author 1');
    expect(activeItem).toHaveClass('active');
  });
});
