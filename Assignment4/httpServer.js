/* Assignment 3: Create a Simple HTTP Server
-------------------------------------------------------------------
Question: Write a Node.js program that creates an HTTP server with the following requirements:
1. The server should listen on port 3000.
2. When a user opens http://localhost:3000, display the message "Welcome to Node.js HTTP Server!" in the browser.
3. Display "Server is running" in the terminal when the server starts. */

const http = require('http');
const colors =require('colors')
const PORT =3000;

http.createServer((req, res)=> 
{
    res.write("<h1> Welcome to Node JS environment !!</h1>");
    res.end();
}).listen(PORT);
console.log(`Server is running localhost@${PORT}`.bgGreen);

