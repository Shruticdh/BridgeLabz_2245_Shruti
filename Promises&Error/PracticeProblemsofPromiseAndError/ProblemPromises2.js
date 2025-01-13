function placeOrder(order) {
    return new Promise((resolve, reject) => {
        console.log(`Placing order for ${order.item}...`);
        setTimeout(() => {
            if (order.quantity <= 10) {
                resolve(order); // Order is placed
            } else {
                reject("Insufficient inventory to fulfill the order.");
            }
        }, 2000);
    });
}

function processPayment(order) {
    return new Promise((resolve, reject) => {
        console.log(`Processing payment for ${order.item}...`);
        setTimeout(() => {
            const paymentSuccess = Math.random() > 0.2; // 80% chance of success
            if (paymentSuccess) {
                resolve(order); // Payment successful
            } else {
                reject("Payment failed. Please try again.");
            }
        }, 3000);
    });
}

function shipOrder(order) {
    return new Promise((resolve) => {
        console.log(`Shipping ${order.item}...`);
        setTimeout(() => {
            resolve(`Order for ${order.item} has been shipped!`);
        }, 2500);
    });
}

function checkInventory(order) {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Inventory checked"), 1000);
    });
}

function verifyPaymentGateway() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Payment gateway verified"), 1500);
    });
}

function processOrder(order) {
    console.log("Starting order process...");

    Promise.all([checkInventory(order), verifyPaymentGateway()])
        .then(() => placeOrder(order))
        .then(processPayment)
        .then(shipOrder)
        .then((message) => {
            console.log(message);
            console.log("Order process completed successfully.");
        })
        .catch((error) => {
            console.error(`Error during order processing: ${error}`);
        });
}

const order1 = { item: "Laptop", quantity: 1 };
const order2 = { item: "Smartphone", quantity: 15 }; // Will fail due to inventory

processOrder(order1);
processOrder(order2);
