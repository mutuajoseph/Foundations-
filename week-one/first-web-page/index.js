console.log("Hello, Joseph! Welcome to your first web page.");

// Variables - They are used to store data values. In JavaScript, we use the var, let, and const keywords to declare variables.
// Syntax = keyword variableName = value; 
// keywords: var, let, const

var name = "Joseph Wambua"
console.log(name); // printing an output to the console

let age = 35 
let country = "Kenya" // constant variable cannot be reassigned a new value

console.log(age);
console.log(country);

// Variable assignment  =
let student; 

console.log(student); // undefined because it has not been assigned a value yet
student = "Titus Njenga";
console.log(student); // now it has been assigned a value and will print it to the console

// change the value of a variable
console.log(country);
country = "Uganda"; // reassigning a new value to the variable country
console.log(country); // now it will print the new value of the variable country


// Rules of naming variables
// 1. Variable names can only contain letters, numbers, underscores, and dollar signs. They cannot start with a number.
// 2. Variable names are case-sensitive. For example, myVariable and myvariable are two different variables.
// 3. Variable names cannot be reserved keywords in JavaScript. For example, you cannot use var, let, const, function, etc. as variable names.
// 4. Variable names should be descriptive and meaningful. For example, use studentName instead of s or name1.

let studentName = "Titus Njenga"; // valid variable name


// DAY TWO JS 

// Data Types - They are used to represent different types of data in JavaScript. 
// The most common data types are:
// 1. String - used to represent text. For example: let name = "Joseph";
// 2. Number - used to represent numeric values. For example: let age = 35;
// 3. Boolean - used to represent true/false values. For example: let isStudent = true;
// 4. Object - used to represent complex data structures. For example: let student = { name: "Joseph", age: 35 };
// 5. Array - used to represent a list of values. For example: let colors = ["red", "green", "blue"];
// 6. Undefined - used to represent a variable that has not been assigned a value. For example: let student; // undefined
// 7. Null - used to represent a variable that has been explicitly set to have no value. For example: let student = null;

// PRIMITIVE DATA TYPES - they are immutable(they cannot change value) and are passed by value. They include: String, Number, Boolean, Undefined, Null, Symbol, BigInt
// Non-Primitive Data Types - they are mutable(they can change value) and are passed by reference. They include: Object, Array, Function

// EXAMPLES OF PRIMITIVE DATA TYPES
let firstName = "Joseph"; // String
let age1 = 35; // Number
let isStudent = true; // Boolean
let student1; // Undefined
let student2 = null; // Null

// EXAMPLES OF NON-PRIMITIVE DATA TYPES
let student3 = { name: "Joseph", age: 35 }; // Object
let colors = ["red", "green", "blue"]; // Array
let greet = function() { console.log("Hello, Joseph!"); }; // Function


// OPERATORS - They are used to perform operations on variables and values(OPERANDS).
// 1. Arithmetic Operators - They are used to perform arithmetic operations on numbers. They include: +, -, *, /, %, ++, --, **,

let numberOne = 10;
let numberTwo = 5;

// Addition (+)
let sum = numberOne + numberTwo;    
console.log("The sum of " + numberOne + " and " + numberTwo + " is: " + sum);

// Subtraction (-)
let difference = numberOne - numberTwo;
console.log("The difference of " + numberOne + " and " + numberTwo + " is: " + difference);

// Multiplication (*)
let product = numberOne * numberTwo;
console.log("The product of " + numberOne + " and " + numberTwo + " is: " + product);

// Division (/)
let quotient = numberOne / numberTwo;
console.log("The quotient of " + numberOne + " and " + numberTwo + " is: " + quotient);

// Modulus (%) - The modulus operator returns the remainder of a division operation.
let remainder = numberOne % numberTwo;
console.log("The remainder of " + numberOne + " and " + numberTwo + " is: " + remainder);

// Exponentiation (**) - The exponentiation operator raises the first operand to the power of the second operand.
let exponentiation = numberOne ** numberTwo;
console.log("The exponentiation of " + numberOne + " and " + numberTwo + " is: " + exponentiation);

