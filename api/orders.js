import { connectDB } from "../lib/mongodb.js";

export default async function handler(req,res){

const db = await connectDB();

const orders =
await db
.collection("orders")
.find({})
.sort({
createdAt:-1
})
.toArray();

res.status(200).json(orders);

}
