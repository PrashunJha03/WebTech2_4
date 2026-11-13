/* Assignment 2: Check and Delete a File
--------------------------------------------------------------
Question: Write a Node.js program to check whether student.txt exists in the current folder.
- If the file exists, delete it and display "File deleted successfully".
- If the file does not exist, display "File not found".*/
const fs  = require('fs/promises')

async function readAndRemove()
{
    try
    {
         await fs.access("student.txt")
         await fs.unlink("student.txt");
        console .log("File deleted successfully !")
    }
    catch(err)
    {
        if(err.code === 'ENOENT')
        {
            console.log("File does not exists !")
        }
        else
        {
            console.log("Error occured :", err.message)
        }
    }
}

readAndRemove();

