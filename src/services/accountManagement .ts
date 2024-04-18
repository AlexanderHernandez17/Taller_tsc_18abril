import { bankAccount } from "models/bankAccount";

export class AccountManagement {
    static deposit(account: bankAccount, amount: number) {
        account.balance += amount;
        console.log(`${amount} was deposited in the account`);
    }

    static withdraw(account: bankAccount, amount: number) {
        if (amount <= account.balance){
            account.balance -= amount;
            console.log(`${amount} was withdrawn from the account`);
        } else {
            console.log(`Insufficient funds to withdraw ${amount}`);
        }
    }

    static checkBalance(account: bankAccount) {
        console.log(`Balance available in ${account.holder} account is ${account.balance}`);
    }
}
