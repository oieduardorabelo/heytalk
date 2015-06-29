/*eslint-disable */

function print (text) {
  console.log(text);
}

var funcs = [];

for (var i = 0; i < 5; i++) {
  funcs.push(function(){
    return i;
  });
}

var m = funcs[3]();

print(m);











// After the loop terminates, the function-level variable i
// has the value 5, and that's what the inner function 'sees'.

//
// Block-scoped binding constructs.
// let is the new var.
// const is single-assignment with static restrictions,
// prevent use before assignment.
//
