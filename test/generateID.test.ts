import { generateID } from '../src/utils/generateID';

test('generate prefixed unique ID', () => {
  expect(generateID('list')).toBe('list-1');
});
