const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync('./content/result.txt', `This is the result: ${first}, ${second}`);

writeFileSync('./content/result.txt', `\nThis is the appended result: Appended Result`, { flag : 'a'});