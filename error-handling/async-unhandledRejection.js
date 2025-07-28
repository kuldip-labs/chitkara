    // Asynchronous error handling with async/await
        async function fetchData() {
        // try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            console.log(data);
        // } catch (error) {
        //     console.error("Error fetching data:", error);
        // }
    }
    fetchData();

    // Handle unhandled promise rejections
    // This is a global error handler for unhandled promise rejections
        process.on('unhandledRejection', (reason, promise) => {
        console.error('Unhandled Rejection at:', promise, 'reason:', reason);
        // Log the error and potentially exit
    });

       // Handle uncaught exceptions
    // This is a global error handler for uncaught exceptions
        process.on('uncaughtException', (err) => {
        console.error('Uncaught Exception:', err);
        // Perform cleanup and exit gracefully
        process.exit(1);
    });
    

  