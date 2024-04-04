// Tests for equality and inequality with strings
let fruit: string = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

console.log("Is fruit == 'orange'? I predict False.");
console.log(fruit == 'orange');

// Tests using the lower case function
let color: string = 'BLUE';
console.log("Is color.toLowerCase() == 'blue'? I predict True.");
console.log(color.toLowerCase() == 'blue');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 10;
let num2: number = 20;
console.log("Is num1 < num2? I predict True.");
console.log(num1 < num2);

console.log("Is num1 === num2? I predict False.");
console.log(num1 === num2);

console.log("Is num1 >= num2? I predict False.");
console.log(num1 >= num2);

console.log("Is num1 != num2? I predict True.");
console.log(num1 != num2);

// Tests using "and" and "or" operators
let x: number = 5;
let y: number = 10;
console.log("Is x > 3 && y < 20? I predict True.");
console.log(x > 3 && y < 20);

console.log("Is x > 8 || y < 5? I predict False.");
console.log(x > 8 || y < 5);

// Test whether an item is in an array
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Is 3 in numbers array? I predict True.");
console.log(numbers.includes(3));

// Test whether an item is not in an array
console.log("Is 7 not in numbers array? I predict True.");
console.log(!numbers.includes(7));
