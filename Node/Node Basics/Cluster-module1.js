//cluster  module
//node js single threaded - will allow to execute the one app/ cmd at time

//isMaster => true single thread
//isWorker => true multi thread --> fork()

const cluster = require('cluster')
cluster.isMaster ? console.log('node is running in single thread') : console.log('no action')

//or we can wrute this program in another way
if(cluster.isMaster){
    console.log('node is running in single thread')
}
else{
    console.log('no action')
}