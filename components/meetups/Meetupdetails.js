import React,{Fragment} from 'react';
import Link from 'next/link'
import classes from './Meetupdetails.module.css'
    
function  Meetupdetails(props){


  console.log(props.id)
    async function deletehandler(){
               
 
        const ans= await fetch('/api/delete-meetup',{
          method:'POST',
          body:JSON.stringify(props.id),
          headers:{
            'Content-Type':'application/json'
          }

        })
    }
  
  
return( 
<Fragment>

  <section className={classes.header}>
        <img src={props.image} alt={props.alt}/>
        <h1>{props.title}</h1>
            <h2>{props.address}</h2>
                <h3>{props.description}</h3>

          <button onClick={deletehandler}>delete</button>
          <Link href={`/${props.id}/Updatepage`}><button>update</button></Link>
    </section>
    </Fragment>
    )
}





export default Meetupdetails