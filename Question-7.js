// Function to count frequency of each character
function characterFrequency(str) {
    let freq = {};
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        // Ignore spaces
        if (char === " ") {
            continue;
        }
        
        // If character already in object, increase count
        if (freq[char]) {
            freq[char]++;
        } else {
            // Otherwise add it with count 1
            freq[char] = 1;
        }
    }
    
    return freq;
}

console.log(characterFrequency("hello")); 
// Output: { h: 1, e: 1, l: 2, o: 1 }