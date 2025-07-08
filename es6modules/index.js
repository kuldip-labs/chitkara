/*(node:14440) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///C:/projects/chitkara/es6modules/index.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to C:\projects\chitkara\es6modules\package.json.
(Use `node --trace-warnings ...` to show where the warning was created) */

// to avoid the warning, we can rename the file to .mjs or add "type": "module" in package.json
// or use the .js extension with "type": "module" in package.json

import { add } from './module.js';

console.log("Addition:", add(5, 3));