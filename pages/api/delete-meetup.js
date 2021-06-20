import { MongoClient, ObjectId } from 'mongodb'


async function handler(req , res){

if(req.method ==='POST')
{
const data=req.body
console.log(data)

const client=await MongoClient.connect('mongodb+srv://meetup:meetup123@cluster0.hnmkb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const db=client.db()

const meetupscollection = db.collection('meetups')

const result =await meetupscollection.deleteOne({_id:ObjectId(data)})

console.log(result)

res.status(201).json({message:'data deleted! '})

}
client.close()
}
export default handler
