const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRoute = require("./src/Routes/Users");
const authRoute = require("./src/Routes/Auth");
// const uploadRoute = require("./src/Routes/Upload");
const transferRoute = require("./src/Routes/Transfer");
const topupRoute = require("./src/Routes/Topup");
const cors = require("cors");
require('dotenv').config()

//cors config
app.use(cors())
// app.use(cors({
//   origin: ['https://jdih1.netlify.app/'],
//   // origin: ['http://localhost:8000', 'http://localhost:5000'],
// }))
//midleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (request, response) => {
  response.send("hello world");
});

app.use('/api/v1/users', userRoute)
app.use('/api/v1/auth', authRoute)
// app.use('/api/v1/uploads', uploadRoute)
app.use('/api/v1/transfer', transferRoute)
app.use('/api/v1/topup', topupRoute)


//GET METHOD

app.listen(process.env.DEFAULT_PORT, () => {
  console.log(`server running on port ${process.env.DEFAULT_PORT}`);
});
