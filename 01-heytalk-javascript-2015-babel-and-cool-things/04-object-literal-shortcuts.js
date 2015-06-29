/*eslint-disable */

//
// Object literals are extended to support shorthand for assignments,
// defining methods. Together, these also bring object literals and
// class declarations closer together, and let object-based design
// benefit from some of the same conveniences.
//
const furColor = 'MyColor',
      legs = 4;

const mouse = {
  furColor,
  legs,
  tail: 'long, skinny',
  describe() {
    return `A mouse with ${this.furColor} fur,
      ${this.legs} legs, and a ${this.tail} tail.`;
  }
};

console.log(mouse.describe());
