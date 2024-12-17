import { signupModel } from "../models/reservation.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const login = async(req,res)=>{
const {email,password} = req.body
    try {
        
        const find = await signupModel.findOne({email})
        if(!find){return res.json({msg:"user not found"})}

        const match =  await bcrypt.compare(password,find.password) 
        if(match){
            const token = jwt.sign({email:find.email},"secret")
            res.cookie("token",token)
            return res.json({msg:"login successfully"})
        }
        else{
           return res.json({msg:"invalid username or password"})
        }

    } catch (error) {
        console.log(error);
        return res.json({error:"internal error"})
    }
    
}

export default login