
// Objects in JavaScript are collections of key-value pairs. They can store properties (data) and methods
const person = {
    name: "Shruti",
    age: 21,
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};
person.greet();

//object as constructor
const obj = new Object();
obj.name = "shruti";

