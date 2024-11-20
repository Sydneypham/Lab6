// Task 1: Variables and Console Output
const myNumber = 10;
const myString = "Hello, JavaScript!";

console.log("Task 1 - Variables:");
console.log("myNumber:", myNumber);
console.log("myString:", myString);

// Task 2: Exploring Loops
console.log("\nTask 2 - Basic Loop:");
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("\nMultiples of 3:");
for (let i = 1; i <= 5; i++) {
    console.log(`3 x ${i} = ${3 * i}`);
}

// Task 3: Discovering Functions
const addNumbers = (num1, num2) => {
    return num1 + num2;
};

const multiplyNumbers = (num1, num2) => {
    return num1 * num2;
};

console.log("\nTask 3 - Functions:");
const sum = addNumbers(5, 7);
console.log("5 + 7 =", sum);

const product = multiplyNumbers(4, 6);
console.log("4 x 6 =", product);