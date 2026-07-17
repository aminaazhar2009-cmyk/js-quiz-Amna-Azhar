// Function to remove duplicates from an array
function removeDuplicates(arr) {
    let newArr = [];
    
    // Check each element
    for (let i = 0; i < arr.length; i++) {
        // If element is not already in newArr, then add it
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    
    return newArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]