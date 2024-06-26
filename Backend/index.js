import connectToMongo from './database/db.js';
import express from 'express';
import auth from "./routes/auth.js";
import notes from "./routes/notes.js";
import cors from "cors"
    
connectToMongo();



const app = express()
const port = 4000

    

// Route
// app.get('/', (req, res) => {
//     res.send('Mudassir Arif')
// })

// app.get("/api/login" , (req,res)=>{
//     res.send("Hello login")
// })

// app.get("/api/signup" , (req, res)=>{
//     res.send("Hello SignUp")
// })

// Middleware
app.use(express.json());
app.use(cors())

// Available route
app.use("/api/auth" , auth);
app.use("/api/notes" , notes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})