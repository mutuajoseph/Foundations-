// JS OBJECTS 

const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
    hobbies: ["reading", "traveling", "coding"],
    // A method 
    greet: function() {
        console.log("Hello, my name is " + this.name + ". I am a " + this.occupation + ".");
    },

    // nested object
    marks: {
        math: 90,
        english: 80,
        kiswahili: 100
    }
}

console.log(person)

// Accessing object properties 
// 1 using the dot notation
console.log("Name: " + person.name);
console.log("Age: " + person.age);
console.log("Occupation: " + person.occupation);
console.log("Hobbies: " + person.hobbies.join(", "));

// 2 using the bracket notation
console.log("Name: " + person["name"]);
console.log("Age: " + person["age"]);
console.log("Occupation: " + person["occupation"]);
console.log("Hobbies: " + person["hobbies"].join(", "));

// Modifying object properties

person.age = 31;
person.name = "Joseph Doe";
person.hobbies.push("gaming")

console.log(person);

// Adding new properties to an object

person.country = "Kenya";
person.isMarried = false;

console.log(person);

// Deleting properties from an object

delete person.isMarried;

console.log(person);

// Access functions within an object - Accessing methods
person.greet();

// Access values in a nested object 
console.log(person.marks.english)