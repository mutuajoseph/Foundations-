// Given a number, write a JavaScript program  that calculates the total of the two numbers
// and checks if the total is even or odd. use functions 

// Declare a function.
function calculateTotal(num1, num2) {
    let total = num1 +  num2; 
    return total;
}

function isEvenOrOdd(num) {
    if (num % 2 === 0){ 
        console.log(num + " is even.");
    } else {
        console.log(num + " is odd.");
    }
}

// How do you call a declared function? 
// You can call a declared function by using its name followed by parentheses.
let result = calculateTotal(5, 10);
console.log("The total is: " + result);

isEvenOrOdd(result); 



// Given five subjects, write a JavaScript program to calculate the average marks and 
// grade of a student based on the following criteria:
// Average >= 90: Grade A
// Average >= 80 and < 90: Grade B
// Average >= 70 and < 80: Grade C
// Average >= 60 and < 70: Grade D
// Average < 60: Grade F

function calculateAverage(marks) {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return total / marks.length; //average score
}

function determineGrade(average) {
    switch (true) {
        case (average >= 90):
            return "A";
        case (average >= 80 && average < 90):
            return "B";
        case (average >= 70 && average < 80):
            return "C";
        case (average >= 60 && average < 70):
            return "D";
        default:
            return "F";
        }
}

let marks = [85, 92, 78, 88, 76];
let average = calculateAverage(marks);
let grade = determineGrade(average);

console.log("Average Marks: " + average);
console.log("Grade: " + grade);