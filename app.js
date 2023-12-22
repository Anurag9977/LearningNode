const _lodash = require('lodash');

const items = [1, [2, [3, 4, [5]]]];

const newItems = _lodash.flatMapDeep(items);

console.log(items);
console.log(newItems);