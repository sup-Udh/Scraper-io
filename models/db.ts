import { MongoClient } from "mongodb";

export async function connectDB(){
    const client = await MongoClient.connect(process.env.MONGO_DB || '');

    const db = client.db("crawly");
    const pre_users = db.collection("pre-users");
    const users = db.collection("users");
    return {db, users};
}