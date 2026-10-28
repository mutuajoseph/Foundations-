// CONSTA VARIAble 

const studentName = "John Doe"

console.log(studentName)

// studentName = "Mark Doe"

// Template literal = CONCATINATION 
let numOne = 10
let numTwo = 30

let total = numOne + numTwo
console.log("Total: " + total) // string concatination

console.log(`Total: ${total}`) // Template literals

// Default Parameters 

function AddNumbers(numOne = 20, numTwo = 90) {
    let total = numOne + numTwo
    return total
}

let result = AddNumbers()
console.log(result)

// arrow functions. 

const addtwoNumbers = (numOne = 20, numTwo = 90) => {
    let total = numOne + numTwo
    return total
}

console.log(addtwoNumbers())


// Destructuring 

const schoolData = {
    teachers: {
        noOfTeachers: 20,
        namesOfTeachers: ["John", "Joe", "Mark", "Linda"]
    },
    students: {
        noOfStudents: 10,
        nameOfStudents: ["Alex", "Joy"]
    },
    administration: {}
}

console.log(schoolData.teachers.namesOfTeachers) 

let {teachers, students} = schoolData
let {noOfTeachers, namesOfTeachers} = teachers
let {noOfStudents, nameOfStudents} = students

console.log(noOfStudents, noOfTeachers)