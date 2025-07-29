### How do you use it? Throw it in your code when you want to handle 404 errors.
`const Api404Error = require('./api404Error')
...
const user = await User.getUserById(req.params.id)
if (user === null) {
 throw new Api404Error(`User with id: ${req.params.id} not found.`)
}
...`

You can duplicate this code for any custom error, 500, 400, and any other you want to handle.