import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function Newmeetup(){
  async function  formhandler(meetsups){
  
     const response = await fetch('/api/new-meetup',{ method:'POST', body:JSON.stringify(meetsups),headers:{
         'Content-Type':'application/json'
       }
     })

const data =await response.json()

console.log(data)

}
    return(
        <NewMeetupForm
        onAddMeetup={formhandler} />
    )

}
export default Newmeetup
