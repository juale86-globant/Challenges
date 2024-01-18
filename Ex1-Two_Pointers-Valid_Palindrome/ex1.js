const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Enter a string to check the palindromness...:`, stringg => {
  if(isPalindrome(stringg)){
    console.log('----> The typed string is a palindrome')
  } else {
    console.log('----> The typed string is not a palindrome')
  }
  readline.close();
});

const isPalindrome = (args) => {
  return args == String(args).split("").reverse().join("")
}
