// Import the json-server module
const jsonServer = require('json-server');

// Create a new json-server instance
const server = jsonServer.create();

// Set up the router to use the db.json file as a fake REST API
const router = jsonServer.router('db.json'); // <== Will be created later

// Use default middlewares Static File Serving: Body Parsing: Basic CRUD Operations: 
const middlewares = jsonServer.defaults();

// Set the port to 3200 or use the value from the environment variable PORT
const port = process.env.PORT || 3200; // <== You can change the port

// Apply the default middlewares to the server
server.use(middlewares);

// Mount the router on the server to handle API routes
server.use(router);

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
