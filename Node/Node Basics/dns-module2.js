
const dns = require('dns')
const { json } = require('stream/consumers')
dns.resolve4("www.facebook.com", (err, data) => {
    if(err) console.log(err)
    data.forEach(element=>{
        dns.reverse(element, (err, host) =>{
            if(err) console.log(err)
            console.log('reverse dns resolve4 = ', element, ":", JSON.stringify(host))
        })
    })
})
dns.resolve6("www.facebook.com", (err, data) => {
    if(err) console.log(err)
    data.forEach(item=>{
        dns.reverse(item, (err, host) =>{
            if(err) console.log(err)
            console.log('reverse dns resolve6 = ', item, ":", JSON.stringify(host))
        })
    })
})
/* output: 
reverse dns resolve4 = 163.70.138.35 : ["edge-star-mini-shv-01-tir3.facebook.com"]

reverse dns resolve6 =  2a03:2880:f184:81:face:b00c:0:25de : ["edge-star-mini6-shv-01-tir3.facebook.com
"]
 */
