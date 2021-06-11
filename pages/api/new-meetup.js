import { MongoClient } from 'mongodb'


async function handler(req , res){

if(req.method ==='POST')
{
const data=req.body

const client=await MongoClient.connect('mongodb+srv://meetup:meetup123@cluster0.hnmkb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const db=client.db()

const meetupscollection = db.collection('meetups')

const result =await meetupscollection.insertOne(data)

console.log(result)

res.status(201).json({message:'data inserted! '})

}

}
export default handler
