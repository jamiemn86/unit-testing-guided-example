const { multiply } = require('./../calculator');

describe('Multiply', () => {
  test('Function is called with two positive integers. The value returned should be the result of the multiplication of both values', () => {
    const result = multiply(3, 5);
    expect(result).toBe(15);
  });

  test('Function is called with a negative and a positive integer. The value returned should be a negative number', () => {
    const result = multiply(-3, 4);
    expect(result).toBe(-12);
  });

  test('Function is called with any number and a number 0. The value returned should be 0', () => {
    const result = multiply(0, 4);
    expect(result).toBe(0);
  });
});
