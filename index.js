//function isPalindrome(word) compares input word to reversed word
function isPalindrome(word) {
  let reverseWord = reverseString(word)
  return reverseWord === word ? true : false
}
//takes a string, splits it to an array, reverse order of array, and put it back to a string, after it returns new string
function reverseString(str){
  return str.split("").reverse().join("");
}

/* 
  Add your pseudocode here:
  build a function, with string as an argument
  get second variable and assign it reverse value of the initial string(build another function for that), 
  compare two variables
  if the reversed word is the same as the input
  return true
else
  return false

*/

/*
  //takes a string, splits it to an array, reverse order of array, and put it back to a string, after it returns new string
  function isPalindrome(word) compares input word to reversed word, returns true or false as a result
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("palindrome"));
}

module.exports = isPalindrome;
