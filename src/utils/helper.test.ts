import { getUniqueValuesByKey, formatTime, getTimePanel } from './helper';
import { createMockTrack } from './testHelpers';

describe('getUniqueValuesByKey', () => {
  it('возвращает уникальные значения для строкового поля', () => {
    const tracks = [
      createMockTrack(1, 'Track 1', 'Author 1', '2020-01-01', ['Rock']),
      createMockTrack(2, 'Track 2', 'Author 2', '2021-01-01', ['Pop']),
      createMockTrack(3, 'Track 3', 'Author 1', '2022-01-01', ['Jazz']),
    ];
    const result = getUniqueValuesByKey(tracks, 'author');
    expect(result).toHaveLength(2);
    expect(result).toContain('Author 1');
    expect(result).toContain('Author 2');
  });

  it('возвращает уникальные значения для массива', () => {
    const tracks = [
      createMockTrack(1, 'Track 1', 'Author 1', '2020-01-01', [
        'Rock',
        'Metal',
      ]),
      createMockTrack(2, 'Track 2', 'Author 2', '2021-01-01', ['Pop', 'Rock']),
    ];
    const result = getUniqueValuesByKey(tracks, 'genre');
    expect(result).toHaveLength(3);
    expect(result).toContain('Rock');
    expect(result).toContain('Metal');
    expect(result).toContain('Pop');
  });

  it('возвращает пустой массив для пустого входного массива', () => {
    expect(getUniqueValuesByKey([], 'author')).toEqual([]);
  });
});

describe('formatTime', () => {
  it('форматирует время корректно', () => {
    expect(formatTime(0)).toBe('0:00');
    expect(formatTime(35)).toBe('0:35');
    expect(formatTime(61)).toBe('1:01');
    expect(formatTime(125)).toBe('2:05');
  });
});

describe('getTimePanel', () => {
  it('возвращает форматированное время', () => {
    expect(getTimePanel(125, 300)).toBe('2:05 / 5:00');
    expect(getTimePanel(0, 180)).toBe('0:00 / 3:00');
  });

  it('возвращает undefined, если totalTime не указан', () => {
    expect(getTimePanel(125, undefined)).toBeUndefined();
  });
});
