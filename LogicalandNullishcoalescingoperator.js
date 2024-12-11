// 1. Logical OR (||)
let username = "" || "Guest";  // "" is falsy, so it returns "Guest"
console.log(username); 

let userAge = 0 || 25;  // 0 is falsy, so it returns 25
console.log(userAge); 


// 2. Logical AND (&&)
let isAdmin = true && "User is Admin"; // Both are truthy, so it returns "User is Admin"
console.log(isAdmin);

let isLoggedIn = false && "Logged In"; // `false` is falsy, so it returns `false`
console.log(isLoggedIn); 

// 3. Nullish Coalescing Operator (??)
let user = null ?? "Guest";  // `null` is nullish, so it returns "Guest"
console.log(user); 

let score = 0 ?? 100;  // `0` is not nullish, so it returns `0`
console.log(score);

// 4. Combining ||, &&, and ??
let user2 = null;
let isAdmin2 = true;

// let message = user ?? (isAdmin && "Admin User") || "Guest";
console.log(message); // Output: "Admin User"
