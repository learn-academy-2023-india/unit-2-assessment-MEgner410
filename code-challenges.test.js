// ASSESSMENT 2: Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.


function isDivisibleByThree(obj) {
    const { number } = obj;

    if (typeof number !== 'number') {
        return "not a valid number";
    }
    if (number % 3 === 0) {
        return `${number} is divisible by three`
    } else {
        return `${number} is not divisible by three`;
    }
    }
 // const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"

 describe("isDivisibleByThree", () => {
    it('should return "15 is divisible by three" for object1', () => {
        const result = isDivisibleByThree({ number: 15 });
        expect(result).toEqual("15 is divisible by three");
    });
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"

    it('should return "0 is divisible by three" for object2', () => {
        const result = isDivisibleByThree({ number: 0 });
        expect(result).toEqual("0 is divisible by three");
    });
    // const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

    it('should return "-7 is not divisible by three" for object3', () => {
        const result = isDivisibleByThree({ number: -7 });
        expect(result).toEqual("-7 is not divisible by three");
    });
    
    it('should return "not a valid number" for invalid input', () => {
        const result = isDivisibleByThree({ number: 'invalid' });
        expect(result).toEqual("not a valid number");
    })
}); 

// Pseudo code:
// input single array of numbers
// output array with numbers multipled by 3, - 0, 15, and -7
// does something to everything in the array value * 3







// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]

const capitalizedWords = randomNouns1.map(word => word.charAt(0).toUpperCase() + word.slice(1))

console.log(capitalizedWords)

// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

// a) Create a test with expect statements for each of the variables provided.


const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]

const capitalizedWords2 = randomNouns2.map(word => word.charAt(0).toUpperCase() + word.slice(1))

console.log(capitalizedWords2)

// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]


// b) Create the function that makes the test pass.

const RandomNouns1 = ["streetlamp", "patato", "teeth", "conclusion", "nephew"]

const RandomNouns2 = ["temperature", "database", "chopsticks", "mango"]

const uppercaseWords1 = randomNouns1.map(word => word.toUpperCase())
const uppercaseWords2 = randomNouns2.map(word => word.toUpperCase())


// Pseudo code:
//input: make a array that is empty store capitalized words
// output: return the random words with the first letter in the array capitalized.


