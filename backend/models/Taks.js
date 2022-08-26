import mongoose from "mongoose";

let taskSchema = new mongoose.Schema({
    title: {
        type:String,
        trim: true,
        required: true
    },
    description: {
        type:String,
        trim: true,
        required: true
    }
})

export default mongoose.model("Task", taskSchema);