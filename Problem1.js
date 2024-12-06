// Intialize an array.
let cart = [];

// Function to Add items to the cart 
function addItems(name,price){
    cart.push({name,price});
    console.log("Items added to cart");
}

// function to view items in cart
function viewCart() {
    if (cart.length === 0) {
      console.log("Your cart is empty.");
      return;
    }
    console.log("Items in your cart:");
    cart.forEach((item, index) => {
        console.log((index + 1) + ". " + item.name + " - $" + item.price.toFixed(2));
    });
  }

//  Function to calculate total price of items 