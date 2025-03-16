const fs = require('fs');

// read a file synchronous
const readFile = fs.readFileSync('./FileSystemRead/Read.txt', 'utf-8')
// console.log(readFile);

// write a file synchronous
const writeFile = fs.writeFileSync('./FileSystemRead/writeFile.txt', readFile + 'I am Taskin Ahmad Al Faruqe')