const fs = require('fs');
// Example of reading a file with error handling
        fs.readFile('nonexistent.txt', (err, data) => {
        // if (err) {
        //     console.error("Error reading file:", err);
        //     return;
        // }
        console.log("File content:", data.toString());
    });

       // Handle uncaught exceptions
    // This is a global error handler for uncaught exceptions
        process.on('uncaughtException', (err) => {
        console.error('Uncaught Exception:', err);
        // Perform cleanup and exit gracefully
        process.exit(1);
    });