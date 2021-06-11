import {MongoClient} from 'mongodb'

import MeetupList from '../components/meetups/MeetupList'

function Homepage(props){

    return(
<MeetupList
meetups={props.meetups}/>
    )


} 
export async function getStaticProps(){

    const client=await MongoClient.connect('mongodb+srv://meetup:meetup123@cluster0.hnmkb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

    const db=client.db()
    
    const meetupscollection = db.collection('meetups')

         const meetup=await meetupscollection.find().toArray()


    return{
    props:{
        meetups : meetup.map(meet => ({
            id:meet._id.toString(),
            title:meet.title,
            address:meet.address,
            image:meet.image
        }))

    }
};
}
export  default Homepage
