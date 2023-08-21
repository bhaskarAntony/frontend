//fs module can delete file read the file and create the new file

const fs = require('fs')
console.log('file operation started')

//synchronous => direct or without callback function
//Asynchronous => indirect or with callback function

const first = fs.readFileSync('./content/file/p1.txt')//getting file name from our system
const second = fs.readFileSync('./content/file/p2.txt')//getting file name from our system

fs.writeFileSync(`./content/file/result-file.txt`, `hai this is our  output we are created successfully new file: \n ${first} \n\n ${second}`)//this method will creates new file in name as result-file.txt and we are adding first file and second file to this new file

console.log('file create completed')