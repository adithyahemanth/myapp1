import { MongoClient, ObjectId } from 'mongodb'


async function handler(req , res){

if(req.method ==='POST')
{
const data=req.body

const id=data.id;
const title=data.title;
const image=data.image;
const address=data.address;
const description=data.description;

const client=await MongoClient.connect('mongodb+srv://meetup:meetup123@cluster0.hnmkb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const db=client.db()

const meetupscollection = db.collection('meetups')

const result =await meetupscollection.updateOne({_id:ObjectId(id)},{$set: {title:title ,image:image,address:address,description:description}})

console.log(result)

res.status(201).json({message:'data updated! '})

}
client.close()
}
export default handler
