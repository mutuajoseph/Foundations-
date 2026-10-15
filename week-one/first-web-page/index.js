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