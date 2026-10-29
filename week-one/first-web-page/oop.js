// Consider a Student class. Student can have properties like name, age, standard, 
// and so on, and functions like study, play, and do home work.

class Person {
    // initialise our properties 
    constructor(name, age, nationality, occupation) {
        this.name = name;
        this.age = age;
        this.nationality = nationality
        this.occupation = occupation
        this._hobbies = []
    }

    // methods
    
    talk () {
        console.log(`${this.name} is talking`)
    }

    greet() {
        console.log(`${this.name} said hello`)
    }

    sendMoneyAndConfirm() {
        console.log("Entern you bank details")
        
        this.#bankDetails()

        console.log("Sending money.... ")
        console.log("Money sent ")
    }

    #bankDetails(){
        console.log(`Acccount number: ${10000000}`)
        console.log(`Password: ${1111}`)
    }

    // Encapsulation - for use to update the hobbies we need to invoke the methos associated
    setHobbies (hobbies){
        this._hobbies = hobbies
    }

    getHobbies() {
        return this._hobbies
    }
}

class Student extends Person {
    // initialised our class properties - declare all properties expected by this class
    constructor(name , age, nationality, occupation, standard) {
        super(name, age, nationality, occupation)
        this.standard = standard
    }

    // Methods tied to the class representation
    study() {
        console.log(`${this.name} is studying`)
    }

    play() {
        console.log(`${this.name} is playing`)
    }

    doHomework() {
        console.log(`${this.name} is doing their homemowork`)
    }
}

// creating objects out of the initialised class 

let studentOne = new Student("John Doe", 25, "Kenyan", "N/A", "Grade B")
let studentTwo = new Student("Mark Doe", 30, "Masters Degree" )
console.log(studentOne)
console.log( typeof studentTwo)
studentOne.talk()
studentOne.greet()

// Access methods present in the object 
studentOne.study()
studentTwo.doHomework()
console.log(studentOne.age)
studentTwo.sendMoneyAndConfirm()



// PRINCIPLES OF OOP 

// 1. Inheritance  - Inheritance makes all properties and methods available to a child class. 
// This allows us to reuse common logic and to model real-world relationships
// 2. Abstraction - 


// 3. Polymorphism 
// 4. Encapsulation 

studentOne.setHobbies(["Swimming", "Reading", "Painting"])

let result = studentOne.getHobbies()
console.log(result)

