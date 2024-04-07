import mongoose , {model} from "mongoose";

const {Schema} = mongoose;

const UserScehma = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true , 
        unique : true
    },
    password :{
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    status : {
        type : Boolean,
        default : 0
    },
    date :{
        type : Date,
        default : Date.now()
    }
})

// export default model('user' , UserScehma); 
const User = model('user' , UserScehma); 
User.createIndexes();

export default User;
