//create a simple http server that displays hello world in the browser.
//create an http server that sends html response to the user
//create an http server to handle multiple routes like about, contact page, address page by using http modules
//program to read data from a text file and that send data as http response 
//program to send json data like product details
//create a server on custom port
//write to display status code(200,404,500) based on the roots accessed


//1
// const http=require("http");
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type": "text/plain"});
//     res.end("hello world");
// });
// server.listen(3000,()=>{
//     console.log("server is running at http://localhost:3000");
// });

//2
// const http = require("http");
// const server=http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("<h1>Welcome to My Website</h1><p>This is HTML response</p>");
// });
// server.listen(3000,()=>{
//     console.log("server is running at http://localhost:3000");
// });

//3
// const http = require("http");
// const server=http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     if (req.url === "/") {
//         res.end("<h1>Home Page</h1>");
//     } 
//     else if (req.url === "/about") {
//         res.end("<h1>About Page</h1>");
//     } 
//     else if (req.url === "/contact") {
//         res.end("<h1>Contact Page</h1>");
//     }
//     else if (req.url === "/address") {
//         res.end("<h1>Address Page</h1>");
//     }
//     else {
//         res.writeHead(404);
//         res.end("<h1>404 - Page Not Found</h1>");
//     }
// });
// server.listen(3000,()=>{
//     console.log("server is running at http://localhost:3000");
// });

//4
// const http = require("http");
// const fs = require("fs");
// const server=http.createServer((req, res) => {
//     fs.readFile("data.txt", "utf8", (err, data) => {
//         if (err) {
//             res.writeHead(500, { "Content-Type": "text/plain" });
//             res.end("Error reading file");
//         } else {
//             res.writeHead(200, { "Content-Type": "text/plain" });
//             res.end(data);
//         }
//     });
// });
// server.listen(3000,()=>{
//    console.log("server is running at http://localhost:3000");
// });

//5
// const http = require("http");
// const server=http.createServer((req, res) => {
//     const product = {
//         id: 1,
//         name: "Laptop",
//         price: 55000,
//         brand: "HP"
//     };
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(product));
// });
// server.listen(3000,()=>{
//     console.log("server is running at http://localhost:3000");
// });

//6
// const http = require("http");

// http.createServer((req, res) => {
//     res.end("Server running on custom port 8081");
// }).listen(8081);

// console.log("Server running at http://localhost:8081");


//7
const http = require("http");
http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("OK - 200 Status");
    }
    else if (req.url === "/error") {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error - 500 Status");
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found - 404 Status");
    }
}).listen(3000);
