import express from "express";
const router = express.Router();
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt, { decode } from "jsonwebtoken";
import multer from "multer";
import nodemailer from "nodemailer";

// import "dotenv/config.js"
import "dotenv/config.js"
import fetchUser from "../middleware/fetchUser.js";


// router.post("/" , (req,res)=>{
//     console.log(req.body);
//     const user = User(req.body);
//     user.save();
//     res.send(req.body);
// })

// Multer Code 
const storage = multer.diskStorage({
    destination : function(req , file , cb){
        cb(null , "../src/images");
    },
    filename : function(req , file , cb){
        const uniqueSuffix = Date.now();
        cb(null , uniqueSuffix + file.originalname)
    }
})

const upload = multer({storage : storage});

// Login End Point
router.post("/login" , async (req,res)=>{
    // res.send("Hello Login");
    const {email , password} = req.body;

    try {
        if(!email || !password){
            return res.status(400).json({error : "All fields are required"})
        }

        if(!email.includes("@")){
            return res.status(400).json({error : "Please Enter a valid Email"})
        }

        const user = await User.findOne({email});
        console.log(user);

        if(!user){
            res.status.send({error : "User Not Found"});
        }

        const dotMatch = await bcrypt.compare(password , user.password);
        console.log(dotMatch);

        if(dotMatch){
            const token = jwt.sign({userId : user.id} , process.env.JWT_SECRET , {
                expiresIn : "7d"
            }) ;

            res.status(201).json({token})
        }
        else{
            res.status(404).json({error : "Email And Password Not Found"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error")
    }
    
    
})


// SignUp End Point
router.post("/signup" , upload.single("image")  , async (req,res)=>{
   const {name , email , password} = req.body;
   const imageName = req.file.filename;
   try {
    if(!name || !email || !password){
        return res.status(400).json({error : "All Fields are required"})
    }

    // Email Validation
    if(!email.includes('@')){
        return res.status(400).json({error : "Please Enter a valid Email"})
    }

    // Unique email validation
    const user = await User.findOne({email});
    if(user){
        res.status(400).json({error : "User already exist"})
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPass = await bcrypt.hash(password , salt);

    // save Data into database
    const newUser = await User({
        image : imageName,
        name,
        email,
        password : hashedPass
    })

    await newUser.save();
    console.log(newUser);
    res.status(200).json({success : "SignUp Successfully"})
   } catch (error) {
    console.log(error);
    res.status(500).send({error : "Internal Server Error"})
   }
})


// Get User End point
router.get('/getuser' , fetchUser ,async (req , res)=>{
    try {
        const userId = req.userId;
        console.log(userId);
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal Server Error"});
    }
})

// Forget Password code 
router.post('/forget-password' , async (req ,res)=>{
    const {email} = req.body;
    const myemail = 'mudassirinoxent@gmail.com';
    const mypass = 'lahoreqalandars';

    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({error : "User Not Found"});
    }
    const token = jwt.sign({userId : user._id} , process.env.JWT_SECRET , {
        expiresIn : "7d"
    });

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: myemail,
          pass: mypass
        }
      });
    
      var mailOptions = {
        from: myemail,
        to: email,
        subject: 'Sending Email using Node.js',
        text: `http://localhost:5173/reset-password/${user._id}/${token}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("Error " , error);
          return res.status(400).json({error : error})
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
})


// Reset password code
router.post("/reset-password/:id/:token" , async (req , res)=>{
    const {id , token} = req.params;
    const {password} = req.body;

    jwt.verify(token , process.env.JWT_SECRET , async (err , decode) => {
        if(err){
            return res.json({error : "Error with token"})
        }else{
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(password , salt);
            const newPass = await User.findByIdAndUpdate({_id : id} , {password : hashedPass})
            if(!newPass){
                return res.status(400).json({error : "Password not updated"})
            }
            else{
                res.status(200).json({success : "Password Updated"})
            }
        }
    });
})

export default router;