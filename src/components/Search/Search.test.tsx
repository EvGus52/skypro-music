import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Search from './Search';
import { createTestStore } from '@/utils/testHelpers';

describe('Search', () => {
  it('рендерит инпут поиска', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );

    const input = screen.getByPlaceholderText('Поиск');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'search');
  });

  it('обновляет значение при вводе текста', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );

    const input = screen.getByPlaceholderText('Поиск') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test query' } });

    expect(input.value).toBe('test query');
  });

  it('синхронизируется с Redux state', () => {
    const store = createTestStore();
    store.dispatch({
      type: 'tracks/setSearchQuery',
      payload: 'rock',
    });

    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );

    const input = screen.getByPlaceholderText('Поиск') as HTMLInputElement;
    expect(input.value).toBe('rock');
  });
});
