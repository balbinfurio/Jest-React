/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
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

// eslint-disable-next-line arrow-body-style
const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'));
    }
    resolve(str.split('').reverse().join(''));
  });
};

test('test a promise', () => {
  return reverseString2('Hello')
    .then((string) => {
      expect(string).toBe('olleH');
    });
});

test('async/await test', async () => {
  const string = await reverseString2('Hello');
  expect(string).toBe('olleH');
});

beforeAll(() => console.log('Before all tests'));
beforeEach(() => console.log('Before each test'));
afterAll(() => console.log('After all tests'));
afterEach(() => console.log('After each test'));
