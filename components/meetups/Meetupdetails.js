import { Fragment } from "react";
import classes from './Meetupdetails.module.css'


function Meetupdetails(props){
    function deletehandler(){

    }
    function updatehandler(){

    }
    return <section className={classes.header}>
        <img src={props.image} alt={props.alt}/>
        <h1>{props.title}</h1>
            <h2>{props.address}</h2>
                <h3>{props.description}</h3>
                <button onclick={deletehandler}>Delete</button>
                <button onclick={updatehandler}>
                    Update
                </button>
    </section>
}
export default Meetupdetails