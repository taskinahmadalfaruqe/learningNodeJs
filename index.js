const { add, a } = require('./local-01');
const { add: add02, a: a02 } = require('./local-02');

console.log(add(2, 3));
console.log(a);
console.log(add02(50, 500, 50));
console.log(a02);


// buld in module
const path = require("path");
console.log(path.basename('/foo/bar/baz/asdf/quux.html')); // return the last part
console.log(path.dirname('/foo/bar/baz/asdf/quux')); // retrurn the full path name without last part
console.log(path.parse('/foo/bar/baz/asdf/quux')); // return all path with individule part
console.log(path.join('taskin','ahmad','','al','','faruqe'));
