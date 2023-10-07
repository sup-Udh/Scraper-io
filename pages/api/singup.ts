import { connectDB } from "@/models/db";
const { createTransport } = require('nodemailer')
const bcrypt = require('bcrypt')
const fs = require('fs')




export default async function handler(req: any, res: any){
    async function EmailOTP(){
        const transporter = createTransport({
            host: 'smtp-relay.brevo.com',
            port: 587,
            auth: {
                user: 'udhay1co.de@gmail.com',
                pass: process.env.EMAIL_PASS
            }
        })
        await transporter.sendMail({
          from: "crawlynoreply@gmail.com",
          to: `${req.body.email}`,
          subject: "Hello ✔",
          html: "<b>working right?</b>"
          
          
        })

    }

    if(req.method === "POST")  {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        if(!email || !email.includes("@") || !password){
            res.status(201).json({ message: "Please enter email, password and name" });

            return;
        }else{

            const {db, users } = await connectDB();
            const exists = await users.findOne({email: email});
            if(exists){
                res.status(201).json({message: "User exists"})
                return;
            }else{
                const hashedPassword = await bcrypt.hash(password, 12);
                // unhash password
                // const isMatch = await bcrypt.compare(password, hashedPassword);
                // console.log(isMatch);
                

                const result = await users.insertOne(
                    {
                        name: name, 
                        email: email, 
                        password: hashedPassword,
                        verified: false,
                    }
                    )
                res.status(201).json({message: "User created"})
                EmailOTP();

                console.log(result);
                return;
            }
        }

    }
}