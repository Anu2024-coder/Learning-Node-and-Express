const http=require("http");

//create a server
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type": "text/plain"});
    res.end("hello! welcome to my Node.js server!");
});

//server listens on port 3000
server.listen(3000,()=>{
    console.log('server is listening on http://localhost:3000');
});