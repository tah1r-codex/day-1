// Create an object directly
/*const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: function(a, b) { return a * b; }, // regular function syntax
  divide: function(a, b) { 
    if (b === 0) return "Cannot divide by zero";
    return a / b; 
  }
};

// Use the functions
console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(10, 4));// 6
console.log(calculator.multiply(6, 7)); // 42
console.log(calculator.divide(20, 4));  // 5
console.log(calculator.divide(5, 0));   // "Cannot divide by zero"
*/

let user={add: (a,b)=>a+b}
console.log(user.add(5,3))