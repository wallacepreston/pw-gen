// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

// var _ = require('underscore');

// var evens = _.reject([1, 2, 3, 4, 5, 6], (num) => num % 2 != 0);

// console.log("Evens");
// console.log(evens);


// Secure Password Generator

// The goal is to allow the user to generate a secure password,
//   which then can be used for a website registration, for example.
// Secure in this context means randomly generated,
// with equal probability of all combinations.

//   Step 1 - uppercase letters
// Create a password generator
//   in a programming language of your choice.
// You may use any built -in function
//   or standard library.

// Password rules:
// The password length should be exactly 8 characters.
// The characters should be English uppercase letters
// Uppercase letters are: ABCDEFGHIJKLMNOPQRSTUVWXYZ
// All characters should be randomly generated.

// Example output: "NUKSYWXJ"

// initialize an empty string
// loop 8 times
// array all letters of alphabet
// randomly grab one
// add it to the sring
// return that string

console.log(Math.floor(Math.random() * 26))


// console.log(randomPWGen())


// Step 2 - uppercase and lowercase letters
// Modify your program to allow for lowercase.
// Password rules:
//   The password length should be exactly 8 characters.
// The characters should be English lowercase and uppercase letters.
// Lowercase letters are: abcdefghijklmnopqrstuvwxyz
// All characters should be randomly generated.

// Example output: "QHjxSpuC"


// Take the output from randomPWGen.
// loop over letters and randomly upper/lower each letter.
// return it

console.log(Math.round(Math.random()))


const randomUpperLower = (strToChange) => {
  let upperLower = '';
  for (let letter of strToChange) {
    if (Math.round(Math.random())) {
      upperLower += letter.toLowerCase()
    } else {
      upperLower += letter
    }
  }
  return upperLower
}


// Step 3 - given input length
// Modify your program to allow for an input parameter`len`
// for the password length.
// Password rules:
// The password length should be exactly`len` characters.
// `len` should be[4, 64]
// Invalid`len` should raise an error

// Example input: `len` = 16
// Example output: "nkPMmMcqpdSBuoFS"

const randomPWGen = (len = 8) => {
  let bounds = [4, 64];
  if (len < bounds[0] || len > bounds[1]) throw 'invalid input length. Should be no less than 4, no greater than 64'
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let newStr = '';
  for (let i = 0; i < len; i++) {

    newStr += alphabet[Math.floor(Math.random() * 26)]
  }
  return newStr

}


// Step 4 - letters and digits
// Modify your program to allow for digits.

// Additional password rules:
//   The characters should be English lowercase or uppercase letters, or digits
// Digits are: 0123456789
// The number of digits should be exactly 4 characters.
// The digits should be randomly positioned within the password.

// Example input: `len` = 8
// Example output: "LXJ4a328"


// Loop over my string, randomly replacing with numbers (random)

const randomNumberLetter = (strToChange) => {
  strToChange = strToChange.split('')
  let numbers = '0123456789';
  //loop 4 times
  // randomly choose an index of the string to replace
  // choose a number at random to replace.
  let chosenIdx = {}
  for (let i = 0; i < 4; i++) {
    const randIdx = Math.floor(Math.random() * strToChange.length);
    if (!chosenIdx[randIdx]) {
      strToChange.splice(randIdx, 1, numbers[Math.floor(Math.random() * 10)])
      chosenIdx[randIdx] = true
    }
  }
  return strToChange.join('');
}

console.log(randomNumberLetter(randomUpperLower(randomPWGen(15))))

