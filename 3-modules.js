//Modules

const names = require('./4-names');
const sayHi = require('./5-utils');


sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);

const data = require('./6-alternativeSyntax');
console.log(data);

require('./7-mindGrenade');