describe('The function sum() used in the Calculator', () => {
  it('should be a function', () => {
    expect(typeof sum).toBe('function');
  });

  it('should return 0 for an empty array', () => {
    expect(sum([])).toBe(0);
  });

  it('should throw an error if no parameter is provided', () => {
    expect(() => {
      sum();
    }).toThrow(new Error('No parameter provided'));
  });

  it('should return a number', () => {
    expect(typeof sum([1, 1])).toBe('number');
  });

  it('should return the correct value', () => {
    // if array with one element is passed, sum should be equal to  that element
    expect(sum([1])).toBe(1);
    expect(sum([1, 2])).toEqual(3);
    expect(sum([4, 5, 6])).toBe(15);
    expect(sum([0, -2])).toBe(-2);
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });
});


//make tests for avg function.
describe('The function avg() used in the Calculator', () => {
  it('should be a function', () => {
    expect(typeof avg).toBe('function');
  });

  it('should return 0 for an empty array', () => {
    expect(avg([])).toBe(0);
  });

  it('should throw an error if no parameter is provided', () => {
    expect(() => {
      avg();
    }).toThrow(new Error('No parameter provided'));
  });

  it('should return a number', () => {
    expect(typeof avg([1, 1])).toBe('number');
  });

  it('should return the correct value', () => {
    // if array with one element is passed, sum should be equal to  that element
    expect(avg([1])).toBe(1);
    expect(avg([1, 3])).toEqual(2);
    expect(avg([4, 5, 6])).toBe(5);
    expect(avg([10,30])).toBe(20);
    expect(avg([1, 2, 3, 4, 5])).toBe(3);
  });
});
