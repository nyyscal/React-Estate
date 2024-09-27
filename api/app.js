import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route.js";
import postRouter from "./routes/post.route.js";
import testRouter from "./routes/test.routes.js";
import userRouter from "./routes/user.route.js";

dotenv.config();

const app = express();

app.use(cors({origin: process.env.CLIENT_URL, credentials:true}))

app.use(express.json())

app.use(cookieParser())

app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)
app.use("/api/test", testRouter)


app.listen(8800, ()=>{
  console.log("Server is Activated!")
})