function isPalindrome(word) {
  // Write your algorithm here
  const reverse = word.split("").reverse().join("");
  if (reverse === word)
    return true;

    return false;
  }
  // console.log(isPalindrome("racecar"));


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  First we split the string and then reverse the individual characters then join them again.
  Using the if statement we compare the reversed string and the initial string and return true if they match and false otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
