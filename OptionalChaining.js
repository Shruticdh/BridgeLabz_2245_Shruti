// Safely access properties that might not exist.

const user = { address: { city: "kharar" } };

console.log(user?.address?.city); // "NYC"
console.log(user?.contact?.phone); // undefined
