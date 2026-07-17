// Function to find the largest number in an array
function findLargest(arr) {
    let largest = arr[0]; // assume first number is largest
    
    // Compare with all other numbers
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    
    return largest;
}

console.log(findLargest([12, 45, 7, 89, 23])); // Output: 89