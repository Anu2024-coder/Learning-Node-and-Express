// 1 create a server that uses the get method and display welcome message
// 2 show the user info by using get method(name,age)
// 3 create html form with input by using post method
// 4 add two numbers use the post method
// 5 create a page by using get and post method
// 6 create an express app that takes username and age
// 7 create an express app that accepts a post request
// 8 create a get route /product that accepts the product detials via query parameters
// 9 to handle multiple status also use get post and used by the stream module

//1
// const express=require("express");
// const app=express();

// app.get("/",(req,res)=>{
//     res.send("WELCOME");
//     console.log("Hie welcome");
// });
// app.listen(3000,(req,res)=>{
//     console.log("server running on port 3000");
// });

//2
// const express=require("express");
// const app=express();

// app.get("/",(req,res)=>{
//     res.send("Home page");
// });
// app.get('/user',(req,res)=>{
//     const Name="Anu";
//     const Age=20;
//     res.send(`User name: ${Name}, Age: ${Age}`);
// });
// app.listen(3000,(req,res)=>{
//     console.log("server running on port 3000");
// });

//3
// const express = require("express");
// const app = express();
// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.send(`
//     <form action="/submit" method="POST">
//       <input type="text" name="username" placeholder="Enter name" required />
//       <button type="submit">Submit</button>
//     </form>
//   `);
// });

// app.post('/submit', (req, res) => {
//   res.send(`Hello ${req.body.username}, form submitted successfully!`);
// });

// app.listen(3000, () => console.log("Server running on http://localhost:3000"));

//4
// const express = require("express");
// const app = express();
// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.send(`
//     <form action="/add" method="POST">
//       <input type="number" name="num1" placeholder="Enter number 1" required />
//       <input type="number" name="num2" placeholder="Enter number 2" required />
//       <button type="submit">Add</button>
//     </form>
//   `);
// });

// app.post('/add', (req, res) => {
//   const n1 = Number(req.body.num1);
//   const n2 = Number(req.body.num2);
//   res.send(`Sum = ${n1 + n2}`);
// });

// app.listen(3000, () => console.log("Server running on http://localhost:3000"));

//5
// const express = require("express");
// const app = express();
// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.send(`
//     <form action="/" method="POST">
//       <input type="text" name="name" placeholder="Enter your name" required />
//       <button type="submit">Submit</button>
//     </form>
//   `);
// });

// app.post('/', (req, res) => {
//   res.send(`Welcome, ${req.body.name}!`);
// });

// app.listen(3000, () => console.log("Server running on http://localhost:3000"));

//6
// const express = require("express");
// const app = express();
// app.use(express.json());

// app.post('/user', (req, res) => {
//   const { username, age } = req.body;
//   res.send(`Username: ${username}, Age: ${age}`);
// });

// app.listen(3000, () => console.log("Server running on http://localhost:3000"));

//7
// const express = require("express");
// const app = express();
// app.use(express.json());

// app.post('/data', (req, res) => {
//   console.log(req.body);
//   res.send("POST request received successfully!");
// });

// app.listen(3000, () => console.log("Server running on http://localhost:3000"));

//8
// const express = require("express");
// const app = express();

// app.get('/product', (req, res) => {
//   const { name, price } = req.query;
//   res.send(`Product Name: ${name}, Price: ₹${price}`);
// });

//app.listen(3000, () => console.log("Server running on http://localhost:3000"));

//9
//to handle multiple status code also use get post and use the stream module
const express = require("express");
const fs = require("fs");         
const path = require("path");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Home Page");
});

// app.get("/user", (req, res) => {
//   const user = { name: "Anu", age: 20 };
//   res.status(200).json(user);
// });

app.get("/notfound", (req, res) => {
  res.status(404).send(" Page Not Found");
});

app.post("/register", (req, res) => {
  const { username, email } = req.body;
  if (!username || !email) {
    return res.status(400).send("Missing username or email");
  }
  res.status(200).send(`User registered: ${username}`);
});

app.get("/readfile", (req, res) => {
  const filePath = path.join(__dirname, "basicRouting.txt");
  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found");
  }
  const readStream = fs.createReadStream(filePath, "utf-8");
  res.status(200);
  readStream.pipe(res);
  readStream.on("error", () => {
    res.status(500).send("Error reading file");
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
