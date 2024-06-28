import express from "express";
import  {configDotenv}  from "dotenv";
import cookieParser from "cookie-parser";

import mongoConnect from "./db/mongoConnect.js";
import authRoutes from "./routes/authRoute.js";
import taskRoutes from "./routes/taskRoute.js";

configDotenv();

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(port, () => {
    mongoConnect();
    console.log(`Server is running on port http://localhost:${port}/`);
});