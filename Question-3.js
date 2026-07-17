// Function to count vowels in a string
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU"; // both upper and lower case
    
    // Check each character
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    
    return count;
}

console.log(countVowels("JavaScript")); // Output: 3