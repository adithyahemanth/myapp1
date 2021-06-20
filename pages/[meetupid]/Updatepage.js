import React, { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import classes from './updatepage.module.css'

function Updatepage(props){


const router=useRouter()
const ans=router.query
const res=ans.meetupid
   async function formhandler(meetsups){
     meetsups.id=res
     
     const result = await fetch('/api/Update-meetup',{
    method:'POST',  
    body:JSON.stringify(meetsups),
    headers:{
     'Content-Type':'application/json'
   }
 })
   }
   
   
    return(
    <Fragment>
   <center> <h1>Update Meetup</h1></center>
    
    
    <NewMeetupForm
    btnname="Update"
    onAddMeetup={formhandler}
    />
    <div className={classes.header}>
    <Link href='/'><button className="update-close">Close</button></Link>
    </div>
    
    </Fragment>

    )
}
export default Updatepage