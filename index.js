/** @format */

import chalk from 'chalk';

function getRandomColor() {
  // find how to get random color and return it.
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

const randomSavedColor = getRandomColor();

const randomColorChalk = chalk.hex(randomSavedColor);

console.log(randomColorChalk('###############################'));
console.log(randomColorChalk('###############################'));
console.log(randomColorChalk('###############################'));
console.log(randomColorChalk('#####                     #####'));
console.log(randomColorChalk(`#####       ${randomSavedColor}       #####`));
console.log(randomColorChalk(`#####                     #####`));
console.log(randomColorChalk('###############################'));
console.log(randomColorChalk('###############################'));
console.log(randomColorChalk('###############################'));

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
