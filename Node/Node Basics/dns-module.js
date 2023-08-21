//dns => domine name system
//it will gives the ip address of that url
const dns = require('dns')
dns.lookup("www.facebook.com", function(err, address, family){
    if(err) console.log(err)
    console.log('address = ', address)
    console.log('family = ', family)

    //lookup services
dns.lookupService(address, 22, function(err, host, services){
    if(err) console.log(err)
    console.log('host = ', host) //it will print website hosted ip address
    console.log('services', services)// it will print websute services (ssh means by)

    /*
    ^ output: 
    address =  163.70.138.35
    family =  4
    host =  edge-star-mini-shv-01-tir3.facebook.com
    services ssh
    */

})
})

/* 
output: 
address = 157.246.23.35
family = 4 //meand IPv4(UDP4)
*/


