const url = require("url"); //here we are importing the url module which is inbuilt module of in node.js you can check https://nodejs.org/docs/latest/api/ for more modules 
// let myurl = "https://www.youtube.com/watch?v=d2fTjMt_l1M"; //here we are taking a url in a variable 
let myurl = "https://www.youtube.com/watch?v=d2fTjMt_l1M&name=harsh"; //here along with url we are also passing some query parameters by defining the "&" symbol after the url which will be shown in query key of url object  
let parseUrl = url.parse(myurl, false); //here we are parsing the url so that it returns the objects of the url like host, path, query etc. 
console.log(parseUrl);
console.log(parseUrl.host); 