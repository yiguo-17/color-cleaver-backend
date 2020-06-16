const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')


const color1 = getInput(0);
const color2 = getInput(1);

if (color2 === undefined) {
  console.log(colorDeconstructor(color1))
} else {
  console.log(colorCombinator(color1, color2));
}

function getInput(i) {
  return process.argv[i + 2];
}
