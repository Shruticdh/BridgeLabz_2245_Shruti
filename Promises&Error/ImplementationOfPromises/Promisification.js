// Promisification in JavaScript is the process of converting a function that uses callbacks into a function that returns a Promise.This makes the code easier to work with, especially when dealing with asynchronous operations, as Promises offer a cleaner and more manageable way to handle chaining and error handling compared to nested callbacks.
function fetchData(callback) {
    setTimeout(() => {
        const error = null; // Set error to null for success or an Error object for failure
        const data = { id: 1, name: "John Doe" }; // Mock data
        callback(error, data); // Calls the callback
    }, 1000);
}

function fetchdataAsync() {
    return new Promise((resolve, reject) => {
        fetchData((error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

fetchdataAsync()
    .then(data => console.log("Data:", data))
    .catch(error => console.error("Error:", error));