"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accountManagement_1 = require("./services/accountManagement ");
const polindrome_1 = require("./utils/polindrome");
// Crea dos objetos de cuenta bancaria
const cuentaOne = {
    holder: 'Juan', balance: 1000,
    accountNumber: 123456
};
const cuentaTwo = {
    holder: 'María', balance: 500,
    accountNumber: 321654
};
// Realiza operaciones sobre las cuentas utilizando los métodos de AccountManagement
console.log('Cuenta 1:');
accountManagement_1.AccountManagement.checkBalance(cuentaOne);
accountManagement_1.AccountManagement.deposit(cuentaOne, 500);
accountManagement_1.AccountManagement.withdraw(cuentaOne, 200);
accountManagement_1.AccountManagement.checkBalance(cuentaOne);
console.log('Cuenta 2:');
accountManagement_1.AccountManagement.checkBalance(cuentaTwo);
accountManagement_1.AccountManagement.withdraw(cuentaTwo, 700);
accountManagement_1.AccountManagement.checkBalance(cuentaTwo);
// Polindrome
console.log((0, polindrome_1.isPalindrome)("A man, a plan, a canal, Panama")); // Devuelve: true
console.log((0, polindrome_1.isPalindrome)("Hello world")); // Devuelve: false
