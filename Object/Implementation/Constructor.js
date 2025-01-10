// Constructor is a  special function to initialize an object's properties.

function User(name) {
    this.name = name;
    this.sayHi = function() {
        console.log(`Hi, ${this.name}`);
    };
}
const user = new User("Shruti");
user.sayHi(); 
