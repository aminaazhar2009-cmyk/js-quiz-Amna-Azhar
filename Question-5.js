// Function to check if a word is palindrome
function isPalindrome(str) {
    let reversed = "";
    
    // Reverse the string
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    
    // Compare original and reversed
    if (str === reversed) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false