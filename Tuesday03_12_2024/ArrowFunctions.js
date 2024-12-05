// Syntax: A shorthand way to write functions.
// Features:
// Concise syntax.
// Automatically binds this to the surrounding scope.
// Can't be used as constructors.
// Implicit return if there's only one expression.
// Examples:

// Traditional function
const square = function(x) {
    return x * x;
  };
  
  // Arrow function
  const squareArrow = x => x * x;
  
  console.log(square(3)); // 9
  console.log(squareArrow(3)); // 9
  