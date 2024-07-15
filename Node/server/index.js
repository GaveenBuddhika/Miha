const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 4000;
mongoose.connect("mongodb+srv://gaveen:pass123@cluster0.3mwbfgj.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

);


const connection = mongoose.connection;

connection.once("open", () => {

    console.log("mongodb connectred");
}



);



app.listen(port, () => {

    console.log("server running in port" + port);
}


);




