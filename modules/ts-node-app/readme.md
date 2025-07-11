### update tsconfig with  "module": "ES6" (transpile from ts to ES6) or "module": "commonjs" (transpile from ts to commonjs modules )

## Install TypeScript:
* Install TypeScript as a development dependency: npm install --save-dev typescript
## Configure TypeScript:
* Generate a tsconfig.json file, which configures the TypeScript compiler: npx tsc --init
* Open tsconfig.json and adjust outDir to specify where compiled JavaScript files will be placed (e.g., 
 "outDir": "./dist"). You might also want to set "rootDir": "./src" if you plan to put your source files  in a src directory.
## Compile and Run:
* Compile your TypeScript code into JavaScript: npx tsc (This will create the dist directory and compiled index.js inside it, based on your tsconfig.json).
* Run the compiled JavaScript file using Node.js: node dist/index.js or use ts-node 