// Increment (++) - The increment operator increases the value of a variable by 1.
let increment = numberOne++;
console.log("The increment of " + numberOne + " is: " + increment);

// Decrement (--) - The decrement operator decreases the value of a variable by 1.
let decrement = numberOne--;
console.log("The decrement of " + numberOne + " is: " + decrement);

// Assignment Operators - They are used to assign values to variables. They include: =, +=, -=, *=, /=, %=, **=

let x = 10;
let y = 5;

// Assignment (=)
console.log("The value of x is: " + x); // prints 10
x = y; // x is now equal to y  
console.log("The value of x is now: " + x); // prints 5

// Addition Assignment (+=) - The addition assignment operator adds the value of the right operand to the left operand and assigns the result to the left operand.
x += y; // x is now equal to x + y
console.log("The value of x after addition assignment is: " + x); // prints 10

// Subtraction Assignment (-=) - The subtraction assignment operator subtracts the value of the right operand from the left operand and assigns the result to the left operand.
x -= y; // x is now equal to x - y
console.log("The value of x after subtraction assignment is: " + x); // prints 5

// Multiplication Assignment (*=) - The multiplication assignment operator multiplies the left operand by the right operand and assigns the result to the left operand.
x *= y; // x is now equal to x * y
console.log("The value of x after multiplication assignment is: " + x); // prints 25

// Division Assignment (/=) - The division assignment operator divides the left operand by the right operand and assigns the result to the left operand.
x /= y; // x is now equal to x / y
console.log("The value of x after division assignment is: " + x); // prints 5

// Modulus Assignment (%=) - The modulus assignment operator takes the modulus of the left operand by the right operand and assigns the result to the left operand.
x %= y; // x is now equal to x % y
console.log("The value of x after modulus assignment is: " + x); // prints 0

// Exponentiation Assignment (**=) - The exponentiation assignment operator raises the left operand to the power of the right operand and assigns the result to the left operand.
x **= y; // x is now equal to x ** y
console.log("The value of x after exponentiation assignment is: " + x); // prints 0

// Comparison Operators - They are used to compare two values and return a boolean value(true or false). They include: ==, ===, !=, !==, >, <, >=, <=

// Equal to (==) - The equal to operator compares two values for equality and returns true
//  if they are equal and false if they are not equal.

let a = 10;
let b = "10";
console.log("Is a equal to b? " + (a == b)); // prints true because the values are equal but the data types are different

// Strict Equal to (===) - The strict equal to operator compares two values for equality 
// and returns true if they are equal and of the same data type, and false if they are not.
console.log("Is a strictly equal to b? " + (a === b)); // prints false because the values are equal but the data types are different

// Not Equal to (!=) - The not equal to operator compares two values for inequality and 
// returns true if they are not equal and false if they are equal.
console.log("Is a not equal to b? " + (a != b)); // prints false because the values are equal

// Strict Not Equal to (!==) - The strict not equal to operator compares two values for inequality 
// and returns true if they are not equal or of different data types, and false if they are equal and of the same data type.
console.log("Is a strictly not equal to b? " + (a !== b)); // prints true because the values are equal but the data types are different

// Greater than (>) - The greater than operator compares two values and returns true 
// if the left operand is greater than the right operand, and false if it is not.
console.log("Is a greater than b? " + (a > b)); // prints false because 10 is not greater than "10"

// Less than (<) - The less than operator compares two values and returns true 
// if the left operand is less than the right operand, and false if it is not.
console.log("Is a less than b? " + (a < b)); // prints false because 10 is not less than "10"

// Greater than or equal to (>=) - The greater than or equal to operator compares two values 
// and returns true if the left operand is greater than or equal to the right operand, and false if it is not.
console.log("Is a greater than or equal to b? " + (a >= b)); // prints true because 10 is equal to "10"

// Less than or equal to (<=) - The less than or equal to operator compares two values 
// and returns true if the left operand is less than or equal to the right operand, and false if it is not.
console.log("Is a less than or equal to b? " + (a <= b)); // prints true because 10 is equal to "10

