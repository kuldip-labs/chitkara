    // This code demonstrates how to use try-catch for error handling in JavaScript.
    try {
        // Code that might throw an error
        const result = someFunctionThatMightFail();
        console.log(result);
    } catch (error) {
        // Handle the error
        console.error("An error occurred:", error.message);
    }

    // Example of reading a file with error handling
        fs.readFileSync('nonexistent.txt', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log("File content:", data.toString());
    });

      // Handle uncaught exceptions
    // This is a global error handler for uncaught exceptions
        process.on('uncaughtException', (err) => {
        console.error('Uncaught Exception:', err);
        // Perform cleanup and exit gracefully
        process.exit(1);
    });
    
    