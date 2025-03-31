
// backend/src/controllers/authController.ts
import { Request, Response } from "express";
import prisma from "../prisma/client";
 const bcrypt =require("bcryptjs")

 export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    
    let dbRes=await bcrypt.compare(password, user?.password)
    
    if (!user || !(dbRes )) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    return res.status(200).json({ message: "Login successful",user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const signupUser=async (req: Request, res: Response)=>{
  const {email,password}=req.body
  const findUser=await prisma.user.findUnique({
    where:{
      email:email
    }
  })
  if(findUser){
    return res.status(500).json({message:"Email Already Exists!"})
  }
  const saltRounds = 10; 
  
  const newUser=await prisma.user.create({
    data:{
      email:email,
      password:await bcrypt.hash(password, saltRounds)
    }
  })
  return res.status(200).json({user:newUser})

}


