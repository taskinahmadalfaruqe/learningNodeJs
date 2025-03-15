const { add, a } = require('./local-01');
const { add: add02, a: a02 } = require('./local-02');

console.log(add(2, 3));
console.log(a);
console.log(add02(50, 500, 50));
console.log(a02);