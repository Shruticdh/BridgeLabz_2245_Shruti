// Definition:
// Classes are blueprints for creating objects with specific methods and properties.

// Features:

// Constructor: A special method to initialize object properties.
// Inheritance: Classes can extend other classes.

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Rex");
dog.speak(); 
