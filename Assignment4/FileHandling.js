/* Assignment 1: Write and Read a File
----------------------------------------------
Question: Write a Node.js program that performs these two tasks:
1. Write the message "Welcome to Node.js" into a file named student.txt.
2. Read the contents of student.txt and display them on the console.
Use the fs module and its asynchronous functions. */
const fs = require('fs')

console.log("Loading  the file...!")

fs.writeFileSync("student.txt", "Welcome to NODE JS ! ")

console.log("File created sucessfully !")

async function readFile(){
    try{
       const data =  await fs.readFileSync("student.txt", "utf-8" );
       console.log(data)
    }
    catch(err)
    {
        console.log("Error occurred :", err.message)
    }
   
    
}

readFile();