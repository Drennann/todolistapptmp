import {Router} from "express";
import { deleteTasksRouter, getTaskRouter, getTasksRouter, postTasksRouter, putTasksRouter } from "../controllers/taskControllers.js"

let tasksrouter = Router();

tasksrouter.get("/", getTasksRouter);

tasksrouter.post("/", postTasksRouter);

tasksrouter.put("/:id", putTasksRouter);

tasksrouter.delete("/:id", deleteTasksRouter);

tasksrouter.get("/:id", getTaskRouter);

export default tasksrouter;