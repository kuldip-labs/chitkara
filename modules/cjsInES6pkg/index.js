// index.js (main file)
/*ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and 'C:\projects\chitkara\commonpkg\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.*/
const add = require('./add'); // Import the 'add' module
const sum = add(5, 3); // Use the imported function
console.log(sum); // Output: 8