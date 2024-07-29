const express = require("express");
require("./db/mongoose"); 
const bodyParser = require("body-parser"); 
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 4000;

app.listen(port, () => {

    console.log("server running in port " + port);
}


);

