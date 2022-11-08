import express from "express";
const app = express();
console.log(app);
const PORT = 8000;

import morgan from 'morgan';
// middlware
app.use(morgan('dev'));
// app.use("/", (req,res)=>{
//     res.json({message:"heheh"});
// });

// api endpoints


// workflow: CRUD
// C(create)=>receive new task and store in the database
app.post("/api/v1/task",(req, res)=>{
    res.json({message:"todo post method"});
});
// R(Read)=> from database and return to the client
app.get("/api/v1/task",(req, res)=>{
    res.json({message:"todo get method"});
});
// U (Update)=> update some information of existing data into database and respond to client
app.put("/api/v1/task",(req, res)=>{
    res.json({message:"todo put method"});
});
// D (Delete)=> delete data(s) from database and respond to the client accordingly
app.delete("/api/v1/task",(req, res)=>{
    res.json({message:"todo delete method"});
});
 
app.listen(PORT, (error)=>{
    error?
    console.log(error):
    console.log(`Server running at http://localhost:${PORT}`);
});