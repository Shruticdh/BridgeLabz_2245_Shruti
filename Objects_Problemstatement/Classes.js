class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }
    deposit(amount) {
        if (amount > 0) this.balance += amount;
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
}
class Updation extends BankAccount {
    update() {
        console.log("Account is up to date");
    }
}
const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance()); 

const updation = new Updation();
updation.update();