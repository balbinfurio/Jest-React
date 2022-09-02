const randomStrings = require('../index'); //  this is the way to IMPORT

describe('test randomStrings functionality', () => {
  test('test functionality', () => {
    expect(typeof (randomStrings())).toBe('string'); //  test if the function return a string(typeof)
  });
  test('check that it does not exist a city', () => {
    expect(randomStrings()).not.toMatch(/Cordoba/);
  });
});
