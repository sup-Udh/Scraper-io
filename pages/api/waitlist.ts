import { connectDB } from "@/models/db";

export default async function handler(req: any, res:any) {
    if(req.method === "POST"){
        const email = req.body.email;
        const data = {email: email};

        // if(!email){
        //     res.status(400).json({message: "Invalid email address"});
            
        // }

        if(!email){
            res.status(400).json({message:"Invalid email address please try again"});
        }
        const {db, users} = await connectDB();
        const exists = await users.findOne({email: email});
        if(exists){
            res.status(201).json({message: "Email already exists"});
        }else{
            const result = await users.insertOne(data);
            console.log(result);
            res.status(201).json({message: "User added"});
        }

    }
}

