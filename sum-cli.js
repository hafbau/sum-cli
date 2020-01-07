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
    num = Number(num);
    if (num % 1 === 0) { // this means num is a number and Integer
      sum += num;
    }
  }
  return sum;
};

// sumWholeNumbers([2, 4, 6, 10]) => 22


// Print the sum to console
const input = getCLI();
console.log(sumWholeNumbers(input));