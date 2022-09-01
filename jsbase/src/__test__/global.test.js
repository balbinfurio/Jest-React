const text = 'Hello World';
const fruits = ['banana', 'apple', 'kiwi'];

test('must contain a string', () => {
  expect(text).toMatch(/World/);
});

test('do we have an apple?', () => {
  expect(fruits).toContain('apple');
});

test('number greater than', () => {
  expect(10).toBeGreaterThan(9);
});

test('true', () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''));
};

test('test a callback', () => {
  reverseString('Hello', (str) => {
    expect(str).toBe('olleH');
  });
});
