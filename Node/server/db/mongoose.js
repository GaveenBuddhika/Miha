const mongoose = require("mongoose");

const mongoUrl = "mongodb+srv://gaveen:pass123@cluster0.3mwbfgj.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

);


const connection = mongoose.connection;
mongoose.set('strictQuery',true);

connection.once("open", () => {

    console.log("mongodb connected");
}



);