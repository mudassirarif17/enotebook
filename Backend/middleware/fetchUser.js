import "dotenv/config";
import jwt from "jsonwebtoken";

const fetchUser = (req,res,next)=>{
    const token = req.header('auth-token');

    if(!token){
        res.status(401).sned({error : "Please authenticate using a valid token"});
    }

    try {
        const { userId } = jwt.verify(token , process.env.JWT_SECRET);
        req.userId = userId;
        console.log("fetchuser :" , userId);

        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({error : "Internal Server Error"})
    }
    

}

export default fetchUser;