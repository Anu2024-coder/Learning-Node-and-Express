const http = require("http");
const url=require("url");
const server=http.createServer((req,res)=>{
    const queryObject=url.parse(req.url,true).query;
    res.writeHead(200, {"content-type":"text/plain"});
    res.end(`Hello, ${queryObject.name || 'guest'}`);
});

server.listen(3000,()=>{
    console.log("server is running at http://localhost:3000");
});