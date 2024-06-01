import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMondoDB.js";
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import cookieParser from "cookie-parser";

const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json()); // to parse the incoming requests with payloads (from req.body)
app.use(cookieParser());  

app.use("/", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


app.listen(PORT, () =>{
    connectToMongoDB(); 

 console.log(`server running on port ${PORT}`)
});