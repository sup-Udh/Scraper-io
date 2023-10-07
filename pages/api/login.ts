import { connectDB } from "@/models/db"
const bcrypt = require('bcrypt')
export default async function handler(req: any, res: any){
    if(req.method === "POST"){
        var email = req.body.email
        var password = req.body.password

        if(!email || !password){
            res.status(201).json({message: "Please enter email and password"})
            return;
        }
        const data = {
            email: email,
            password: password

        }; 
        const {db, users } = await connectDB();
        // find user with email
        const result_email = await users.findOne({email: email});
        if(!result_email){
            res.status(201).json({message: "User not found"})
            return;
        }else{
            const isMatch = await bcrypt.compare(password, result_email.password);
            if(!isMatch){
                res.status(201).json({message: "Password is incorrect"})
                return;
            }else{
                res.status(201).json({message: "Login successful"})
                return;
            }

        }
        


    }
}