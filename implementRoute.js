const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url == '/' && req.method == 'GET'){
        res.end('Welcome to home page');
    }else if(req.url == '/about' && req.method == 'GET'){
        res.end('About page');
    }else{
        res.statusCode=404;
        res.end('Page not found');
    }
});

server.listen(3000,()=>{
    console.log("server is listening on port 3000");
});