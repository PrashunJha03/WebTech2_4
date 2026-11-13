/* Assignment 4: Create a Welcome Page Using Express.js
------------------------------------------------------------------
Question: Write an Express.js program with these requirements:
1. Create an Express server listening on port 3000.
2. When the user visits http://localhost:3000/student, respond with the message "Welcome Student!".
3. Display "Express Server is Running" in the terminal when the server starts.*/

const express  = require('express')
const app = express();
const PORT  = 3000;

app.get("/student",(req, res)=>{
    res.write("<h1> Welcome Students !!</h1>");
})

app.listen(PORT, ()=>
{
    console.log(`Express Serve is running@${PORT}`);
})