//Explain about the code here
//The function addition is defined which returns the sum of two numbers 2 and 3.
//The function is exported to be used in other files.
//The function is called in the main.js file to check the output.
console.log("harsh");
console.log("harsh");



function addition() {
    return 2 + 3;
}
function subtraction() {
    return 3 - 2;
}

// module.exports = addition;

//here if we pass just name of function without brackets then it will return the function itself
//but if we pass the name of function with brackets then it will return the output of function and when we use that funtion in other file then we have to use just the name of function without brackets


//if we want multiple funtions we can make their object and export that object
module.exports = {
    add: addition,  //here we are exporting the function addition with the name add so when we require this file in other file then we have to use the name add to access the addition function when we give it's key then we won't be able to access it through the function name
    subtraction //acessing the function name directly with it's own name
}
