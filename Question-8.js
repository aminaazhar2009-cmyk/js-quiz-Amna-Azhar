// Function to find second largest unique number
function secondLargest(arr) {
    let largest = -Infinity;
    let second = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        
        // If number is greater than largest
        if (num >