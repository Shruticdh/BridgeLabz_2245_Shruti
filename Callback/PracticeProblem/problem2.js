function checkBalance(account, amount, callback) {
    console.log(`Checking balance for withdrawal of $${amount}...`);
    setTimeout(() => {
        if (account.balance >= amount) {
            callback(null, account, amount); 
        } else {
            callback("Insufficient balance"); 
        }
    }, 2000);
}

function withdraw(account, amount, callback) {
    console.log(`Sufficient balance available. Withdrawing $${amount}...`);
    setTimeout(() => {
        account.balance -= amount;
        callback(null, account);
    }, 1500);
}

function notifyTransaction(account) {
    console.log(`Transaction successful! Your new balance is $${account.balance}.`);
}

function performWithdrawal(account, amount) {
    checkBalance(account, amount, (error, updatedAccount, withdrawalAmount) => {
        if (error) {
            console.log(error);
            return;
        }
        withdraw(updatedAccount, withdrawalAmount, (error, updatedAccount) => {
            if (error) {
                console.log(error);
                return;
            }
            notifyTransaction(updatedAccount);
        });
    });
}
const myAccount = { name: "John Doe", balance: 500 };

performWithdrawal(myAccount, 300);
// performWithdrawal(myAccount, 300);
