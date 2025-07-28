process.on('uncaughtException', (err) => {
  console.error('Caught unhandled exception:', err);
  // Perform synchronous cleanup here before exiting
  process.exit(1); // Exit the process after logging the error
});

function riskySynchronousOperation() {
  throw new Error('Something went wrong in a synchronous operation!');
}

riskySynchronousOperation();
console.log('This line will not be reached if an uncaught exception occurs.');