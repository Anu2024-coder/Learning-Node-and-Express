const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200, {'content-Type': 'text/html'});
        res.end('<h1>Home page</h1>');
    }else if(req.url=='/about'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>About us page</h1>');
    }else{
        res.writeHead(404,{"Content-Type": "text/html"});
        res.end('<h1>404 - page not found');
    }
});

server.listen(3000,()=>{
    console.log("server is running at http://localhost:3000");
});