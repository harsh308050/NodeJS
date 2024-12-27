const { error } = require("console");

//fs module is used to work with the file system
//fs used to read and write files and it createdFiles too if it doesn't exist 

const fs = require("fs");
fs.writeFile("file1.txt", "Hello The Changed Content", (error) => {
    console.log(error ? error : "File Created or Written Successfully");
}); // This will create a file with the content "Hello This is The Chnaged Content" if the file does not exist and if the file exists then it will overwrite the content of the file with the new content.

fs.appendFile("file.txt", "\nThis is the appended content", (error) => {
    console.log(error ? error : "File Appended Successfully");
}); // This will append the content "This is the appended content" to the file "file.txt

fs.readFile("file.txt", "utf8",);
fs.readFile("file.txt", "utf-8", (data, error) => {
    if (data) { console.log(data); }
    else { console.log(error); }
});

fs.writeFile("index.html", "<html><body><h1>Hello this is html file</h1></body></html>", (error) => {
    console.log(error ? error : "File Created and Written Successfully");
    console.log("changed the text the textfile will be edited");
}); //index.html file will be created with the content and if you run this html file that will show the "Hello this is html file"