import express from "express";
import morgan from "morgan";
import tasksrouter from "./routes/tasks.routes.js"
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js"
import {dirname, join} from "path";
import {fileURLToPath} from "url";

let app = express();

dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/tasks", tasksrouter)

app.use(express.static( join(__dirname, "../frontendtodolist/build")))

app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "../frontendtodolist/build/index.html"))
})

app.listen(process.env.PORT, () => console.log("server on port " + process.env.PORT || 3001)); 