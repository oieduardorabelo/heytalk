/*eslint-disable */

// Expression bodies
var numbers = [1, 2, 3]
// var nums = numbers.map(function(v, i) { return v + i });
var nums = numbers.map((v, i) => v + i);

// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    console.log(v)
});

















// const treeNode = {
//   nodeType: 'leaf',
//   delayHandler () {
//     setTimeout(() => console.log(this.nodeType), 1000);
//   }
// };
// treeNode.delayHandler(); // => leaf














// const treeNode2 = {
//   nodeType: 'leaf2',
//   delayHandler () {
//     setTimeout(function() {
//       console.log(this.nodeType)
//     }, 1000);
//   }
// };
// treeNode2.delayHandler(); // => leaf

//
// Arrows are a function shorthand using the => syntax.
// They are syntactically similar to the related feature
// in C#, Java 8 and CoffeeScript.
// They support both expression and statement bodies.
// Unlike functions, arrows share the same
// lexical this as their surrounding code.
//
