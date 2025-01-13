function mainFunction(callback) {
    console.log("Main function is running.");
    callback(); 
}

function myCallback() {
    console.log("Callback function is executed.");
}

mainFunction(myCallback);

//Asynchronous Operation 
console.log("Start");

setTimeout(() => {
    console.log("This runs after 2 seconds.");
}, 2000);

console.log("End");

