// Fizzbuzz Challenge

// Print 1-100

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}
// for multiples of 3 print fizz instead of number
// for multiples of 5 print buzz instead of number
// for numbers multiples of 3 and 5 print Fizzbuzz

