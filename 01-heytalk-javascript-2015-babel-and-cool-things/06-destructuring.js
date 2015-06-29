/*eslint-disable */

//
// Destructuring allows binding using pattern matching,
// with support for matching arrays and objects.
// Destructuring is fail-soft, similar to standard
// object lookup foo["bar"], producing undefined values when not found.
//

// list matching
// var [a, b, c] = [1, 2, 3];
// console.log(a, b, c);

// variable swap
// var [c, b, a] = [a, b, c]
// console.log(c, b, a);

// object matching
// binds `op`, `lhs` and `rhs` in scope
// function getASTNode() {
//   return {
//     op: 120,
//     lhs: 'Left Hand',
//     rhs: 'Right Hand'
//   }
// }
// var {op, lhs, rhs} = getASTNode()
// console.log(op, lhs, rhs);

// // Can be used in parameter position
// function Game({ name: x }) {
//   console.log(x);
// }
// Game({ name: 5 })

// // Fail-soft destructuring
// var [fail] = [];
// console.log(fail === undefined);
// fail = 'value'
// console.log(fail);

// // Fail-soft destructuring with defaults
// var [failWithDefault = 1] = [];
// console.log(failWithDefault)
