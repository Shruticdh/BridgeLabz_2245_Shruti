// Create a program to check if a number is positive.
class NegativeNumberError extends Error {
    constructor(message) {
        super(message);
        this.name = "NegativeNumberError";
    }
}

function checkPositiveNumber(number) {
    return new Promise((resolve, reject) => {
        if (number < 0) {
            reject(new NegativeNumberError("The number is negative."));
        } else {
            resolve("The number is positive.");
        }
    });
}

function handleNumberCheck(number) {
    checkPositiveNumber(number)
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            if (error instanceof NegativeNumberError) {
                console.error(`Custom Error: ${error.message}`);
            } else {
                console.error(`Error: ${error.message}`);
            }
        });
}

handleNumberCheck(5);  
handleNumberCheck(-3);  


// Write a program to check if a user's age is valid for registration.

// Function to validate age
function validateAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or older for registration.");
    }
    return "Age is valid for registration.";
}

function handleRegistration(age) {
    try {
        const message = validateAge(age);
        console.log(message);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

handleRegistration(20); 
handleRegistration(16); 
