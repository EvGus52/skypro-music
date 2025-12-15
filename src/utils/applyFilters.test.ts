import { applyFilters } from './applyFilters';
import { createMockTrack, createMockState } from './testHelpers';

describe('applyFilters', () => {
  it('возвращает исходный плейлист без фильтров', () => {
    const tracks = [
      createMockTrack(1, 'Track 1', 'Author 1', '2020-01-01', ['Rock']),
      createMockTrack(2, 'Track 2', 'Author 2', '2021-01-01', ['Pop']),
    ];
    expect(applyFilters(createMockState(tracks))).toEqual(tracks);
  });

  it('фильтрует по поисковому запросу (>= 3 символов)', () => {
    const tracks = [
      createMockTrack(1, 'Rock Song', 'Author 1', '2020-01-01', ['Rock']),
      createMockTrack(2, 'Pop Song', 'Author 2', '2021-01-01', ['Pop']),
    ];
    const result = applyFilters(
      createMockState(tracks, { searchQuery: 'rock' }),
    );
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Rock Song');
  });

  it('не фильтрует при запросе < 3 символов', () => {
    const tracks = [
      createMockTrack(1, 'Rock Song', 'Author 1', '2020-01-01', ['Rock']),
    ];
    expect(
      applyFilters(createMockState(tracks, { searchQuery: 'ro' })),
    ).toHaveLength(1);
  });

  it('фильтрует по авторам', () => {
    const tracks = [
      createMockTrack(1, 'Track 1', 'Author 1', '2020-01-01', ['Rock']),
      createMockTrack(2, 'Track 2', 'Author 2', '2021-01-01', ['Pop']),
    ];
    const result = applyFilters(
      createMockState(tracks, { authors: ['Author 1'] }),
    );
    expect(result).toHaveLength(1);
    expect(result[0].author).toBe('Author 1');
  });

  it('фильтрует по жанрам', () => {
    const tracks = [
      createMockTrack(1, 'Track 1', 'Author 1', '2020-01-01', ['Rock']),
      createMockTrack(2, 'Track 2', 'Author 2', '2021-01-01', ['Pop']),
    ];
    const result = applyFilters(createMockState(tracks, { genres: ['Rock'] }));
    expect(result).toHaveLength(1);
    expect(result[0].genre).toContain('Rock');
  });

  it('сортирует "Сначала новые"', () => {
    const tracks = [
      createMockTrack(1, 'Track 1', 'Author 1', '2020-01-01', ['Rock']),
      createMockTrack(2, 'Track 2', 'Author 2', '2022-01-01', ['Pop']),
    ];
    const result = applyFilters(
      createMockState(tracks, { years: 'Сначала новые' }),
    );
    expect(result[0]._id).toBe(2);
    expect(result[1]._id).toBe(1);
  });

  it('сортирует "Сначала старые"', () => {
    const tracks = [
      createMockTrack(1, 'Track 1', 'Author 1', '2020-01-01', ['Rock']),
      createMockTrack(2, 'Track 2', 'Author 2', '2022-01-01', ['Pop']),
    ];
    const result = applyFilters(
      createMockState(tracks, { years: 'Сначала старые' }),
    );
    expect(result[0]._id).toBe(1);
    expect(result[1]._id).toBe(2);
  });

  it('применяет все фильтры вместе', () => {
    const tracks = [
      createMockTrack(1, 'Rock Song', 'Author 1', '2020-01-01', ['Rock']),
      createMockTrack(2, 'Rock Track', 'Author 1', '2022-01-01', ['Rock']),
      createMockTrack(3, 'Pop Song', 'Author 2', '2021-01-01', ['Pop']),
    ];
    const result = applyFilters(
      createMockState(tracks, {
        searchQuery: 'rock',
        authors: ['Author 1'],
        genres: ['Rock'],
        years: 'Сначала новые',
      }),
    );
    expect(result).toHaveLength(2);
    expect(result[0]._id).toBe(2);
  });

  it('не мутирует исходный массив', () => {
    const tracks = [
      createMockTrack(1, 'Track 1', 'Author 1', '2020-01-01', ['Rock']),
    ];
    const original = [...tracks];
    applyFilters(createMockState(tracks, { authors: ['Author 1'] }));
    expect(tracks).toEqual(original);
  });
});
