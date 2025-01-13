// Function to take an order
function takeOrder(order, callback) {
    console.log(`Order received: ${order}`);
    console.log("Preparing your food...");
    setTimeout(() => {
        callback(order); // Call the callback after preparation
    }, 3000); // Simulate 3-second food preparation
}

// Function to assign a delivery person
function assignDelivery(order, callback) {
    console.log(`Food is ready! Assigning a delivery person for: ${order}`);
    setTimeout(() => {
        callback(order); // Call the callback after delivery assignment
    }, 2000); // Simulate 2-second delay for delivery person assignment
}

// Function to notify the user when food is out for delivery
function outForDelivery(order, callback) {
    console.log(`Your order for ${order} is out for delivery.`);
    setTimeout(() => {
        callback(order); // Call the callback after the food is delivered
    }, 5000); // Simulate 5-second delivery time
}

// Function to notify the user when the food is delivered
function notifyDelivery(order) {
    console.log(`Your order for ${order} has been delivered! Enjoy your meal!`);
}

// Orchestrating the entire process
function processOrder(order) {
    takeOrder(order, (preparedOrder) => {
        assignDelivery(preparedOrder, (assignedOrder) => {
            outForDelivery(assignedOrder, (deliveredOrder) => {
                notifyDelivery(deliveredOrder);
            });
        });
    });
}

// Place multiple orders
processOrder("Pizza");
processOrder("Burger");
