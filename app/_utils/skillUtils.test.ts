import { describe, test, expect } from '@jest/globals';
import { calculateProgress, calculateSkillLevel } from './skillUtils';

describe('calculateProgress', () => {
  test('returns correct progress percentage', () => {
    expect(calculateProgress(10, 10)).toBe(100);
    expect(calculateProgress(5, 10)).toBe(50);
    expect(calculateProgress(0, 10)).toBe(0);
    expect(calculateProgress(7, 14)).toBe(50);
    expect(calculateProgress(15, 10)).toBe(100);
    expect(calculateProgress(100, 10)).toBe(100);
  });
});

describe('calculateSkillLevel', () => {
  test('returns correct skill level based on logged hours', () => {
    expect(calculateSkillLevel(0, 10)).toBe(1);
    expect(calculateSkillLevel(10, 10)).toBe(50);
    expect(calculateSkillLevel(5, 10)).toBe(36);
    expect(calculateSkillLevel(20, 10)).toBe(50);
  });
});
