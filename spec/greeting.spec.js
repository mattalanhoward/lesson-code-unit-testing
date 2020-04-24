describe('The function greeting', () => {
  // Describes the group of tests
  it('should greet all Ironhackers', () => {
    //  Describes the test unit itself

    //  Test assertion. Here the function is called with test parameters and expected result is specified `toEqual`
    expect(greeting()).toEqual('Hello Ironhackers!');
    //  Method `.toEqual` is called a "matcher" and is used to check the returned result when calling a function
  });
});
