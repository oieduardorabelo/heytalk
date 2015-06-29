/*eslint-disable */

//
// Template strings provide syntactic sugar
// for constructing strings.
// This is similar to string interpolation
// features in Ruby, Python and more
//

// ES5 interpolation
var name = "John"
console.log("Hello " + name)

// ES5 multi line
var multiLine = "Hi\n" +
                "This is\n" +
                "Multi Line\n" +
                "Text";
console.log(multiLine);

// ES5 complex string construction
var paramA = "foo";
var paramB = "bar";
var URL = function(str) {
  // do something
  return str + ':8000'
}
var API = URL('http://heyday');
console.log(API + '/' + paramA + '/' + paramB)










// ES6 interpolation
// var name = "Will"
// console.log(`Hello ${name}`);

// ES6 multi line
// var multiLine = `Hi
// This is
// Multi Line
// Text`;
// console.log(multiLine);

// ES6 complex string construction
// var paramA = "foo";
// var paramB = "bar";
// var URL = function(str) {
//   // do something
//   return `${str}:8000`
// }
// var API = URL('http://heyday');
// console.log(`${API}/${paramA}/${paramB}`)
