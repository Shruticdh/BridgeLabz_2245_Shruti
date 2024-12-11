// 1. Classes and constructor
// class Animal_oops {
//     constructor(name, species) {
//         this.name = name;
//         this.species = species;
//     }
//     speak() {
//         console.log(`${this.name} says hello!`);
//     }
// }
// const dog = new Animal_oops("Buddy", "Dog");
// dog.speak(); 

// Inheritance
class Animal_oops {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal_oops {
    constructor(name, breed) {
        super(name, "Dog"); 
        this.breed = breed;
    }
    speak() {
        console.log(`${this.name} barks!`);
    }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak();

