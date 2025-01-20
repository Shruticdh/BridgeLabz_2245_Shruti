//Every javascript oject has hidden internal properties called prptotypes that points to another object or null.
//the prptotype object contains properties and methods that are accessible to other leinked to it.
  
Function.prototype.sayHello = function(){
    console.log("Hello Shruti");
}

function hello(){
    console.log("Hello Bharti");
}
//this will access the properties of sayHello
hello.sayHello();
hello();

// using constructor
function ToEat(food , person){
    this.food = food;
    this.person = person;
}

ToEat.prototype.hotel = function(){
    console.log(`${this.person} eating ${this.food}`);
}

const Hotel = new ToEat('momos', 'Shruti');
Hotel.hotel(); 

//using Object.create()
const Methods = {
    eat() {
      console.log(`${this.type} is eating.`);
    },
};
  
const Shruti = Object.create(Methods);
Shruti.type = 'Shruti';
Shruti.eat();

//prototypal inheritance
function Vehicle(type) {
    this.type = type;
}
  
Vehicle.prototype.drive = function () {
    console.log(`${this.type} is driving.`);
};
  
function Car(type, brand) {
    Vehicle.call(this, type); 
    this.brand = brand;
}
  
// Inherit from Vehicle
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
  
Car.prototype.honk = function () {
    console.log(`${this.brand} is honking.`);
};
  
const myCar = new Car('Car', 'Toyota');
myCar.drive();
myCar.honk(); 
  
  
//object with __proto__
let arr = [1,2,3,4,4,45];
const obj = {
    name: 'Shruti',
    rollno: 2110992245, 
};
const obj2 = {
    name: 'Nivu'
} 
const obj3 = {};
obj2__proto__ = obj;
console.log(obj2);
console.log(obj2.__proto__ );
console.log(obj3.__proto__ );


  





