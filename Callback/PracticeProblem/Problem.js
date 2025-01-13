
function takeOrder(order, callback) {
    console.log(`Order received: ${order}`);
    console.log("Preparing your food...");
    setTimeout(() => {
        callback(order);
    }, 3000);
}

function assignDelivery(order, callback) {
    console.log(`Food is ready! Assigning a delivery person for: ${order}`);
    setTimeout(() => {
        callback(order);
    }, 2000);
}

function outForDelivery(order, callback) {
    console.log(`Your order for ${order} is out for delivery.`);
    setTimeout(() => {
        callback(order);
    }, 5000);
}

function notifyDelivery(order) {
    console.log(`Your order for ${order} has been delivered! Enjoy your meal!`);
}

function processOrder(order) {
    takeOrder(order, (preparedOrder) => {
        assignDelivery(preparedOrder, (assignedOrder) => {
            outForDelivery(assignedOrder, (deliveredOrder) => {
                notifyDelivery(deliveredOrder);
            });
        });
    });
}

processOrder("Pizza");
processOrder("Burger");
