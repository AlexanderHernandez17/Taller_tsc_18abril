// src/utils/palindrome.ts

export function isPalindrome(str: string): boolean {
    const formattedStr = str.toLowerCase().replace(/\s/g, '');
    const reversedStr = formattedStr.split('').reverse().join('');
    return formattedStr === reversedStr;
  }
  