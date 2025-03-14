
const express=require("express");
const app=express();
const PORT=3000;

const routes =require("./src/routes/");
app.use("/", routes);

app.use('/api/user/',userRoutes);
app.use('/api/product/',userRoutes);
app.use('/api/order/',orderRoutes);
app.use('/api/cart/',cartRoutes);

const connectDB=require("./src/config/db");
connectDB();

app.listen(PORT,()=>{
    console.log("Welcome to Google Shopping!!!");
    
    console.log(`Express is listening the port number ${PORT}`);
});
