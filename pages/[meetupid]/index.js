import { Fragment } from "react"
import {MongoClient,ObjectId} from 'mongodb'



import Meetupdetails from '../../components/meetups/Meetupdetails'





function Newmeetupid(props){



    return( <Fragment>
    <Meetupdetails
    id={props.meetupdata.id}
    alt={props.meetupdata.description}
    image={props.meetupdata.image}
    title={props.meetupdata.title}
    address={props.meetupdata.address}
    description={props.meetupdata.description}
    />
    </Fragment>
    )
    }

export async function getStaticPaths(){
    
    const client=await MongoClient.connect('mongodb+srv://meetup:meetup123@cluster0.hnmkb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

    const db=client.db()
    
    const meetupscollection = db.collection('meetups')

         const meetups=await meetupscollection.find({}, { _id: 1 }).toArray()

    return{
        
        fallback: 'blocking',
        paths: meetups.map((meetup) => ({
                params:{ meetupid: meetup._id.toString() },
            
        }
        )),
            
        
};

}
export async function getStaticProps(context){
    
    const meetupId = context.params.meetupid;
    
    const client=await MongoClient.connect('mongodb+srv://meetup:meetup123@cluster0.hnmkb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

    const db=client.db()
    
    const meetupscollection = db.collection('meetups')

         const selected= await meetupscollection.findOne({
             _id: ObjectId(meetupId),
        })

        client.close()
          return{
        props:{
         meetupdata:{
             id:selected._id.toString(),
             title:selected.title,
             image:selected.image,
             description:selected.description,
             address:selected.address
            },
         
    
        
         
        }
    }


}
    
export  default Newmeetupid