//OS Built-in module

const os = require('os');

//User Info

const user = os.userInfo();
console.log(user);

//System Uptime

console.log(`The system uptime is ${(os.uptime)} seconds`);

//OS Info

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);

//Path built-in module

const path = require('path');

console.log(path.sep);

const filePath = path.join('content', 'subfolder', 'test.txt');

console.log(filePath);

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolutePath);

const absolutePath1 = path.resolve(__dirname, '2-globals.js');
console.log(absolutePath1);