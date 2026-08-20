const express = require("express");
const mongoose=require("mongoose");
const Task = require("./models/tasks");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

const PORT= 5000;








app.get("/api/tasks",  async (req,res)=>{
     const tasks=await Task.find()
    res.json(tasks);
});

app.get("/api/tasks/:id", async (req , res)=>{
    try{

        
        const task= await Task.findById(req.params.id)
        if (!task) {
            return res.status(404).json({
                message:"görev bulunamadı"
            });

        }

        res.json(task);
    
    }catch (error){
        res.status(400).json({
            message:"geçersiz görev id"
        });
    }
    
});


app.use(express.json());

app.post("/api/tasks", async (req, res) => {

    try {

        if (!req.body.title){
            return res.status(400).json({
                message:"görev başlığı zorunludur."
            });
        }
        
        
        if (
            req.body.completed !== undefined &&
            typeof req.body.completed !== "boolean"
        ) {
            return res.status(400).json({
                message: "completed alanı true veya false olmalıdır."
            });
        }

        const newTask = new Task({
            title: req.body.title,
            completed: req.body.completed
        });

       
        

        const savedTask = await newTask.save();

        res.status(201).json(savedTask);

    } catch (error) {

        res.status(400).json({
            message: "görev oluşturulamadı",
            error: error.message
        });
    }

});

app.delete("/api/tasks/:id", async (req, res) => {

    try {

        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "görev bulunamadı"
            });
        }

        res.json({
            message: "görev başarıyla silindi",
            task: task
        });

    } catch (error) {

        res.status(400).json({
            message: "geçersiz görev id"
        });

    }
});

app.put("/api/tasks/:id", async (req, res) => {

    try {

        if (!req.body.title) {
           return res.status(400).json({
              message: "Görev başlığı zorunludur."
            });
        }
        if (
           req.body.completed !== undefined &&
           typeof req.body.completed !== "boolean"
        ) {
    return res.status(400).json({
        message: "completed alanı true veya false olmalıdır."
    });
}
        

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                completed: req.body.completed
            },
            { new: true }
        );

        if (!task) {
            return res.status(404).json({
                message: "gorev bulunamadı"
            });
        }

        res.json({
            message: "görev başarıyla güncellendi",
            task: task
        });

    } catch (error) {
        res.status(400).json({
            message: "geçersiz görev id"
        });
    }
});
 

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("mongodb bağlandı")
})
.catch((error)=>{
    console.log("mongo db bağlanamadı", error)
});


app.listen(PORT,()=>{
    console.log(`Server çalışıyor: http://localhost:${PORT}`);
})