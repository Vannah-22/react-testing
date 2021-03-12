import returnsFive from './Five';

// write a testing group //
    // describe('name of the testing group', (someFunction) => {
    // Test('name of the test', (someFunction))
    // })
describe('returnsFive()', () => {
  test ('should return the number five', () => {
    // inside the expect object: the function call we want to test
    // on the right, inside the method toEqual we provide the correct value
    expect(returnsFive()).toEqual(5);
  })
})