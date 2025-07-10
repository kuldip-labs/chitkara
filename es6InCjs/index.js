
const crypto = require('crypto'); // Using CommonJS a module
import('./mod.mjs').then(mod =>
  console.log(mod.msg)   //  "Hello world!"
)

import('lodash-es').then(_ => {
  console.log(_.pad(_.toUpper('hello world'), 17, '*'));
});