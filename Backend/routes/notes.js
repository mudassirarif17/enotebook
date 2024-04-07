import express from "express";
import fetchUser from "../middleware/fetchUser.js"
import Notes from "../models/Notes.js"

const router = express.Router();


// router.get("/" , (req,res)=>{
//    res.send("Hello Notes")
// })



// Route 1 for geting all notes
router.get("/getallnotes" , fetchUser , async (req , res)=>{
    try {
        const notes = await Notes.find({user : req.userId});
        res.json(notes) 
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal Server Error"})
    }
})

// Route 2 add note
router.post("/addnote" , fetchUser , async (req , res)=>{
    try {
        const {title , description , tag} = req.body;

        if(!title || !description || !tag){
            return res.status(400).json({error : "All fields are required"});
        }
        
        const note = new Notes({
            title,
            description,
            tag,
            user : req.userId
        })

        const savedNote = await note.save();
        res.json(savedNote);

    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal Server Error"})
    }
})

// Route 3 Update Note
router.put("/updatenote/:id" , fetchUser , async (req , res)=>{

    const {title , description , tag} = req.body;
    const {id} = req.params;

    try {
        const note =  await Notes.findById({_id : id});

        if(!note){
            return res.status(404).send("Not Found")
        }

        if(note.user.toString() !== req.userId){
            return res.status(401).send("Not Allowed")
        }

        console.log(note);

        const notes = await Notes.findByIdAndUpdate({_id : id} ,{ 
            $set : {
                title ,
                description,
                tag
            }
    } , {new : true});

    res.json({notes , success : "Note Updated"})

    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal Server Error"});
    }
})

// Route 4 Delete Note
router.delete("/deletenote/:id" , fetchUser , async(req , res)=>{
    //const {id} = req.params;

    try {
        let note = await Notes.findById(req.params.id);

        if(!note){
            return res.status(404).send("Not Found");
        }

        if(note.user.toString() !== req.userId){
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({ "success" : "Note has been deleted" , note : note})
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal Server error"})
    }
})

// Route 5 get note by id
router.get("/getnotebyid/:id" , fetchUser , async (req , res)=>{
    const {id} = req.params;

    try {
       let notes = await Notes.findById({_id : id});
       if(notes){
        return res.status(200).json(notes)
       }
       else{ 
        return res.status(401).json({error : "Not Found"})
       }
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal Server Error"})
    }
})



export default router