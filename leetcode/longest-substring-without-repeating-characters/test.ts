import { lengthOfLongestSubstring } from './code';

test('abcabcbb expect to 3', () => {
  const str = 'abcabcbb';

  expect(lengthOfLongestSubstring(str)).toBe(3);
});

test('bbbbb expect to 1', () => {
  const str = 'bbbbb';

  expect(lengthOfLongestSubstring(str)).toBe(1);
});

test('pwwkew expect to 1', () => {
  const str = 'pwwkew';

  expect(lengthOfLongestSubstring(str)).toBe(3);
});
