"use strict";
// src/utils/palindrome.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
function isPalindrome(str) {
    const formattedStr = str.toLowerCase().replace(/\s/g, '');
    const reversedStr = formattedStr.split('').reverse().join('');
    return formattedStr === reversedStr;
}
exports.isPalindrome = isPalindrome;
