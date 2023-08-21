const cluster = require('cluster')

// cluster.isWorker ? console.log('worker is running') : (
//   (  cluster.fork() )
// )
if(cluster.isWorker){
    console.log('worker is running') 
}
else{
    cluster.fork()// every fork method is generated individual data
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
    //output:  //worker is running
               //worker is running
               //worker is running
               //worker is running
               //worker is running

}