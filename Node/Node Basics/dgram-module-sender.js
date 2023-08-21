//dgram

//sender

const dgram = require('dgram')
const socket = dgram.createSocket('udp4')
let message = Buffer.from('welcome to node js dgram example')// converting string to ASCII using Buffer.from() method

socket.send(message, 4000, "localhost")
console.log('data successfully sent through the socket, received data @ port 4000')

// output: data successfully sent through the socket, received data @ port 4000
// socket used in chat applications to get user data like ip address and more
