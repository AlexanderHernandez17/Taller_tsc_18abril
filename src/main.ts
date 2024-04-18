import { bankAccount } from "models/bankAccount";
import { AccountManagement } from "./services/accountManagement ";
import { isPalindrome } from "./utils/polindrome";

// Crea dos objetos de cuenta bancaria
const cuentaOne: bankAccount = {
    holder: 'Juan', balance: 1000,
    accountNumber: 123456
}
const cuentaTwo: bankAccount = {
    holder: 'María', balance: 500,
    accountNumber: 321654
}

// Realiza operaciones sobre las cuentas utilizando los métodos de AccountManagement
console.log('Cuenta 1:');
AccountManagement.checkBalance(cuentaOne);
AccountManagement.deposit(cuentaOne, 500);
AccountManagement.withdraw(cuentaOne, 200);
AccountManagement.checkBalance(cuentaOne);

console.log('Cuenta 2:');
AccountManagement.checkBalance(cuentaTwo);
AccountManagement.withdraw(cuentaTwo, 700);
AccountManagement.checkBalance(cuentaTwo);


// Polindrome

console.log(isPalindrome("A man, a plan, a canal, Panama")); // Devuelve: true
console.log(isPalindrome("Hello world")); // Devuelve: false

