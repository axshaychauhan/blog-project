const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;


//middlewear
app.use(express.json());

const blog = require("./routes/blog")

//mount
app.use("/api/v1",blog);


//connect with DB
const connectWithDb = require("./config/database");
connectWithDb();

//start server
app.listen(PORT, (req,res)=> {
    console.log(`App is started at Port No ${PORT}`);
})

//default route
app.get("/", (req,res) => {
  res.send("<h1>This is my homepage</h1>")
})


