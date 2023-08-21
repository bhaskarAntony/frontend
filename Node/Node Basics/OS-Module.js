//Operating system module

const os = require("os")

const user = os.userInfo()
console.log(`user information = `, user)

/* 
    Output: 

            user information =  {
            uid: -1,
            gid: -1,
            username: 'bhask',
            homedir: 'C:\\Users\\bhask',
            shell: null
}

*/

//uptime => loading time and shutdown time
console.log(`uptime = `, os.uptime())

//output: uptime =  88366.671


//name
console.log(`name= ${os.type()}`); //output:name= Windows_NT

//release 
console.log(`release = ${os.release()}`); //output: release = 10.0.22621

//total memory
console.log(`total memory = ${os.totalmem()}`)// output: total memory = 8281616384

//free memory
console.log(`free memory = ${os.freemem()}`) //output:free memory = 1325027328

//arch (64 bit or 34 bit)
console.log(`arch = ${os.arch()}`) //output:arch = x64

//cup
console.log(`cup = ${os.cpus()}`) //output: it is in object formate: [object Object],[object Object],[object Object],[object Object]


//average load
console.log(`overage load = ${os.loadavg()}`) //output:overage load = 0,0,0




