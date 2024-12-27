const http = require("http"); // Load the HTTP module to create a web server
const fs = require("fs"); // Load the File System module to perform file operations
let port = 3000;// Set the port number where the server will listen for requests

const server = http.createServer((req, res) => { // Create a server that accepts requests and sends responses
    console.log(req.url); // Log the URL of the request
    //if the URL is the root, send a response with the message "Welcome To HomePage" and write the request date and time to a file named file1.txt
    if (req.url == '/') {
        res.write("Welcome To HomePage");
        fs.appendFile("file1.txt", `Request Received at :  ${new Date().toLocaleString()}`, (error) => {
            console.log(error ? error : "File Created or Written Successfully");
        });
        res.end();
    }
    //if the URL is /profile, send a response with the message "Profile Page"
    else if (req.url == '/profile') {
        res.write("Profile Page");
        res.end();
    }
    //if the URL is /about, send a response with the message "About
    else if (req.url == '/about') {
        res.write("About Page");
        res.end();
    }
    //if URL is any other than the above, send a response with the message "404 Page Not Found"
    else {
        res.write("404 Page Not Found");
        res.end();
    }
}
);
//listen is used to start the server and it takes two arguments, the port number and a callback function that will be executed once the server is started. The callback function logs a message to the console to indicate that the server has started.
server.listen(port, () => {
    console.log("Server Started");
})

