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
