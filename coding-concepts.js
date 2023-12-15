// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

// const cohort = "India 2023"
// console.log(cohort.split(" "))

// a) Your answer: it will be turned into an array [ India, 2023 ]

// b) Verify and explain: the .split method used takes the string and uses the space .split(' ") and puts it in its own array of substrings 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: it wont do anything because it does not have a return statement.

// b) Verify and explain: it has to be told what to do so it can produce an outcome. That is why it needs a return statement, it is used to gives us an outcome of a construted string from the function


// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [ 11, 13, 15 ]

// b) Verify and explain:  when useing a moduluo % it will check for the odd numbers while useing a filter method in the array

// --------------------4) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: the statement prints the first element of index 

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "India"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: a error due to the code not being writting correctly
// b) Verify and explain:  the code is trying to create a class with a constructor, the class declaration is missing a open curly brace ({), as well as the assignment operator is missing (=)
