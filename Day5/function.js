// *************** Activity 1 ******************** 

// function evenOdd(num) {
//     if(num % 2 == 0){
//         console.log(num , " is even");
//     }
//     else{
//         console.log(num, " is odd");
//     }
// }

// evenOdd(11);


// function square(num) {
//     return num * num;
// }

// console.log(square(13));

// *************** Activity 2 ******************** 

// function max(num1,num2) {
//     if(num1 > num2){
//         console.log(num1, " is the greater");
//     }
//     else{
//         console.log(num2, " is greater");
//     }
// }

// max(100,20)



// function str(a,b){
//     let res = a + b;
//     return res;
// }

// console.log(str("Hello", " Aditya"));


// *************** Activity 3 ******************** 

// let sum = (a,b) => {
//     return a + b;
// }

// console.log(sum(45,6));

// let char = (str) => {
//     return str.includes("A")
// }

// console.log(char("adityaA"));


// *************** Activity 4 ******************** 

// function product(a, b = 20) {
//     console.log(a * b);
// }

// product(10)


// function greet(name,age = 22){
//     console.log("Hello " + name + " you are " + age + " years old");
// }

// greet("Aditya")


// *************** Activity 5 ******************** 

// function callNTimes(func, n) {
//     for (let i = 0; i < n; i++) {
//         func();
//     }
// }

// // Example usage:
// function sayHello() {
//     console.log('Hello!');
// }

// // Call `sayHello` function 3 times
// callNTimes(sayHello, 3);


function applyAndThen(func1, func2, value) {
    const resultOfFunc1 = func1(value);  // Apply func1 to value
    const finalResult = func2(resultOfFunc1);  // Apply func2 to result of func1
    return finalResult;
}

// // Example usage:
// function double(x) {
//     return x * 2;
// }

// function addOne(x) {
//     return x + 1;
// }

// // Applying `double` and then `addOne` to the value 3
// const result = applyAndThen(double, addOne, 3);
// console.log(result); // Output: 7


