const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.js
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Perform any necessary cleanup here
  process.exit(1); // Exit the process to avoid undefined behavior
});

// Simulate an uncaught exception
setTimeout(() => {
  throw new Error('This is an uncaught exception!');
}, 1000);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})