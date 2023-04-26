/** @format */
// npm chalk is installed | imported from chalk with import chalk from 'chalk';
import chalk from 'chalk';
import randomColor from 'randomcolor';
// The process.argv() method is used for returning all the command-line arguments that were passed when the Node.js process was being launched
// Command-line arguments are stored in constant variable hue & constant variable luminosity
const hue = process.argv[2];
const luminosity = process.argv[3];

// Function stored in constant variable named color
// Returns a hex code for a light blue etc.
const color = randomColor({
  luminosity: luminosity,
  hue: hue,
});

// chalk.hex which defines my own theme is called on color that is stored in a constant variable named randomColorChalk
const randomColorChalk = chalk.hex(color);

// randomColorChalk is called by logging it to the console with the # characters
// color is called by using module literal
console.log(randomColorChalk('###############################'));
console.log(randomColorChalk('###############################'));
console.log(randomColorChalk('###############################'));
console.log(randomColorChalk('#####                     #####'));
console.log(randomColorChalk(`#####       ${color}       #####`));
console.log(randomColorChalk(`#####                     #####`));
console.log(randomColorChalk('###############################'));
console.log(randomColorChalk('###############################'));
console.log(randomColorChalk('###############################'));

// When user enters node index.js it generates a 9x31 '#' characters long block as the random color that was generated and the hex code of the random number is printed in the middle of the block

// // A function with empty parameter
// function getRandomColor() {
//   // find how to get random color and return it.
//   const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//   return randomColor;
// }

// // Function getRandomColor() is called and assigned in a constant variable called randomSavedColor
// const randomSavedColor = getRandomColor();

// function isPrime(num) {
//   if (num < 2 || !Number.isInteger(num)) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++)
//     if (num % i === 0) return i === num ? true : false;
//   return true;
// }

// function renderColoredHashtags(rows) {
//   if (!isPrime(rows) && rows != 1) {
//     console.error('Please select correct number of rows');
//   } else if (rows < 3) {
//     console.log(
//       randomColorChalk(`#####       ${randomSavedColor}       #####`),
//     );
//   } else {
//     const middleRow = Math.ceil(rows / 2);
//     for (let index = 0; index < middleRow - 2; index++) {
//       console.log(randomColorChalk('###############################'));
//     }
//     console.log(randomColorChalk('#####                     #####'));
//     console.log(
//       randomColorChalk(`#####       ${randomSavedColor}       #####`),
//     );
//     console.log(randomColorChalk('#####                     #####'));
//     for (let index = middleRow + 2; index <= rows; index++) {
//       console.log(randomColorChalk('###############################'));
//     }
//   }
// }

// renderColoredHashtags(9);
