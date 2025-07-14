## Steps to make npm package
* Signup https://www.npmjs.com/signup
* Decide npm package which is not available on npm registry and put as package-name in package.json 
* create custom importable module
* npm init -y
* index.js
`function helloNpm() {
  return "hello NPM"
}
module.exports = helloNpm`
#### Testing
* `npm link` to make package available globally
* create test.js in test folder `const helloNpm = require('package-name')
console.log(helloNpm())`.
* `npm link package-name` will create node_module and package-name in it.
* run `node test.js`

#### Publish npm package
* `npm login`
* `npm publish`

#### rePublish npm package 
* update Patch, Minor or Major version to republish
*  `npm publish`

## Scoped npm package
* `npm init --scope=@your-username`
* package name `@your-username/package-name`
* `npm publish --access public`
* `npm publish --access private`


