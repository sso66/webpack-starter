console.log("module-import");
console.log("\n13. Module patterns: Closure, UMD and CJS");
// To expose a function to bet on a specific pony in the race, and...

// Now, in one of the application components need
// to call thsese functions. In another file:

// UMD: Universal Module Definition
import { bet, start } from '../module-export';

// CJS: Comman JavaScript NPM Definition
// const start = require('./module-export').start;
// const bet = require('./module-export').bet;
// const race = require('./module-export').race;
// const pony = require('./module-export').pony;

// later
bet(race, pony);
start(race);
// That's what is called a name export. Here we are importing the two functions,
// and we have to specify the filename containing these functions - here 'races_services'.

// Of course, you can import only one method if you need, you can even it an alias:
// import { start as startRace } from '../module-export';
// const startRace = require('./module-export').start;

startRace(race);

// eof
