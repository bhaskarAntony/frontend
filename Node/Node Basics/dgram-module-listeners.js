//dgram

//its used for socket comminication throgh UDP(user datagram protocal)
// UDP4=> IPv4
//UDP6 => IPv6

//listeners
const dgram = require('dgram')
const socket= dgram.createSocket('udp4')

//node event= method(name, callback listeners)
socket.on("message", function (msg, err){
    if(err) console.log(err)
    console.log('message=', msg.toString())
})

socket.bind(4000) //port number

/* output: { address: '127.0.0.1', family: 'IPv4', port: 49261, size: 32 }
message= welcome to node js dgram example */
