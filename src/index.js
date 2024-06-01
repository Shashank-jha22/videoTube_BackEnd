
dotenv.config({
    port : './env'
})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed !!!!" , NativeError);
})