// Function to print FizzBuzz from 1 to 100
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz"); // divisible by both 3 and 5
        } else if (i % 3 === 0) {
            console.log("Fizz"); // divisible by 3
        } else if (i % 5 === 0) {
            console.log("Buzz"); // divisible by 5
        } else {
            console.log(i); // otherwise print number
        }
    }
}

fizzBuzz();