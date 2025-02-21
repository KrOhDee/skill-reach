import { describe, test, expect } from '@jest/globals';
import {
  formatTo12Hour,
  getAmPm,
  getOrdinalSuffix,
  monthNames,
} from './dateUtils';

describe('FormatTo12Hour', () => {
  test('converts 24-Hour format to 12-hour format', () => {
    expect(formatTo12Hour(0)).toBe(12);
    expect(formatTo12Hour(12)).toBe(12);
    expect(formatTo12Hour(13)).toBe(1);
    expect(formatTo12Hour(23)).toBe(11);
  });
});

describe('getAmPm', () => {
  test('returns correct AM/PM', () => {
    expect(getAmPm(0)).toBe('AM');
    expect(getAmPm(11)).toBe('AM');
    expect(getAmPm(12)).toBe('PM');
    expect(getAmPm(23)).toBe('PM');
  });
});

describe('getOrdinalSuffix', () => {
  test('returns correct suffix', () => {
    expect(getOrdinalSuffix(1)).toBe('st');
    expect(getOrdinalSuffix(3)).toBe('rd');
    expect(getOrdinalSuffix(8)).toBe('th');
    expect(getOrdinalSuffix(12)).toBe('th');
    expect(getOrdinalSuffix(13)).toBe('th');
    expect(getOrdinalSuffix(21)).toBe('st');
    expect(getOrdinalSuffix(22)).toBe('nd');
    expect(getOrdinalSuffix(23)).toBe('rd');
  });
});

describe('monthNames', () => {
  test('returns correct month', () => {
    expect(monthNames[0]).toBe('January');
    expect(monthNames[11]).toBe('December');
  });
});
