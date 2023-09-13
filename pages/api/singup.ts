import { connectDB } from "@/models/db";
const nodemailer = require("nodemailer")




export default async function handler(req: any, res: any){
    if(req.method === "POST")  {
        const name = req.body.email;
        const email = req.body.email;
        const password = req.body.email;
        if(!email || !email.includes("@") || !password){
            res.status(201).json({ message: "Please enter email, password and name" });

            return;
        }else{

            const {db, users } = await connectDB();
            const exists = await users.findOne({email: email});
            if(exists){
                res.statu(201).json({message: "User exists"})
                return;
            }else{
                const result = await users.insertOne({name: name, email: email, password: password})
                res.status(201).json({message: "User created"})
                console.log(result);
                return;
            }
        }

    }
}