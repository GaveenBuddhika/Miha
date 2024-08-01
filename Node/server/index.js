const express = require("express");
require("./db/mongoose"); 
const bodyParser = require("body-parser"); 
const cors = require("cors");
const UserRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(UserRouter);

const port = 4000;

app.listen(port, () => {

    console.log("server running in port " + port);
}


);

