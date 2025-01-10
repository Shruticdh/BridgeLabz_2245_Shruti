// this refers to the current execution context.

const obj = {
    name: "shruti",
    greet() {
        console.log(this.name); // Refers to obj
    }
};
obj.greet(); 

// Arrow functions do not have their own this
const obj2 = {
    name: "Alice",
    greet: () => {
        console.log(this.name); // Undefined
    }
};
obj2.greet();
