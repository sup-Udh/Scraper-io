import { MongoClient } from "mongodb";

export async function connectDB(){
    const client = await MongoClient.connect(process.env.MONGO_DB || '');

    const db = client.db("crawly");
    const users = db.collection("pre-users");
    return {db, users};
}