"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountManagement = void 0;
class AccountManagement {
    static deposit(account, amount) {
        account.balance += amount;
        console.log(`${amount} was deposited in the account`);
    }
    static withdraw(account, amount) {
        if (amount <= account.balance) {
            account.balance -= amount;
            console.log(`${amount} was withdrawn from the account`);
        }
        else {
            console.log(`Insufficient funds to withdraw ${amount}`);
        }
    }
    static checkBalance(account) {
        console.log(`Balance available in ${account.holder} account is ${account.balance}`);
    }
}
exports.AccountManagement = AccountManagement;
