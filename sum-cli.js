// ## Problem:
// Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them.If any argument is not a whole number, skip it.Do support negative numbers though.

// PSEUDOCODE
// Get command line input
// google how to :shrugs
// slice process.argv? Why??
// return input
const getCLI = function() {
  return process.argv.slice(2);
};

// Sum the input
// Create function that accepts one parameter(input)
// declare variable(sum)
// Loop through input
// If iteration is whole number add to(num)
// after the loop
// Return(num)
const sumWholeNumbers = function(inputArray) {
  let sum = 0;
  for (let num of inputArray) {
    // convert num to a Number. For example command line arguments are strings
    num = Number(num);
    if (num % 1 === 0) { // this means num is a number and an Integer
    // Other ideas for doing the above check are:
      // 1. if (isInteger(num)) { - this is very readable
      // 2. if (Math.floor(num) === num) { - this feels hacky, but cewl ;) I will not do this.
      sum += num;
    }
  }
  return sum;
};

// Test for sumWholeNumbers
// sumWholeNumbers([2, 4, 6, 10]) => 22


// Print the sum to console
const input = getCLI();
console.log(sumWholeNumbers(input));