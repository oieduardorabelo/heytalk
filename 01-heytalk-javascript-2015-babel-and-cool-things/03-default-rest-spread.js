/*eslint-disable */

// default parameter
// y is 12 if not passed (or passed as undefined)
function HeyDefault(x, y=12) {
  return x + y;
}
console.log(HeyDefault(3) == 15)

// rest parameter
// Turn an array into consecutive arguments in a function call.
// replace for arguments
function HeyRest(x, ...y) {
  // y is an Array
  return x * y.length;
}
console.log(HeyRest(3, "hello", true) == 6)

// spread parameter
// Pass each elem of array as argument
// Remember .apply()?
function HeySpread(x, y, z) {
  return x + y + z;
}
console.log(HeySpread(...[1,2,3]) == 6)







// spread parameter
// better push
// Array.prototype.push.apply(arr1, arr2);
var ArrNoSpread = [];
ArrNoSpread.push([1,2,3]);
var ArrWithSpread = [];
ArrWithSpread.push(...[1,2,3]);

console.log(ArrNoSpread);
console.log(ArrWithSpread);
