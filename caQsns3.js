//1create a simple http server that displays hello world in the browser
//2 create a express app that take username and age
//3 create am express app that accepts a post request
//4 create a get route/product that accepts  the product details via query parameters
//5 parse json data from post request method by craeting express serbver
//6 parse url encoded form data that accepts form data like reads username and password 
//7 create simple calculator accepts two numbers in json
//8 displays infomation name, city, mobile in body
//9 create a route login details name=admin and password=123 and return error message

//1
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello World");
// });

// server.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });

//2
// const express = require("express");
// const app = express();

// app.get("/user", (req, res) => {
//   const { username, age } = req.query;
//   res.send(`Username: ${username}, Age: ${age}`);
// });

// app.listen(3000, () => console.log("Server running on port 3000"));


//3
// const express = require("express");
// const app = express();

// app.use(express.json());

// app.post("/submit", (req, res) => {
//   res.send(`Data received: ${JSON.stringify(req.body)}`);
// });

// app.listen(3000, () => console.log("Server running on port 3000"));


//4
// const express = require("express");
// const app = express();

// app.get("/product", (req, res) => {
//   const { name, price } = req.query;
//   res.send(`Product Name: ${name}, Price: ₹${price}`);
// });

// app.listen(3000, () => console.log("Server running on port 3000"));

//5
// const express = require("express");
// const app = express();

// app.use(express.json());

// app.post("/jsondata", (req, res) => {
//   const data = req.body;
//   res.send(`Received JSON: ${JSON.stringify(data)}`);
// });

// app.listen(3000, () => console.log("Server running on port 3000"));


//6
// const express = require("express");
// const app = express();

// app.use(express.urlencoded({ extended: true }));

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   res.send(`Username: ${username}, Password: ${password}`);
// });

// app.listen(3000, () => console.log("Server running on port 3000"));

//7
// const express = require("express");
// const app = express();

// app.use(express.json());

// app.post("/calc", (req, res) => {
//   const { a, b } = req.body;
//   const sum = a + b;
//   res.send(`Sum = ${sum}`);
// });

// app.listen(3000, () => console.log("Server running on port 3000"));

//8
// const express = require("express");
// const app = express();

// app.use(express.json());

// app.post("/info", (req, res) => {
//   const { name, city, mobile } = req.body;
//   res.send(`Name: ${name}, City: ${city}, Mobile: ${mobile}`);
// });

// app.listen(3000, () => console.log("Server running on port 3000"));

//9
const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  const { name, password } = req.body;

  if (name === "admin" && password === "123") {
    return res.send("Login Successful");
  }

  res.status(401).send("Invalid name or password");
});

app.listen(3000, () => console.log("Server running on port 3000"));
