import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

import connectDB from "./config/dbMongo.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();
const port = process.env.PORT || 6000;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true}))

//API Endpoints
app.get('/', (req, res)=> res.send("WORKING..."));
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(port, ()=> console.log(`Server running on PORT: ${port}`));
