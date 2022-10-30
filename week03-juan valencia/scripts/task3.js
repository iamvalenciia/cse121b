/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function sum (number1, number2) {
    
    // Step 2: In the function, return the sum of the parameters number1 and number2
    return (number1 + number2);
}

// Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers(event) {
    console.log(event.type)
    let input1 = Number(document.querySelector("#addend1").value);
    let input2 = Number(document.querySelector("#addend2").value);
    let inputResult = sum(input1, input2);
    console.log(`the SUM between ${input1} and ${input2} is equal to: ${inputResult} ✅`);
    
    // Step 4: Assign the return value to an HTML form element with an ID of sum
    document.querySelector("#sum").value = inputResult;
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector("#addNumbers").addEventListener("click", addNumbers);


// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract (number1, number2) {
    return (number1 - number2)
}
function subtractNumbers (event) {
    console.log(event.type);
    let input1 = Number(document.querySelector("#minuend").value);
    let input2 = Number(document.querySelector("#subtrahend").value);
    let inputResult = subtract(input1, input2);
    console.log(`the SUBTRACT between ${input1} and ${input2} is equal to: ${inputResult} ✅`);
    document.querySelector("#difference").value = inputResult;
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiply (number1, number2) {
    return (number1 * number2)
}
function multiplyNumbers (event) {
    console.log(event.type);
    let input1 = Number(document.querySelector("#factor1").value);
    let input2 = Number(document.querySelector("#factor2").value);
    let inputResult = multiply(input1, input2);
    console.log(`the MULTIPLY between ${input1} and ${input2} is equal to: ${inputResult} ✅`);
    document.querySelector("#product").value = inputResult;
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide (number1, number2) {
    return (number1 / number2)
}
function divideNumbers (event) {
    console.log(event.type);
    let input1 = Number(document.querySelector("#dividend").value);
    let input2 = Number(document.querySelector("#divisor").value);
    let inputResult = divide(input1, input2);
    console.log(`the DIVIDE between ${input1} and ${input2} is equal to: ${inputResult} ✅`);
    document.querySelector("#quotient").value = inputResult;
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);
// Step 9: Test all of the mathematical functionality of the task3.html page.



/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const date = new Date;
console.log(date);
// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
const dateYear = date.getFullYear();
console.log(dateYear);
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").textContent = dateYear;



/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const numbersArray = [...Array(26).keys()].slice(1);
console.log(numbersArray)
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").textContent = numbersArray;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.querySelector("#odds").textContent = numbersArray.filter(number => {return number % 2 !== 0});
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.querySelector("#evens").textContent = numbersArray.filter(number => {return number % 2 == 0});
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const initialValue = 0;
document.querySelector("#sumOfArray").textContent = numbersArray.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.querySelector("#multiplied").textContent = numbersArray.map(x => x*2);
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const numbersX2 = numbersArray.map(x => x*2);
const initialValue2 = 0
document.querySelector("#sumOfMultiplied").textContent = numbersX2.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue2);