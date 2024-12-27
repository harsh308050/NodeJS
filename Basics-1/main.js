const Allfunctions = require("./index.js"); //here we just use the name through which we access the function of index.js  
// const { addition } = require("./index.js"); //here we are just taking the addition function of index.js and substraction function is not taken so if we call substraction function then it will give error
console.log(Allfunctions.add()); //using add because of the key we have given in index.js file to addition function
console.log(Allfunctions.subtraction()); //using subtraction because we have not given any key to subtraction function in index.js file so we can access it directly with it's name
console.log(Allfunctions); //here we are getting the object of functions which we have exported in index.js file

//here as in index.js we have exported the function addition so when we require the index.js file in main.js then it will return the function itself and not the output of function
//so here we are getting the function itself
//here if we want the output then we have to call the function with brackets and if we just want the name of function then we have to call the function without brackets