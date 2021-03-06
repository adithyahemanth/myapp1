import { useRouter } from "next/router"
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function Newmeetup(){
  const router = useRouter()
  
  async function  formhandler(meetsups){
 
     const response = await fetch('/api/new-meetup',{
        method:'POST', 
        body:JSON.stringify(meetsups),
        headers:{
         'Content-Type':'application/json'
       }
     })

const data =await response.json()

console.log(data)




}
    return(
        <NewMeetupForm
        btnname='Add Meetup'
        onAddMeetup={formhandler} />
    )

}
export default Newmeetup
