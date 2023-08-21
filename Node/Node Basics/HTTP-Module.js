//http module

const http = require("http");
let port = 5000


//application/json => json type of responce
//appliation/plain => downlodable text file
//text/plain => text type of responce
//text/html => html type of responce

const Server = http.createServer(function (req, res){
    res.writeHead(200, {"content-type": "text/html"})
    res.end(`<div>
                <h1>Welcome to node js http module</h1>
                <p>What is NodeJS used for?
                Developers use Node. js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.1</p>
            </div>`)
})

Server.listen(port, ()=> {
    console.log(`server is running @ https://localhost:${port}`)
})