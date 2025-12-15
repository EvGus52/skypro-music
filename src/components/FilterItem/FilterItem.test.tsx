import { render, screen, fireEvent } from '@testing-library/react';
import FilterItem from './FilterItem';

describe('FilterItem', () => {
  const mockItems = ['Item 1', 'Item 2', 'Item 3'];
  const mockOnToggle = jest.fn();
  const mockOnItemClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('рендерит кнопку с заголовком', () => {
    render(
      <FilterItem
        title="тест"
        isOpen={false}
        items={mockItems}
        onToggle={mockOnToggle}
        activeItems={[]}
        filterType="test"
        onItemClick={mockOnItemClick}
      />,
    );

    expect(screen.getByText('тест')).toBeInTheDocument();
  });

  it('вызывает onToggle при клике на кнопку', () => {
    render(
      <FilterItem
        title="тест"
        isOpen={false}
        items={mockItems}
        onToggle={mockOnToggle}
        activeItems={[]}
        filterType="test"
        onItemClick={mockOnItemClick}
      />,
    );

    const button = screen.getByText('тест');
    fireEvent.click(button);

    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });

  it('отображает выпадающий список когда isOpen = true', () => {
    render(
      <FilterItem
        title="тест"
        isOpen={true}
        items={mockItems}
        onToggle={mockOnToggle}
        activeItems={[]}
        filterType="test"
        onItemClick={mockOnItemClick}
      />,
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('вызывает onItemClick при клике на элемент', () => {
    render(
      <FilterItem
        title="тест"
        isOpen={true}
        items={mockItems}
        onToggle={mockOnToggle}
        activeItems={[]}
        filterType="test"
        onItemClick={mockOnItemClick}
      />,
    );

    const item = screen.getByText('Item 1');
    fireEvent.click(item);

    expect(mockOnItemClick).toHaveBeenCalledWith('test', 'Item 1');
  });

  it('отображает бейдж с количеством активных элементов', () => {
    render(
      <FilterItem
        title="тест"
        isOpen={false}
        items={mockItems}
        onToggle={mockOnToggle}
        activeItems={['Item 1', 'Item 2']}
        filterType="test"
        onItemClick={mockOnItemClick}
      />,
    );

    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
