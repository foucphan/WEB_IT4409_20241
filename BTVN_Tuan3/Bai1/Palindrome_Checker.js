//Palindrome_Checker

function strip(str) {
  let copy = "";
  for (let i = 0; i < str.length; i++) {
    // Check if character is an alphabet (A-Z or a-z)
    if (
      (str.charAt(i) >= "A" && str.charAt(i) <= "Z") ||
      (str.charAt(i) >= "a" && str.charAt(i) <= "z")
    ) {
      copy += str.charAt(i);
    }
  }
  return copy; // Returns the stripped string containing only letters
}

function isPalindrome(str) {
  // Assumes: str is a string
  // Returns: true if str is a palindrome, else false
  str = strip(str.toUpperCase()); // Normalize the string and strip it

  // Check if the stripped string is a palindrome
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str.charAt(i) !== str.charAt(str.length - i - 1)) {
      return false; // Return false if characters do not match
    }
  }
  return true; // Return true if all characters match
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("RaceCar")); // true
console.log(isPalindrome("race CAR")); // true
console.log(isPalindrome("2A3*3a2")); // false, since it strips non-alphabets
console.log(isPalindrome("2A3 3a2")); // false, since it strips non-alphabets
console.log(isPalindrome("2_A3*3#A2")); // false, since it strips non-alphabets
console.log(isPalindrome("not a palindrome")); // false
