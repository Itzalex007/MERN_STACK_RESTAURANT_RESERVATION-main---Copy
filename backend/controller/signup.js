import { signupModel } from "../models/reservation.js"
import bcrypt, { genSalt } from "bcrypt"
import cookieParser from "cookie-parser"
import jwt from "jsonwebtoken"
import express from "express"
const app = express()

app.use(cookieParser());


const signup = async(req,res)=>{
   const {username,password,email,phone} = req.body

    try {
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(password,salt)


        const create = await signupModel.create({username,password:hash,email,phone})
         
         const token = jwt.sign({email},"secret")
         res.cookie("token",token)
        
        res.json({msg:"created"})
   } catch (error) {
    console.log(error);
   }

}

export default signup 
