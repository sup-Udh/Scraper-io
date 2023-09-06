import { connectDB } from "@/models/db";


export default async function handler(req: any, res:any) {
    if(req.method === "POST"){
        const name = req.body.name;
        console.log(name);
    }
}