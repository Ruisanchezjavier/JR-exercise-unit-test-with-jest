//  const sum = require('./app')

// test("Test1. Add 20 + 5 to equal 25.", () => {
//     expect(sum(20,5)).toBe(25);
//  });


// import { sum } from './app'

// test('Test1. adds 20 + 5 to equal 25.', () => {
//       expect(sum(20,5)).toBe(25);
// });


const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app')


test("Test1. One euro should be 1.07 dollars.", () => {
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

 
   test("Test2. One dollar should be 146.2616 yen.", () => {
       expect(fromDollarToYen(9)).toBe(1316.3551401869158);
   });

test("Test3. One Yen should be 0.0055.", () => {
     expect(fromYenToPound(55)).toBe(0.30575079872204475);
});
