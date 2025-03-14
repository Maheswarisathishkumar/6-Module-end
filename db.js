const mongoose = require("mongoose");
const URL = "mongodb+srv://product:product@cluster0.vo4bl.mongodb.net/mdb-shopping-application?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async()=>{
    try {
        await  mongoose.connect(URL);
        console.log("Database Connected Successfully");
} catch (error) {
        console.log(error);
        
    }
};
module.exports = connectDB;